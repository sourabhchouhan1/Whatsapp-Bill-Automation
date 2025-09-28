import { Card, CardContent } from "@/components/ui/card";
import { Upload, Settings, Send } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Your Customer Data",
    description: "Import your customer list and billing information in minutes with our simple CSV upload or API integration."
  },
  {
    icon: Settings,
    step: "02", 
    title: "Configure Automation Rules",
    description: "Set up billing schedules, reminder sequences, and payment terms that match your business needs."
  },
  {
    icon: Send,
    step: "03",
    title: "Auto-Send Bills via WhatsApp",
    description: "Watch as bills are automatically sent to customers with professional templates and smart follow-ups."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From setup to sending your first automated bill takes less than 10 minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="text-center hover:shadow-elegant transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-accent-foreground" />
                      </div>
                      <div className="text-4xl font-bold text-primary mb-2">{step.step}</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2 z-10"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};