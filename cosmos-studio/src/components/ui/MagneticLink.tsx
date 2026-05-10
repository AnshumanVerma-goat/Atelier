"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";
import { useRef } from "react";

type Props = Omit<ComponentProps<typeof motion.a>, "children"> & {
  children: ReactNode;
  variant?: "solid" | "outline";
};

export function MagneticLink({
  className,
  children,
  variant = "solid",
  ...rest
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 280, damping: 26, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 280, damping: 26, mass: 0.35 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.12);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.12);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.992 }}
      transition={{ duration: 0.22 }}
      className={cn(
        "inline-flex min-h-[52px] items-center justify-center rounded-full px-9 text-[15px] font-medium transition-[opacity,box-shadow] duration-500",
        variant === "solid" &&
          "bg-[var(--espresso)] text-[var(--cream)] shadow-[var(--shadow-soft)] hover:opacity-[0.93]",
        variant === "outline" &&
          "border border-[var(--border-subtle)] bg-transparent text-[var(--charcoal)] hover:border-[var(--charcoal)]/18 hover:shadow-[var(--shadow-soft)]",
        className,
      )}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
