import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, MessageSquare, MapPin, ArrowUpRight, Sparkles } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs font-mono text-accent-blue uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's <span className="text-gradient-primary">Build Something</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-text-muted max-w-xl">
            Interested in AI, full-stack development, research, or building something useful? Feel free to reach out directly through any channel below.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full mt-3" />
        </div>

        {/* Contact Hub Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Email Card */}
          <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-border-subtle hover:border-accent-blue/40 group hover:shadow-glow-blue/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-accent-blue/15 text-accent-blue">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-dark-900 hover:bg-slate-200 dark:hover:bg-dark-850 text-slate-600 dark:text-text-muted hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-border-subtle transition-colors shadow-sm cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <span className="text-[11px] font-mono text-slate-400 dark:text-text-subtle uppercase tracking-wider">
                Direct Email
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 break-all group-hover:text-accent-blue transition-colors">
                {profileData.email}
              </h3>
              <p className="text-xs text-slate-500 dark:text-text-muted mt-2">
                {copied ? '✓ Copied to clipboard!' : 'Click the button above to copy or button below to write.'}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200 dark:border-border-subtle/60">
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-blue hover:text-accent-violet dark:hover:text-white transition-colors"
              >
                <span>Compose Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-border-subtle hover:border-[#0A66C2]/40 group hover:shadow-glow-blue/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#0A66C2]/15 text-[#0A66C2]">
                  <Linkedin className="w-5 h-5" />
                </div>
              </div>

              <span className="text-[11px] font-mono text-slate-400 dark:text-text-subtle uppercase tracking-wider">
                LinkedIn Profile
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 group-hover:text-[#0A66C2] transition-colors">
                Rajdeep Mudiar
              </h3>
              <p className="text-xs text-slate-500 dark:text-text-muted mt-2">
                Connect for professional inquiries, software engineering roles, and networking.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200 dark:border-border-subtle/60">
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A66C2] hover:text-[#004182] dark:hover:text-white transition-colors"
              >
                <span>View LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-border-subtle hover:border-accent-purple/40 group hover:shadow-glow-purple/20 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-accent-purple/15 text-accent-purple">
                  <Github className="w-5 h-5" />
                </div>
              </div>

              <span className="text-[11px] font-mono text-slate-400 dark:text-text-subtle uppercase tracking-wider">
                GitHub Repositories
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mt-1 group-hover:text-accent-purple transition-colors">
                @Rajdeep-Mudiar
              </h3>
              <p className="text-xs text-slate-500 dark:text-text-muted mt-2">
                Explore open source repositories, projects, and machine learning assignments.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200 dark:border-border-subtle/60">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-purple hover:text-accent-violet dark:hover:text-white transition-colors"
              >
                <span>View GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Location & Availability Footer Note */}
        <div className="glass-card p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-text-muted">
            <MapPin className="w-4 h-4 text-accent-blue dark:text-accent-cyan shrink-0" />
            <span>Based in <strong>{profileData.location}</strong></span>
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-text-muted">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open to AI/ML & Software Engineering opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
