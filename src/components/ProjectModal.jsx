import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Trophy, Calendar, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 dark:bg-dark-950/80 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-white dark:bg-dark-900 border border-slate-200 dark:border-border-subtle/90 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden text-left"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Ambient header glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent-blue/15 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 dark:bg-dark-950/80 hover:bg-slate-200 dark:hover:bg-dark-850 text-slate-600 dark:text-text-muted hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-border-subtle transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-2 pr-8 mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-accent-blue/15 text-accent-blue border border-accent-blue/30">
                {project.subCategory || project.category}
              </span>
              {project.date && (
                <span className="text-xs text-slate-500 dark:text-text-subtle font-mono flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.date}
                </span>
              )}
            </div>

            <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {project.title}
            </h3>

            {project.context && (
              <p className="text-xs sm:text-sm font-medium text-accent-purple">
                Context: {project.context} {project.team ? `• Team ${project.team}` : ''}
              </p>
            )}

            {project.achievement && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-600 dark:text-amber-300 text-xs font-semibold mt-1">
                <Trophy className="w-3.5 h-3.5 shrink-0" />
                <span>{project.achievement}</span>
              </div>
            )}
          </div>

          {/* Modal Content */}
          <div className="space-y-6">
            {/* Description */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-text-subtle mb-2">
                Overview & Architecture:
              </h4>
              <p className="text-sm text-slate-600 dark:text-text-muted leading-relaxed">
                {project.description || project.shortDescription}
              </p>
            </div>

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-text-subtle mb-2.5">
                  Key Technical Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-text-muted bg-slate-50 dark:bg-dark-950/60 p-2.5 rounded-lg border border-slate-200 dark:border-border-subtle/50">
                      <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-text-subtle mb-2">
                Technologies & Tools:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-dark-950 border border-slate-200 dark:border-border-subtle text-slate-800 dark:text-text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links & CTA */}
            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-3 border-t border-slate-200 dark:border-border-subtle/70">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white text-xs font-semibold shadow-glow-blue hover:opacity-90 transition-all"
                  >
                    {link.type === 'github' ? (
                      <Github className="w-4 h-4" />
                    ) : (
                      <ExternalLink className="w-4 h-4" />
                    )}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
