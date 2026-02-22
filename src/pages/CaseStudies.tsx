
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { images } from '@/assets/images';
import restaurantUniformsImg from '@/assets/images/restaurant-uniforms.jpg';
import industrialWorkers1 from '@/assets/images/industrial-workers-1.jpg';
import industrialWorkers2 from '@/assets/images/industrial-workers-2.jpg';
import { 
  GraduationCap, UtensilsCrossed, Building2, Factory, 
  ArrowRight, CheckCircle2, MessageSquare, Palette, 
  PackageCheck, ShieldCheck, Truck, Users,
  School, Hotel, Briefcase, ShoppingBag
} from 'lucide-react';

const CaseStudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processSteps = [
    { icon: MessageSquare, title: 'Consultation', description: 'Understanding your requirements and brand guidelines' },
    { icon: Palette, title: 'Design & Branding Approval', description: 'Collaborative design with your procurement team' },
    { icon: PackageCheck, title: 'Sampling & Prototyping', description: 'Physical samples for review and sign-off' },
    { icon: Factory, title: 'Bulk Manufacturing', description: 'Precision production at scale' },
    { icon: ShieldCheck, title: 'Quality Control', description: 'Rigorous inspection at every stage' },
    { icon: Truck, title: 'Delivery & Ongoing Support', description: 'Timely delivery with replenishment programs' },
  ];

  const sectorCategories = [
    { icon: School, label: 'Education', logos: [images.clientLogos.fairgreen, images.clientLogos.gems, images.clientLogos.eis, images.clientLogos.raffles] },
    { icon: Hotel, label: 'Hospitality', logos: [images.clientLogos.hilton, images.clientLogos.radissonBlu, images.clientLogos.radissonRed, images.clientLogos.dubaiGolf] },
    { icon: Briefcase, label: 'Corporate', logos: [images.clientLogos.khansaheb, images.clientLogos.aud, images.clientLogos.dubaiCreek] },
    { icon: ShoppingBag, label: 'F&B / Retail', logos: [images.clientLogos.jonesTheGrocer, images.clientLogos.littleBangkok, images.clientLogos.mezzaHouse] },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-premium-50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Institutional Uniform Supply Across the UAE
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              From schools and universities to hospitality and corporate environments — we partner directly with procurement teams to deliver structured, scalable uniform programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us">
                <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base font-medium rounded-xl">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="#sectors">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-accent px-8 py-6 text-base font-medium rounded-xl">
                  Explore Sector Solutions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — F&B & HOSPITALITY */}
      <section id="sectors" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center">
                  <UtensilsCrossed className="h-5 w-5 text-brand-red" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">F&B & Hospitality</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Uniform Solutions for F&B & Hospitality Procurement
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We work directly with procurement teams, hotel operators, and multi-location restaurant groups to design and deliver uniform programs that uphold brand standards at every touchpoint.
              </p>
              <ul className="space-y-4">
                {[
                  'Chef jackets, aprons, service uniforms',
                  'Multi-branch rollout orders',
                  'Brand consistency across locations',
                  'Durable, commercial-wash fabrics',
                  'Replenishment supply programs',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-green mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-[var(--shadow-soft)] aspect-[4/5]">
                <img src={images.jonesthegrocercase} alt="Jones The Grocer uniforms" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-[var(--shadow-soft)] aspect-[4/5] mt-8">
                <img src={images.uniformServices} alt="Little Bangkok uniforms" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SCHOOLS & UNIVERSITIES */}
      <section className="py-20 md:py-28 section-bg-1">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden shadow-[var(--shadow-medium)]">
                <img src={images.schoolHoodie} alt="Fairgreen graduation hoodies" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-brand-blue" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Education</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Graduation & Institutional Apparel for Schools and Universities
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We partner with schools to deliver graduation hoodies, leavers jackets, staff apparel, and sports uniforms — all managed through a structured procurement workflow.
              </p>

              <div className="bg-card border border-border rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Case Example: 500+ Graduation Hoodies Delivered
                </h3>
                <ul className="space-y-3">
                  {[
                    'Direct coordination with school administration',
                    'Structured design approval workflow',
                    'Size breakdown management',
                    'Academic timeline delivery',
                    'Bulk production quality control',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-blue mt-0.5 shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/Graduation">
                <Button variant="outline" className="border-border text-foreground hover:bg-accent rounded-xl">
                  View Graduation Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — RESTAURANT GROUPS */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center">
                  <UtensilsCrossed className="h-5 w-5 text-brand-green" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Restaurants</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Branded Uniform Programs for Restaurant Groups
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {['Custom Embroidery & Print', 'Multi-Location Consistency', 'Interior Concept Alignment', 'Staff Comfort & Durability'].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-green mt-1 shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-[var(--shadow-medium)]">
              <img src={restaurantUniformsImg} alt="Restaurant staff in professional uniforms" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — INDUSTRIAL & FACILITY MANAGEMENT */}
      <section className="py-20 md:py-28 section-bg-1">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-premium-200 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-premium-600" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Industrial</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Industrial & Facility Management Uniforms
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We supply durable, safety-compliant workwear for industrial operations, facility management companies, and construction sites across the UAE.
              </p>
              <ul className="space-y-4">
                {[
                  'High-visibility garments',
                  'Safety-compliant apparel',
                  'Durable fabrics for site work',
                  'Large-scale supply capabilities',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-premium-500 mt-0.5 shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-[var(--shadow-soft)] aspect-square">
                <img src={industrialWorkers1} alt="Construction workers in safety uniforms" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-[var(--shadow-soft)] aspect-square">
                <img src={industrialWorkers2} alt="Facility maintenance worker" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — WORKFLOW */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Structured Uniform Program Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven 6-step process that ensures quality, consistency, and on-time delivery for every institutional client.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative bg-card border border-border rounded-xl p-6 text-center hover:shadow-[var(--shadow-soft)] transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {index + 1}
                  </div>
                  <Icon className="h-6 w-6 text-muted-foreground mx-auto mb-3 group-hover:text-foreground transition-colors" />
                  <h3 className="font-semibold text-foreground text-sm mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8 — TRUST / CLIENT SECTORS */}
      <section className="py-20 md:py-28 section-bg-1">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Leading Institutions Across
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectorCategories.map((sector) => {
              const Icon = sector.icon;
              return (
                <div key={sector.label} className="bg-card border border-border rounded-xl p-8 text-center">
                  <Icon className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-6">{sector.label}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {sector.logos.map((logo, i) => (
                      <div key={i} className="flex items-center justify-center p-2">
                        <img
                          src={logo}
                          alt={`${sector.label} client`}
                          className="h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">
              Planning a Uniform Program?
            </h2>
            <p className="text-lg text-background/70 mb-10">
              Let's structure it properly.
            </p>
            <Link to="/contact-us">
              <Button size="lg" className="bg-background text-foreground hover:bg-background/90 px-10 py-6 text-base font-medium rounded-xl">
                Request a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
