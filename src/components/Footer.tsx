import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent p-0.5">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      SK
                    </span>
                  </div>
                </div>
                <span className="font-semibold text-foreground">Sumit Kumar</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Product Associate building AI-powered educational platforms. 
                Data Science student at IIT Madras passionate about creating user-centric solutions.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Product Management</Badge>
                <Badge variant="outline" className="text-xs">Data Science</Badge>
                <Badge variant="outline" className="text-xs">AI/ML</Badge>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About
                </a>
                <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Experience
                </a>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Projects
                </a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </a>
                <a 
                  href="https://github.com/repo-sumit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/in-sumit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Get In Touch</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:inbox.sumitt@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  inbox.sumitt@gmail.com
                </a>
                <p className="text-muted-foreground text-sm">
                  📍 Gandhinagar, Gujarat, India
                </p>
                <p className="text-muted-foreground text-sm">
                  🕒 IST (UTC+5:30)
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/repo-sumit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-background transition-all"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/in-sumit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-background transition-all"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>© {currentYear} Sumit Kumar. Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>using React & Tailwind CSS</span>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/30">
                  Open to opportunities
                </Badge>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;