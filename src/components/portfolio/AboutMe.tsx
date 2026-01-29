import { motion } from "framer-motion";
import { Code, Users, Building2, Star, Briefcase } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "8", label: "Projects" },
  { icon: Star, value: "5/5", label: "Rating" },
  { icon: Users, value: "+2000", label: "Students" },
  { icon: Building2, value: "4", label: "Companies" },
  { icon: Code, value: "13", label: "Customers" },
];

const highlights = [
  "Built and shipped multiple production apps with real users on Android & iOS",
  "Advanced Flutter development with focus on performance, scalability, and maintainability",
  "Designed app architectures using Clean Architecture, BLoC/Cubit, and MVVM",
  "Integrated scalable backend services via REST APIs & Firebase",
  "Experienced in code reviews, mentoring juniors, and technical decision-making",
  "Strong believer in clean code, testing, and continuous improvement",
];

export const AboutMe = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm Ahmed, a passionate Flutter Developer and Instructor who loves turning ideas into smooth, scalable
            digital experiences.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            With 4+ years of hands-on experience, I build cross-platform applications using Flutter, Clean
            Architecture, and state management—focusing on performance, readability, and long-term maintainability.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
            Beyond writing code, I enjoy teaching and simplifying complex concepts, helping developers understand{" "}
            <span className="text-primary font-medium">why</span> things work, not just how.
          </p>
          <p className="text-lg text-primary font-medium max-w-3xl mx-auto leading-relaxed mt-4">
            I believe great software is built at the intersection of clarity, consistency, and curiosity.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary hover:glow-primary transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-4"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-start gap-3 p-4 bg-card/50 rounded-lg border border-border/50"
            >
              <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-muted-foreground">{highlight}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
