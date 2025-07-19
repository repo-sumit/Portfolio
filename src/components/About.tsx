import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Lightbulb, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Users,
      title: "100K+ Users",
      description: "Scaled AceGrade from inception to 100K+ users in under a year"
    },
    {
      icon: TrendingUp,
      title: "Growth Expert",
      description: "Drove 72.27% direct search and 25.21% organic search traffic"
    },
    {
      icon: Lightbulb,
      title: "AI Innovation",
      description: "Building AI-driven educational platforms at ConveGenius.AI"
    },
    {
      icon: Target,
      title: "Impact Driven",
      description: "20M+ registered users impacted through product development"
    }
  ];

  const skills = {
    "Product & Strategy": [
      "Product Roadmap", "Feature Prioritization", "PRD Writing", "Agile", 
      "Wireframing", "GTM Strategy", "Strategic Messaging"
    ],
    "Analytics & Data": [
      "SQL", "A/B Testing", "Mixpanel", "Behavioral Analytics", 
      "Data-Driven Decision-Making", "Prompt Engineering"
    ],
    "Tools & Platforms": [
      "Whimsical", "JIRA", "Confluence", "Google Analytics", "Power BI", 
      "Excel", "Python", "APIs", "Postman", "Figma", "PostgreSQL"
    ],
    "Leadership": [
      "Product Thinking", "Stakeholder Management", "Storytelling", 
      "Strategic Growth", "User Empathy", "Cross-Functional Collaboration"
    ]
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about turning data into insights and ideas into impactful products
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="mb-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="group hover:shadow-glow-primary/20 transition-all duration-300 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-border/50 hover:border-primary/30">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <Card key={index} className="group relative overflow-hidden bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm border-border/50 hover:border-primary/40 transition-all duration-500 hover:shadow-glow-primary/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="relative p-8">
                    <div className="text-center mb-6">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-accent p-0.5">
                        <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                          <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {category.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                        {category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skillList.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs px-3 py-1 bg-background/60 text-foreground/90 border border-border/50 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-105"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
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

export default About;