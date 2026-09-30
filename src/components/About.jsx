import React from 'react';
import { GraduationCap, Brain, Code, Microscope, Trophy, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

const focusAreas = [
  {
    icon: Brain,
    title: "AI / ML & Generative AI",
    desc: "Retrieval-Augmented Generation (RAG), vector indexing, multi-query retrieval, Cross-Encoder reranking, and NLP workflows.",
    accent: "from-blue-500/20 to-cyan-500/20 border-accent-blue/30 text-accent-blue"
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    desc: "Crafting end-to-end web applications with React.js, Node.js, Express, FastAPI, REST APIs, and modern responsive UI.",
    accent: "from-purple-500/20 to-pink-500/20 border-accent-purple/30 text-accent-purple"
  },
  {
    icon: Microscope,
    title: "Scientific Research",
    desc: "Investigating Quantum Key Distribution (QKD) transmission benchmarking and specialized technical document retrieval systems.",
    accent: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400"
  },
  {
    icon: Trophy,
    title: "Hackathons & Innovation",
    desc: "Semi-finalist at ET-AI Hackathon 2026 (Top 6,000 / 55k+ teams) and active participant in SIH 2024 & Guenerk hackathons.",
    accent: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400"
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs font-mono text-accent-blue uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full mt-3" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Bio card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-border-subtle relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Rajdeep Mudiar</h3>
                  <div className="flex items-center gap-1.5 text-xs text-text-muted">
                    <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>{profileData.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-text-muted leading-relaxed mb-4">
                {profileData.aboutDetailed}
              </p>

              <div className="space-y-2.5 pt-3 border-t border-border-subtle">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-text-muted">
                  <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Degree:</strong> B.Tech in Computer Science Engineering, Gauhati University (2024–2028)
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-text-muted">
                  <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Core Focus:</strong> AI/ML, Generative AI, RAG architectures, and Full-Stack Engineering
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-text-muted">
                  <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Research Orientation:</strong> Quantum Key Distribution (QKD) & Semantic Document Retrieval
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {profileData.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card p-3.5 rounded-xl border-border-subtle/80 hover:border-accent-blue/30 transition-colors"
                >
                  <div className="text-xs font-mono font-bold text-accent-cyan uppercase tracking-wide mb-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-text-muted leading-snug">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Core Areas Focus Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusAreas.map((area) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={area.title}
                  className="glass-card p-5 rounded-2xl border-border-subtle hover:border-accent-blue/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${area.accent} border flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">
                      {area.title}
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
