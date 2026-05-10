"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

const LABELS: Record<string, string> = {
  explore: "Explore",
  open: "Open",
  project: "Project",
  view: "Work",
  book: "Book",
  link: "Visit",
};

export function CustomCursor() {
  const [label, setLabel] = useState<string | null>(null);
  const [hidden, setHidden] = useState(true);
  const [finePointer, setFinePointer] = useState(false);
  const last = useRef({ x: 0, y: 0, t: 0 });
  const stretch = useMotionValue(1);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 28, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 260, damping: 28, mass: 0.35 });
  const fx = useSpring(x, { stiffness: 380, damping: 36, mass: 0.2 });
  const fy = useSpring(y, { stiffness: 380, damping: 36, mass: 0.2 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const apply = () => setFinePointer(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!finePointer) return;

    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      const dt = Math.max(1, now - last.current.t);
      const vx = (e.clientX - last.current.x) / dt;
      const vy = (e.clientY - last.current.y) / dt;
      const speed = Math.hypot(vx, vy);
      stretch.set(1 + Math.min(0.35, speed * 0.055));
      last.current = { x: e.clientX, y: e.clientY, t: now };

      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };

    const onLeave = () => setHidden(true);

    const onOver = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const el = t.closest("[data-cursor]") as HTMLElement | null;
      if (el) {
        const key = el.dataset.cursor ?? "";
        setLabel(LABELS[key] ?? el.dataset.cursorLabel ?? null);
      } else {
        setLabel(null);
      }
    };

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onOver);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [finePointer, stretch, x, y]);

  useEffect(() => {
    let raf = 0;
    const decay = () => {
      stretch.set(stretch.get() + (1 - stretch.get()) * 0.09);
      raf = requestAnimationFrame(decay);
    };
    raf = requestAnimationFrame(decay);
    return () => cancelAnimationFrame(raf);
  }, [stretch]);

  if (!finePointer) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[9998] mix-blend-screen",
          hidden && "opacity-0",
        )}
        style={{ x: fx, y: fy, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="size-2.5 rounded-full bg-white shadow-[0_0_28px_rgba(94,234,212,0.55),0_0_48px_rgba(99,102,241,0.35)]"
          style={{ scale: stretch }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-[9997]",
          hidden && "opacity-0",
        )}
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="size-9 rounded-full border border-white/15 bg-[radial-gradient(circle_at_35%_35%,rgba(91,108,255,0.18),transparent_58%)] backdrop-blur-[2px]" />
      </motion.div>
      {label ? (
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="pointer-events-none fixed left-0 top-0 z-[9999]"
          style={{ x: sx, y: sy, translateX: "14px", translateY: "-40px" }}
        >
          <span className="rounded-full border border-white/[0.08] bg-[rgba(8,18,37,0.72)] px-3 py-1 text-[11px] font-medium tracking-wide text-white/85 backdrop-blur-xl">
            {label}
          </span>
        </motion.div>
      ) : null}
    </>
  );
}
