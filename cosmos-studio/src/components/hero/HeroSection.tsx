"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="hero-ambient absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20%] top-[8%] size-[min(72vw,520px)] rounded-full bg-[radial-gradient(circle,rgba(232,228,220,0.85)_0%,transparent_68%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[15%] bottom-[5%] size-[min(55vw,380px)] rounded-full bg-[radial-gradient(circle,rgba(184,166,122,0.12)_0%,transparent_70%)] blur-3xl"
      />
      <div className="grain pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-24 pt-28 sm:px-6 lg:px-8 lg:pb-32 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[17rem] sm:max-w-xl lg:max-w-3xl"
        >
          <p className="text-[13px] font-light tracking-[0.12em] text-[var(--slate-muted)]">
            Independent creative · Available 2026
          </p>

          <h1 className="font-display mt-8 text-[clamp(2.75rem,8vw,5rem)] font-medium leading-[1.02] tracking-[-0.02em] text-[var(--charcoal)]">
            Websites with the patience of fashion and the clarity of architecture.
          </h1>

          <p className="mt-8 max-w-lg text-[17px] font-light leading-[1.75] text-[var(--muted)] sm:text-lg">
            Editorial layouts, restrained motion, and typography-led storytelling — for brands that
            value silence as much as signal.
          </p>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[var(--espresso)] px-9 text-[15px] font-medium text-[var(--cream)] transition-opacity hover:opacity-88"
            >
              Begin a project
            </a>
            <a
              href="#work"
              className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[var(--border-subtle)] px-9 text-[15px] font-normal text-[var(--charcoal)] transition-colors hover:border-[var(--charcoal)]/25"
            >
              View selected work
            </a>
          </div>
        </motion.div>

        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.9 }}
          className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 lg:bottom-12"
        >
          <span className="text-[11px] font-light tracking-[0.14em] text-[var(--slate-muted)]">
            Scroll
          </span>
          <div className="h-8 w-px bg-[var(--border-subtle)]">
            <motion.div
              className="h-1/3 w-full bg-[var(--graphite)]/35"
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
