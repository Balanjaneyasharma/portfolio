'use client';

import React, { useEffect, useState } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  const [year, setYear] = useState('2026');

  useEffect(() => {
    setYear(new Date()?.getFullYear()?.toString());
  }, []);

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <AppLogo size={24} />
              <span className="font-mono text-xs text-muted-foreground">
                &lt;dev /&gt;
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              © {year} Balu Sharma. Built with React and Tailwind CSS.
            </span>
          </div>

          {/* Right: social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Balanjaneyasharma/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="CodeBracketIcon" size={18} />
            </a>
            <a
              href="https://linkedin.com/in/balusharma"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="LinkIcon" size={18} />
            </a>
            <a
              href="mailto:balanjaneyasarma@gmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="EnvelopeIcon" size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}