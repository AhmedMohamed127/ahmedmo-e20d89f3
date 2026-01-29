import { Hero } from "@/components/portfolio/Hero";
import { AboutMe } from "@/components/portfolio/AboutMe";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen animated-bg relative scroll-smooth">
      <AnimatedBackground />
      <Navigation />
      <ThemeToggle />
      <div className="relative z-10">
        <Hero />
        <AboutMe />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
