"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.35 });

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[80] h-[2px] bg-white/5">
      <motion.div
        style={{ scaleX: p, transformOrigin: "0% 50%" }}
        className="h-full bg-gradient-to-r from-violet-400 via-cyan-300 to-fuchsia-400"
      />
    </div>
  );
}
