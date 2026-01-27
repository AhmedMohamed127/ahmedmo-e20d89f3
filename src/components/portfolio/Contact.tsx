import { Sparkles, Send, Phone, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        {/* Open to Work Banner */}
        <Card className="mb-12 bg-primary text-primary-foreground border-none">
          <CardContent className="py-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles size={28} />
              <h2 className="text-2xl md:text-3xl font-bold">Open to Work</h2>
              <Sparkles size={28} />
            </div>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              I'm currently available for freelance projects, full-time opportunities, 
              and consulting work. Let's build something amazing together!
            </p>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Send className="text-primary" size={32} />
            <h2 className="text-3xl font-bold text-foreground">Get In Touch</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            Feel free to reach out through any of the channels below.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+201000782130"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
            >
              <Phone size={20} />
              <span>+201000782130</span>
            </a>
            <a
              href="mailto:ahmed1mohamed2ib@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
            >
              <Mail size={20} />
              <span>ahmed1mohamed2ib@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-mohamed-565251175"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Ahmed Mohamed. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
