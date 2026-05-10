"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const POINTS = [
  {
    title: "Ultra modern UI/UX",
    body: "Interfaces that feel expensive: spacing systems, typographic rhythm, and motion logic.",
  },
  {
    title: "Silky performance",
    body: "No jank. Lazy loading, GPU-friendly motion, and obsessive optimization.",
  },
  {
    title: "Mobile-first craft",
    body: "The pocket screen gets the same cinematic love as the desktop canvas.",
  },
  {
    title: "SEO that respects design",
    body: "Structured data, semantics, and speed — without sacrificing the vibe.",
  },
  {
    title: "Fast delivery, premium polish",
    body: "Agency-grade outcomes with founder-level attention and clarity.",
  },
  {
    title: "Brand-first storytelling",
    body: "Your positioning drives the pixels — not a trendy template.",
  },
  {
    title: "Cinematic visuals",
    body: "Light, depth, grain, glow — a controlled universe around your message.",
  },
  {
    title: "Conversion clarity",
    body: "Beautiful is not enough. The experience is engineered to sell.",
  },
];

export function WhySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const hue = useTransform(scrollYProgress, [0, 1], [260, 200]);
  const bg = useTransform(hue, (h) => {
    const h2 = (h + 40) % 360;
    return `radial-gradient(circle at 20% 20%, hsla(${h}, 90%, 62%, 0.22), transparent 45%), radial-gradient(circle at 80% 40%, hsla(${h2}, 90%, 60%, 0.14), transparent 42%)`;
  });

  return (
    <section ref={ref} id="why" className="relative scroll-mt-24 bg-[#030014]">
      <div className="pointer-events-none sticky top-0 h-[100svh] overflow-hidden">
        <motion.div style={{ backgroundImage: bg }} className="absolute inset-0" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')]" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
              Why COSMOS
            </div>
            <h2 className="font-display mt-4 text-balance text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              Not normal freelance energy.
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/60 md:text-lg">
              A premium build is a product: narrative, interaction, performance, and trust — shipped as
              one coherent universe.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {POINTS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.04, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-white/10 bg-black/25 p-6 backdrop-blur-xl",
                  "shadow-[0_30px_90px_-60px_rgba(0,0,0,0.85)]",
                )}
              >
                <div className="pointer-events-none absolute -inset-24 bg-gradient-to-br from-violet-500/15 via-transparent to-cyan-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-start gap-4">
                  <div className="mt-1 grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-sm text-white/70">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="font-display text-xl font-semibold tracking-tight text-white">
                      {p.title}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-white/60">{p.body}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative h-[140vh]" aria-hidden />
    </section>
  );
}
