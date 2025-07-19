import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-background/10 opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Profile Image */}
          <div className="relative inline-block">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary to-accent p-1 mt-4">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold bg-primary-gradient bg-clip-text text-transparent">
                SK
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2">
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                <MapPin className="w-3 h-3 mr-1" />
                Gujarat, India
              </Badge>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
              Sumit Kumar
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground space-y-2">
              <p className="animate-fade-in">Product Associate @ ConveGenius.AI</p>
              <p className="animate-fade-in">IIT Madras • Data Science Student</p>
            </div>

            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Data-driven Product Manager building AI-powered educational platforms. 
              Passionate about scaling products and creating user-centric solutions that drive growth and impact.
            </p>

            {/* Skills Preview */}
            <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
              {["Product Management", "Python", "Data Analytics", "JIRA", "Figma"].map((skill) => (
                <Badge key={skill} variant="outline" className="bg-background/20 backdrop-blur-sm">
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button variant="hero" size="xl" className="group">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
              <Button variant="glass" size="xl" className="group">
                <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 animate-fade-in">
              <a 
                href="https://github.com/repo-sumit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/in-sumit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
