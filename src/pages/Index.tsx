
import React from 'react';
import Hero from '@/components/Hero';
import TechnicalSkills from '@/components/TechnicalSkills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import BackgroundEffects from '@/components/BackgroundEffects';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundEffects />
      <Hero />
      <div id="skills">
        <TechnicalSkills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
