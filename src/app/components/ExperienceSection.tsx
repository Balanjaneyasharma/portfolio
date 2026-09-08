'use client';

import React, { useEffect, useRef } from 'react';
import { experiences } from '@/data/portfolioData';

export default function ExperienceSection() {
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
      { threshold: 0.1 }
    );
    observer?.observe(section);
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-24 border-t border-border"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal-blur inline-block mb-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Work History
            </span>
          </div>
          <h2 className="text-section-title font-bold tracking-tight">
            Professional <span className="text-muted-foreground">Journey</span>
          </h2>
          <p className="reveal-blur text-muted-foreground mt-2 text-sm" style={{ transitionDelay: '0.1s' }}>
            Full-stack experience across Angular, .NET, and SQL Server.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="stagger-children flex flex-col gap-8">
            {experiences?.map((exp, idx) => (
              <div key={exp?.id} className="relative">
                {/* Timeline dot */}
                <div
                  className="absolute left-2 top-8 w-4 h-4 rounded-full border-2 border-border bg-background z-10 hidden md:block"
                  style={{
                    borderColor: idx === 0 ? 'var(--primary)' : undefined,
                    background: idx === 0 ? 'var(--primary)' : undefined,
                  }}
                />

                {/* Card */}
                <div className="md:ml-12 hover-shine rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 hover:border-primary/30 transition-colors duration-300">
                  {/* Card header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{exp?.role}</h3>
                      <p className="text-sm font-medium mt-0.5" style={{ color: exp?.companyColor }}>
                        {exp?.company}
                      </p>
                    </div>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium shrink-0 ${
                        exp?.isCurrent
                          ? 'bg-primary/10 text-primary border border-primary/20' :'bg-muted text-muted-foreground border border-border'
                      }`}
                    >
                      {exp?.period}
                    </span>
                  </div>

                  {/* Accomplishments */}
                  <ul className="space-y-2 mb-5">
                    {exp?.accomplishments?.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp?.techStack?.map(tech => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-muted text-muted-foreground border border-border hover:border-primary/30 hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}