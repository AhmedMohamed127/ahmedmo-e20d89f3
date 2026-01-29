import { Sparkles, Send, Phone, Mail, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto">
        {/* Open to Work Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="mb-16 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border-primary/30 glow-primary overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 animate-pulse-glow" />
            <CardContent className="py-10 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center gap-3 mb-4"
              >
                <Sparkles className="text-accent" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">Open to Work</h2>
                <Sparkles className="text-accent" size={32} />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                I'm currently available for freelance projects, full-time opportunities, and consulting work. Let's
                build something amazing together!
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Send className="text-secondary" size={36} />
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">Get In Touch</h2>
          </div>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out through any of the channels
            below.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { href: "tel:+201000782130", icon: Phone, label: "+201000782130" },
              { href: "mailto:ahmed1mohamed2ib@gmail.com", icon: Mail, label: "ahmed1mohamed2ib@gmail.com" },
              { href: "https://www.linkedin.com/in/ahmed-mohamed-565251175", icon: Linkedin, label: "LinkedIn" },
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-border hover:border-secondary hover:glow-secondary text-foreground transition-all duration-300"
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground">© {new Date().getFullYear()} Ahmed Mohamed. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
};
