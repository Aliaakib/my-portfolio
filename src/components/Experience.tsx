import React from "react";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "React Developer Intern",
      company: "E-Procurement Technologies Ltd",
      location: "Ahmedabad IN",
      period: "01/2025 - 04/2025",
      description:
        "Worked as a React Developer Intern at E-Procurement Technologies, contributed to a live company project. Gained hands-on experience in UI design, API integration, responsive web development, and functionality enhancements to build dynamic and user-friendly applications.",
      isActive: false,
    },
    {
      title: "Angular.js Intern",
      company: "14 Node IT Pvt Ltd",
      location: "Ahmedabad IN",
      period: "06/2024 - 07/2024",
      description:
        "Completed a 15-days basics of Angular.js Internship at 14 Node Pvt Ltd. as part of the GTU mandatory internship program. Gained hands-on experience in front-end development enhancing skills in Angular.js.",
      isActive: false,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Professional experience and internships in web development and
            software engineering
          </p>
        </div>

        <div className="space-y-6 lg:space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 lg:mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4 lg:mb-0">
                  <div className="p-2 sm:p-3 bg-primary rounded-xl w-fit">
                    <Building className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-primary">
                      {exp.title}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-card-foreground">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 lg:items-end">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-xs sm:text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-xs sm:text-sm">{exp.location}</span>
                  </div>
                  {exp.isActive && (
                    <span className="bg-green-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold w-fit">
                      Current
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
