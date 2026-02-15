
import { CheckCircle, Package, Clock, Users, ClipboardCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const stats = [
  { icon: Package, value: '500+', label: 'Hoodies Produced' },
  { icon: ClipboardCheck, value: 'Full', label: 'Design + Approval Workflow' },
  { icon: Users, value: 'Bulk', label: 'Sizing & Packaging' },
  { icon: Clock, value: '100%', label: 'On-Time Delivery' },
];

const approach = [
  'Direct coordination with school admin team and timelines',
  'Design mockups + approvals before production',
  'Quality control checkpoints during production',
  'Fast delivery aligned with school schedule',
];

const results = [
  '500+ premium hoodies delivered',
  'Branding compliance + consistent quality',
  'Smooth coordination and on-time completion',
];

const CaseStudySection = () => {
  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <section id="case-study" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-red mb-4 block">
            Case Study
          </span>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Fairgreen International School — 500+ Graduation Hoodies Delivered
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We partner with schools at the institutional level — managing design approvals, bulk sizing,
            and large-scale production so your team can focus on what matters.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left — Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="border border-border/60 bg-muted/30 hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-brand-red" />
                  </div>
                  <span className="text-2xl font-bold">{stat.value}</span>
                  <span className="text-sm text-muted-foreground leading-tight">{stat.label}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right — Details Card */}
          <Card className="border border-border/60 shadow-lg">
            <CardContent className="p-8 space-y-8">
              {/* The Project */}
              <div>
                <h3 className="text-lg font-bold mb-3">The Project</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-red shrink-0" />
                    Produced 500+ custom graduation hoodies for Fairgreen International School, Dubai
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-red shrink-0" />
                    Managed school-level approvals for design placement, branding, and sizing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-red shrink-0" />
                    Delivered in bulk with organized packaging for easy distribution
                  </li>
                </ul>
              </div>

              {/* Our Approach */}
              <div>
                <h3 className="text-lg font-bold mb-3">Our Approach</h3>
                <ol className="space-y-2">
                  {approach.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold shrink-0">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-lg font-bold mb-3">Result</h3>
                <ul className="space-y-2">
                  {results.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-brand-green shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="premium-button w-full sm:w-auto" onClick={scrollToForm}>
                Request a School Quote
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
