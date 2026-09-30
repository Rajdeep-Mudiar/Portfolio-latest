import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, Trophy, Eye } from 'lucide-react';
import { projectCategories, projectsData } from '../data/projects';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-slate-100/40 dark:bg-dark-900/20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-mono text-accent-cyan uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key <span className="text-gradient-primary">Projects</span> & Innovation
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-text-muted max-w-xl">
            Real-world systems, AI architectures, and hackathon prototypes built with modern full-stack & ML stacks.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full mt-3" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-glow-blue font-semibold scale-105'
                    : 'bg-white dark:bg-dark-900/80 hover:bg-slate-50 dark:hover:bg-dark-850 text-slate-600 dark:text-text-muted hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-border-subtle shadow-sm'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl border border-slate-200 dark:border-border-subtle hover:border-accent-blue/40 group hover:shadow-glow-blue/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 relative overflow-hidden"
              >
                {/* Background ambient corner glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/0 group-hover:bg-accent-blue/10 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Card Meta & Achievement */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                      {project.subCategory || project.category}
                    </span>

                    {project.context && (
                      <span className="text-[11px] font-mono text-slate-400 dark:text-text-subtle">
                        {project.context}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-accent-blue transition-colors mb-2">
                    {project.title}
                  </h3>

                  {/* Achievement Badge */}
                  {project.achievement && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-300 text-xs font-semibold mb-3">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>{project.achievement}</span>
                    </div>
                  )}

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 dark:text-text-muted leading-relaxed mb-5">
                    {project.shortDescription}
                  </p>

                  {/* Tech Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-dark-950/80 border border-slate-200 dark:border-border-subtle/60 text-slate-700 dark:text-text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-dark-950/40 text-slate-400 dark:text-text-subtle">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-border-subtle/60 mt-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-blue hover:text-accent-violet dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.links && project.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white dark:bg-dark-950 border border-slate-200 dark:border-border-subtle text-slate-600 dark:text-text-muted hover:text-slate-900 dark:hover:text-white hover:border-accent-blue/50 hover:bg-slate-50 dark:hover:bg-dark-850 transition-all shadow-sm"
                        title={link.label}
                        aria-label={link.label}
                      >
                        {link.type === 'github' ? (
                          <Github className="w-4 h-4" />
                        ) : (
                          <ExternalLink className="w-4 h-4" />
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal View */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
