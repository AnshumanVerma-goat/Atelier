"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [n, setN] = useState(1284);

  useEffect(() => {
    const id = window.setInterval(() => {
      setN((v) => v + (Math.random() > 0.65 ? 1 : 0));
    }, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="pointer-events-none fixed left-4 top-[72px] z-[75] hidden md:block"
    >
      <div className="rounded-full border border-white/10 bg-black/35 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45 backdrop-blur-xl">
        Live orbit · <span className="text-white/80">{n.toLocaleString()}</span>
      </div>
    </motion.div>
  );
}
