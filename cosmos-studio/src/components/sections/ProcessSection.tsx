"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    title: "Discovery",
    body: "Goals, audience, offers, constraints — turned into a sharp creative brief.",
    icon: "◎",
  },
  {
    title: "Strategy",
    body: "Information architecture, narrative, and conversion paths — before pixels.",
    icon: "◇",
  },
  {
    title: "Design",
    body: "Luxury UI systems, motion language, and interactive prototypes you can feel.",
    icon: "✦",
  },
  {
    title: "Development",
    body: "Next-level engineering: performance, accessibility, and scalable structure.",
    icon: "⌁",
  },
  {
    title: "Launch",
    body: "Analytics, polish passes, and a confident go-live — no surprises.",
    icon: "→",
  },
  {
    title: "Growth",
    body: "Iterative upgrades: landing experiments, content, and ongoing refinement.",
    icon: "∞",
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScroll = () => Math.max(0, track.scrollWidth - window.innerWidth + 160);
      gsap.fromTo(
        track,
        { x: 0 },
        {
          x: () => -getScroll(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScroll()}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative scroll-mt-24 bg-[#020010]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.16),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-24 md:px-10 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
            Process
          </div>
          <h2 className="font-display mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
            A premium agency rhythm.
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/60 md:text-lg">
            Horizontal, cinematic, intentional — every step connects to the next with clarity (and a
            little drama).
          </p>
        </motion.div>
      </div>

      <div className="relative pb-24">
        <div
          ref={trackRef}
          className="flex w-max items-stretch gap-5 px-6 md:gap-7 md:px-10"
        >
          {STEPS.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.03, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[min(86vw,420px)] shrink-0 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-7 shadow-[0_40px_120px_-70px_rgba(0,0,0,0.95)] backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute -inset-24 bg-gradient-to-br from-cyan-400/10 via-transparent to-violet-500/15 opacity-70 blur-3xl" />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
                    Step {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="font-display mt-3 text-3xl font-semibold tracking-tight text-white">
                    {s.title}
                  </div>
                </div>
                <div className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-black/35 text-lg text-white/75">
                  {s.icon}
                </div>
              </div>
              <p className="relative mt-5 text-sm leading-relaxed text-white/65">{s.body}</p>

              <div className="relative mt-7 h-px w-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <div className="relative mt-4 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.22em] text-white/40">
                <span>Orbit</span>
                <span className="text-white/60">{i === STEPS.length - 1 ? "Apogee" : "Transfer"}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
