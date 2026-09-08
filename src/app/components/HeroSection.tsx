'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const HERO_CHARS_LINE1 = 'Building things'?.split('');
const HERO_CHARS_LINE2 = 'that matter.'?.split('');

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef?.current;
    if (!section) return;

    // Trigger reveal
    const timer = setTimeout(() => {
      section?.classList?.add('is-visible');
    }, 100);

    // Parallax on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > window.innerHeight) return;
      if (textRef?.current) {
        textRef.current.style.transform = `translate3d(0, ${scrolled * 0.12}px, 0)`;
        textRef.current.style.opacity = String(Math.max(0, 1 - scrolled / (window.innerHeight * 0.8)));
      }
      if (visualRef?.current) {
        visualRef.current.style.transform = `translate3d(0, ${scrolled * -0.08}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background dot grid */}
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(79,142,247,0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black, transparent 80%)',
        }}
      />

      {/* Ambient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #4F8EF7 0%, #A855F7 50%, transparent 70%)' }}
        />
      </div>

      {/* Scan line */}
      <div
        className="absolute left-0 w-full h-px pointer-events-none z-0 sys-scan-line"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(79,142,247,0.3), transparent)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Typography */}
          <div ref={textRef} className="lg:col-span-8 flex flex-col gap-6">
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-sm w-fit opacity-0 translate-y-4"
              style={{ animation: 'fadeInUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s forwards' }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                Software Engineer
              </span>
            </div>

            {/* Massive headline */}
            <h1 className="text-hero-xl font-bold tracking-tight leading-none select-none">
              <div className="overflow-hidden whitespace-nowrap">
                {HERO_CHARS_LINE1?.map((char, i) => (
                  <span
                    key={i}
                    className="char-reveal light-scan-text"
                    style={{ transitionDelay: `${0.3 + i * 0.03}s` }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </div>
              <div className="overflow-hidden mt-2 whitespace-nowrap">
                {HERO_CHARS_LINE2?.map((char, i) => (
                  <span
                    key={i}
                    className="char-reveal gradient-text"
                    style={{ transitionDelay: `${0.6 + i * 0.04}s` }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </div>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg text-muted-foreground max-w-xl leading-relaxed opacity-0 translate-y-4"
              style={{ animation: 'fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) 1.2s forwards' }}
            >
              Software Engineer based in Hyderabad, building enterprise HR applications at Keka HR.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 opacity-0 translate-y-4"
              style={{ animation: 'fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) 1.4s forwards' }}
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1h_w2_uSFu0O7jNQZ2aca54wlUHJWXFuW"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-muted transition-all duration-200"
              >
                <Icon name="ArrowDownTrayIcon" size={16} />
                Download Resume
              </a>
            </div>
          </div>

          {/* Right: Glass UI mockup */}
          <div
            ref={visualRef}
            className="hidden lg:flex lg:col-span-4 items-center justify-center pointer-events-none select-none"
          >
            <div
              className="w-full aspect-[3/4] rounded-2xl border border-border/50 bg-card/20 backdrop-blur-sm overflow-hidden relative opacity-0"
              style={{ animation: 'fadeInUp 1s cubic-bezier(0.16,1,0.3,1) 0.8s forwards' }}
            >
              {/* Toolbar */}
              <div className="h-10 border-b border-border/40 flex items-center px-4 gap-2 bg-card/20">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-[10px] text-muted-foreground">Live</span>
                </div>
              </div>

              {/* Code lines mockup */}
              <div className="p-5 flex flex-col gap-3">
                <div className="flex gap-2">
                  <span className="font-mono text-[10px] text-primary/60">01</span>
                  <div className="h-2 w-3/4 rounded-sm bg-primary/20" />
                </div>
                <div className="flex gap-2">
                  <span className="font-mono text-[10px] text-primary/60">02</span>
                  <div className="h-2 w-1/2 rounded-sm bg-accent/20" />
                </div>
                <div className="flex gap-2">
                  <span className="font-mono text-[10px] text-primary/60">03</span>
                  <div className="h-2 w-2/3 rounded-sm bg-foreground/10" />
                </div>
                <div className="flex gap-2">
                  <span className="font-mono text-[10px] text-primary/60">04</span>
                  <div className="h-2 w-5/6 rounded-sm bg-primary/15" />
                </div>
                <div className="flex gap-2">
                  <span className="font-mono text-[10px] text-primary/60">05</span>
                  <div className="h-2 w-1/3 rounded-sm bg-accent/15" />
                </div>
                <div className="mt-3 h-px bg-border/40" />
                <div className="flex gap-2 mt-2">
                  <div className="h-8 flex-1 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center">
                    <span className="font-mono text-[9px] text-primary">function</span>
                  </div>
                  <div className="h-8 flex-1 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <span className="font-mono text-[9px] text-accent">async</span>
                  </div>
                </div>
                <div className="mt-2 h-16 rounded-lg bg-card/40 border border-border/30 p-3">
                  <div className="h-2 w-full rounded-sm bg-foreground/8 mb-2" />
                  <div className="h-2 w-4/5 rounded-sm bg-foreground/6 mb-2" />
                  <div className="h-2 w-3/5 rounded-sm bg-foreground/4" />
                </div>
              </div>

              {/* Scan line on mockup */}
              <div
                className="absolute left-0 w-full h-12 pointer-events-none sys-scan-line"
                style={{ background: 'linear-gradient(to bottom, transparent, rgba(79,142,247,0.04), transparent)' }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-100"
          style={{ animation: 'fadeInUp 0.6s cubic-bezier(0.16,1,0.3,1) 2s forwards' }}
        >
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
          <a
            href="#about"
            className="font-mono text-[10px] text-primary uppercase tracking-widest hover:text-foreground transition-colors duration-200"
          >
            Explore Me
          </a>
        </div>
      </div>
    </section>
  );
}
