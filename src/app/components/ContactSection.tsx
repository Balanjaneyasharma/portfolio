'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const formspreeEndpoint = 'https://formspree.io/f/mbgjprnd';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

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
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Unable to send your message right now.');
      }

      setForm({ name: '', email: '', message: '' });
      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to send your message right now.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 border-t border-border"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted mb-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Contact</span>
          </div>
          <h2 className="text-section-title font-bold tracking-tight mb-4">
            Let's Build Something <span className="gradient-text">Together</span>
          </h2>
          <p className="reveal-blur text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed" style={{ transitionDelay: '0.1s' }}>
            I'm open to Software Engineer roles across frontend and backend. If you're working on an interesting problem or have an opportunity in mind, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="reveal-up" style={{ transitionDelay: '0.15s' }}>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 py-16 text-center rounded-2xl border border-primary/30 bg-primary/5">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="CheckIcon" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground text-sm">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-4 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:bg-muted transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    style={{ backgroundColor: 'var(--card)', color: 'var(--card-foreground)' }}
                    className={`w-full px-4 py-3 rounded-lg border placeholder:text-muted-foreground text-sm outline-none transition-[border-color,box-shadow] focus:border-primary focus:ring-1 focus:ring-primary/30 ${
                      errors.name ? 'border-red-500/60' : 'border-border'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500 font-mono">{errors.name}</span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    style={{ backgroundColor: 'var(--card)', color: 'var(--card-foreground)' }}
                    className={`w-full px-4 py-3 rounded-lg border placeholder:text-muted-foreground text-sm outline-none transition-[border-color,box-shadow] focus:border-primary focus:ring-1 focus:ring-primary/30 ${
                      errors.email ? 'border-red-500/60' : 'border-border'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 font-mono">{errors.email}</span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    style={{ backgroundColor: 'var(--card)', color: 'var(--card-foreground)' }}
                    className={`w-full px-4 py-3 rounded-lg border placeholder:text-muted-foreground text-sm outline-none transition-[border-color,box-shadow] focus:border-primary focus:ring-1 focus:ring-primary/30 resize-none ${
                      errors.message ? 'border-red-500/60' : 'border-border'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-xs text-red-500 font-mono">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <Icon name="ArrowPathIcon" size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Icon name="PaperAirplaneIcon" size={16} />
                      Send Message
                    </>
                  )}
                </button>
                {submitError && (
                  <p className="text-sm text-red-500" role="alert">
                    {submitError}
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Social links */}
          <div className="reveal-up flex flex-col gap-8" style={{ transitionDelay: '0.25s' }}>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Connect</h3>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'balanjaneyasarma@gmail.com', href: 'mailto:balanjaneyasarma@gmail.com', icon: 'EnvelopeIcon', type: 'email' },
                  { label: 'LinkedIn Profile', href: 'https://linkedin.com/in/balusharma', icon: 'LinkIcon', type: 'linkedin' },
                  { label: 'GitHub', href: 'https://github.com/Balanjaneyasharma', icon: 'CodeBracketIcon', type: 'github' },
                ].map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.type !== 'email' ? '_blank' : undefined}
                    rel={link.type !== 'email' ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-card/40 text-sm text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group"
                  >
                    <Icon name={link.icon as 'EnvelopeIcon'} size={16} className="text-primary" />
                    <span className="font-medium group-hover:text-primary transition-colors">{link.label}</span>
                    <Icon name="ArrowTopRightOnSquareIcon" size={12} className="ml-auto text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* Social icons row */}
            <div>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                Also find me on
              </p>
              <div className="flex gap-4">
                {[
                  { href: 'https://github.com/Balanjaneyasharma', label: 'GitHub', icon: 'CodeBracketIcon' },
                  { href: 'https://x.com/BalanjaneyaS', label: 'Twitter', icon: 'ChatBubbleLeftEllipsisIcon' },
                  { href: 'https://dev.to', label: 'Dev.to', icon: 'DocumentTextIcon' },
                  { href: 'https://stackoverflow.com/users/21323359/balusharma', label: 'Stack Overflow', icon: 'SquaresPlusIcon' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                  >
                    <Icon name={s.icon as 'CodeBracketIcon'} size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability note */}
            <div className="p-4 rounded-xl border border-primary/20 bg-primary/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Currently Available
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Open to full-time roles and interesting contract projects. Response time: within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}