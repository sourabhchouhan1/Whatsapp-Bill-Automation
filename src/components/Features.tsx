import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Clock, TrendingUp, Shield, Smartphone, Zap } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "WhatsApp Integration",
    description: "Send bills directly through WhatsApp Business API with professional templates and branding."
  },
  {
    icon: Clock,
    title: "Automated Reminders",
    description: "Set up smart reminder sequences that automatically follow up on overdue payments."
  },
  {
    icon: TrendingUp,
    title: "40% Higher Collection",
    description: "Increase your payment collection rates with timely, personalized WhatsApp reminders."
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Bank-grade security with end-to-end encryption and complete payment tracking."
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Manage your entire billing process from any device, anywhere, anytime."
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Get started in under 5 minutes with our simple onboarding process."
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose WhatsApp Bill Automation?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of businesses that have transformed their billing process with automated WhatsApp notifications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-soft transition-shadow duration-300 border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};