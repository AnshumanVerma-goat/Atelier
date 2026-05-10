"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SEQ = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
] as const;

export function EasterEgg() {
  const progress = useRef(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const normalizeKey = (e: KeyboardEvent) => {
      if (e.key.startsWith("Arrow")) return e.key;
      if (e.key.length === 1) return e.key.toLowerCase();
      return e.key.toLowerCase();
    };

    const onKey = (e: KeyboardEvent) => {
      const key = normalizeKey(e);
      const expected = SEQ[progress.current] ?? "";
      if (key === expected) {
        progress.current += 1;
      } else if (key === SEQ[0]) {
        progress.current = 1;
      } else {
        progress.current = 0;
      }

      if (progress.current >= SEQ.length) {
        progress.current = 0;
        setShow(true);
        window.setTimeout(() => setShow(false), 2400);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.92, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
          className="fixed inset-0 z-[120] grid place-items-center bg-black/55 backdrop-blur-xl"
        >
          <div className="max-w-lg rounded-[32px] border border-white/10 bg-[#070018] p-8 text-center shadow-[0_60px_140px_-70px_rgba(0,0,0,0.95)]">
            <div className="font-display text-3xl font-semibold text-white">Welcome, traveler.</div>
            <div className="mt-3 text-sm text-white/65">
              You found the hidden sequence. The universe rewards curiosity.
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
