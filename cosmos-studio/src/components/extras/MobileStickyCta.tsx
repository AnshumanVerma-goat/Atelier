"use client";

import { motion } from "framer-motion";

export function MobileStickyCta() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[55] pb-[max(1.5rem,env(safe-area-inset-bottom))] lg:hidden px-6">
      <div className="pointer-events-auto mx-auto max-w-[20rem]">
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex min-h-[44px] w-full items-center justify-center rounded-xl border border-[var(--border-subtle)] bg-[var(--cream)]/75 px-6 text-[13px] font-medium tracking-wide text-[var(--charcoal)] shadow-[0_8px_32px_-12px_rgba(42,38,35,0.1)] backdrop-blur-xl backdrop-saturate-150 transition-all hover:bg-[var(--cream)]/90 active:scale-[0.98]"
        >
          Begin a project
        </motion.a>
      </div>
    </div>
  );
}
