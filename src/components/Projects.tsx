import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, ShoppingCart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Quiz Master - Web Application",
      description: "Full-stack Flask web application with comprehensive admin dashboard, user management, and quiz tracking system.",
      icon: Github,
      color: "text-primary",
      features: [
        "Backend & ORM: Developed using Flask with SQLAlchemy ORM on SQLite, managing users, quizzes, and score records through relational models.",
        "Authentication & Security: Integrated session-based login, role-based access, and secure password hashing using Werkzeug.",
        "Admin Dashboard & CRUD: Enabled full admin control with Jinja2 templates, route-based CRUD operations, and server-side form validation."
      ],
      technologies: ["Flask", "SQLite", "SQLAlchemy", "Werkzeug", "Jinja2", "Python", "HTML/CSS"],
      githubUrl: "https://github.com/repo-sumit/MAD_1",
      liveUrl: "#",
      category: "Web Development"
    },
    {
      title: "Grocery Store - Business Data Analysis",
      description: "Comprehensive data analytics project leveraging Python for business intelligence, forecasting, and inventory optimization.",
      icon: BarChart3,
      color: "text-accent",
      features: [
        "Data Analytics & Visualization: Leveraged Pandas and statsmodels for trend analysis and visualization of seasonal demand patterns.",
        "Sales Forecasting: Applied Linear Regression on time-series data to predict SKU-wise sales, improving inventory planning.",
        "Inventory Optimization: Used ABC analysis and correlation heatmaps to prioritize high-performing SKUs and design cross-selling strategies."
      ],
      technologies: ["Python", "Pandas", "Statsmodels", "Matplotlib", "Linear Regression", "ABC Analysis"],
      fileUrl: "https://repo-sumit.github.io/BDM_Project/",
      presentationUrl: "",
      monitorUrl: "",
      category: "Data Analytics"
    }
  ];

  const certifications = [
    {
      name: "API Fundamentals Student Expert",
      issuer: "Postman",
      credentialUrl: "https://badgr.com/public/assertions/PwUrdjzmQ8y6KSZVCS1YNA?identity__email=chingaarisharma@gmail.com",
      imageUrl: "https://your-image-host.com/certificate1.jpg",

    },
    {
      name: "Google Analytics Certification",
      issuer: "Google Analaytics 4",
      credentialUrl: "https://skillshop.credential.net/5c0521af-78b2-4270-a610-7671c53db187#acc.EUBRxkK3",
      imageUrl: "https://your-image-host.com/certificate1.jpg",

    },
    {
      name: "Product Experimentation Micro-Certification",
      issuer: "Product School",
      credentialUrl: "#",
      imageUrl: "https://your-image-host.com/certificate1.jpg",

    },
    {
      name: "Python (Basic)",
      issuer: "HackerRank",
      credentialUrl: "https://www.hackerrank.com/certificates/iframe/69f1e469c210",
      imageUrl: "https://your-image-host.com/certificate1.jpg",

    },
    {
      name: "SQL (Advance)",
      issuer: "HackerRank",
      credentialUrl: "https://www.hackerrank.com/certificates/48cc3cf310a8d",
      imageUrl: "https://i.ibb.co/PZ6zytbq/SQL-Adv.png",

    },
    {
      name: "SQL (Intermediate)",
      issuer: "HackerRank",
      credentialUrl: "https://www.hackerrank.com/certificates/e106d6175bbd",
      imageUrl: "https://your-image-host.com/certificate1.jpg",

    },
    {
      name: "SQL (Basic)",
      issuer: "HackerRank",
      credentialUrl: "https://www.hackerrank.com/certificates/40a166053c4e",
      imageUrl: "https://your-image-host.com/certificate1.jpg",

    }
  ];
  export default function CertificatesSection() {
  return (
    <div className="certificates-section">
      {certificates.map((cert, idx) => (
        <div key={idx} className="certificate-item">
          <h3>{cert.title}</h3>
          <p>{cert.description}</p>
          {/* Certificate image below each certificate */}
          <img
            src={cert.imageUrl}
            alt={`${cert.title} Image`}
            width={1920}
            height={1080}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      ))}
    </div>
  );
}
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects & Certifications
            </h2>
            <p className="text-lg text-muted-foreground">
              Showcasing technical expertise and continuous learning
            </p>
          </div>

          {/* Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Featured Projects</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/60 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <project.icon className={`w-6 h-6 ${project.color}`} />
                          <Badge variant="outline" className="text-xs">
                            {project.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </div>
                      <div className="flex gap-2">
                        {project.githubUrl && project.githubUrl !== "#" && (
                          <Button variant="ghost" size="icon" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && project.liveUrl !== "#" && (
                          <Button variant="ghost" size="icon" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      {project.features.map((feature, i) => (
                        <div key={i} className="text-sm text-foreground/80">
                          <span className="text-primary font-medium">
                            {feature.split(':')[0]}:
                          </span>
                          <span className="ml-1">
                            {feature.split(':').slice(1).join(':')}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs bg-background/40">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-foreground">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/40 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {cert.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {cert.issuer}
                        </p>
                      </div>
                      {cert.credentialUrl && cert.credentialUrl !== "#" && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
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

export default Projects;
