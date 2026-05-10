"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { motion } from "framer-motion";
import { useState } from "react";

const BUSINESS_TYPES = [
  "Fashion / retail",
  "Hospitality",
  "Wellness",
  "Creative studio",
  "Technology",
  "Personal brand",
  "Other",
];

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [emailCopy, setEmailCopy] = useState("hello@atelier.studio");

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-[var(--pearl)] px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.06]" />

      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <p className="text-[13px] font-light tracking-[0.12em] text-[var(--slate-muted)]">Contact</p>
          <h2 className="font-display mt-4 text-[clamp(2rem,4vw,2.85rem)] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--charcoal)]">
            Tell me what you are building.
          </h2>
          <p className="mt-7 text-[17px] font-light leading-[1.75] text-[var(--muted)]">
            Share a sentence or a deck — I reply within two working days with candid fit and timing.
          </p>

          <div className="mt-10 rounded-[22px] border border-[var(--border-subtle)] bg-[var(--cream)]/85 p-6">
            <p className="text-[12px] font-light tracking-wide text-[var(--graphite)]">Email</p>
            <button
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText("hello@atelier.studio");
                  setEmailCopy("Copied");
                } catch {
                  setEmailCopy("hello@atelier.studio");
                }
                window.setTimeout(() => setEmailCopy("hello@atelier.studio"), 1400);
              }}
              className="mt-3 w-full rounded-[14px] border border-[var(--border-subtle)] bg-transparent px-4 py-3 text-left font-mono text-[14px] text-[var(--charcoal)]"
            >
              {emailCopy}
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 text-[14px] font-light">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noreferrer"
              className="border-b border-[var(--charcoal)]/25 pb-0.5 text-[var(--charcoal)] hover:border-[var(--charcoal)]"
            >
              Schedule a call
            </a>
            <span className="text-[var(--slate-muted)]">·</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="border-b border-transparent pb-0.5 text-[var(--graphite)] hover:border-[var(--graphite)]"
            >
              Instagram
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[22px] border border-[var(--border-subtle)] bg-[var(--cream)]/90 p-6 sm:p-8 lg:col-span-7"
        >
          <div className="grid gap-5">
            <label className="block">
              <span className="text-[13px] font-light text-[var(--graphite)]">Name</span>
              <input
                className="mt-2 w-full rounded-[14px] border border-[var(--border-subtle)] bg-[var(--ivory)] px-4 py-3 text-[15px] font-light text-[var(--charcoal)] outline-none transition-[border-color] placeholder:text-[var(--slate-muted)] focus:border-[var(--charcoal)]/22"
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className="text-[13px] font-light text-[var(--graphite)]">Focus</span>
              <select className="mt-2 w-full rounded-[14px] border border-[var(--border-subtle)] bg-[var(--ivory)] px-4 py-3 text-[15px] font-light text-[var(--charcoal)] outline-none focus:border-[var(--charcoal)]/22">
                {BUSINESS_TYPES.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-[13px] font-light text-[var(--graphite)]">Budget (USD)</span>
                <input
                  className="mt-2 w-full rounded-[14px] border border-[var(--border-subtle)] bg-[var(--ivory)] px-4 py-3 text-[15px] font-light outline-none placeholder:text-[var(--slate-muted)] focus:border-[var(--charcoal)]/22"
                  placeholder="Range"
                />
              </label>
              <label className="block">
                <span className="text-[13px] font-light text-[var(--graphite)]">Timeline</span>
                <input
                  className="mt-2 w-full rounded-[14px] border border-[var(--border-subtle)] bg-[var(--ivory)] px-4 py-3 text-[15px] font-light outline-none placeholder:text-[var(--slate-muted)] focus:border-[var(--charcoal)]/22"
                  placeholder="Ideal launch"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-[13px] font-light text-[var(--graphite)]">Project</span>
              <textarea
                className="mt-2 min-h-[132px] w-full resize-none rounded-[14px] border border-[var(--border-subtle)] bg-[var(--ivory)] px-4 py-3 text-[15px] font-light leading-relaxed outline-none placeholder:text-[var(--slate-muted)] focus:border-[var(--charcoal)]/22"
                placeholder="A few lines — mood, references, goals."
              />
            </label>
          </div>

          <div className="mt-8">
            <MagneticButton
              type="button"
              className="w-full min-h-[52px]"
              onClick={() => setSent(true)}
            >
              {sent ? "Thank you — message noted" : "Send inquiry"}
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
