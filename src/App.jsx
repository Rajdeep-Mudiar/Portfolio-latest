import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-slate-50 dark:bg-dark-950 text-slate-900 dark:text-text-primary selection:bg-accent-blue/30 selection:text-white transition-colors duration-300">
        {/* Dynamic Background Effects */}
        <BackgroundEffects />

        {/* Subtle Desktop Cursor Glow */}
        <CustomCursor />

        {/* Sticky Navigation Bar with Theme Toggle */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Hackathons />
          <ResumeSection />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
