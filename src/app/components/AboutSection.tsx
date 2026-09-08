'use client';

import React, { useEffect, useRef } from 'react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden border-t border-border bg-background py-24 md:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          <div className="reveal-blur text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">About</span>
            </div>
            <h2 className="text-section-title mt-3 font-bold tracking-tight">
              About <span className="text-muted-foreground">Me</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Solving real problems, one workflow at a time.
            </p>
          </div>

          <div className="reveal-up border-l-2 border-primary/70 pl-5 md:pl-6" style={{ transitionDelay: '0.1s' }}>
            <p className="text-left text-lg leading-relaxed text-foreground">
              <span className="gradient-text text-xl font-semibold md:text-2xl">I'm Balanjaneya Sharma</span>, a Software Engineer based in Hyderabad, building enterprise HR applications at Keka HR. I work across both frontend and backend, with a focus on building reliable, performant, and scalable applications. I'm currently exploring AI and learning how it can be applied to software development. Outside of work, I build small tools and side projects to learn and experiment with new technologies.
            </p>
          </div>

          <div className="reveal-up flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6" style={{ transitionDelay: '0.2s' }}>
            <p className="text-sm text-muted-foreground">
              Currently at{' '}
              <a
                href="https://www.keka.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary transition-colors hover:text-primary/80"
              >
                Keka HR
              </a>
            </p>

            <div className="flex items-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </div>
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Open to New Opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
