"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function TiltCard({ children, className }: Props) {
  return (
    <div
      className={cn(
        "rounded-[22px] border border-[var(--border-subtle)] bg-[var(--ivory)]/85 px-6 py-7 shadow-[0_1px_0_rgba(255,255,255,0.65)_inset] backdrop-blur-[1px] transition-[box-shadow,transform,border-color] duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-px hover:border-[var(--charcoal)]/10 hover:shadow-[var(--shadow-soft)] sm:px-7 sm:py-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
