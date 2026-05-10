"use client";

import { MagneticLink } from "@/components/ui/MagneticLink";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 36]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-[85svh] sm:min-h-[100svh] overflow-hidden flex flex-col justify-center"
    >
      <div className="hero-ambient absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[22%] top-[6%] size-[min(78vw,540px)] rounded-full bg-[radial-gradient(circle,rgba(233,229,221,0.75)_0%,transparent_68%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[18%] bottom-[2%] size-[min(58vw,400px)] rounded-full bg-[radial-gradient(circle,rgba(177,164,148,0.08)_0%,transparent_72%)] blur-3xl"
      />
      <div className="grain pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-center px-7 pb-24 pt-[clamp(6rem,14vw,8rem)] sm:px-8 lg:px-10 lg:pb-32 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[34rem] lg:max-w-[40rem]"
        >
          <p className="text-[11px] font-medium tracking-[0.16em] text-[var(--taupe)]/90 sm:text-[12px] uppercase">
            Independent creative · Available 2026
          </p>

          <motion.div style={{ y: parallaxY }}>
            <h1 className="font-display mt-6 text-[clamp(2.75rem,8.5vw,5rem)] font-medium leading-[1.02] tracking-[-0.025em] text-[var(--charcoal)]">
              <span className="block mb-2">Websites with the patience</span>
              <span className="block text-[var(--graphite)]">of fashion —</span>
              <span className="mt-2 block text-[var(--charcoal)]">
                and the clarity of architecture.
              </span>
            </h1>
          </motion.div>

          <p className="mt-8 max-w-[28rem] text-[15px] sm:text-[16px] font-light leading-[1.85] tracking-[-0.01em] text-[var(--muted)]">
            Editorial layouts, restrained motion, and typography-led storytelling for houses that value
            silence as much as signal.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <MagneticLink
              href="#contact"
              variant="solid"
              className="w-full sm:w-auto text-[14px] px-8 py-3.5"
            >
              Begin a project
            </MagneticLink>
            <MagneticLink href="#work" variant="outline" className="w-full sm:w-auto text-[14px] px-8 py-3.5 border-transparent opacity-80 hover:opacity-100 hover:border-[var(--border-subtle)]">
              Selected work
            </MagneticLink>
          </div>
        </motion.div>

        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.85 }}
          className="pointer-events-none absolute bottom-[max(6rem,env(safe-area-inset-bottom))] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 sm:bottom-10 lg:bottom-12"
        >
          <span className="text-[10px] font-light tracking-[0.16em] text-[var(--taupe)] sm:text-[11px]">
            Scroll
          </span>
          <div className="h-8 w-px bg-[var(--stone)]/80">
            <motion.div
              className="h-1/3 w-full bg-[var(--graphite)]/30"
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
