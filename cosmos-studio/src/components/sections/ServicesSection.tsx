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
      className="relative scroll-mt-20 bg-[var(--cream)] px-4 py-20 sm:px-6 md:py-28 lg:px-8"
    >
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-xl text-center"
        >
          <p className="text-[13px] font-light tracking-[0.12em] text-[var(--slate-muted)]">
            Services
          </p>
          <h2 className="font-display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.02em] text-[var(--charcoal)]">
            A narrow practice, deeply made.
          </h2>
          <p className="mt-6 text-[17px] font-light leading-[1.75] text-[var(--muted)]">
            Small roster. Long timelines when needed. Each engagement is edited like a print layout.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="h-full">
                <h3 className="font-display text-[1.375rem] font-medium text-[var(--charcoal)]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] font-light leading-relaxed text-[var(--muted)]">
                  {s.blurb}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
