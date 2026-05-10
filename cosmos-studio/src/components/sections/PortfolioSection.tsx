"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const PROJECTS = [
  {
    name: "Maison Velours",
    type: "Restaurant",
    metric: "Fully booked",
    detail: "Typography-led menu, reservations, and photography rhythm.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
    alt: "Dimly lit fine dining interior",
    gridClass:
      "lg:col-span-7 lg:row-span-2 lg:row-start-1 lg:col-start-1 flex min-h-0 flex-col",
    imageClass: "aspect-[4/5] sm:aspect-[4/3] lg:min-h-[min(52vh,520px)] lg:aspect-auto",
  },
  {
    name: "Stillshore",
    type: "Fashion retail",
    metric: "+34% engagement",
    detail: "Editorial grids, soft motion, and product storytelling.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
    alt: "Minimal fashion styling flat lay",
    gridClass: "lg:col-span-5 lg:row-start-1 lg:col-start-8 flex flex-col",
    imageClass: "aspect-[4/5] sm:aspect-square",
  },
  {
    name: "Northline",
    type: "Product",
    metric: "2× qualified demos",
    detail: "Quiet interface clarity.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    alt: "Bright architectural office space",
    gridClass: "lg:col-span-5 lg:row-start-2 lg:col-start-8 flex flex-col",
    imageClass: "aspect-[4/5] sm:aspect-square",
  },
  {
    name: "Atelier Lumen",
    type: "Wellness",
    metric: "Waitlist active",
    detail: "Warm palette, generous whitespace, trust-first layout.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    alt: "Calm spa reception area",
    gridClass: "lg:col-span-7 lg:row-start-3 lg:col-start-1 flex flex-col",
    imageClass: "aspect-[16/10] sm:aspect-[2/1]",
  },
  {
    name: "Kanso Minimal",
    type: "Architecture",
    metric: "Global press",
    detail: "Bare materials and negative space.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    alt: "Minimalist concrete architecture",
    gridClass: "lg:col-span-5 lg:row-start-3 lg:col-start-8 flex flex-col",
    imageClass: "aspect-[16/11] sm:aspect-square"
  },
  {
    name: "Aura Skincare",
    type: "Beauty",
    metric: "Sold out",
    detail: "Tactile glass, liquid transitions.",
    image:
      "https://images.unsplash.com/photo-1615397323068-d0f5ce276f59?auto=format&fit=crop&w=800&q=80",
    alt: "Luxury skincare bottle",
    gridClass: "hidden", // hidden on desktop grid to maintain the tight 5-layout
    imageClass: "aspect-[16/11] sm:aspect-square"
  }
] as const;

const PROJECT_URLS = [
  "/work/maison-velours",
  "/work/stillshore",
  "/work/northline",
  "/work/atelier-lumen",
  "/work/kanso-minimal",
  "/work/aura-skincare",
];

