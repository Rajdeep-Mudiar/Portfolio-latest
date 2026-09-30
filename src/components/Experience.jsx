import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronDown, ExternalLink, Github, UserCheck } from 'lucide-react';
import { experienceData } from '../data/experience';

export default function Experience() {
  const [expandedIds, setExpandedIds] = useState(['dev-weekends', 'iit-guwahati']);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs font-mono text-accent-blue uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work <span className="text-gradient-primary">Experience</span> & Internships
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-text-muted max-w-xl">
            Hands-on internships and research fellowships across AI, full-stack systems, and quantum communications.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full mt-3" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-border-subtle/70 ml-4 sm:ml-8 lg:ml-32 space-y-10">
          {experienceData.map((exp) => {
            const isExpanded = expandedIds.includes(exp.id);
            return (
              <div key={exp.id} className="relative pl-6 sm:pl-10 group">
                {/* Timeline Dot Icon */}
                <div
                  className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    isExpanded
                      ? 'bg-white dark:bg-dark-950 border-accent-blue text-accent-blue shadow-glow-blue/40 scale-110'
                      : 'bg-slate-100 dark:bg-dark-900 border-slate-300 dark:border-border-subtle text-slate-500 dark:text-text-muted group-hover:border-accent-blue/60 group-hover:text-accent-blue dark:group-hover:text-white'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Experience Card */}
                <div
                  className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'border-accent-blue/40 shadow-glow-blue/10'
                      : 'border-slate-200 dark:border-border-subtle hover:border-slate-300 dark:hover:border-border-subtle/80'
                  }`}
                >
                  {/* Card Header (Clickable Accordion) */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                          {exp.type}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-text-subtle font-mono flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-accent-cyan" />
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-accent-blue transition-colors">
                        {exp.position}
                      </h3>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600 dark:text-text-muted">
                        <span className="font-semibold text-slate-800 dark:text-text-primary">
                          {exp.organization}
                        </span>
                        {exp.supervisor && (
                          <span className="text-xs text-accent-purple font-medium flex items-center gap-1">
                            <UserCheck className="w-3.5 h-3.5" />
                            Under: {exp.supervisor}
                          </span>
                        )}
                        <span className="text-xs text-slate-500 dark:text-text-subtle flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <span className="text-xs font-mono text-slate-400 dark:text-text-subtle hidden sm:inline">
                        {isExpanded ? 'Collapse' : 'Expand'}
                      </span>
                      <div
                        className={`p-1.5 rounded-lg bg-slate-100 dark:bg-dark-950/80 border border-slate-200 dark:border-border-subtle text-slate-500 dark:text-text-muted transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-accent-blue border-accent-blue/40' : ''
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Body */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="border-t border-slate-200 dark:border-border-subtle/80 px-5 sm:px-6 pb-6 pt-4 space-y-5 bg-slate-50/50 dark:bg-dark-950/40"
                      >
                        {/* Description */}
                        <p className="text-sm text-slate-600 dark:text-text-muted leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Key Highlights */}
                        {exp.highlights && exp.highlights.length > 0 && (
                          <div className="space-y-2">
                            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-text-subtle">
                              Key Highlights & Contributions:
                            </h4>
                            <ul className="space-y-1.5">
                              {exp.highlights.map((h, i) => (
                                <li key={i} className="text-xs sm:text-sm text-slate-600 dark:text-text-muted flex items-start gap-2">
                                  <span className="text-accent-blue mt-1">•</span>
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technologies */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-text-subtle">
                            Technologies & Tools:
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs font-mono px-2.5 py-1 rounded-md bg-white dark:bg-dark-900 border border-slate-200 dark:border-border-subtle text-slate-800 dark:text-text-primary shadow-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        {exp.links && exp.links.length > 0 && (
                          <div className="flex flex-wrap gap-3 pt-2">
                            {exp.links.map((link, lIndex) => (
                              <a
                                key={lIndex}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-white dark:bg-dark-900 hover:bg-slate-50 dark:hover:bg-dark-850 border border-accent-blue/30 text-accent-blue hover:text-accent-violet dark:hover:text-white transition-colors shadow-sm"
                              >
                                {link.type === 'github' ? (
                                  <Github className="w-3.5 h-3.5" />
                                ) : (
                                  <ExternalLink className="w-3.5 h-3.5" />
                                )}
                                <span>{link.label}</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
