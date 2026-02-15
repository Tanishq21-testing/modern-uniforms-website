
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
          {/* Left — Product Showcase Image */}
          <div className="flex flex-col gap-6">
            <Card className="border border-border/60 shadow-lg overflow-hidden">
              <div className="aspect-[4/5] bg-muted/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-muted flex items-center justify-center">
                    <Package className="h-10 w-10 text-muted-foreground/40" />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">Product Image</p>
                  <p className="text-xs text-muted-foreground/60 mt-1">Coming soon</p>
                </div>
              </div>
            </Card>
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
