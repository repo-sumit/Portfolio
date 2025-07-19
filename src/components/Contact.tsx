import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = {
    email: "inbox.sumitt@gmail.com",
    phone: "+91 95464 88385",
    location: "Gandhinagar, Gujarat, India",
    timezone: "IST (UTC+5:30)"
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/repo-sumit",
      icon: Github,
      username: "@repo-sumit",
      description: "Open source projects and contributions"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/in-sumit",
      icon: Linkedin,
      username: "/in/in-sumit",
      description: "Professional network and career updates"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/txt.sumit/",
      icon: Instagram,
      username: "@txt.sumit",
      description: "Personal insights and behind-the-scenes"
    }
  ];

  const currentStatus = {
    availability: "Open to opportunities",
    interests: ["Product Management", "AI/ML", "Data Science", "EdTech"],
    currentFocus: "Building AI-powered educational platforms at ConveGenius.AI"
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Always excited to discuss product opportunities, data science projects, 
              or innovative ideas. Let's connect and create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            
            {/* Contact Information */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">{contactInfo.location}</p>
                      <p className="text-sm text-muted-foreground">{contactInfo.timezone}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border/50">
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href={`mailto:${contactInfo.email}`}>
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Current Status & Social */}
            <div className="space-y-6">
              
              {/* Current Status */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-foreground">Current Status</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Badge variant="default" className="mb-2 bg-accent">
                        {currentStatus.availability}
                      </Badge>
                      <p className="text-sm text-foreground/80">{currentStatus.currentFocus}</p>
                    </div>

                    <div>
                      <p className="font-medium text-foreground mb-2">Interested in:</p>
                      <div className="flex flex-wrap gap-2">
                        {currentStatus.interests.map((interest, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 text-foreground">Connect Online</h3>
                  
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-background/30 transition-all duration-200 group"
                      >
                        <div className="w-10 h-10 bg-background/50 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <social.icon className="w-5 h-5 text-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-foreground">{social.name}</p>
                            <ExternalLink className="w-3 h-3 text-muted-foreground" />
                          </div>
                          <p className="text-sm text-muted-foreground">{social.username}</p>
                          <p className="text-xs text-muted-foreground">{social.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Ready to collaborate?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Whether it's a product opportunity, data science project, or just a chat about tech, 
                  I'd love to hear from you!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="hero" size="lg" asChild>
                    <a href={`mailto:${contactInfo.email}?subject=Let's Collaborate!`}>
                      Start a Conversation
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href={contactInfo.phone.startsWith('+') ? `https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, '')}` : '#'}>
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;