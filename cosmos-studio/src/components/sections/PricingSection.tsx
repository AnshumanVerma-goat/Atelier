"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const PLANS = [
  {
    name: "Essential",
    desc: "Single narrative page — launches with editorial polish.",
    monthly: 2800,
    yearly: 28000,
    perks: ["Creative direction", "Responsive layout", "Typography system", "Two refinement rounds"],
  },
  {
    name: "House",
    desc: "Multi-section site for brands with archives and stories.",
    monthly: 6800,
    yearly: 72000,
    perks: ["Information architecture", "CMS-ready components", "Motion as punctuation", "Four refinement rounds"],
    featured: true,
  },
  {
    name: "Bespoke",
    desc: "Seasonal campaigns, motion studies, or retained evolution.",
    monthly: null,
    yearly: null,
    perks: ["Roadmap partnership", "Design direction", "Launch support", "Priority timeline"],
  },
];

function formatMoney(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function PricingSection() {
  const [annual, setAnnual] = useState(true);

  const hint = useMemo(
    () => (annual ? "Annual billing" : "Monthly billing"),
    [annual],
  );

  return (
    <section id="pricing" className="relative scroll-mt-20 bg-[var(--cream)] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <p className="text-[13px] font-light tracking-[0.12em] text-[var(--slate-muted)]">
              Packages
            </p>
            <h2 className="font-display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.08] tracking-[-0.02em] text-[var(--charcoal)]">
              Investment guides — final scopes are tailored.
            </h2>
          </motion.div>

          <div className="flex rounded-full border border-[var(--border-subtle)] bg-[var(--ivory)] p-1">
            <button
              type="button"
              onClick={() => setAnnual(false)}
              className={cn(
                "rounded-full px-5 py-2 text-[13px] font-normal transition-colors",
                !annual ? "bg-[var(--espresso)] text-[var(--cream)]" : "text-[var(--graphite)]",
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setAnnual(true)}
              className={cn(
                "rounded-full px-5 py-2 text-[13px] font-normal transition-colors",
                annual ? "bg-[var(--espresso)] text-[var(--cream)]" : "text-[var(--graphite)]",
              )}
            >
              Annual
            </button>
          </div>
        </div>
        <p className="mt-4 text-right text-[12px] font-light text-[var(--slate-muted)] lg:text-left">
          {hint}
        </p>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "flex flex-col rounded-[22px] border bg-[var(--ivory)]/90 p-7 transition-shadow duration-500 hover:shadow-[0_28px_70px_-50px_rgba(44,40,37,0.14)] sm:p-8",
                p.featured
                  ? "border-[var(--charcoal)]/18 shadow-[0_24px_60px_-44px_rgba(44,40,37,0.12)]"
                  : "border-[var(--border-subtle)]",
              )}
            >
              {p.featured ? (
                <span className="mb-4 inline-flex w-fit rounded-full border border-[rgba(184,166,122,0.35)] bg-[rgba(184,166,122,0.08)] px-3 py-1 text-[11px] font-normal tracking-wide text-[var(--charcoal)]">
                  Most requested
                </span>
              ) : (
                <span className="mb-4 h-[26px]" aria-hidden />
              )}
              <h3 className="font-display text-[1.5rem] font-medium text-[var(--charcoal)]">{p.name}</h3>
              <p className="mt-3 text-[15px] font-light leading-relaxed text-[var(--muted)]">{p.desc}</p>

              <div className="mt-8 border-t border-[var(--border-subtle)] pt-8">
                <motion.div
                  key={`${p.name}-${annual}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="font-display text-[2rem] font-medium tabular-nums text-[var(--charcoal)]"
                >
                  {p.monthly === null ? "Custom" : formatMoney(annual ? p.yearly / 12 : p.monthly)}
                </motion.div>
                <p className="mt-1 text-[13px] font-light text-[var(--graphite)]">
                  {p.monthly === null ? "Proposal after discovery" : "per month"}
                </p>
                {annual && p.monthly !== null ? (
                  <p className="mt-2 text-[12px] font-light text-[var(--slate-muted)]">
                    {formatMoney(p.yearly)} per year
                  </p>
                ) : null}
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex gap-3 text-[14px] font-light text-[var(--muted)]">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--gold-muted)]/70" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <MagneticButton
                variant={p.featured ? "solid" : "ghost"}
                className="mt-10 w-full min-h-[48px]"
                type="button"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {p.monthly === null ? "Book a conversation" : "Request availability"}
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
