import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSchoolAuth } from '@/hooks/useSchoolAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  LogOut, Package, ClipboardList, Upload, History, CalendarClock,
  X, ShoppingCart, FileSpreadsheet, BarChart3, ChevronRight,
  TrendingUp, Users, DollarSign, Filter
} from 'lucide-react';

// ─── Product Data ─────────────────────────────────────────
const PRODUCTS = [
  { id: 1, name: 'Navy Blue Children Hoodies with Embroidery and Printing', price: 109.5, desc: 'Custom embroidered hoodies for children with school branding.' },
  { id: 2, name: 'Navy Blue Adult Hoodies with Embroidery and Printing', price: 123.8, desc: 'Adult-sized hoodies featuring embroidery and full printing.' },
  { id: 3, name: 'Grey Poloshirts with Embroideries', price: 60, desc: 'Classic grey poloshirts with precision embroidery detail.' },
  { id: 4, name: 'Navy Blue Cargo Pants', price: 80, desc: 'Durable navy cargo pants for everyday school use.' },
  { id: 5, name: 'Light Purple Hoodies with Wellbeing Printing and Logo', price: 140, desc: 'Special edition wellbeing hoodies with custom logo artwork.' },
  { id: 6, name: 'Grey Hoodies with Zipper and Printing', price: 130, desc: 'Zip-up grey hoodies with branded printing elements.' },
  { id: 7, name: 'Black Cotton Dryfit Poloshirts Long-sleeves with Embroidery', price: 95, desc: 'Long-sleeve dryfit polo with front, back, and sleeve embroidery.' },
  { id: 8, name: 'Black Cotton Dryfit Poloshirts Short-sleeves with Embroidery', price: 75, desc: 'Short-sleeve dryfit polo with front, back, and sleeve embroidery.' },
];

// ─── Historical Order Data ─────────────────────────────────
interface OrderLine {
  invoice: string;
  date: string;
  category: string;
  product: string;
  qty: number;
  unitPrice: number;
  subtotal: number;
  vat: number;
  totalDue: number;
  status: string;
}

const ORDER_HISTORY: OrderLine[] = [
  { invoice: '7606', date: '31 Jan 2026', category: 'Bulk Hoodie Rollout', product: 'Kids Navy Blue Hoodies (Printing + Embroidery)', qty: 280, unitPrice: 115, subtotal: 32200, vat: 1610, totalDue: 66570, status: 'Completed' },
  { invoice: '7606', date: '31 Jan 2026', category: 'Bulk Hoodie Rollout', product: 'Adult Navy Blue Hoodies (Printing + Embroidery)', qty: 240, unitPrice: 130, subtotal: 31200, vat: 1560, totalDue: 66570, status: 'Completed' },
  { invoice: '7570', date: '15 Jan 2026', category: 'Hoodie Reorder', product: 'Kids Navy Hoodies', qty: 45, unitPrice: 109.5, subtotal: 4927.5, vat: 246.38, totalDue: 6215.5, status: 'Completed' },
  { invoice: '7570', date: '15 Jan 2026', category: 'Hoodie Reorder', product: 'Adult Navy Hoodies', qty: 8, unitPrice: 124, subtotal: 992, vat: 49.6, totalDue: 6215.5, status: 'Completed' },
  { invoice: '7591', date: '27 Jan 2026', category: 'Track Pants', product: 'Kids Track Pants', qty: 40, unitPrice: 60, subtotal: 2400, vat: 120, totalDue: 4567.5, status: 'Completed' },
  { invoice: '7591', date: '27 Jan 2026', category: 'Track Pants', product: 'Adult Track Pants', qty: 30, unitPrice: 65, subtotal: 1950, vat: 97.5, totalDue: 4567.5, status: 'Completed' },
  { invoice: '7609', date: '2 Feb 2026', category: 'Graduation', product: 'Graduation Gowns', qty: 11, unitPrice: 130, subtotal: 1430, vat: 71.5, totalDue: 2898, status: 'Completed' },
  { invoice: '7609', date: '2 Feb 2026', category: 'Graduation', product: 'Graduation Caps', qty: 13, unitPrice: 35, subtotal: 455, vat: 22.75, totalDue: 2898, status: 'Completed' },
  { invoice: '7609', date: '2 Feb 2026', category: 'Graduation', product: 'Sashes', qty: 25, unitPrice: 35, subtotal: 875, vat: 43.75, totalDue: 2898, status: 'Completed' },
  { invoice: '7369', date: '13 Oct 2025', category: 'Event T-Shirts', product: 'White T-shirts', qty: 149, unitPrice: 20, subtotal: 2980, vat: 149, totalDue: 3129, status: 'Completed' },
  { invoice: '7315', date: '20 Sep 2025', category: 'Polos & Pants', product: 'Grey Poloshirts', qty: 6, unitPrice: 60, subtotal: 360, vat: 18, totalDue: 882, status: 'Completed' },
  { invoice: '7315', date: '20 Sep 2025', category: 'Polos & Pants', product: 'Navy Cargo Pants', qty: 6, unitPrice: 80, subtotal: 480, vat: 24, totalDue: 882, status: 'Completed' },
];

