import { Hero } from "@/components/portfolio/Hero";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen animated-bg relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
