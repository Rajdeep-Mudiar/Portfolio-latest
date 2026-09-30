import React from 'react';
import { Trophy, Calendar, ExternalLink, Flame } from 'lucide-react';
import { hackathonsData } from '../data/hackathons';

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-500 dark:text-amber-400 uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Competitive Innovation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hackathons & <span className="text-gradient-primary">Competitions</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-text-muted max-w-xl">
            High-intensity hackathons where theoretical AI and full-stack solutions were engineered under strict time constraints.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-accent-purple rounded-full mt-3" />
        </div>

        {/* Hackathon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hackathonsData.map((hack) => (
            <div
              key={hack.id}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-border-subtle hover:border-amber-500/30 group hover:shadow-glow-purple/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Glow accent */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/5 group-hover:bg-amber-500/10 rounded-full blur-2xl transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-500 dark:text-amber-400">
                      <Flame className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-300 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                      {hack.badge}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 dark:text-text-subtle flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {hack.date}
                  </span>
                </div>

                {/* Name & Project */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors mb-1">
                  {hack.name}
                </h3>
                <p className="text-sm font-semibold text-accent-blue dark:text-accent-cyan mb-3">
                  Project: {hack.project} {hack.team ? `• Team ${hack.team}` : ''}
                </p>

                {/* Highlight Stat if available */}
                {hack.stat && (
                  <div className="inline-block px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-mono mb-3">
                    ★ {hack.stat}
                  </div>
                )}

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-text-muted leading-relaxed mb-4">
                  {hack.description}
                </p>
              </div>

              {/* Footer details */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-border-subtle/60 mt-4 text-xs">
                <span className="font-mono text-slate-500 dark:text-text-subtle">
                  Focus: <strong className="text-slate-700 dark:text-text-muted">{hack.focus}</strong>
                </span>

                {hack.link && (
                  <a
                    href={hack.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-accent-blue hover:text-accent-violet dark:hover:text-white transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
