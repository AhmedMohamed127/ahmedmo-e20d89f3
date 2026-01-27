import { GraduationCap, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const educationData = [
  {
    degree: "Master's degree in Software Engineering",
    period: "2024 - Present",
    institution: "Helwan University",
    location: "Cairo, Egypt",
  },
  {
    degree: "Computer Science Diploma",
    period: "2023 - 2024",
    institution: "Arab Academy for Science, Technology & Maritime Transport (AAST)",
    location: "Cairo, Egypt",
  },
  {
    degree: "Bachelor of Management Information Systems",
    period: "2017 - 2021",
    institution: "El-Shorouk Academy (SH_A)",
    location: "Cairo, Egypt",
    details: [
      "Graduation Project: DoctorCom",
      "Degree: Excellent with Honor (Ranked 1st)",
    ],
    link: {
      text: "Participated in IUGRC 2021",
      url: "https://iugrc.journals.ekb.eg/article_245596.html",
    },
  },
];

export const Education = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="text-primary" size={32} />
          <h2 className="text-3xl font-bold text-foreground">Education</h2>
        </div>
        
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {edu.degree}
                  </h3>
                  <span className="text-sm font-medium text-primary whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-2">
                  {edu.institution} | {edu.location}
                </p>
                {edu.details && (
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-3">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
                {edu.link && (
                  <a
                    href={edu.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline mt-2"
                  >
                    {edu.link.text}
                    <ExternalLink size={14} />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
