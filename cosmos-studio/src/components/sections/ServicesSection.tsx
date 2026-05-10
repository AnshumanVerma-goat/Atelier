"use client";

import { TiltCard } from "@/components/ui/TiltCard";
import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Brand & editorial sites",
    blurb: "Composition-led layouts with typography as the hero.",
  },
  {
    title: "Hospitality & retail",
    blurb: "Menus, bookings, and products — tactile and calm.",
  },
  {
    title: "Personal brands",
    blurb: "Portfolios with restraint; presence without noise.",
  },
  {
    title: "Product & SaaS",
    blurb: "Clarity-first narratives before decorative motion.",
  },
] as const;

export function ServicesSection() {
  return (
    <section
      id="services"
      className="section-pad section-fade-top relative scroll-mt-20 bg-[var(--cream)]"
    >
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.035]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="text-[12px] font-light tracking-[0.14em] text-[var(--taupe)] sm:text-[13px]">
            Services
          </p>
          <h2 className="font-display mt-4 text-[clamp(1.875rem,4.8vw,3rem)] font-medium leading-[1.06] tracking-[-0.026em] text-[var(--charcoal)]">
            A narrow practice, deeply made.
          </h2>
          <p className="mt-6 max-w-[28rem] mx-auto text-[16px] font-light leading-[1.78] tracking-[-0.01em] text-[var(--muted)] sm:text-[17px]">
            Small roster. Long timelines when needed. Each engagement is edited like a print layout.
          </p>
        </motion.div>

        <div className="mt-14 sm:mt-20 flex flex-col">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-35px" }}
              transition={{ delay: i * 0.05, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              className="py-5 sm:py-6 border-b border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center sm:justify-between first:border-t"
            >
              <div className="flex items-center gap-4 sm:w-1/2">
                <span className="text-[11px] font-medium text-[var(--taupe)]/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[1.4rem] font-medium tracking-tight text-[var(--charcoal)]">
                  {s.title}
                </h3>
              </div>
              <p className="mt-2 sm:mt-0 sm:w-1/2 text-[14px] font-light leading-relaxed text-[var(--muted)] pl-8 sm:pl-0 sm:text-right">
                {s.blurb}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
