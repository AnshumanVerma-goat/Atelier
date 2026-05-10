"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { AnimatePresence, motion } from "framer-motion";
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

const fieldClass =
  "mt-1.5 w-full rounded-[10px] border border-[var(--border-subtle)] bg-[var(--ivory)] px-3 py-2.5 text-[14px] font-light tracking-[-0.01em] text-[var(--charcoal)] outline-none transition-[border-color,box-shadow] duration-500 placeholder:text-[var(--taupe)] focus:border-[var(--charcoal)]/14 focus:ring-2 focus:ring-[var(--taupe)]/25 focus:ring-offset-2 focus:ring-offset-[var(--cream)]";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [emailCopy, setEmailCopy] = useState("hello@atelier.studio");

  return (
    <section
      id="contact"
      className="section-pad relative scroll-mt-20 overflow-hidden bg-[var(--pearl)]"
    >
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.055]" />

      <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <p className="text-[12px] font-light tracking-[0.14em] text-[var(--taupe)] sm:text-[13px]">
            Contact
          </p>
          <h2 className="font-display mt-4 text-[clamp(1.875rem,4vw,2.75rem)] font-medium leading-[1.06] tracking-[-0.026em] text-[var(--charcoal)]">
            Tell me what you are building.
          </h2>
          <p className="mt-8 max-w-[28rem] text-[16px] font-light leading-[1.78] tracking-[-0.01em] text-[var(--muted)] sm:text-[17px]">
            Share a sentence or a deck — I reply within two working days with candid fit and timing.
          </p>

          <div className="mt-12 rounded-[22px] border border-[var(--border-subtle)] bg-[var(--cream)]/92 p-7 shadow-[0_1px_0_rgba(255,255,255,0.65)_inset]">
            <p className="text-[12px] font-light tracking-[0.08em] text-[var(--graphite)]">Email</p>
            <button
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText("hello@atelier.studio");
                  setEmailCopy("Copied");
                } catch {
                  setEmailCopy("hello@atelier.studio");
                }
                window.setTimeout(() => setEmailCopy("hello@atelier.studio"), 1600);
              }}
              className="mt-3 w-full rounded-[14px] border border-[var(--border-subtle)] bg-transparent px-4 py-3.5 text-left font-mono text-[14px] text-[var(--charcoal)] transition-[border-color] duration-500 hover:border-[var(--charcoal)]/12"
            >
              {emailCopy}
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] font-light">
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noreferrer"
              className="editorial-underline text-[var(--charcoal)] transition-opacity duration-500 hover:opacity-70"
            >
              Schedule a call
            </a>
            <span className="text-[var(--taupe)]">·</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="editorial-underline text-[var(--graphite)] transition-opacity duration-500 hover:text-[var(--charcoal)]"
            >
              Instagram
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[20px] border border-[var(--border-subtle)] bg-[var(--cream)]/94 p-6 shadow-[var(--shadow-soft)] sm:p-8 lg:col-span-7"
        >
          <div className="grid gap-5">
            <label className="block">
              <span className="text-[12px] font-medium tracking-wide uppercase text-[var(--graphite)]">Name</span>
              <input className={fieldClass} placeholder="Your name" autoComplete="name" />
            </label>

            <label className="block">
              <span className="text-[12px] font-medium tracking-wide uppercase text-[var(--graphite)]">Focus</span>
              <select className={fieldClass}>
                {BUSINESS_TYPES.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </label>

            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
              <label className="block">
                <span className="text-[12px] font-medium tracking-wide uppercase text-[var(--graphite)]">Budget (USD)</span>
                <input className={fieldClass} placeholder="Range" />
              </label>
              <label className="block">
                <span className="text-[12px] font-medium tracking-wide uppercase text-[var(--graphite)]">Timeline</span>
                <input className={fieldClass} placeholder="Ideal launch" />
              </label>
            </div>

            <label className="block">
              <span className="text-[12px] font-medium tracking-wide uppercase text-[var(--graphite)]">Project</span>
              <textarea
                className={`${fieldClass} min-h-[100px] resize-none leading-relaxed`}
                placeholder="A few lines — mood, references, goals."
              />
            </label>
          </div>

          <div className="relative mt-8">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex min-h-[52px] items-center justify-center rounded-full border border-[var(--forest)]/25 bg-[rgba(61,74,66,0.06)] text-[15px] font-normal tracking-[-0.01em] text-[var(--forest)]"
                >
                  Received — thank you
                </motion.div>
              ) : (
                <motion.div key="form" exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                  <MagneticButton
                    type="button"
                    className="w-full min-h-[52px]"
                    onClick={() => setSent(true)}
                  >
                    Send inquiry
                  </MagneticButton>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
