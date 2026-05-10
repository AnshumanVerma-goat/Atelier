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
      className="section-pad relative scroll-mt-20 border-y border-[var(--border-subtle)] bg-[var(--champagne)] overflow-hidden"
    >
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.04]" />

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex flex-col justify-center"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--taupe)]/90">
            Studio & Process
          </p>
          <h2 className="font-display mt-4 text-[clamp(2rem,4vw,2.75rem)] font-medium leading-[1.04] tracking-[-0.02em] text-[var(--charcoal)]">
            Quiet confidence is a craft decision.
          </h2>
          <p className="mt-6 max-w-[28rem] text-[15px] sm:text-[16px] font-light leading-[1.75] tracking-[-0.01em] text-[var(--muted)]">
            I work with founders and houses who treat the website as part of the garment — cut cleanly,
            lined perfectly, never shouting. Based between cities. Projects by invitation.
          </p>
        </motion.div>

        <div className="lg:col-span-7 mt-6 sm:mt-0">
          <div className="relative border border-[var(--border-subtle)] rounded-[20px] bg-[var(--cream)]/40 p-1">
            <ol className="flex flex-col">
              {STEPS.map((step, i) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-25px" }}
                  transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative p-5 sm:p-6 border-b border-[var(--border-subtle)]/70 last:border-b-0 bg-[#f4eee6]/60 first:rounded-t-[16px] last:rounded-b-[16px]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-[var(--border-subtle)] shadow-sm bg-[var(--cream)] text-[10px] font-medium text-[var(--taupe)]">
                        {i + 1}
                      </span>
                      <h3 className="font-display text-[1.25rem] font-medium tracking-tight text-[var(--charcoal)] sm:w-28">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-3 sm:mt-0 flex-1 text-[14px] font-light leading-[1.65] text-[var(--muted)] pl-8 sm:pl-0">
                      {step.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
