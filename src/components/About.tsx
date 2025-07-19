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

          {/* Bio */}
          <div className="mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">
                      Product Manager & Data Science Student
                    </h3>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      Currently pursuing B.S. in Data Science from IIT Madras while working as a Product Associate 
                      at ConveGenius.AI, where I collaborate with government partnerships and build AI-powered 
                      educational solutions.
                    </p>
                    <p className="text-foreground/80 leading-relaxed">
                      As the Founder & Product Owner of AceGrade, I successfully scaled the platform to over 
                      100K users, implementing data-driven strategies that resulted in significant growth in 
                      user retention and engagement.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {highlights.map((highlight, index) => (
                      <div key={index} className="text-center p-4 rounded-lg bg-background/30">
                        <highlight.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                        <h4 className="font-semibold text-sm text-foreground">{highlight.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{highlight.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">Skills & Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-4 text-foreground text-center">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="text-xs bg-background/40 text-foreground/80 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
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