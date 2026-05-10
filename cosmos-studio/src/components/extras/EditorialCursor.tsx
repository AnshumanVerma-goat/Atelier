"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function EditorialCursor() {
  const [fine, setFine] = useState(false);
  const [reduce, setReduce] = useState(true);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 420, damping: 38, mass: 0.45 });
  const sy = useSpring(y, { stiffness: 420, damping: 38, mass: 0.45 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setFine(mq.matches);
      setReduce(rm.matches);
    };
    apply();
    mq.addEventListener("change", apply);
    rm.addEventListener("change", apply);
    return () => {
      mq.removeEventListener("change", apply);
      rm.removeEventListener("change", apply);
    };
  }, []);

  useEffect(() => {
    if (!fine || reduce) return;

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [fine, reduce, x, y]);

  if (!fine || reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden mix-blend-multiply lg:block"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="size-[7px] rounded-full bg-[var(--espresso)]/75 ring-1 ring-[var(--cream)]/90" />
    </motion.div>
  );
}
