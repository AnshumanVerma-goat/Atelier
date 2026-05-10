"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const PROJECTS = [
  {
    name: "Maison Velours",
    type: "Restaurant",
    metric: "Fully booked evenings",
    detail: "Typography-led menu, reservations, and photography rhythm.",
  },
  {
    name: "Stillshore",
    type: "Fashion retail",
    metric: "+34% lookbook engagement",
    detail: "Editorial grids, soft motion, and product storytelling.",
  },
  {
    name: "Northline",
    type: "SaaS",
    metric: "2× qualified demos",
    detail: "Quiet interface clarity — proof before polish.",
  },
  {
    name: "Atelier Lumen",
    type: "Wellness",
    metric: "Waitlist in 10 days",
    detail: "Warm ivory palette, generous whitespace, trust-first layout.",
  },
] as const;

export function PortfolioSection() {
  const [open, setOpen] = useState<number | null>(null);
  const active = useMemo(() => (open === null ? null : PROJECTS[open] ?? null), [open]);

  return (
    <section id="work" className="relative scroll-mt-20 bg-[var(--ivory)] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="text-[13px] font-light tracking-[0.12em] text-[var(--slate-muted)]">
            Selected projects
          </p>
          <h2 className="font-display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.02em] text-[var(--charcoal)]">
            Work that stays composed under pressure.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:gap-5 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.button
              key={p.name}
              type="button"
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group rounded-[24px] border border-[var(--border-subtle)] bg-[var(--cream)]/90 p-7 text-left transition-colors duration-500 hover:border-[var(--charcoal)]/14 sm:p-8",
              )}
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-[13px] font-light text-[var(--graphite)]">{p.type}</span>
                <span className="text-[13px] font-light text-[var(--wine)]">{p.metric}</span>
              </div>
              <h3 className="font-display mt-5 text-[1.75rem] font-medium tracking-tight text-[var(--charcoal)] sm:text-[2rem]">
                {p.name}
              </h3>
              <p className="mt-4 text-[15px] font-light leading-relaxed text-[var(--muted)]">
                {p.detail}
              </p>
              <span className="mt-6 inline-block text-[13px] font-normal text-[var(--charcoal)] opacity-60 transition-opacity group-hover:opacity-100">
                Overview →
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && open !== null ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-end justify-center bg-[var(--charcoal)]/25 p-4 backdrop-blur-sm sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-[24px] border border-[var(--border-subtle)] bg-[var(--cream)] p-8 shadow-[0_40px_100px_-48px_rgba(44,40,37,0.35)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[13px] font-light text-[var(--graphite)]">{active.type}</p>
                  <h4 className="font-display mt-2 text-[2rem] font-medium text-[var(--charcoal)]">
                    {active.name}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(null)}
                  className="rounded-full border border-[var(--border-subtle)] px-3 py-1.5 text-[12px] font-normal text-[var(--graphite)] hover:text-[var(--charcoal)]"
                >
                  Close
                </button>
              </div>
              <p className="mt-6 text-[15px] font-light leading-relaxed text-[var(--muted)]">
                {active.detail}
              </p>
              <p className="mt-6 border-t border-[var(--border-subtle)] pt-6 text-[14px] font-normal text-[var(--charcoal)]">
                {active.metric}
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex w-full min-h-[48px] items-center justify-center rounded-full bg-[var(--espresso)] text-[14px] font-medium text-[var(--cream)]"
              >
                Discuss a similar engagement
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
