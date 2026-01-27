import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const experienceData = [
  {
    title: "Teaching Assistant – Computer Science / Software Engineering",
    company: "Al-Sadat Academy (Part Time)",
    period: "Sep 2025 - Present",
    location: "Cairo, Egypt",
    highlights: [
      "Delivered software engineering and computer science labs.",
      "Assisted students with programming concepts and graduation projects.",
    ],
  },
  {
    title: "Senior Flutter Developer",
    company: "TechOrg (Remote)",
    period: "July 2024 – Present",
    location: "Saudi Arabia",
    highlights: [
      "Led development of 5+ production Flutter applications using Clean Architecture and Bloc/Cubit.",
      "Improved code maintainability by 40% by refactoring legacy modules and enforcing SOLID principles.",
      "Increased feature delivery speed by 60% by optimizing sprint planning and CI workflows.",
      "Reduced runtime crashes by 35% through improved state management and error handling.",
      "Collaborated with Saudi enterprise clients on requirements, delivery, and release planning.",
      "Mentored 4+ junior developers, improving team code review approval rate by 50%.",
    ],
  },
  {
    title: "Teaching Assistant – MIS",
    company: "El-Shorouk Academy (Full Time)",
    period: "Sep 2021 - Present",
    location: "Cairo, Egypt",
    highlights: [
      "Supported 100+ students per semester in software engineering and MIS courses.",
      "Reviewed and supervised 30+ student projects, improving overall project quality by 20%.",
      "Assisted top-performing students in graduation projects ranked Excellent with Honors.",
    ],
  },
  {
    title: "Flutter Instructor @DEPI, DECI",
    company: "Ministry of Communications and Information Technology",
    period: "May 2024 – Nov 2024",
    location: "Cairo, Egypt",
    highlights: [
      "Delivered hands-on Flutter training to 40+ trainees covering Dart, Bloc/Cubit, and real-world apps.",
      "Mentored 15+ graduation projects, increasing completion success rate by 90%.",
    ],
  },
  {
    title: "Flutter Developer",
    company: "EL_NOOR",
    period: "June 2023 - Feb 2024",
    location: "Cairo, Egypt",
    highlights: [
      "Developed and maintained mobile application using Flutter and deal with payment gateways, Zoom SDK, Rest APIs and increased applications performance up to 70%.",
    ],
  },
];

export const Experience = () => {
  return (
    <section className="py-16 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="text-primary" size={32} />
          <h2 className="text-3xl font-bold text-foreground">Professional Experience</h2>
        </div>
        
        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-1">
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <span className="text-sm font-medium text-primary whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-3">
                  {exp.company} | {exp.location}
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="leading-relaxed">{highlight}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
