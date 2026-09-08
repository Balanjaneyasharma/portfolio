'use client';

import React, { useEffect, useState } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import { useTheme } from '@/context/ThemeContext';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = ['about', 'journey', 'experience', 'skills', 'projects', 'contact']
      .map(id => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = () => {
      setScrolled(window.scrollY > 40);
      const viewportCenter = window.innerHeight / 2;
      const visibleSections = sections.filter(section => {
        const rect = section.getBoundingClientRect();
        return rect.bottom > 80 && rect.top < window.innerHeight - 80;
      });
      const closestSection = visibleSections.sort((a, b) => {
        const aRect = a.getBoundingClientRect();
        const bRect = b.getBoundingClientRect();
        return Math.abs(aRect.top + aRect.height / 2 - viewportCenter) -
          Math.abs(bRect.top + bRect.height / 2 - viewportCenter);
      })[0];
      if (closestSection) {
        setActiveSection(closestSection.id);
      } else {
        setActiveSection('');
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <AppLogo size={32} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            <span className="hidden font-mono text-sm font-semibold tracking-tight sm:block">
              <span className="text-muted-foreground">&lt;</span>
              <span className="font-bold tracking-[0.08em]">
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(90deg, #4F8EF7 0%, #A855F7 100%)' }}
                >
                  B
                </span>
                <span className="text-foreground">alu-Sharma</span>
              </span>
              <span className="text-muted-foreground"> /&gt;</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks?.map(link => (
              <a
                key={link?.label}
                href={link?.href}
                aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-muted ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link?.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors duration-200"
            >
              {theme === 'dark' ? (
                <Icon name="SunIcon" size={16} className="text-yellow-400" />
              ) : (
                <Icon name="MoonIcon" size={16} className="text-foreground" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="md:hidden w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            >
              <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={18} className="text-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          onClick={handleNavClick}
        >
          <nav className="flex flex-col items-center gap-6">
            {navLinks?.map(link => (
              <a
                key={link?.label}
                href={link?.href}
                onClick={handleNavClick}
                aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
                className={`text-2xl font-semibold transition-colors ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {link?.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}