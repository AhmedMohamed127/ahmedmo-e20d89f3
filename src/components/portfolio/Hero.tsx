import { Phone, Mail, Github, Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
          Ahmed Mohamed
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium mb-6">
          Senior Flutter Developer | Instructor | TA
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Crafting seamless, high-performance mobile experiences with Flutter. 
          I transform ideas into elegant, scalable applications that users love 
          and businesses rely on.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+201000782130"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
          >
            <Phone size={18} />
            <span>+201000782130</span>
          </a>
          <a
            href="mailto:ahmed1mohamed2ib@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
          >
            <Mail size={18} />
            <span>Email</span>
          </a>
          <a
            href="https://gitlab.com/ahmed1mohamed2ib"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current">
              <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/>
            </svg>
            <span>GitLab</span>
          </a>
          <a
            href="https://github.com/AhmedMohamed127"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-mohamed-565251175"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-colors"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};
