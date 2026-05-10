"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function SoundToggle() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("cosmos-sound");
    if (saved !== "1") return;
    queueMicrotask(() => setOn(true));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cosmos-sound", on ? "1" : "0");
  }, [on]);

  return (
    <motion.button
      type="button"
      onClick={() => setOn((v) => !v)}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="fixed right-4 top-[72px] z-[75] hidden rounded-full border border-white/10 bg-black/35 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55 backdrop-blur-xl md:block"
      title="Ambient audio toggle (demo)"
    >
      Sound: {on ? "On" : "Off"}
    </motion.button>
  );
}
