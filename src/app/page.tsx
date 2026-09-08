import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import JourneyTimeline from '@/app/components/JourneyTimeline';
import ExperienceSection from '@/app/components/ExperienceSection';
import SkillsSection from '@/app/components/SkillsSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Gradient blur nav effect */}
      <div className="gradient-blur pointer-events-none">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>

      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <JourneyTimeline />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}