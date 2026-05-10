"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

/** Minimal surface — no tilt or glow for editorial calm */
export function TiltCard({ children, className }: Props) {
  return (
    <div
      className={cn(
        "rounded-[22px] border border-[var(--border-subtle)] bg-[var(--ivory)]/80 px-6 py-6 shadow-[0_1px_0_rgba(255,255,255,0.7)_inset] backdrop-blur-[2px] transition-shadow duration-500 hover:shadow-[0_24px_60px_-48px_rgba(44,40,37,0.12)] sm:px-7 sm:py-7",
        className,
      )}
    >
      {children}
    </div>
  );
}
