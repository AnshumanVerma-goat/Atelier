"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

const MESSAGES = [
  "Crafting Digital Universes",
  "Experiences Beyond Websites",
  "Building Brands That Feel Alive",
];

type Props = {
  onDone: () => void;
};

export function IntroLoader({ onDone }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const logo = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = root.current;
    const copy = text.current;
    if (!el || !copy) return;

    document.body.style.overflow = "hidden";

    const setMsg = (i: number) => {
      copy.textContent = MESSAGES[i] ?? "";
    };

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        document.body.style.overflow = "";
        onDone();
      },
    });

    tl.fromTo(
      logo.current,
      { scale: 0.86, opacity: 0, filter: "blur(8px)" },
      { scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.9 },
    )
      .fromTo(
        line.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.75 },
        "-=0.35",
      )
      .add(() => setMsg(0))
      .fromTo(
        copy,
        { y: 16, opacity: 0, filter: "blur(6px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.55 },
      )
      .to(copy, { opacity: 0, y: -10, filter: "blur(6px)", duration: 0.45 }, "+=0.55")
      .add(() => setMsg(1))
      .fromTo(
        copy,
        { y: 16, opacity: 0, filter: "blur(6px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.55 },
      )
      .to(copy, { opacity: 0, y: -10, filter: "blur(6px)", duration: 0.45 }, "+=0.55")
      .add(() => setMsg(2))
      .fromTo(
        copy,
        { y: 16, opacity: 0, filter: "blur(6px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.55 },
      )
      .to(copy, { opacity: 0, y: -8, duration: 0.35 }, "+=0.55")
      .to(
        [logo.current, line.current],
        { opacity: 0, y: -10, filter: "blur(10px)", duration: 0.6 },
        "-=0.1",
      )
      .to(
        el,
        {
          clipPath: "inset(0% 0% 100% 0%)",
          opacity: 0.25,
          duration: 0.95,
        },
        "-=0.35",
      );

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
  }, [onDone]);

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#020008]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(124,58,237,0.22),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(56,189,248,0.12),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E')]" />

      <div ref={logo} className="relative flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/30 to-cyan-400/10 shadow-[0_0_40px_rgba(139,92,246,0.35)] backdrop-blur-xl" />
          <div className="font-display text-xl font-semibold tracking-tight text-white">
            COSMOS<span className="text-violet-300/90">.</span>STUDIO
          </div>
        </div>
        <div
          ref={line}
          className="h-px w-40 origin-left bg-gradient-to-r from-transparent via-white/50 to-transparent"
        />
        <p
          ref={text}
          className="max-w-md text-center font-sans text-sm font-medium tracking-wide text-white/70"
        />
      </div>
    </div>
  );
}
