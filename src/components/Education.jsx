import React from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-dark-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-xs font-mono text-accent-purple uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic <span className="text-gradient-primary">Education</span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-purple to-accent-blue rounded-full mt-3" />
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-border-subtle hover:border-accent-blue/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-accent-blue/15 border border-accent-blue/30 text-accent-blue">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-semibold text-accent-cyan">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1">
                  <span className="text-xs font-mono text-text-subtle flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-accent-purple" />
                    {edu.period}
                  </span>
                  <span className="text-xs text-text-subtle flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </span>
                </div>
              </div>

              {edu.highlights && edu.highlights.length > 0 && (
                <div className="space-y-2 pt-3 border-t border-border-subtle/70">
                  {edu.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-text-muted">
                      <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
