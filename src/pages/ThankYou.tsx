import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user came from form submission
    const formSubmitted = sessionStorage.getItem('formSubmitted');
    
    if (!formSubmitted) {
      // Redirect to homepage if accessed directly
      navigate('/', { replace: true });
      return;
    }

    // Clear the session storage flag
    sessionStorage.removeItem('formSubmitted');

    // Track conversion for Google Ads
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-11351417396/BET4CPeX9vYaELTE46Qq',
        'value': 1.0,
        'currency': 'AED'
      });
    }
  }, [navigate]);

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        <Card className="shadow-2xl border-0 bg-card/95 backdrop-blur-sm">
          <CardContent className="p-8 sm:p-12 text-center space-y-8">
            {/* Success Animation */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-green-500/20 rounded-full animate-pulse"></div>
                <CheckCircle className="w-20 h-20 text-green-500 animate-scale-in" />
              </div>
            </div>

            {/* Main Message */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground animate-fade-in">
                Thank you for reaching out to{' '}
                <span className="text-primary">UniformConnect!</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed animate-fade-in">
                Our team has received your request and will get back to you within{' '}
                <span className="font-semibold text-foreground">24 hours</span>. 
                Please be ready to reply to any follow-up questions so we can process your order faster.
              </p>
            </div>

            {/* Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full"></div>

            {/* Additional Info */}
            <div className="bg-secondary/30 rounded-2xl p-6 space-y-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-foreground">What happens next?</h2>
              <p className="text-muted-foreground">
                One of our specialists will contact you via email or phone to confirm your needs 
                and provide a customized quote.
              </p>
            </div>

            {/* Action Button */}
            <div className="flex justify-center animate-fade-in">
              <Button 
                onClick={handleBackToHome}
                size="lg"
                className="px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform duration-200"
              >
                Back to Homepage
              </Button>
            </div>

            {/* Contact Info */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-2">
                Need immediate assistance?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <a 
                  href="tel:+971123456789" 
                  className="text-primary hover:text-primary/80 font-medium transition-colors story-link"
                >
                  📞 +971 50 759 9245
                </a>
                <a 
                  href="mailto:info@uniformconnect.com" 
                  className="text-primary hover:text-primary/80 font-medium transition-colors story-link"
                >
                  📧 Premparsram@gmail.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-secondary/5 rounded-full animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
