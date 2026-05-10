"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";

type Props = Omit<ComponentProps<typeof motion.button>, "children"> & {
  children: ReactNode;
  variant?: "solid" | "ghost";
};

export function MagneticButton({
  className,
  children,
  variant = "solid",
  ...rest
}: Props) {
  return (
    <motion.button
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "rounded-full px-7 py-3 text-[15px] font-medium tracking-tight transition-colors",
        variant === "solid" &&
          "bg-[var(--espresso)] text-[var(--cream)] hover:opacity-90",
        variant === "ghost" &&
          "border border-[var(--border-subtle)] bg-transparent text-[var(--charcoal)] hover:border-[var(--charcoal)]/22",
        className,
      )}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
