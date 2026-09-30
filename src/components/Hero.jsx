import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { profileData } from '../data/profile';
import HeroVisual from './HeroVisual';

export default function Hero() {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for animated roles
  useEffect(() => {
    const currentFullText = profileData.taglines[currentTaglineIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === currentFullText) {
      const pauseTimeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pauseTimeout);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTaglineIndex((prev) => (prev + 1) % profileData.taglines.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentFullText.substring(0, prev.length - 1)
          : currentFullText.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTaglineIndex]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Hero Content */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-accent-blue/10 border border-blue-500/30 dark:border-accent-blue/25 text-xs font-bold text-blue-700 dark:text-accent-blue backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-accent-blue animate-ping" />
              <span>Computer Science Undergrad • Gauhati University</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Hi, I'm <span className="text-gradient-primary">Rajdeep Mudiar</span>.
              </h1>

              {/* Animated Rotating Role */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-3xl font-semibold text-slate-700 dark:text-text-muted font-mono flex items-center">
                  <span className="text-slate-900 dark:text-white font-extrabold">{displayedText}</span>
                  <span className="inline-block w-0.5 h-6 sm:h-8 bg-blue-600 dark:bg-accent-cyan ml-1 animate-pulse" />
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-text-muted max-w-2xl leading-relaxed">
              {profileData.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue via-accent-violet to-accent-purple text-white text-sm font-semibold shadow-glow-blue hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="./rajdeep_mudiar_resume.pdf"
                download="rajdeep_mudiar_resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white dark:bg-dark-900/80 hover:bg-slate-50 dark:hover:bg-dark-850 border border-slate-300 dark:border-border-subtle hover:border-accent-blue/40 text-slate-900 dark:text-text-primary text-sm font-bold shadow-sm hover:shadow-glass transition-all duration-200"
              >
                <Download className="w-4 h-4 text-accent-blue" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-border-subtle/60">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-text-subtle">
                Connect
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white dark:bg-dark-900 border border-slate-200 dark:border-border-subtle text-slate-700 dark:text-text-muted hover:text-slate-950 dark:hover:text-white hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-dark-850 transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white dark:bg-dark-900 border border-slate-200 dark:border-border-subtle text-slate-700 dark:text-text-muted hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-slate-50 dark:hover:bg-dark-850 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-2.5 rounded-lg bg-white dark:bg-dark-900 border border-slate-200 dark:border-border-subtle text-slate-700 dark:text-text-muted hover:text-blue-600 hover:border-blue-500/50 hover:bg-slate-50 dark:hover:bg-dark-850 transition-all shadow-sm"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Hero Visual */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="w-full flex flex-col items-center justify-center pt-8 pb-4 text-slate-500 dark:text-text-subtle animate-bounce">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-xs font-mono font-semibold hover:text-slate-800 dark:hover:text-text-muted transition-colors focus:outline-none"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
