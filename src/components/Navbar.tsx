
import React, { useState } from 'react';
import { Menu, X, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme, Theme } from '@/contexts/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const themes = [
    { name: 'Blue Dark', value: 'blue' as Theme, color: 'bg-blue-600' },
    { name: 'Light', value: 'light' as Theme, color: 'bg-gray-100' },
    { name: 'Dark Black', value: 'dark' as Theme, color: 'bg-gray-900' },
  ];

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsThemeMenuOpen(false);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo/Name */}
          <div className="flex items-center space-x-2">
            <h1 className="text-lg sm:text-xl font-bold text-foreground">
              BUKHARI ALIAAKIB
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Theme Toggle */}
            <div className="relative">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="flex items-center space-x-1 sm:space-x-2 h-8 sm:h-9 px-2 sm:px-3"
              >
                <Palette className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline text-xs sm:text-sm">Theme</span>
              </Button>
              
              {isThemeMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 sm:w-48 bg-background border border-border rounded-md shadow-lg py-2 z-50">
                  {themes.map((themeOption) => (
                    <button
                      key={themeOption.value}
                      onClick={() => handleThemeChange(themeOption.value)}
                      className={`w-full px-3 sm:px-4 py-2 text-left hover:bg-accent transition-colors duration-200 flex items-center space-x-2 sm:space-x-3 ${
                        theme === themeOption.value ? 'bg-accent' : ''
                      }`}
                    >
                      <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${themeOption.color} border border-border`}></div>
                      <span className="text-foreground text-xs sm:text-sm">{themeOption.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden h-8 sm:h-9 w-8 sm:w-9 p-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-3 w-3 sm:h-4 sm:w-4" /> : <Menu className="h-3 w-3 sm:h-4 sm:w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 text-sm"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
