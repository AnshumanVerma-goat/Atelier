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
    <section className="relative bg-[#2a2522] px-4 py-20 text-[#f7f5f2] sm:px-6 md:py-28 lg:px-8">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.45%22/%3E%3C/svg%3E')]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="text-[13px] font-light tracking-[0.14em] text-[#c9c4bc]">Clients</p>
          <h2 className="font-display mt-4 text-[clamp(2rem,4.5vw,3rem)] font-medium leading-[1.1] tracking-[-0.02em]">
            Words, lightly worn.
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-[rgba(247,245,242,0.12)] pt-8"
            >
              <blockquote className="text-[16px] font-light leading-[1.65] text-[#e8e4dc]">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <cite className="not-italic font-display text-[1.0625rem] font-medium text-[#f7f5f2]">
                  {r.name}
                </cite>
                <p className="mt-1 text-[13px] font-light text-[#a39e96]">{r.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
