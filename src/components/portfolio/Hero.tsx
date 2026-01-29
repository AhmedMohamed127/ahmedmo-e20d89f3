import { Phone, Mail, Github, Linkedin, Download } from "lucide-react";
import { motion } from "framer-motion";
import profileImage from "@/assets/profile.jpeg";

const socialLinks = [
  { href: "tel:+201000782130", icon: Phone, label: "+201000782130" },
  { href: "mailto:ahmed1mohamed2ib@gmail.com", icon: Mail, label: "Email" },
  {
    href: "https://gitlab.com/ahmed1mohamed2ib",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
      </svg>
    ),
    label: "GitLab",
  },
  { href: "https://github.com/AhmedMohamed127", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/ahmed-mohamed-565251175", icon: Linkedin, label: "LinkedIn" },
];

export const Hero = () => {
  return (
    <section className="py-24 px-4 min-h-[80vh] flex items-center">
      <div className="container max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent blur-lg opacity-50 animate-pulse-glow" />
            <img
              src={profileImage}
              alt="Ahmed Mohamed"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-contain bg-card border-4 border-primary/50 shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4 text-gradient"
        >
          Ahmed Mohamed
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-primary font-medium mb-6"
        >
          Senior Flutter Developer | Instructor | TA
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Crafting seamless, high-performance mobile experiences with Flutter. I transform ideas into elegant, scalable
          applications that users love and businesses rely on.
        </motion.p>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-10"
        >
          <motion.a
            href="https://drive.google.com/file/d/1dwUr15S9XyhDWuiIAIMC-aGTLMWlBURD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
          >
            <Download size={20} />
            <span>Download CV</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary hover:glow-primary text-foreground transition-all duration-300"
              >
                <Icon size={18} />
                <span>{link.label}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