const CATEGORIES = [...new Set(ORDER_HISTORY.map(o => o.category))];
const UNIQUE_INVOICES = [...new Set(ORDER_HISTORY.map(o => o.invoice))];

const statusColors: Record<string, string> = {
  'Completed': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'In Production': 'bg-amber-50 text-amber-700 border-amber-200',
  'Pending Approval': 'bg-slate-100 text-slate-600 border-slate-200',
};

// ─── Reorder Modal ────────────────────────────────────────
function ReorderModal({ product, onClose }: { product: typeof PRODUCTS[0]; onClose: () => void }) {
  const [qty, setQty] = useState(0);
  const [sizeS, setSizeS] = useState(0);
  const [sizeM, setSizeM] = useState(0);
  const [sizeL, setSizeL] = useState(0);
  const [sizeXL, setSizeXL] = useState(0);
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const total = sizeS + sizeM + sizeL + sizeXL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (total === 0) {
      toast({ variant: 'destructive', title: 'Please enter size quantities.' });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from('fairgreen_demo_orders' as any).insert({
      product_name: product.name,
      quantity: total,
      size_s: sizeS,
      size_m: sizeM,
      size_l: sizeL,
      size_xl: sizeXL,
      notes: notes || null,
    });
    setSubmitting(false);
    if (error) {
      toast({ variant: 'destructive', title: 'Submission failed', description: error.message });
    } else {
      toast({ title: 'Reorder request submitted successfully.' });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 relative" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X className="w-5 h-5" /></button>
        <h3 className="text-lg font-semibold text-slate-900 mb-1">Reorder Request</h3>
        <p className="text-sm text-slate-500 mb-5">{product.name}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: 'S', val: sizeS, set: setSizeS },
              { label: 'M', val: sizeM, set: setSizeM },
              { label: 'L', val: sizeL, set: setSizeL },
              { label: 'XL', val: sizeXL, set: setSizeXL },
            ].map(s => (
              <div key={s.label}>
                <label className="block text-xs font-medium text-slate-500 mb-1 text-center">{s.label}</label>
                <input type="number" min={0} value={s.val} onChange={e => s.set(Math.max(0, +e.target.value))}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-center text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
              </div>
            ))}
          </div>
          <div className="text-sm text-slate-600 bg-slate-50 rounded-xl px-4 py-2.5 border border-slate-100">
            Total Quantity: <span className="font-semibold text-slate-900">{total}</span>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Notes</label>
            <textarea rows={3} value={notes} onChange={e => setNotes(e.target.value)}
              placeholder="Any special instructions..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 resize-none" />
          </div>
          <button type="submit" disabled={submitting}
            className="w-full py-3 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 disabled:opacity-50 transition-colors">
            {submitting ? 'Submitting...' : 'Submit Reorder Request'}
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Size Summary Tool ────────────────────────────────────
function SizeSummaryTool() {
  const [entries, setEntries] = useState([{ name: '', size: 'M' }]);
  const sizes = ['S', 'M', 'L', 'XL'];

  const addEntry = () => setEntries(prev => [...prev, { name: '', size: 'M' }]);
  const updateEntry = (i: number, field: 'name' | 'size', val: string) => {
    setEntries(prev => prev.map((e, idx) => idx === i ? { ...e, [field]: val } : e));
  };
  const removeEntry = (i: number) => setEntries(prev => prev.filter((_, idx) => idx !== i));

  const totals = sizes.reduce((acc, s) => {
    acc[s] = entries.filter(e => e.size === s && e.name.trim()).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-4">
      <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
        {entries.map((entry, i) => (
          <div key={i} className="flex gap-2 items-center">
            <input value={entry.name} onChange={e => updateEntry(i, 'name', e.target.value)}
              placeholder="Student name"
              className="flex-1 px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <select value={entry.size} onChange={e => updateEntry(i, 'size', e.target.value)}
              className="px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900">
              {sizes.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <button onClick={() => removeEntry(i)} className="text-slate-400 hover:text-red-500 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <button onClick={addEntry}
        className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors">
        + Add Entry
      </button>
      <div className="grid grid-cols-4 gap-3 pt-3 border-t border-slate-100">
        {sizes.map(s => (
          <div key={s} className="text-center bg-slate-50 rounded-xl py-3 border border-slate-100">
            <div className="text-xs text-slate-500 mb-0.5">Total {s}</div>
            <div className="text-xl font-bold text-slate-900">{totals[s]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Portal ──────────────────────────────────────────
const FairgreenPortalDemo = () => {
  const { isAuthenticated, loading, logout } = useSchoolAuth();
  const navigate = useNavigate();
  const [reorderProduct, setReorderProduct] = useState<typeof PRODUCTS[0] | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [dateFilter, setDateFilter] = useState<string>('all');

  // Compute stats
  const totalOrders = UNIQUE_INVOICES.length;
  const totalUnits = ORDER_HISTORY.reduce((sum, o) => sum + o.qty, 0);
  const totalProgramValue = [...new Set(ORDER_HISTORY.map(o => `${o.invoice}-${o.totalDue}`))].reduce((sum, key) => sum + parseFloat(key.split('-').pop()!), 0);

  // Unique dates for filter
  const uniqueDates = [...new Set(ORDER_HISTORY.map(o => o.date))];

  // Filtered orders
  const filteredOrders = ORDER_HISTORY.filter(o => {
    if (categoryFilter !== 'all' && o.category !== categoryFilter) return false;
    if (dateFilter !== 'all' && o.date !== dateFilter) return false;
    return true;
  });

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/schools/login', { replace: true });
    }
  }, [loading, isAuthenticated, navigate]);

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="w-10 h-10 border-4 border-slate-900 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!isAuthenticated) return null;

  const handleLogout = () => {
    logout();
    navigate('/schools/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Fairgreen International School</h1>
            <p className="text-xs text-slate-500 mt-0.5">Official Uniform Collection Portal</p>
          </div>
          <button onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

        {/* Section 1 – Welcome */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-2">Welcome to your School Uniform Dashboard</h2>
          <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
            Here you can manage approved products, place reorders, and track your uniform program. Use the tools below to streamline your institutional uniform operations.
          </p>
        </section>

        {/* Section 1.5 – Program Summary Stats */}
        <section className="grid sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <ClipboardList className="w-5 h-5 text-slate-700" />
              </div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Total Orders</p>
            </div>
            <p className="text-3xl font-bold text-slate-900">{totalOrders}</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <Package className="w-5 h-5 text-slate-700" />
              </div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Total Units Delivered</p>
            </div>
            <p className="text-3xl font-bold text-slate-900">{totalUnits.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-slate-700" />
              </div>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Total Program Value</p>
            </div>
            <p className="text-3xl font-bold text-slate-900">AED {totalProgramValue.toLocaleString()}</p>
          </div>
        </section>

        {/* Section 2 – Approved Products */}
        <section>
          <div className="flex items-center gap-2 mb-5">
            <Package className="w-5 h-5 text-slate-700" />
            <h2 className="text-lg font-semibold text-slate-900">Approved Products</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PRODUCTS.map(p => (
              <div key={p.id} className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col hover:shadow-md transition-shadow">
                <h3 className="text-sm font-semibold text-slate-900 leading-snug mb-1">{p.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-3 flex-1">{p.desc}</p>
                <div className="text-lg font-bold text-slate-900 mb-4">AED {p.price.toFixed(p.price % 1 ? 1 : 0)}</div>
                <div className="flex gap-2">
                  <button onClick={() => setReorderProduct(p)}
                    className="flex-1 py-2 rounded-xl bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5">
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Reorder
                  </button>
                  <button className="px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 – Size Summary Tool */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-5">
            <FileSpreadsheet className="w-5 h-5 text-slate-700" />
            <h2 className="text-lg font-semibold text-slate-900">Bulk Size Breakdown</h2>
          </div>
          <p className="text-sm text-slate-500 mb-5">Enter student names and sizes to calculate totals for your next order.</p>
          <SizeSummaryTool />
        </section>

        {/* Section 5 – Order History */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
            <div className="flex items-center gap-2">
              <History className="w-5 h-5 text-slate-700" />
              <h2 className="text-lg font-semibold text-slate-900">Order History</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                <select value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)}
                  className="text-xs px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900">
                  <option value="all">All Categories</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <select value={dateFilter} onChange={e => setDateFilter(e.target.value)}
                className="text-xs px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900">
                <option value="all">All Dates</option>
                {uniqueDates.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/50">
                  <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Invoice #</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Category</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Product</th>
                  <th className="text-right py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Qty</th>
                  <th className="text-right py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Unit Price</th>
                  <th className="text-right py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Subtotal</th>
                  <th className="text-right py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Due</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((o, i) => {
                  const isFirstInInvoice = i === 0 || filteredOrders[i - 1]?.invoice !== o.invoice;
                  return (
                    <tr key={`${o.invoice}-${o.product}`} className={`border-b border-slate-50 hover:bg-slate-50/50 ${isFirstInInvoice && i > 0 ? 'border-t-2 border-t-slate-200' : ''}`}>
                      <td className="py-3 px-4 font-medium text-slate-900">{isFirstInInvoice ? `INV-${o.invoice}` : ''}</td>
                      <td className="py-3 px-4 text-slate-600">{isFirstInInvoice ? o.date : ''}</td>
                      <td className="py-3 px-4">
                        {isFirstInInvoice && (
                          <span className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium">{o.category}</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-slate-700">{o.product}</td>
                      <td className="py-3 px-4 text-right text-slate-700 font-medium">{o.qty}</td>
                      <td className="py-3 px-4 text-right text-slate-600">AED {o.unitPrice.toFixed(1)}</td>
                      <td className="py-3 px-4 text-right text-slate-600">AED {o.subtotal.toLocaleString()}</td>
                      <td className="py-3 px-4 text-right font-semibold text-slate-900">{isFirstInInvoice ? `AED ${o.totalDue.toLocaleString()}` : ''}</td>
                      <td className="py-3 px-4">
                        {isFirstInInvoice && (
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${statusColors[o.status] || 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                            {o.status}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {filteredOrders.length === 0 && (
              <p className="text-center text-sm text-slate-400 py-8">No orders match the selected filters.</p>
            )}
          </div>
        </section>

        {/* Section 6 – Delivery Timeline */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <CalendarClock className="w-5 h-5 text-slate-700" />
            <h2 className="text-lg font-semibold text-slate-900">Delivery Timeline</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">Last Order Placed</p>
              <p className="text-lg font-bold text-slate-900">February 2, 2026</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">Suggested Reorder Window</p>
              <p className="text-lg font-bold text-emerald-700">May 2026</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-100 py-6 mt-10">
        <p className="text-center text-xs text-slate-400">
          Powered by UniformConnect · School Uniform Management Platform
        </p>
      </footer>

      {/* Reorder Modal */}
      {reorderProduct && <ReorderModal product={reorderProduct} onClose={() => setReorderProduct(null)} />}
    </div>
  );
};

export default FairgreenPortalDemo;
