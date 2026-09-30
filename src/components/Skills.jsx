import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2, FileCode, Layers, Palette, Brain, Cpu, Sparkles, MessageSquareText,
  Eye, SmilePlus, Network, Workflow, DatabaseZap, SearchCheck, SlidersHorizontal,
  Clock, Search, Compass, Server, Zap, LineChart, Atom, Boxes, LayoutDashboard,
  Share2, Laptop, Database, GitBranch, Github, Plug, Lock, Binary, KeyRound,
  BookOpen, FileText, BarChart3, Gauge
} from 'lucide-react';
import { skillCategories, skillsData } from '../data/skills';

// Icon Map lookup
const iconMap = {
  Code2, FileCode, Layers, Palette, Brain, Cpu, Sparkles, MessageSquareText,
  Eye, SmilePlus, Network, Workflow, DatabaseZap, SearchCheck, SlidersHorizontal,
  Clock, Search, Compass, Server, Zap, LineChart, Atom, Boxes, LayoutDashboard,
  Share2, Laptop, Database, GitBranch, Github, Plug, Lock, Binary, KeyRound,
  BookOpen, FileText, BarChart3, Gauge
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-slate-100/60 dark:bg-dark-900/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-xs font-mono text-accent-purple uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical <span className="text-gradient-primary">Skills</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-text-muted max-w-xl">
            Hands-on technologies and methodologies used across AI systems, full-stack engineering, and quantum research.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full mt-3" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {skillCategories.map((category) => {
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

        {/* Animated Skill Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card p-3.5 rounded-xl border border-slate-200 dark:border-border-subtle hover:border-accent-blue/40 group hover:shadow-glow-blue/20 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-dark-950/70 border border-slate-200 dark:border-border-subtle text-accent-blue group-hover:text-accent-cyan group-hover:border-accent-cyan/30 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-text-subtle px-1.5 py-0.5 rounded bg-slate-100 dark:bg-dark-950/60 border border-slate-200/80 dark:border-border-subtle/50">
                      {skill.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white group-hover:text-accent-blue transition-colors line-clamp-2">
                      {skill.name}
                    </h3>
                    <p className="text-[10px] font-mono text-slate-500 dark:text-text-muted mt-1 truncate">
                      {skill.category}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
