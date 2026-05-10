"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useMemo, useRef, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "Studio" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideBar, setHideBar] = useState(false);
  const lastY = useRef(0);

  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 32], [0.82, 0.96]);
  const headerBlur = useTransform(scrollY, [0, 64], [8, 16]);
  const headerBackground = useTransform(headerBg, (v) => `rgba(247,245,242,${v})`);
  const headerBackdrop = useTransform(headerBlur, (b) => `blur(${b}px)`);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = lastY.current;
    lastY.current = y;
    if (y < 56) {
      setHideBar(false);
      return;
    }
    if (menuOpen) return;
    setHideBar(y > prev && y > 120);
  });

  const divider = useMemo(() => "inset 0 -1px 0 rgba(42,38,35,0.055)", []);

  return (
    <>
      <motion.header
        style={{
          boxShadow: divider,
        }}
        animate={{ y: hideBar ? "-100%" : 0, backgroundColor: hideBar ? "transparent" : "rgba(250, 249, 246, 0.6)" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-0 right-0 top-0 z-[60] backdrop-blur-xl border-b border-[var(--border-subtle)]/30 mix-blend-multiply"
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 sm:px-12 lg:px-20 lg:py-6">
          <a href="#top" className="font-display text-[1rem] sm:text-[1.1rem] font-medium tracking-tight text-[var(--charcoal)] transition-opacity duration-700 hover:opacity-50">
            Atelier
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[12px] uppercase tracking-[0.15em] font-medium text-[var(--charcoal)]/60 transition-colors duration-500 hover:text-[var(--charcoal)]"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center justify-center border border-[var(--charcoal)]/10 rounded-full px-5 py-2 text-[11px] uppercase tracking-[0.1em] font-medium text-[var(--charcoal)] transition-colors duration-500 hover:bg-[var(--charcoal)] hover:text-[var(--cream)]"
            >
              Inquire
            </a>

            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
              className="grid size-10 place-items-center rounded-full border border-[var(--border-subtle)]/50 bg-transparent transition-opacity duration-500 hover:opacity-50 lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <span className="flex w-[16px] flex-col gap-[4px]">
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="h-px bg-[var(--charcoal)]"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="h-px bg-[var(--charcoal)]"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  className="h-px bg-[var(--charcoal)]"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="fixed inset-0 z-[64] bg-[var(--charcoal)]/22 backdrop-blur-md lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "fixed inset-x-3 z-[65] rounded-[22px] border border-[var(--border-subtle)] bg-[var(--cream)]/94 shadow-[var(--shadow-soft)] backdrop-blur-xl backdrop-saturate-150 lg:hidden",
              )}
              style={{
                bottom: "max(5.5rem, calc(env(safe-area-inset-bottom) + 4.5rem))",
              }}
            >
              <nav className="flex flex-col px-2 py-3">
                {LINKS.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.35 }}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-[14px] px-4 py-3.5 text-[1.0625rem] font-light tracking-[-0.01em] text-[var(--charcoal)] transition-colors duration-500 hover:bg-[var(--pearl)]/60"
                  >
                    {l.label}
                  </motion.a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mx-2 mt-3 flex min-h-[52px] items-center justify-center rounded-full bg-[var(--espresso)] text-[15px] font-medium text-[var(--cream)]"
                >
                  Inquire
                </a>
              </nav>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
