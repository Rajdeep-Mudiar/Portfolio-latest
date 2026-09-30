import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-border-subtle/80 bg-dark-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand & Subtitle */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-accent-blue" />
              <span className="font-extrabold text-sm tracking-wider text-white">
                RAJDEEP MUDIAR
              </span>
            </div>
            <p className="text-xs text-text-muted">
              Building intelligent systems, one project at a time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-dark-900 border border-border-subtle text-text-muted hover:text-white hover:border-accent-blue/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-dark-900 border border-border-subtle text-text-muted hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="p-2.5 rounded-lg bg-dark-900 border border-border-subtle text-text-muted hover:text-accent-cyan hover:border-accent-cyan/40 transition-colors"
              aria-label="Email Rajdeep"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-dark-900 border border-border-subtle text-text-muted hover:text-white hover:border-accent-blue/40 transition-colors cursor-pointer"
              aria-label="Scroll to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 border-t border-border-subtle/40 flex flex-col sm:flex-row items-center justify-between text-xs text-text-subtle gap-2 text-center">
          <p>© 2026 Rajdeep Mudiar. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with</span>
            <span className="text-accent-cyan font-semibold">React</span>
            <span>+</span>
            <span className="text-accent-blue font-semibold">Tailwind CSS</span>
            <span>+</span>
            <span className="text-accent-purple font-semibold">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
