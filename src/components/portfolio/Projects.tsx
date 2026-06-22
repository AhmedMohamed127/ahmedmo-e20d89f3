import { FolderOpen, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

const projectsData = [
  {
    name: "Freelancer",
    year: "2025",
    tech: ["Flutter", "Maps", "Firebase", "Bloc & Cubit"],
    description:
      "A modern, feature-rich freelancer platform built with Flutter. Comprehensive solution for connecting freelancers with clients.",
    links: [{ type: "playstore", url: "https://play.google.com/store/apps/details?id=com.techorg.freelancer" }],
    accent: "cyan",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
  },
  {
    name: "Caxi",
    year: "2025",
    tech: ["Flutter", "Maps", "Firebase", "Bloc & Cubit"],
    description:
      "A comprehensive Uber-like ride-sharing application featuring clean architecture, Firebase backend, and role-based user management.",
    links: [{ type: "website", url: "https://caxiapp0-sinai.github.io/CaxiApp/" }],
    accent: "purple",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>
    ),
  },
  {
    name: "El Sadeken & Sadekat",
    year: "2025",
    tech: ["Flutter", "API", "Pusher", "Bloc & Cubit"],
    description:
      "A Saudi mobile application designed to facilitate serious and lawful marriage in line with Islamic principles.",
    links: [{ type: "github", url: "https://gist.github.com/AhmedMohamed127/ba42804f17fbc8f043ce823a8683f130" }],
    accent: "blue",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    ),
  },
  {
    name: "Dalilkom",
    year: "2024",
    tech: ["Flutter", "API", "Firebase", "Provider"],
    description:
      "Facilitates daily life by providing service places and offers from more than 52,000 locations around you.",
    links: [
      { type: "playstore", url: "https://play.google.com/store/apps/details?id=com.elnooronline.dalilkoom" },
    ],
    accent: "emerald",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L16 4m0 13V4m0 0L9 7" /></svg>
    ),
  },
  {
    name: "رشة مي",
    year: "2024",
    tech: ["Flutter", "API", "Firebase", "Bloc", "Cubit"],
    description:
      "Schedule car wash services easily. Pick a location, select a time, browse options, and pay electronically.",
    links: [
      { type: "playstore", url: "https://play.google.com/store/apps/details?id=com.elnooronline.rashatmay" },
      { type: "appstore", url: "https://apps.apple.com/us/app/rashat-may-%D8%B1%D8%B4%D8%A9-%D9%85%D9%8A/id6470158572" },
    ],
    accent: "sky",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
    ),
  },
  {
    name: "Madaresco",
    year: "2023",
    tech: ["Flutter", "API", "Firebase", "Bloc", "Cubit"],
    description:
      "Students can view schedules, news, assignments, lessons, and correspond with teachers. Available in Iraq.",
    links: [{ type: "playstore", url: "https://play.google.com/store/apps/details?id=com.elnooronline.alawael" }],
    accent: "rose",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    ),
  },
];

const accentStyles: Record<string, { bg: string; text: string; border: string; glow: string; hoverGlow: string; tagText: string; tagBorder: string; tagBg: string }> = {
  cyan: {
    bg: "bg-cyan-500/10",
    text: "text-cyan-500",
    border: "border-cyan-500/20",
    glow: "shadow-[0_0_40px_-12px_rgba(6,182,212,0.25)]",
    hoverGlow: "hover:shadow-[0_0_60px_-8px_rgba(6,182,212,0.4)]",
    tagText: "text-cyan-600 dark:text-cyan-400",
    tagBorder: "border-cyan-500/20",
    tagBg: "bg-cyan-500/5",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-500",
    border: "border-purple-500/20",
    glow: "shadow-[0_0_40px_-12px_rgba(168,85,247,0.25)]",
    hoverGlow: "hover:shadow-[0_0_60px_-8px_rgba(168,85,247,0.4)]",
    tagText: "text-purple-600 dark:text-purple-400",
    tagBorder: "border-purple-500/20",
    tagBg: "bg-purple-500/5",
  },
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-500",
    border: "border-blue-500/20",
    glow: "shadow-[0_0_40px_-12px_rgba(59,130,246,0.25)]",
    hoverGlow: "hover:shadow-[0_0_60px_-8px_rgba(59,130,246,0.4)]",
    tagText: "text-blue-600 dark:text-blue-400",
    tagBorder: "border-blue-500/20",
    tagBg: "bg-blue-500/5",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-500",
    border: "border-emerald-500/20",
    glow: "shadow-[0_0_40px_-12px_rgba(16,185,129,0.25)]",
    hoverGlow: "hover:shadow-[0_0_60px_-8px_rgba(16,185,129,0.4)]",
    tagText: "text-emerald-600 dark:text-emerald-400",
    tagBorder: "border-emerald-500/20",
    tagBg: "bg-emerald-500/5",
  },
  sky: {
    bg: "bg-sky-500/10",
    text: "text-sky-500",
    border: "border-sky-500/20",
    glow: "shadow-[0_0_40px_-12px_rgba(14,165,233,0.25)]",
    hoverGlow: "hover:shadow-[0_0_60px_-8px_rgba(14,165,233,0.4)]",
    tagText: "text-sky-600 dark:text-sky-400",
    tagBorder: "border-sky-500/20",
    tagBg: "bg-sky-500/5",
  },
  rose: {
    bg: "bg-rose-500/10",
    text: "text-rose-500",
    border: "border-rose-500/20",
    glow: "shadow-[0_0_40px_-12px_rgba(244,63,94,0.25)]",
    hoverGlow: "hover:shadow-[0_0_60px_-8px_rgba(244,63,94,0.4)]",
    tagText: "text-rose-600 dark:text-rose-400",
    tagBorder: "border-rose-500/20",
    tagBg: "bg-rose-500/5",
  },
};

