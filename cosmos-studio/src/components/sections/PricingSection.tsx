"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const PLANS = [
  {
    name: "Starter Presence",
    desc: "Single elegant landing page for creators & personal profiles.",
    price: 1999,
    perks: ["Mobile-first responsive design", "Smooth animations & modern typography", "Contact integration", "2 refinement rounds", "3-5 day delivery"],
    quote: "Small in scale, precise in feeling."
  },
  {
    name: "Studio Presence",
    desc: "Multi-section site for small businesses & brands.",
    price: 3999,
    perks: ["Premium visual direction", "Custom project & gallery sections", "Targeted custom interactions", "Basic SEO & Performance setup", "7-10 day delivery"],
    featured: true,
    quote: "Built quietly, remembered deeply."
  },
  {
    name: "Signature Experience",
    desc: "Fully custom experience for premium brands & startups.",
    price: 6499,
    perks: ["Strategic visual identity & planning", "Cinematic editorial storytelling", "Advanced transitions", "Priority support & retained timeline", "Launch partnership"],
    quote: "Made for brands that prefer atmosphere over noise."
  },
];

function formatMoney(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

export function PricingSection() {
  const [activePlan, setActivePlan] = useState(0);

  return (
    <section id="pricing" className="section-pad section-fade-top relative scroll-mt-20 bg-[var(--cream)] overflow-hidden">
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.035]" />
      
      {/* Ambient background glow for active plan feeling */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-[radial-gradient(ellipse,rgba(223,217,209,0.3),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--taupe)]/90">
            Investment
          </p>
          <h2 className="font-display mt-5 text-[clamp(2rem,5vw,3.25rem)] font-medium leading-[1.04] tracking-[-0.02em] text-[var(--charcoal)]">
            Aesthetic precision. Accessible scale.
          </h2>
          <p className="mt-5 max-w-[30rem] mx-auto text-[15px] sm:text-[16px] font-light leading-[1.75] tracking-[-0.01em] text-[var(--muted)]">
            Indian independent studio pricing — designed to give local businesses and global creators a premium home online.
          </p>
        </motion.div>

        {/* Mobile: Interactive Plan Switcher */}
        <div className="mt-12 lg:hidden flex overflow-x-auto gap-2 pb-4 pl-4 pr-10 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
           {PLANS.map((p, i) => (
             <button
               key={p.name}
               onClick={() => setActivePlan(i)}
               className={cn(
                 "snap-center shrink-0 px-6 py-3 rounded-full text-[13px] font-medium transition-all duration-500 border whitespace-nowrap",
                 activePlan === i 
                  ? "bg-[var(--charcoal)] text-[var(--cream)] border-[var(--charcoal)] shadow-md"
                  : "bg-[var(--ivory)]/70 text-[var(--graphite)] border-[var(--border-subtle)] hover:bg-[var(--ivory)]"
               )}
             >
               {p.name}
             </button>
           ))}
        </div>

        {/* Mobile Plan Content */}
        <div className="mt-2 lg:hidden px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePlan}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[var(--ivory)]/80 rounded-[20px] p-7 border border-[var(--border-subtle)] shadow-[var(--shadow-soft)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-5 opacity-10">
                 <span className="font-display text-7xl italic">{"{"}</span>
              </div>
              
              <h3 className="font-display text-[1.6rem] font-medium text-[var(--charcoal)] relative z-10">{PLANS[activePlan].name}</h3>
              <p className="mt-2 text-[14px] font-light leading-relaxed text-[var(--muted)] relative z-10 max-w-[85%]">{PLANS[activePlan].desc}</p>
              
              <div className="my-6 border-b border-[var(--border-subtle)]" />
              
              <div className="mb-6">
                <span className="font-display text-[2.2rem] font-medium tracking-tight text-[var(--charcoal)]">{formatMoney(PLANS[activePlan].price)}</span>
                <span className="text-[12px] font-medium uppercase tracking-wider text-[var(--taupe)] ml-2 opacity-80">One-time</span>
              </div>
              
              <ul className="space-y-3.5 mb-8 relative z-10">
                {PLANS[activePlan].perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[var(--charcoal)]/30" />
                    <span className="text-[14px] font-light leading-snug text-[var(--muted)]">{perk}</span>
                  </li>
                ))}
              </ul>
              <p className="italic font-display text-[1rem] text-[var(--burgundy)]/80 text-center mb-6">"{PLANS[activePlan].quote}"</p>
              
              <MagneticButton
                onClick={() => window.location.href = "#contact"}
                className="w-full justify-center bg-[var(--charcoal)] text-[var(--cream)]"
                variant="solid"
              >
                Inquire availability
              </MagneticButton>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop Layout */}
        <div className="mt-16 hidden lg:grid gap-6 grid-cols-3">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "flex flex-col rounded-[24px] border bg-[var(--ivory)]/70 p-8 xl:p-10 transition-[box-shadow,transform,border-color,background-color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-[var(--ivory)] relative overflow-hidden group",
                p.featured
                  ? "border-[var(--charcoal)]/15 shadow-[0_24px_60px_-44px_rgba(42,38,35,0.12)] bg-[var(--ivory)]"
                  : "border-[var(--border-subtle)] hover:shadow-[var(--shadow-soft)]"
              )}
            >
              {p.featured && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[var(--charcoal)]/20 to-transparent opacity-50" />
              )}
              
              <div className="font-display absolute -right-4 -top-8 text-[120px] text-[var(--charcoal)] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 select-none pointer-events-none italic">
                {"{"}
              </div>

              {p.featured ? (
                <span className="mb-5 inline-flex w-fit items-center rounded-full border border-[var(--charcoal)]/10 bg-[var(--cream)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--charcoal)] shadow-sm">
                  Most requested
                </span>
              ) : (
                <span className="mb-5 h-[26px]" aria-hidden />
              )}
              <h3 className="font-display text-[1.75rem] font-medium tracking-tight text-[var(--charcoal)]">{p.name}</h3>
              <p className="mt-3 text-[14px] font-light leading-[1.6] text-[var(--muted)] min-h-[3rem]">{p.desc}</p>

              <div className="mt-8 border-t border-[var(--border-subtle)] pt-8">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[2.5rem] font-medium tabular-nums tracking-tracking text-[var(--charcoal)] leading-none">
                    {formatMoney(p.price)}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-wide text-[var(--taupe)]">One-time</span>
                </div>
              </div>

              <ul className="mt-8 flex-1 space-y-4">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex gap-3 text-[14px] font-light text-[var(--muted)] items-start">
                    <span className="mt-[0.4rem] size-1.5 shrink-0 rounded-full bg-[var(--charcoal)]/20 transition-colors duration-500 group-hover:bg-[var(--charcoal)]/40" />
                    <span className="leading-snug">{perk}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]/50">
                <p className="italic font-display text-[1.1rem] text-[var(--burgundy)]/70 text-center mb-8">"{p.quote}"</p>
                <MagneticButton
                  onClick={() => window.location.href = "#contact"}
                  className={cn(
                    "w-full justify-center transition-all duration-500",
                    p.featured ? "bg-[var(--charcoal)] text-[var(--cream)] hover:shadow-lg hover:-translate-y-0.5" : "bg-[var(--cream)] border border-[var(--border-subtle)] text-[var(--charcoal)] hover:bg-[var(--charcoal)] hover:text-[var(--cream)]"
                  )}
                  variant={p.featured ? "solid" : "ghost"}
                >
                  Inquire availability
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