export function PortfolioSection() {
  const [open, setOpen] = useState<number | null>(null);
  const active = useMemo(() => (open === null ? null : PROJECTS[open] ?? null), [open]);

  return (
    <section
      id="work"
      className="section-pad section-fade-top relative scroll-mt-20 bg-[var(--ivory)]"
    >
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.04]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="text-[12px] font-light tracking-[0.14em] text-[var(--taupe)] sm:text-[13px]">
            Selected projects
          </p>
          <h2 className="font-display mt-4 text-[clamp(1.875rem,4.8vw,3.125rem)] font-medium leading-[1.06] tracking-[-0.026em] text-[var(--charcoal)]">
            Composed under pressure.
          </h2>
        </motion.div>

        {/* Mobile: Editorial Asymmetric Layout */}
        <div className="mt-12 flex flex-col gap-5 lg:hidden px-4 sm:px-6">
          {/* 1. Featured Large Project */}
          <Link
            href={PROJECT_URLS[0]}
            className="group relative w-full overflow-hidden rounded-[20px] aspect-[4/5] sm:aspect-[3/4] text-left border border-[rgba(255,255,255,0.1)] shadow-[0_24px_60px_-40px_rgba(42,38,35,0.18)]"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image src={PROJECTS[0].image} alt={PROJECTS[0].alt} fill sizes="100vw" className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a1715]/90" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.2)_100%)]" />
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between z-10">
                 <span className="self-end rounded-full bg-[#f7f5f2]/10 backdrop-blur-md border border-[#f7f5f2]/20 px-3.5 py-1.5 text-[9px] uppercase tracking-[0.2em] font-medium text-[#f7f5f2] shadow-sm">Featured</span>
                 <div>
                    <div className="flex items-center gap-3">
                       <div className="h-px w-6 bg-[#f7f5f2]/40" />
                       <p className="text-[10px] uppercase tracking-[0.18em] font-medium text-[#f7f5f2]/80">{PROJECTS[0].type}</p>
                    </div>
                    <p className="font-display mt-3 text-[2.25rem] sm:text-[2.75rem] leading-[1.05] font-medium tracking-tight text-[#f7f5f2] drop-shadow-md">{PROJECTS[0].name}</p>
                    <p className="mt-3 max-w-[90%] text-[13px] sm:text-[14px] font-light text-[#f7f5f2]/90 leading-relaxed mix-blend-screen mix-blend-normal">{PROJECTS[0].detail}</p>
                 </div>
              </div>
            </motion.div>
          </Link>

          {/* 2. Compact Twin Projects */}
          <div className="grid grid-cols-2 gap-4 mt-2">
             {[1, 2].map((idx) => {
               return (
                 <Link
                    key={idx}
                    href={PROJECT_URLS[idx]}
                    className="group relative overflow-hidden rounded-[16px] aspect-square text-left bg-[var(--ivory)] border border-[var(--border-subtle)] shadow-[0_12px_40px_-20px_rgba(42,38,35,0.08)] block"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-20px" }}
                      transition={{ delay: idx * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0"
                    >
                      <Image src={PROJECTS[idx].image} alt={PROJECTS[idx].alt} fill sizes="50vw" className="object-cover opacity-85 mix-blend-multiply transition-[transform,opacity] duration-[1200ms] group-hover:scale-105 group-hover:opacity-100" />
                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-[var(--cream)]/90 to-transparent">
                         <p className="font-display text-[1.4rem] font-medium tracking-tight text-[var(--charcoal)]">{PROJECTS[idx].name}</p>
                         <p className="text-[9px] uppercase flex items-center justify-between text-[var(--taupe)] font-medium tracking-[0.16em] mt-1.5 opacity-90">
                           <span>{PROJECTS[idx].type}</span> 
                           <span className="text-[12px] font-light">↗</span>
                         </p>
                      </div>
                    </motion.div>
                 </Link>
               );
             })}
          </div>

          {/* 3. Wide Cinematic Project */}
          <Link
            href={PROJECT_URLS[4]}
            className="group mt-2 relative w-full overflow-hidden rounded-[16px] aspect-[16/10] sm:aspect-[2/1] text-left border border-[var(--border-subtle)] shadow-[0_16px_50px_-24px_rgba(42,38,35,0.12)] bg-[var(--charcoal)] block"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image src={PROJECTS[4].image} alt={PROJECTS[4].alt} fill sizes="100vw" className="object-cover opacity-90 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/80 via-transparent to-transparent group-hover:opacity-80 transition-opacity duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="font-display text-[1.5rem] font-medium tracking-tight text-[#f7f5f2]">{PROJECTS[4].name}</p>
                  <div className="h-px w-full bg-[#f7f5f2]/20 mt-3.5 mb-2.5 transition-all duration-700 group-hover:bg-[#f7f5f2]/40 group-hover:w-[95%]" />
                  <div className="flex justify-between items-center text-[10px] uppercase font-medium text-[#f7f5f2]/80 tracking-[0.16em]">
                     <span>{PROJECTS[4].type}</span>
                     <span className="opacity-70">{PROJECTS[4].metric}</span>
                  </div>
              </div>
            </motion.div>
          </Link>

          {/* 4. Swipeable Mini Gallery (Archive) */}
          <div className="mt-4 -mx-4 sm:-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pl-4 sm:pl-6 pr-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
             <div className="shrink-0 flex items-center justify-center snap-center w-[60px] ml-2 text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--taupe)]/60 rotate-180 [writing-mode:vertical-rl]">
               Archive
             </div>
             {[3, 5].map((idx) => {
               return (
                 <Link
                   key={idx}
                   href={PROJECT_URLS[idx]}
                   className="group relative w-[240px] sm:w-[280px] shrink-0 snap-center overflow-hidden rounded-[14px] text-left aspect-[16/11] border border-[var(--border-subtle)] shadow-sm bg-[var(--ivory)] block"
                 >
                   <motion.div
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                     className="absolute inset-0"
                   >
                     <Image src={PROJECTS[idx].image} alt={PROJECTS[idx].alt} fill sizes="60vw" className="object-cover opacity-95 transition-transform duration-[1200ms] group-hover:scale-105" />
                     <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[var(--charcoal)]/90 via-[var(--charcoal)]/30 to-transparent flex flex-col justify-end pt-12">
                        <p className="font-display text-[1.2rem] text-[#f7f5f2] font-medium leading-none tracking-tight">{PROJECTS[idx].name}</p>
                        <p className="text-[9px] uppercase tracking-[0.16em] text-[#f7f5f2]/80 mt-1">{PROJECTS[idx].type}</p>
                     </div>
                   </motion.div>
                 </Link>
               );
             })}
          </div>
        </div>

        {/* Desktop: asymmetric editorial grid */}
        <div className="mt-14 hidden gap-5 lg:grid lg:grid-cols-12 lg:gap-6">
          {PROJECTS.map((p, i) => {
             return (
            <Link
              key={p.name}
              href={PROJECT_URLS[i]}
              className={cn(
                "group min-h-0 overflow-hidden rounded-[24px] border border-[var(--border-subtle)] bg-[var(--cream)] text-left shadow-[var(--shadow-soft)] transition-[border-color,box-shadow] duration-700 hover:border-[var(--charcoal)]/12 hover:shadow-[0_40px_100px_-54px_rgba(42,38,35,0.2)] block",
                p.gridClass,
              )}
            >
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="h-full flex flex-col"
              >
                <div className={cn("relative min-h-[200px] w-full flex-1 overflow-hidden", p.imageClass)}>
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-[transform] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--charcoal)]/55 via-[var(--charcoal)]/10 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-1 p-7 opacity-95 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[11px] font-light tracking-[0.12em] text-[var(--cream)]/80">
                      {p.type}
                    </p>
                    <p className="font-display mt-2 text-[clamp(1.5rem,2.4vw,2.25rem)] font-medium tracking-[-0.022em] text-[var(--cream)]">
                      {p.name}
                    </p>
                    <p className="mt-2 max-w-sm text-[13px] font-light leading-relaxed text-[var(--cream)]/85">
                      {p.detail}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 px-7 py-6">
                  <span className="text-[12px] font-normal tracking-[-0.01em] text-[var(--burgundy)]">
                    {p.metric}
                  </span>
                  <span className="text-[12px] font-normal text-[var(--charcoal)]/45 transition-colors duration-500 group-hover:text-[var(--charcoal)]">
                    Case study →
                  </span>
                </div>
              </motion.div>
            </Link>
          )})}
        </div>
      </div>
    </section>
  );
}
