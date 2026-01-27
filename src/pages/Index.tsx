import { Hero } from "@/components/portfolio/Hero";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;
