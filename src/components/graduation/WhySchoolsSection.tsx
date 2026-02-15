
import { FileText, UserCheck, ClipboardCheck, Ruler, Scissors, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const cards = [
  {
    icon: FileText,
    title: 'Contract-Based Supply',
    desc: 'Structured agreements tailored for institutional procurement.',
  },
  {
    icon: UserCheck,
    title: 'Dedicated Account Manager',
    desc: 'A single point of contact from start to finish.',
  },
  {
    icon: ClipboardCheck,
    title: 'Design Approval Workflow',
    desc: 'Mockups and sign-offs before any production begins.',
  },
  {
    icon: Ruler,
    title: 'Sizing Support for Students',
    desc: 'Comprehensive size guides and bulk sizing coordination.',
  },
  {
    icon: Scissors,
    title: 'In-House Tailoring & Embroidery',
    desc: 'Everything produced in our Dubai facility.',
  },
  {
    icon: Truck,
    title: 'Reliable Delivery Timelines',
    desc: 'Aligned with your school calendar and deadlines.',
  },
];

const WhySchoolsSection = () => {
  return (
    <section id="schools" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-blue mb-4 block">
            For Schools
          </span>
          <h2 className="text-3xl md:text-5xl font-bold">
            Why Schools Choose UniformConnect
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((c) => (
            <Card
              key={c.title}
              className="border border-border/60 hover:shadow-md transition-shadow"
            >
              <CardContent className="p-7 space-y-3">
                <div className="w-11 h-11 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                  <c.icon className="h-5 w-5 text-brand-blue" />
                </div>
                <h3 className="font-bold text-base">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySchoolsSection;
