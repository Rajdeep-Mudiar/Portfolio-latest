import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, ExternalLink, Activity, Code2, Sparkles, BookMarked } from 'lucide-react';
import { profileData } from '../data/profile';

const fallbackRepos = [
  {
    name: 'SahayaKISSAN',
    description: 'AI-powered agriculture assistance platform focused on crop health monitoring with computer vision.',
    language: 'Python',
    languageColor: '#3572A5',
    url: 'https://github.com/Rajdeep-Mudiar/SahayaKISSAN',
  },
  {
    name: 'dev-fellowship-assignments',
    description: 'Full Stack AI Engineering Fellowship assignments, interactive web applications, and backend systems.',
    language: 'JavaScript',
    languageColor: '#F7DF1E',
    url: 'https://github.com/Rajdeep-Mudiar/dev-fellowship-assignments/tree/main',
  },
  {
    name: 'CodingBlocks-Assignments',
    description: 'Generative AI workflows, NLP models, prompt architectures, and machine learning assignments.',
    language: 'Jupyter Notebook',
    languageColor: '#DA5B0B',
    url: 'https://github.com/Rajdeep-Mudiar/CodingBlocks-Assignments/tree/main',
  },
  {
    name: 'Portfolio-latest',
    description: 'Modern, interactive personal developer portfolio website built with React, Vite, and Tailwind CSS.',
    language: 'JavaScript',
    languageColor: '#3B82F6',
    url: 'https://github.com/Rajdeep-Mudiar/Portfolio-latest',
  },
];

// Activity squares visualization data
const generateActivitySquares = () => {
  const levels = [0, 1, 2, 3, 4];
  const squares = [];
  for (let i = 0; i < 52; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      // Deterministic realistic pattern for clean representation
      const val = (i * 7 + j) % 5;
      week.push(val);
    }
    squares.push(week);
  }
  return squares;
};

const activityGrid = generateActivitySquares();

const levelColors = {
  0: 'bg-dark-950/80 border-border-subtle/30',
  1: 'bg-accent-blue/30 border-accent-blue/40',
  2: 'bg-accent-blue/50 border-accent-blue/60',
  3: 'bg-accent-purple/70 border-accent-purple/80',
  4: 'bg-accent-cyan border-accent-cyan',
};

export default function GithubSection() {
  const [repos, setRepos] = useState(fallbackRepos);
  const [userData, setUserData] = useState({
    login: 'Rajdeep-Mudiar',
    public_repos: 4,
    followers: 12,
  });

  useEffect(() => {
    // Safe fetch with fallback
    const fetchGithub = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/Rajdeep-Mudiar');
        if (userRes.ok) {
          const uData = await userRes.json();
          setUserData(uData);
        }
      } catch (err) {
        // Quiet fallback to manual data
      }
    };

    fetchGithub();
  }, []);

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs font-mono text-accent-blue uppercase tracking-wider mb-3">
            <Github className="w-3.5 h-3.5" />
            <span>Open Source</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Code & <span className="text-gradient-primary">GitHub Activity</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-muted max-w-xl">
            Explore public repositories, assignments, and collaborative codebases on GitHub.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full mt-3" />
        </div>

        {/* GitHub Profile Banner */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-border-subtle mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-purple p-[2px]">
              <div className="w-full h-full bg-dark-950 rounded-[14px] flex items-center justify-center">
                <Github className="w-7 h-7 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">
                @{userData.login || 'Rajdeep-Mudiar'}
              </h3>
              <p className="text-xs text-text-muted">
                B.Tech CSE Undergraduate • AI/ML & Full-Stack Developer
              </p>
            </div>
          </div>

          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white text-xs font-semibold shadow-glow-blue hover:opacity-90 transition-all"
          >
            <span>Visit GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Selected Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl border border-border-subtle hover:border-accent-blue/40 group hover:shadow-glow-blue/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <BookMarked className="w-4 h-4 text-accent-blue" />
                    <h4 className="text-base font-bold text-white group-hover:text-accent-blue transition-colors">
                      {repo.name}
                    </h4>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-text-subtle group-hover:text-white transition-colors" />
                </div>

                <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-4">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-text-subtle pt-3 border-t border-border-subtle/50">
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span className="text-text-muted">{repo.language}</span>
                </span>
                <span className="text-[11px] text-accent-cyan">Public Repository</span>
              </div>
            </a>
          ))}
        </div>

        {/* Contribution Graph Mockup Visual */}
        <div className="glass-card p-6 rounded-2xl border border-border-subtle overflow-x-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-accent-cyan" />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                Contribution Activity Overview
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-text-subtle">
              <span>Less</span>
              <span className="w-2.5 h-2.5 rounded-sm bg-dark-950 border border-border-subtle/30" />
              <span className="w-2.5 h-2.5 rounded-sm bg-accent-blue/30" />
              <span className="w-2.5 h-2.5 rounded-sm bg-accent-blue/60" />
              <span className="w-2.5 h-2.5 rounded-sm bg-accent-purple/80" />
              <span className="w-2.5 h-2.5 rounded-sm bg-accent-cyan" />
              <span>More</span>
            </div>
          </div>

          {/* Grid visual */}
          <div className="flex gap-1 justify-between min-w-[600px] py-1">
            {activityGrid.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1">
                {week.map((level, dIdx) => (
                  <div
                    key={dIdx}
                    className={`w-2.5 h-2.5 rounded-[2px] border ${levelColors[level]} transition-colors`}
                    title={`Activity level: ${level}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
