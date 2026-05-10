"use client";

import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Camille V.",
    role: "Creative director",
    quote:
      "The site feels like our campaign extended — editorial, confident, never noisy.",
  },
  {
    name: "James Okonkwo",
    role: "Founder",
    quote:
      "Finally a digital presence that matches how premium our product actually is.",
  },
  {
    name: "Elena Marchetti",
    role: "Brand lead",
    quote:
      "Restraint is rare. This work trusts whitespace the way we trust fabric.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-[#24211d] text-[#f7f5f2] py-20 pb-24">
      {/* Cinematic depth layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(163,158,150,0.15),transparent_50%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1b1915] via-transparent to-transparent opacity-80" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(20,18,15,0.8)]" />

      <div className="relative mx-auto max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="text-[12px] font-light tracking-[0.14em] text-[#b5aea5] sm:text-[13px]">
            Clients
          </p>
          <h2 className="font-display mt-4 text-[clamp(1.875rem,4.6vw,2.875rem)] font-medium leading-[1.06] tracking-[-0.026em]">
            Words, lightly worn.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-10 sm:gap-14 md:grid-cols-3 md:gap-8 lg:gap-10 relative">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-35px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-[rgba(247,245,242,0.06)] pt-6 md:pt-10 flex flex-col justify-between"
            >
              <blockquote className="text-[15px] sm:text-[16px] font-light leading-[1.8] tracking-[-0.01em] text-[#e8e4dc]/90">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3">
                <div className="h-6 w-px bg-[rgba(247,245,242,0.15)]" />
                <div>
                  <cite className="not-italic font-display text-[1.125rem] font-medium tracking-tight text-[#f7f5f2]">
                    {r.name}
                  </cite>
                  <p className="text-[12px] font-light tracking-wide uppercase text-[#a39e96]/80 mt-0.5">{r.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
