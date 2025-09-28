import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Automate Your
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                WhatsApp Billing
              </span>
              in Minutes
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Send professional invoices, track payments, and manage billing automatically through WhatsApp. 
              Increase collection rates by 40% with automated reminders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:order-last animate-fade-in">
            <div className="relative mx-auto max-w-lg">
              <img 
                src={heroImage} 
                alt="WhatsApp automation dashboard showing automated billing notifications" 
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};