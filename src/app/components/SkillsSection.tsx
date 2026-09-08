'use client';

import React, { useEffect, useRef } from 'react';
import { skillCategories } from '@/data/portfolioData';

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef?.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer?.observe(section);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="reveal-blur inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted mb-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Skills</span>
            </div>
            <h2 className="text-section-title font-bold tracking-tight">
              My <span className="text-muted-foreground">Skills</span>
            </h2>
          </div>
          <p className="reveal-blur text-muted-foreground text-sm max-w-xs font-mono" style={{ transitionDelay: '0.1s' }}>
            // Languages · Frameworks · Data · Tools
          </p>
        </div>

        {/* Skills grid */}
        <div className="stagger-children grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-border items-start">
          {skillCategories?.map(category => (
            <div
              key={category?.label}
              className="bg-background p-8 hover:bg-muted/40 transition-colors duration-300 group border-r border-border last:border-r-0"
            >
              <div className="mb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-primary">
                  {category?.label}
                </span>
                <div className="h-px w-8 bg-primary mt-2 group-hover:w-full transition-all duration-500 origin-left" />
              </div>
              <div className="flex flex-col gap-2">
                {category?.skills?.map(skill => (
                  <span
                    key={skill}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}