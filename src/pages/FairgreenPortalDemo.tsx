import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSchoolAuth } from '@/hooks/useSchoolAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  LogOut, Package, ClipboardList, Upload, History, CalendarClock,
  X, ShoppingCart, FileSpreadsheet, BarChart3, ChevronRight
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

const MOCK_ORDERS = [
  { id: 'FG-2026-001', date: 'Jan 15, 2026', product: 'Navy Blue Children Hoodies', qty: 120, status: 'Completed' },
  { id: 'FG-2026-002', date: 'Feb 5, 2026', product: 'Grey Poloshirts with Embroideries', qty: 200, status: 'In Production' },
  { id: 'FG-2026-003', date: 'Feb 18, 2026', product: 'Light Purple Hoodies', qty: 80, status: 'Pending Approval' },
];

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
          <div className="flex items-center gap-2 mb-5">
            <History className="w-5 h-5 text-slate-700" />
            <h2 className="text-lg font-semibold text-slate-900">Order History</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Order ID</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Product</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Qty</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_ORDERS.map(o => (
                  <tr key={o.id} className="border-b border-slate-50 hover:bg-slate-25">
                    <td className="py-3 px-4 font-medium text-slate-900">{o.id}</td>
                    <td className="py-3 px-4 text-slate-600">{o.date}</td>
                    <td className="py-3 px-4 text-slate-600">{o.product}</td>
                    <td className="py-3 px-4 text-slate-600">{o.qty}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${statusColors[o.status]}`}>
                        {o.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              <p className="text-lg font-bold text-slate-900">January 15, 2026</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <p className="text-xs text-slate-500 mb-1">Suggested Reorder Window</p>
              <p className="text-lg font-bold text-emerald-700">April 2026</p>
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
