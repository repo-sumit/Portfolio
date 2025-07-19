import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";

const Education = () => {
  const education = {
    institution: "Indian Institute of Technology Madras",
    degree: "Bachelor of Science, Data Science",
    period: "2022 - 2026",
    status: "Current"
  };

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-lg text-muted-foreground">
              Academic foundation in data science and technology
            </p>
          </div>

          {/* Education */}
          <div className="flex justify-center">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 w-full max-w-4xl">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">{education.institution}</h4>
                    <p className="text-primary font-medium">{education.degree}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-background/50">
                      <CalendarDays className="w-3 h-3 mr-1" />
                      {education.period}
                    </Badge>
                    <Badge variant="default" className="bg-accent">
                      {education.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;