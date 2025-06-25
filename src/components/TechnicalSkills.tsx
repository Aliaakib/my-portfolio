import React from "react";
import { Code, Database, Layers, Palette, Zap, Globe } from "lucide-react";

const TechnicalSkills = () => {
  const skills = [
    { name: "React.js", icon: Code, level: 80 },
    { name: "HTML/CSS", icon: Globe, level: 95 },
    { name: "JavaScript", icon: Code, level: 85 },
    { name: "MongoDB", icon: Database, level: 50 },
    { name: "Express.js", icon: Layers, level: 60 },
    { name: "Node.js", icon: Zap, level: 60 },
    { name: "Angular.js", icon: Code, level: 20 },
    { name: "UI/UX Design", icon: Palette, level: 45 },
    { name: "API Integration", icon: Layers, level: 80 },
    { name: "Figma", icon: Palette, level: 75 },
  ];

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 lg:py-20 bg-background text-foreground"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Proficient in modern web technologies and frameworks with hands-on
            experience in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-card/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="p-1.5 sm:p-2 bg-primary rounded-lg">
                    <skill.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-primary font-semibold text-sm sm:text-base">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-muted rounded-full h-1.5 sm:h-2">
                <div
                  className="bg-gradient-to-r from-primary to-primary/60 h-1.5 sm:h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
