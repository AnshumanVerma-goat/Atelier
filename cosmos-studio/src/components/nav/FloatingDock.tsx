"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ITEMS = [
  { href: "#top", label: "Home", icon: "⌁" },
  { href: "#services", label: "Services", icon: "◆" },
  { href: "#work", label: "Work", icon: "◎" },
  { href: "#contact", label: "Book", icon: "→" },
];

export function FloatingDock() {
  return (
    <div className="pointer-events-none fixed bottom-6 left-0 right-0 z-[70] flex justify-center px-4 md:bottom-8">
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "pointer-events-auto flex items-center gap-1 rounded-full border border-white/10 bg-black/35 p-1.5",
          "shadow-[0_30px_90px_-55px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.06)_inset] backdrop-blur-2xl",
        )}
      >
        {ITEMS.map((it) => (
          <motion.a
            key={it.href}
            href={it.href}
            data-cursor="explore"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex size-11 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/[0.07] hover:text-white"
            title={it.label}
          >
            <span className="text-sm">{it.icon}</span>
            <span className="pointer-events-none absolute -top-9 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 bg-black/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80 opacity-0 backdrop-blur-xl transition-opacity group-hover:opacity-100 md:block">
              {it.label}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