const StoreIcon = ({ type }: { type: string }) => {
  if (type === "playstore") {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
      </svg>
    );
  }
  if (type === "appstore") {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
      </svg>
    );
  }
  if (type === "github") {
    return (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    );
  }
  return <ExternalLink size={16} />;
};

export const Projects = () => {
  const [active, setActive] = useState(0);
  const total = projectsData.length;

  const go = (dir: number) => setActive((p) => (p + dir + total) % total);

  const getOffset = (i: number) => {
    let d = i - active;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  };

  return (
    <section className="py-20 px-4">
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

        <div
          className="relative h-[520px] md:h-[480px] flex items-center justify-center"
          style={{ perspective: "1600px" }}
        >
          <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
            {projectsData.map((project, i) => {
              const offset = getOffset(i);
              const abs = Math.abs(offset);
              const isActive = offset === 0;
              const visible = abs <= 3;
              const style = accentStyles[project.accent];

              return (
                <motion.div
                  key={project.name}
                  className="absolute top-1/2 left-1/2 w-[340px] md:w-[400px]"
                  animate={{
                    x: `calc(-50% + ${offset * 140}px)`,
                    y: "-50%",
                    rotateY: offset * -22,
                    scale: isActive ? 1 : 1 - Math.min(abs, 3) * 0.08,
                    z: isActive ? 100 : -abs * 120,
                    opacity: visible ? (isActive ? 1 : 0.55 - abs * 0.12) : 0,
                    zIndex: 100 - abs,
                  }}
                  transition={{ type: "spring", stiffness: 180, damping: 24 }}
                  style={{ transformStyle: "preserve-3d", transformOrigin: "center center" }}
                  onClick={() => !isActive && setActive(i)}
                >
                  <Card
                    className={`h-[440px] bg-card/50 backdrop-blur-xl border-border flex flex-col overflow-hidden transition-all duration-500 ${
                      isActive
                        ? `${style.border} ${style.glow} ${style.hoverGlow} cursor-default`
                        : "cursor-pointer hover:border-accent/30"
                    }`}
                  >
                    {/* Top colored glow bar */}
                    <div className={`h-1 w-full ${style.bg.replace('/10', '/40')}`} />
                    
                    <CardContent className="pt-5 flex flex-col h-full">
                      {/* Header row */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`p-2.5 rounded-2xl ${style.bg} ${style.text}`}>
                            {project.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-foreground leading-tight">{project.name}</h3>
                            <span className={`text-[10px] font-bold uppercase tracking-widest ${style.text} opacity-70`}>
                              {project.year}
                            </span>
                          </div>
                        </div>
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${style.tagBg} ${style.tagText} border ${style.tagBorder}`}>
                          {project.tech[0]}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tech.slice(1).map((t, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-secondary/50 border border-border text-[10px] font-semibold text-muted-foreground uppercase tracking-wider"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Divider */}
                      <div className={`h-px w-full mb-4 ${style.bg}`} />

                      {/* Links */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                          View on
                        </span>
                        <div className="flex gap-2">
                          {project.links.map((link, idx) => (
                            <motion.a
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.08 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => !isActive && e.preventDefault()}
                              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl ${style.bg} ${style.text} border ${style.border} hover:${style.bg.replace('/10', '/20')} transition-colors text-xs font-semibold`}
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
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Controls */}
          <button
            aria-label="Previous project"
            onClick={() => go(-1)}
            className="absolute left-2 md:left-6 z-[200] p-3 rounded-full bg-card/70 backdrop-blur-md border border-border hover:border-accent hover:bg-card transition-all hover:scale-110"
          >
            <ChevronLeft className="text-foreground" />
          </button>
          <button
            aria-label="Next project"
            onClick={() => go(1)}
            className="absolute right-2 md:right-6 z-[200] p-3 rounded-full bg-card/70 backdrop-blur-md border border-border hover:border-accent hover:bg-card transition-all hover:scale-110"
          >
            <ChevronRight className="text-foreground" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projectsData.map((p, i) => {
            const style = accentStyles[p.accent];
            return (
              <button
                key={i}
                aria-label={`Go to project ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active ? `w-8 ${style.bg.replace('/10', '')}` : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
