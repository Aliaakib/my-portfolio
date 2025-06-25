import React from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering, Information Technology",
      institution: "Sai Engineering & Technical Institute",
      location: "Ahmedabad IN",
      period: "2022 - 2025",
      cgpa: "8.35",
      status: "Completed",
    },
    {
      degree: "Diploma of Engineering, Computer Engineering",
      institution: "R.C Technical Institute",
      location: "Ahmedabad IN",
      period: "2019 - 2022",
      cgpa: "8.24",
      status: "Completed",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Education
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Academic background and qualifications in Information Technology and
            Computer Engineering
          </p>
        </div>

        <div className="space-y-6 lg:space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 mb-4 lg:mb-0 flex-1">
                  <div className="p-2 sm:p-3 bg-primary rounded-xl w-fit">
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-card-foreground mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="text-xs sm:text-sm">
                          {edu.location}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="text-xs sm:text-sm">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row lg:flex-col lg:items-end space-x-4 lg:space-x-0 lg:space-y-2 mt-4 lg:mt-0">
                  <div className="bg-primary text-primary-foreground px-3 sm:px-4 py-2 rounded-xl text-center">
                    <div className="text-xs sm:text-sm font-medium">CGPA</div>
                    <div className="text-lg sm:text-xl font-bold">
                      {edu.cgpa}
                    </div>
                  </div>
                  <span
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold self-center lg:self-auto ${
                      edu.status === "Current"
                        ? "bg-green-600 text-white"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {edu.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
