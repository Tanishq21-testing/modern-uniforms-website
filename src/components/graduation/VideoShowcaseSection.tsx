
import { Scissors, Printer, Factory } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  { icon: Scissors, label: 'Premium Fabric Options' },
  { icon: Printer, label: 'Embroidery + Print' },
  { icon: Factory, label: 'Bulk Production (100–2,000+)' },
];

// TODO: Replace these with actual video paths once uploaded to the project
// e.g. import video1 from '@/assets/videos/IMG_5361.mp4';
const VIDEO_1 = '';
const VIDEO_2 = '';

const VideoShowcaseSection = () => {
  return (
    <section id="product-showcase" className="py-20 md:py-28 section-bg-1">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">See the Final Product</h2>
          <p className="text-lg text-muted-foreground">
            A look at the Fairgreen graduation hoodies — premium fabric, clean finishing, made for schools.
          </p>
        </div>

        {/* Video Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-14">
          {[VIDEO_1, VIDEO_2].map((src, i) => (
            <Card key={i} className="overflow-hidden border border-border/60 shadow-lg">
              <div className="aspect-video bg-muted/50 flex items-center justify-center rounded-t-xl overflow-hidden">
                {src ? (
                  <video
                    src={src}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                  />
                ) : (
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center">
                      <Factory className="h-8 w-8 text-muted-foreground/50" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Video coming soon
                    </p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Feature Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {features.map((f) => (
            <Card key={f.label} className="border border-border/60 bg-background">
              <CardContent className="p-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <f.icon className="h-5 w-5 text-brand-blue" />
                </div>
                <span className="text-sm font-medium">{f.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;
