'use client';

import React, { useEffect, useRef } from 'react';
import { projects } from '@/data/portfolioData';
import Icon from '@/components/ui/AppIcon';

export default function ProjectsSection() {
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
      { threshold: 0.08 }
    );
    observer?.observe(section);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="reveal-blur inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted mb-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Projects</span>
          </div>
          <h2 className="text-section-title font-bold tracking-tight">
            Selected <span className="text-muted-foreground">Work</span>
          </h2>
        </div>

        {/* Alternating zigzag rows */}
        <div className="stagger-children flex flex-col gap-0">
          {projects?.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={project?.id}
                className="group border-t border-border hover:bg-muted/20 transition-colors duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${isEven ? '' : 'lg:[direction:rtl]'}`}>
                  {/* Text side */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center gap-5 ${isEven ? '' : 'lg:[direction:ltr]'}`}>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-muted-foreground">
                        {String(idx + 1)?.padStart(2, '0')}
                      </span>
                      {project?.isStudyProject && (
                        <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] font-mono border border-accent/20">
                          Study Project
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project?.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                      {project?.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project?.tags?.map(tag => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-muted text-muted-foreground border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 flex-wrap">
                      <a
                        href={project?.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-xs font-semibold hover:opacity-80 transition-all duration-200 hover:scale-105 active:scale-95"
                      >
                        <Icon name="CodeBracketIcon" size={14} />
                        GitHub
                      </a>
                      {/*
                      <button
                        disabled
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-muted-foreground text-xs font-medium cursor-not-allowed opacity-50"
                      >
                        <Icon name="ArrowTopRightOnSquareIcon" size={14} />
                        Live Demo
                        <span className="text-[9px] font-mono opacity-60">(Coming Soon)</span>
                      </button>
                      */}
                    </div>
                  </div>

                  {/* Visual side */}
                  <div className={`relative flex items-center justify-center p-8 lg:p-12 border-t lg:border-t-0 border-border ${isEven ? 'lg:border-l' : 'lg:border-r lg:[direction:ltr]'} bg-muted/20 min-h-[220px]`}>
                    <div className={`w-full max-w-sm aspect-video rounded-xl bg-gradient-to-br ${project?.previewBg} border border-border flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                      {/* Grid background */}
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: 'linear-gradient(rgba(79,142,247,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,0.1) 1px, transparent 1px)',
                          backgroundSize: '24px 24px',
                        }}
                      />
                      <div className="relative z-10 text-center">
                        <div className="text-5xl mb-3">{project?.previewIcon}</div>
                        <div className="font-mono text-xs text-muted-foreground px-4 leading-relaxed">
                          {project?.title}
                        </div>
                      </div>
                      {/* Corner accent */}
                      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary/60 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* Bottom border */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}