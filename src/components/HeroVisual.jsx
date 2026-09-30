import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Database, Network, Sparkles, Terminal, Code, GitBranch, Layers, ShieldCheck } from 'lucide-react';

const techNodes = [
  { label: 'RAG & Vector Search', icon: Network, color: 'text-accent-blue', bg: 'bg-accent-blue/10', border: 'border-accent-blue/30', x: '10%', y: '18%' },
  { label: 'Generative AI & LLMs', icon: Sparkles, color: 'text-accent-purple', bg: 'bg-accent-purple/10', border: 'border-accent-purple/30', x: '62%', y: '12%' },
  { label: 'Full-Stack & APIs', icon: Layers, color: 'text-accent-cyan', bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/30', x: '72%', y: '68%' },
  { label: 'Quantum QKD Comms', icon: ShieldCheck, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', x: '15%', y: '72%' },
];

export default function HeroVisual() {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % techNodes.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center select-none">
      {/* Outer ambient glow circles */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-accent-blue/10 via-accent-purple/10 to-transparent blur-2xl animate-pulse-slow pointer-events-none" />
      
      {/* Orbital rings */}
      <div className="absolute inset-8 rounded-full border border-border-subtle/40 border-dashed animate-spin-slow pointer-events-none" />
      <div className="absolute inset-20 rounded-full border border-accent-blue/15 pointer-events-none" />
      
      {/* Central Core AI Hub */}
      <div className="relative z-10 w-32 h-32 rounded-3xl glass-card flex flex-col items-center justify-center p-3 text-center border-accent-blue/40 shadow-glow-blue/30 group hover:scale-105 transition-all duration-300">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center shadow-lg shadow-accent-blue/30 mb-2">
          <Brain className="w-6 h-6 text-white animate-pulse" />
        </div>
        <span className="text-[11px] font-mono font-bold tracking-wider text-white">AI / CORE</span>
        <span className="text-[9px] font-mono text-accent-cyan">NEURAL SYSTEM</span>
      </div>

      {/* Interactive Floating Nodes */}
      {techNodes.map((node, index) => {
        const IconComponent = node.icon;
        const isActive = activeNode === index;
        return (
          <div
            key={node.label}
            style={{ top: node.y, left: node.x }}
            className={`absolute z-20 transition-all duration-500 cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
              isActive ? 'scale-110' : 'scale-95 opacity-80 hover:opacity-100 hover:scale-100'
            }`}
            onClick={() => setActiveNode(index)}
          >
            <div className={`px-3 py-2 rounded-xl backdrop-blur-md border ${node.bg} ${node.border} shadow-lg flex items-center gap-2 ${isActive ? 'ring-1 ring-white/30' : ''}`}>
              <IconComponent className={`w-4 h-4 ${node.color}`} />
              <span className="text-xs font-semibold text-white whitespace-nowrap">
                {node.label}
              </span>
            </div>
          </div>
        );
      })}

      {/* Code Snippet Floating Badge */}
      <div className="absolute -bottom-2 right-4 z-20 glass-card px-3.5 py-2.5 rounded-xl border-accent-purple/30 text-[11px] font-mono text-text-muted shadow-glass flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>RAG Pipeline: <span className="text-emerald-400 font-semibold">Ready</span></span>
      </div>

      {/* Model Arch Badge */}
      <div className="absolute -top-2 left-4 z-20 glass-card px-3 py-1.5 rounded-lg border-accent-blue/30 text-[10px] font-mono text-accent-cyan shadow-glass flex items-center gap-1.5">
        <Terminal className="w-3.5 h-3.5" />
        <span>LangChain + FAISS</span>
      </div>
    </div>
  );
}
