import React from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-muted text-foreground py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Let's Work Together
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
            I'm always interested in new opportunities and exciting projects.
          </p>
          {/* ✅ Email Link Button */}
          <a
            href="mailto:aliaakibbukhari1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </a>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
          <div className="text-center animate-fade-in">
            <div className="p-3 sm:p-4 bg-primary rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground text-sm sm:text-base">
              Email
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm break-all px-2">
              aliaakibbukhari1@gmail.com
            </p>
          </div>

          <div
            className="text-center animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="p-3 sm:p-4 bg-primary rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground text-sm sm:text-base">
              Phone
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              6353556477
            </p>
          </div>

          <div
            className="text-center animate-fade-in sm:col-span-2 lg:col-span-1"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="p-3 sm:p-4 bg-primary rounded-full w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
              <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground text-sm sm:text-base">
              Location
            </h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Ahmedabad, India
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12">
          <a
            href="https://www.linkedin.com/in/bukhari-aliaakib-9056581ab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon" className="social-btn">
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </a>

          <a
            href="https://wa.me/916353556477"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon" className="social-btn">
              <FaWhatsapp className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </a>

          <a
            href="https://www.instagram.com/me.aliaakibbukhari"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon" className="social-btn">
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-6 sm:pt-8 border-t border-border">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © 2025 Bukhari Aliaakib. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
