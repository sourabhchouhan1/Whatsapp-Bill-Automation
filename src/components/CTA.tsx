import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const CTA = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [businessName, setBusinessName] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber || !businessName) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid WhatsApp phone number.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send this data to your backend
    toast({
      title: "Request Submitted!",
      description: "We'll contact you within 24 hours to set up your demo.",
    });

    // Open WhatsApp (you can customize this number)
    const whatsappMessage = encodeURIComponent(
      `Hi! I'm interested in WhatsApp Bill Automation for my business "${businessName}". My contact number is ${phoneNumber}. Please send me more information.`
    );
    window.open(`https://wa.me/+1234567890?text=${whatsappMessage}`, '_blank');
    
    setPhoneNumber("");
    setBusinessName("");
  };

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Automate Your WhatsApp Billing?
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Join 5,000+ businesses already using our platform to increase collection rates and save hours every week.
          </p>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Business Name"
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="bg-white/90 border-white/30 text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="tel"
                      placeholder="WhatsApp Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="bg-white/90 border-white/30 text-foreground placeholder:text-muted-foreground pl-10"
                      required
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  variant="accent" 
                  size="lg" 
                  className="w-full text-lg py-6"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Free Demo on WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>

              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm opacity-80">
                <span>✓ No credit card required</span>
                <span>✓ 14-day free trial</span>
                <span>✓ Setup in 5 minutes</span>
              </div>
            </CardContent>
          </Card>

          <p className="text-sm opacity-70 mt-6">
            We'll send you a personalized demo via WhatsApp showing exactly how our automation works for your business.
          </p>
        </div>
      </div>
    </section>
  );
};