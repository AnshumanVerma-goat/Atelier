"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useState } from "react";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "Studio" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 48], [0.76, 0.94]);
  const headerBlur = useTransform(scrollY, [0, 80], [10, 18]);
  const headerBackground = useTransform(headerBg, (v) => `rgba(247,245,242,${v})`);
  const headerBackdrop = useTransform(headerBlur, (b) => `blur(${b}px)`);

  const divider = useMemo(() => "0 1px 0 rgba(44,40,37,0.06)", []);

  return (
    <motion.header
      style={{
        backgroundColor: headerBackground,
        backdropFilter: headerBackdrop,
        WebkitBackdropFilter: headerBackdrop,
        boxShadow: divider,
      }}
      className="fixed left-0 right-0 top-0 z-[60]"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-[1.125rem] font-semibold tracking-tight text-[var(--charcoal)]">
            Atelier
          </span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-normal tracking-wide text-[var(--graphite)] transition-colors hover:text-[var(--charcoal)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-[var(--espresso)] px-5 py-2.5 text-[14px] font-medium text-[var(--cream)] transition-opacity hover:opacity-90 lg:inline-flex"
          >
            Inquire
          </a>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
            className="grid size-11 place-items-center rounded-full border border-[var(--border-subtle)] bg-[var(--ivory)] lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-[18px] flex-col gap-[5px]">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="h-px bg-[var(--charcoal)]"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-px bg-[var(--charcoal)]"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="h-px bg-[var(--charcoal)]"
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "overflow-hidden border-t border-[var(--border-subtle)] bg-[var(--cream)]/98 backdrop-blur-md lg:hidden",
            )}
          >
            <nav className="flex flex-col px-4 py-4 sm:px-6">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.03 * i, duration: 0.35 }}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[var(--border-subtle)] py-4 text-[1.125rem] font-normal text-[var(--charcoal)] last:border-0"
                >
                  {l.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 flex min-h-[52px] items-center justify-center rounded-full bg-[var(--espresso)] text-[15px] font-medium text-[var(--cream)]"
              >
                Inquire
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
