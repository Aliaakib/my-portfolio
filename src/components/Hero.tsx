import React from "react";
import { Download, Eye, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-20 pt-24"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-6 animate-fade-in text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                Hi, I'm <span className="text-primary">Bukhari</span>
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                Aliaakib
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground mb-2">
              IT Engineering Student & Full Stack Developer
            </p>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
              A passionate and enthusiastic IT Engineering student with good
              knowledge. Passionate about using technology to solve real world
              problems and contributing to innovative projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
              {/* ✅ Download CV Button with working download */}
              <a
                href="/Aliaakib_RESUME.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>

              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 w-full sm:w-auto"
              >
                <Eye className="mr-2 h-4 w-4" />
                View Projects
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center animate-scale-in order-1 lg:order-2">
            <div className="relative">
              <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary/60 p-1">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="/lovable-uploads/d57bc0fb-41da-47df-b2f4-4c94a2eea3a1.png"
                    alt="Bukhari Aliaakib"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-16 h-16 lg:w-24 lg:h-24 bg-primary rounded-full flex items-center justify-center animate-pulse">
                <span className="text-lg lg:text-2xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-12 lg:mt-16 animate-fade-in">
          <div className="bg-card/50 backdrop-blur-sm p-4 lg:p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="p-2 lg:p-3 bg-primary rounded-lg">
                <MapPin className="h-5 w-5 lg:h-6 lg:w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-sm lg:text-base text-card-foreground">
                  Location
                </h3>
                <p className="text-xs lg:text-sm text-muted-foreground">
                  Ahmedabad, India
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm p-4 lg:p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="p-2 lg:p-3 bg-primary rounded-lg">
                <Mail className="h-5 w-5 lg:h-6 lg:w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-sm lg:text-base text-card-foreground">
                  Email
                </h3>
                <p className="text-xs lg:text-sm text-muted-foreground break-all">
                  aliaakibbukhari1@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm p-4 lg:p-6 rounded-xl border border-border hover:border-primary transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 lg:space-x-4">
              <div className="p-2 lg:p-3 bg-primary rounded-lg">
                <Phone className="h-5 w-5 lg:h-6 lg:w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-sm lg:text-base text-card-foreground">
                  Phone
                </h3>
                <p className="text-xs lg:text-sm text-muted-foreground">
                  6353556477
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
