"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function EditorialScrollProgress() {
  const { scrollYProgress } = useScroll();
  const p = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.4 });

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[80] h-[2px] bg-[var(--stone)]/35">
      <motion.div
        style={{ scaleX: p, transformOrigin: "0% 50%" }}
        className="h-full bg-[var(--espresso)]/55"
      />
    </div>
  );
}
