import React from "react";
import {
  ExternalLink,
  Github,
  Code,
  ShoppingCart,
  Gavel,
  Music,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Project Management System (PMS)",
      description:
        "Built a system to streamline and manage academic and internal project workflows.",
      icon: Code,
      technologies: ["React.js", "MySQL", "API Integration", "Java"],
      link: "#",
    },
    {
      title: "Ecommerce Website (Shopsy)",
      description:
        "Designed and developed a responsive e-commerce front end using React.js.",
      icon: ShoppingCart,
      technologies: ["React.js", "CSS", "Responsive Design"],
      link: "#",
    },
    {
      title: "Auction Platform UI",
      description:
        "Developed a functional UI for an online auction platform, focusing on user experience and client needs.",
      icon: Gavel,
      technologies: ["HTML", "CSS", "Php"],
      link: "#",
    },
    {
      title: "Expensify (MERN Stack)",
      description:
        "A robust web application built with MongoDB, Express.js, React.js, and Node.js to streamline records and expense tracking.",
      icon: Music,
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      link: "#",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Projects
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            A showcase of my latest work and projects demonstrating my skills in
            full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-primary rounded-xl group-hover:bg-primary/90 transition-colors duration-300">
                  <project.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground p-2 h-8 w-8"
                  >
                    <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground p-2 h-8 w-8"
                  >
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 text-card-foreground">
                {project.title}
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-secondary text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
