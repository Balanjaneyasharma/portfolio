'use client';

import React, { useEffect, useRef, useState } from 'react';
import { milestones } from '@/data/portfolioData';
import { useTheme } from '@/context/ThemeContext';

export default function JourneyTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const svgPathRef = useRef<SVGPathElement>(null);
  const [markerPosition, setMarkerPosition] = useState({ x: 0, y: 290 });
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  useEffect(() => {
    const section = sectionRef?.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('is-visible');
          // Animate SVG path draw
          if (svgPathRef.current) {
            const length = svgPathRef.current.getTotalLength();
            svgPathRef.current.style.strokeDasharray = String(length);
            svgPathRef.current.style.strokeDashoffset = String(length);
            svgPathRef.current.style.transition = 'stroke-dashoffset 2.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s';
            svgPathRef.current.style.strokeDashoffset = '0';
          }
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer?.observe(section);
    return () => observer?.disconnect();
  }, []);

  // Wave path for the timeline
  const wavePath = 'M 0 290 C 80 290, 120 190, 200 210 S 320 270, 400 230 S 520 170, 600 190 S 720 260, 800 220 S 920 160, 1000 180 L 1000 430 L 0 430 Z';
  const waveLinePath = 'M 0 290 C 80 290, 120 190, 200 210 S 320 270, 400 230 S 520 170, 600 190 S 720 260, 800 220 S 920 160, 1000 180';

  // Milestone positions along the wave (x%, y in svg coords)
  const milestonePositions = [
    { x: 60, y: 271 },
    { x: 220, y: 216 },
    { x: 400, y: 230 },
    { x: 600, y: 190 },
    { x: 820, y: 210 },
  ];

  useEffect(() => {
    const duration = 11000;
    const startedAt = performance.now();
    const interval = window.setInterval(() => {
      const path = svgPathRef.current;
      if (!path) return;

      const progress = ((performance.now() - startedAt) % duration) / duration;
      const point = path.getPointAtLength(progress * path.getTotalLength());
      setMarkerPosition({ x: point.x, y: point.y });
    }, 50);

    return () => window.clearInterval(interval);
  }, []);

  const fillColor = isDark ? 'rgba(79,142,247,0.12)' : 'rgba(79,142,247,0.08)';
  const strokeColor = isDark ? '#4F8EF7' : '#4F8EF7';
  const glowColor = isDark ? 'rgba(79,142,247,0.5)' : 'rgba(79,142,247,0.3)';

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="py-20 border-t border-border overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="reveal-blur inline-block">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Journey
            </span>
          </div>
          <h2 className="text-section-title font-bold tracking-tight mt-3">
            <span className="char-reveal" style={{ transitionDelay: '0.05s' }}>J</span>
            <span className="char-reveal" style={{ transitionDelay: '0.08s' }}>o</span>
            <span className="char-reveal" style={{ transitionDelay: '0.11s' }}>u</span>
            <span className="char-reveal" style={{ transitionDelay: '0.14s' }}>r</span>
            <span className="char-reveal" style={{ transitionDelay: '0.17s' }}>n</span>
            <span className="char-reveal" style={{ transitionDelay: '0.20s' }}>e</span>
            <span className="char-reveal" style={{ transitionDelay: '0.23s' }}>y</span>
            <span className="char-reveal" style={{ transitionDelay: '0.26s' }}>&nbsp;</span>
            <span className="char-reveal text-muted-foreground" style={{ transitionDelay: '0.29s' }}>T</span>
            <span className="char-reveal text-muted-foreground" style={{ transitionDelay: '0.32s' }}>i</span>
            <span className="char-reveal text-muted-foreground" style={{ transitionDelay: '0.35s' }}>m</span>
            <span className="char-reveal text-muted-foreground" style={{ transitionDelay: '0.38s' }}>e</span>
            <span className="char-reveal text-muted-foreground" style={{ transitionDelay: '0.41s' }}>l</span>
            <span className="char-reveal text-muted-foreground" style={{ transitionDelay: '0.44s' }}>i</span>
            <span className="char-reveal text-muted-foreground" style={{ transitionDelay: '0.47s' }}>n</span>
            <span className="char-reveal text-muted-foreground" style={{ transitionDelay: '0.50s' }}>e</span>
          </h2>
          <p className="reveal-blur text-muted-foreground text-sm mt-2" style={{ transitionDelay: '0.2s' }}>
            A visual overview of educational and professional milestones from 2017 to present.
          </p>
        </div>

        {/* SVG Timeline */}
        <div
          className="relative w-full rounded-2xl border border-border overflow-hidden"
          style={{ background: isDark ? '#0D0D0D' : '#F4F6FA' }}
        >
          <svg
            viewBox="0 0 1000 470"
            preserveAspectRatio="xMidYMid meet"
            className="w-full"
            style={{ minHeight: '400px' }}
          >
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4F8EF7" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#A855F7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#4F8EF7" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="fillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4F8EF7" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#A855F7" stopOpacity="0.05" />
              </linearGradient>
              <filter id="lineGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              {/* Beam gradient */}
              <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4F8EF7" stopOpacity="0" />
                <stop offset="50%" stopColor="#A855F7" stopOpacity="1" />
                <stop offset="100%" stopColor="#4F8EF7" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Filled wave area */}
            <path d={wavePath} fill="url(#fillGrad)" />

            {/* Main wave line */}
            <path
              ref={svgPathRef}
              id="timeline-wave-line"
              d={waveLinePath}
              fill="none"
              stroke="url(#waveGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#lineGlow)"
            />

            {/* Animated beam */}
            <path
              d={waveLinePath}
              fill="none"
              stroke="url(#beamGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              className="animate-beam"
              style={{ mixBlendMode: 'screen', opacity: isDark ? 0.9 : 0.6 }}
            />

            {/* Moving marker that follows the timeline graph */}
            <circle
              cx={markerPosition.x}
              cy={markerPosition.y}
              r="11"
              fill="#4F8EF7"
              opacity="0.95"
              filter="url(#lineGlow)"
            />

            {/* Year labels at bottom */}
            {['2017', '2019', '2023', 'Jan 2023', 'Jul 2025 - Present']?.map((year, i) => (
              <text
                key={year}
                x={milestonePositions?.[i]?.x}
                y={450}
                textAnchor="middle"
                fontSize="10"
                fontFamily="JetBrains Mono, monospace"
                fill={isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.35)'}
              >
                {year}
              </text>
            ))}

            {/* Milestone dots and cards */}
            {milestones?.map((ms, i) => {
              const pos = milestonePositions?.[i];
              const isCurrent = ms?.year === 'Jul 2025 - Present' && ms?.title === 'Software Engineer';
              const cardWidth = 158;
              const cardHeight = 104;
              const cardX = Math.max(8, Math.min(1000 - cardWidth - 8, pos?.x - cardWidth / 2));
              const cardTop = Math.max(12, pos?.y - 128);

              return (
                <g key={ms?.id}>
                  {/* Vertical connector */}
                  <line
                    x1={pos?.x}
                    y1={pos?.y}
                    x2={pos?.x}
                    y2={cardTop + cardHeight}
                    stroke={isCurrent ? '#4F8EF7' : isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}
                    strokeWidth={isCurrent ? '1.5' : '1'}
                    strokeDasharray="3 3"
                  />

                  {/* Milestone dot */}
                  <circle
                    cx={pos?.x}
                    cy={pos?.y}
                    r={isCurrent ? 7 : 5}
                    fill={isCurrent ? '#4F8EF7' : isDark ? '#1a1a2e' : '#e8ecf4'}
                    stroke={isCurrent ? '#4F8EF7' : isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'}
                    strokeWidth="2"
                  />
                  {/* Milestone card */}
                  <foreignObject
                    x={cardX}
                    y={cardTop}
                    width={cardWidth}
                    height={cardHeight}
                    style={{ overflow: 'visible' }}
                  >
                    <div
                      className={`h-full rounded-lg border px-2.5 py-2 text-left transition-[border-color,box-shadow] duration-300 ${
                        isDark ? 'bg-[#1a1a2e]' : 'bg-white/90'
                      } ${
                        isCurrent
                          ? 'border-primary shadow-md shadow-primary/20'
                          : isDark
                          ? 'border-white/15'
                          : 'border-black/10'
                      }`}
                      style={{ backdropFilter: 'blur(8px)' }}
                    >
                      <div
                        className="font-mono"
                        style={{ fontSize: '8px', color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.5)' }}
                      >
                        {ms?.year}
                      </div>
                      <div
                        className="font-semibold leading-tight mt-0.5"
                        style={{
                          fontSize: '9px',
                          color: isCurrent
                            ? '#4F8EF7'
                            : isDark
                            ? 'rgba(255,255,255,0.95)'
                            : 'rgba(0,0,0,0.85)',
                        }}
                      >
                        {ms?.title}
                      </div>
                      <div
                        style={{
                          fontSize: '8px',
                          marginTop: '2px',
                          color: isDark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.5)',
                        }}
                      >
                        {ms?.organization}
                      </div>
                    </div>
                  </foreignObject>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
