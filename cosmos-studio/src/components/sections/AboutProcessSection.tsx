"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    title: "Listen",
    body: "Brief, references, constraints — a shared vocabulary before form.",
  },
  {
    title: "Frame",
    body: "Architecture of the story: hierarchy, rhythm, and the single promise.",
  },
  {
    title: "Design",
    body: "Typography systems, spacing laws, and motion as punctuation — never decoration.",
  },
  {
    title: "Refine",
    body: "Editing passes until the page feels inevitable on every breakpoint.",
  },
  {
    title: "Launch",
    body: "Measured rollout, analytics touchpoints, and a calm handoff.",
  },
];

export function AboutProcessSection() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 border-y border-[var(--border-subtle)] bg-[var(--champagne)] px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <p className="text-[13px] font-light tracking-[0.12em] text-[var(--slate-muted)]">
            Studio
          </p>
          <h2 className="font-display mt-4 text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--charcoal)]">
            Quiet confidence is a craft decision.
          </h2>
          <p className="mt-7 text-[17px] font-light leading-[1.75] text-[var(--muted)]">
            I work with founders and houses who treat the website as part of the garment — cut cleanly,
            lined perfectly, never shouting.
          </p>
          <p className="mt-6 text-[17px] font-light leading-[1.75] text-[var(--muted)]">
            Based between cities. Projects by invitation.
          </p>
        </motion.div>

        <div className="lg:col-span-7">
          <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-[calc(100%-0.5rem)] before:w-px before:bg-[var(--border-subtle)]">
            <ol className="space-y-10">
              {STEPS.map((step, i) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <span className="absolute -left-8 top-1 flex size-4 -translate-x-[7px] items-center justify-center rounded-full border border-[var(--border-subtle)] bg-[var(--cream)] text-[10px] font-medium text-[var(--graphite)]">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-[1.25rem] font-medium text-[var(--charcoal)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md text-[15px] font-light leading-relaxed text-[var(--muted)]">
                    {step.body}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
