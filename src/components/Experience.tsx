import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Product Associate",
      company: "ConveGenius.AI",
      location: "Gandhinagar, Gujarat",
      period: "Sept 2024 - Present",
      type: "Full-time",
 //     highlights: [
//        "Stakeholder Collaboration: Partnered with Gujarat Education Department, GCERT, COS, and NGOs like Wadhwani.AI and Quest Alliance to gather requirements and deliver tailored solutions.",
//        "Product Development: Contributed to AI-driven educational platforms (ORF, IPMS, CAL, GSQAC), impacting 20M+ registered users and 2.3M+ DAUs.",
//        "Wireframing & UX Design: Designed wireframes, dashboards, and flows using V0, Whimsical, Mokkup.ai, and Figma, reducing design cycles by 32% and improving stakeholder alignment.",
//        "Gen AI Integration: Leveraged tools like ChatGPT, Perplexity, Julius, and Google AI Studio for analysis, prototype generation, and web design.",
//        "Cross-Functional Ownership: Managed SDLC, sprint execution, and feature rollout across teams using JIRA, improving velocity and release efficiency."
//      ],
      skills: ["Product Strategy", "Stakeholder Management", "Wireframing", "AI Integration", "Agile"]
    },
    {
      title: "Founder & Product Owner",
      company: "Acegrade.in",
      location: "Remote",
      period: "Sept 2023 - Sept 2024",
      type: "Founder",
 //     highlights: [
//        "Team Leadership & Product Development: Led a cross-functional team of 6 to develop AceGrade from inception to launch(0-1), overseeing the entire Software Development Life Cycle (SDLC).",
//        "Growth Strategy: Drove 72.27% direct search and 25.21% organic search traffic through WhatsApp, LinkedIn, Telegram, Instagram using strategic messaging.",
//        "Data-Driven UX & Retention: Implemented continuous feedback loops via user interviews and analytics, enhancing feature for over 60K users. Iterative improvements led to a 64% increase in retention and 24% boost in engagement.",
//        "Product Analytics & Iteration: Utilized Google Analytics to monitor product performance across various metrics, guiding data-informed iterations and feature enhancements.",
//        "Product Lifecycle Management: Managed the complete product lifecycle, coordinating with diverse teams to ensure timely delivery and quality assurance."
//      ],
      skills: ["Team Leadership", "Growth Strategy", "User Research", "Product Analytics", "Lifecycle Management"]
    }
  ];


  const leadership = [
    {
      title: "Community Building",
      description: "Scaled the AceGrade community to 10,000+ members, driving 250% growth via data-driven branding and engagement.",
      impact: "10,000+ members"
    },
    {
      title: "Workshops",
      description: "Organized TechSynergy, a 3-workshop series engaging 300+ attendees on AI, Data, and Product topics.",
      impact: "300+ attendees"
    },
    {
      title: "Group Leader",
      description: "Mentored 100+ students as Group Leader at IIT Madras, driving academic and extracurricular initiatives.",
      impact: "100+ students mentored"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-lg text-muted-foreground">
              Building products that scale and creating meaningful impact
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/60 transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                        <div className="flex items-center gap-2 text-primary font-medium">
                          <span>{exp.company}</span>
                          {exp.company === "Acegrade.in" && (
                            <ExternalLink className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <Badge variant="outline" className="w-fit bg-background/50">
                          <CalendarDays className="w-3 h-3 mr-1" />
                          {exp.period}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-foreground/80 leading-relaxed">
                          <span className="text-primary font-medium">
                            {highlight.split(':')[0]}:
                          </span>
                          <span className="ml-1">
                            {highlight.split(':').slice(1).join(':')}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary" className="bg-primary/10 text-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>


          {/* Leadership */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Leadership & Community</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {leadership.map((item, index) => (
                <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/40 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold text-lg mb-3 text-foreground">{item.title}</h4>
                    <p className="text-foreground/80 text-sm mb-3 leading-relaxed">{item.description}</p>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                      {item.impact}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
