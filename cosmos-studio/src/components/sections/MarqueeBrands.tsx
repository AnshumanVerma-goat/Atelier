"use client";

import { motion } from "framer-motion";

const BRANDS = [
  "Velvet Table",
  "Orbit",
  "Nebula",
  "Pulse",
  "Lumen",
  "Cipher",
  "Atlas",
  "Astra",
];

export function MarqueeBrands() {
  const row = [...BRANDS, ...BRANDS];
  return (
    <div className="relative overflow-hidden border-y border-white/[0.05] bg-[var(--navy)]/40 py-4 md:py-5">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,var(--midnight),transparent_14%,transparent_86%,var(--midnight))]" />
      <motion.div
        className="flex w-max gap-12 px-6 md:gap-16 md:px-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {row.map((b, i) => (
          <div
            key={`${b}-${i}`}
            className="select-none font-display text-[15px] font-semibold tracking-tight text-white/[0.22]"
          >
            {b}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
