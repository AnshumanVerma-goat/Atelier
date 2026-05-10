"use client";

import { motion } from "framer-motion";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/15555555555"
      target="_blank"
      rel="noreferrer"
      data-cursor="open"
      className="fixed bottom-24 left-4 z-[84] md:bottom-28 md:left-8"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="grid size-12 place-items-center rounded-full border border-emerald-300/25 bg-emerald-400/15 text-emerald-100 shadow-[0_30px_90px_-40px_rgba(16,185,129,0.55)] backdrop-blur-xl"
      >
        <span className="text-sm font-semibold">WA</span>
      </motion.div>
    </a>
  );
}
