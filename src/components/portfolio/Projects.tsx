import { FolderOpen, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useRef } from "react";

const projectsData = [
  {
    name: "Freelancer",
    year: "2025",
    tech: "Flutter, Maps, Firebase, Shared Preferences, Bloc & Cubit",
    description:
      "A modern, feature-rich freelancer platform built with Flutter. Comprehensive solution for connecting freelancers with clients.",
    links: [{ type: "playstore", url: "https://play.google.com/store/apps/details?id=com.techorg.freelancer" }],
  },
  {
    name: "Caxi",
    year: "2025",
    tech: "Flutter, Maps, Firebase, Shared Preferences, Bloc & Cubit",
    description:
      "A comprehensive Uber-like ride-sharing application featuring clean architecture, Firebase backend, and role-based user management.",
    links: [{ type: "website", url: "https://caxiapp0-sinai.github.io/CaxiApp/" }],
  },
  {
    name: "El Sadeken & Sadekat",
    year: "2025",
    tech: "Flutter, API, Pusher, Firebase, Bloc & Cubit",
    description:
      "A Saudi mobile application designed to facilitate serious and lawful marriage in line with Islamic principles.",
    links: [{ type: "github", url: "https://gist.github.com/AhmedMohamed127/ba42804f17fbc8f043ce823a8683f130" }],
  },
  {
    name: "Dalilkom",
    year: "2024",
    tech: "Flutter, API, Firebase, Provider",
    description:
      "Facilitates daily life by providing service places and offers from more than 52,000 locations around you.",
    links: [
      { type: "playstore", url: "https://play.google.com/store/apps/details?id=com.elnooronline.dalilkoom" },
    ],
  },
  {
    name: "رشة مي",
    year: "2024",
    tech: "Flutter, API, Firebase, Provider, Bloc, Cubit",
    description:
      "Schedule car wash services easily. Pick a location, select a time, browse options, and pay electronically.",
    links: [
      { type: "playstore", url: "https://play.google.com/store/apps/details?id=com.elnooronline.rashatmay" },
      { type: "appstore", url: "https://apps.apple.com/us/app/rashat-may-%D8%B1%D8%B4%D8%A9-%D9%85%D9%8A/id6470158572" },
    ],
  },
  {
    name: "Madaresco",
    year: "2023",
    tech: "Flutter, API, Firebase, Provider, Bloc, Cubit",
    description:
      "Students can view schedules, news, assignments, lessons, and correspond with teachers. Available in Iraq.",
    links: [{ type: "playstore", url: "https://play.google.com/store/apps/details?id=com.elnooronline.alawael" }],
  },
];

const StoreIcon = ({ type }: { type: string }) => {
  if (type === "playstore") {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
      </svg>
    );
  }
  if (type === "appstore") {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
      </svg>
    );
  }
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    );
  }
  return <ExternalLink size={20} />;
};

export const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-10 px-4"
        >
          <FolderOpen className="text-accent" size={36} />
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Projects</h2>
        </motion.div>

        {/* Horizontal scrollable container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 px-4 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="snap-start"
              >
                <Card className="min-w-[320px] max-w-[360px] h-full bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 card-hover flex flex-col">
                  <CardContent className="pt-6 flex flex-col h-full">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/20 text-accent whitespace-nowrap">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-xs text-primary/80 mb-3 line-clamp-2">{project.tech}</p>
                    <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">{project.description}</p>
                    <div className="flex gap-2 flex-wrap mt-auto">
                      {project.links.map((link, i) => (
                        <motion.a
                          key={i}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
                        >
                          <StoreIcon type={link.type} />
                          <span className="capitalize">
                            {link.type === "playstore"
                              ? "Play Store"
                              : link.type === "appstore"
                              ? "App Store"
                              : link.type === "github"
                              ? "GitHub"
                              : "Website"}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Scroll indicators */}
          <div className="absolute left-0 top-0 bottom-6 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-6 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </motion.div>

        <p className="text-center text-muted-foreground text-sm mt-4">← Scroll to explore more projects →</p>
      </div>
    </section>
  );
};
