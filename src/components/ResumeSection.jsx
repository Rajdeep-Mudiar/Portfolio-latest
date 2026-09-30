import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';

export default function ResumeSection() {
  return (
    <section className="py-20 relative bg-slate-100/60 dark:bg-dark-900/40 border-y border-slate-200 dark:border-border-subtle/50 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-accent-blue/25 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-glow-blue/10">
          {/* Ambient background glow */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="space-y-3 max-w-xl z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs font-mono text-accent-blue uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Want to know more about my background?
            </h2>

            <p className="text-sm text-slate-600 dark:text-text-muted leading-relaxed">
              Download or view my detailed ATS-friendly resume highlighting technical internships, research experience, competitive hackathons, and software engineering skills.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 z-10 shrink-0 w-full sm:w-auto">
            <a
              href="./resume.pdf"
              download="Rajdeep_Mudiar_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white text-xs sm:text-sm font-semibold shadow-glow-blue hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-dark-950 hover:bg-slate-50 dark:hover:bg-dark-850 border border-slate-200 dark:border-border-subtle hover:border-accent-blue/50 text-slate-800 dark:text-text-primary text-xs sm:text-sm font-semibold transition-all shadow-sm"
            >
              <ExternalLink className="w-4 h-4 text-accent-blue dark:text-accent-cyan" />
              <span>View Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
