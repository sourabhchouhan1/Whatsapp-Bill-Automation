import { MessageCircle, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">WhatsApp Bill Automation</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Streamline your billing process with automated WhatsApp notifications. 
              Increase collection rates and save time with our professional automation platform.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-background transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-background transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-background transition-colors">Integrations</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 WhatsApp Bill Automation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};