"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const COMMANDS: { cmd: string; out: string }[] = [
  { cmd: "cosmos status", out: "OK · systems nominal · latency 12ms · shaders warm" },
  { cmd: "cosmos deploy --luxury", out: "queued · build graph optimized · motion tree compiled" },
  { cmd: "cosmos audit perf", out: "Lighthouse target: 95+ · CLS guarded · images responsive" },
];

export function LiveTerminalSection() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");

  const active = COMMANDS[idx] ?? COMMANDS[0];
  const history = useMemo(() => COMMANDS.slice(0, idx), [idx]);

  useEffect(() => {
    let pos = 0;
    let interval = 0;
    let timeout = 0;

    queueMicrotask(() => setText(""));

    const tick = () => {
      pos += 1;
      setText(active.cmd.slice(0, pos));
      if (pos >= active.cmd.length) {
        window.clearInterval(interval);
        timeout = window.setTimeout(() => setIdx((i) => (i + 1) % COMMANDS.length), 850);
      }
    };
    interval = window.setInterval(tick, 42);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timeout);
    };
  }, [active.cmd, idx]);

  return (
    <section className="relative bg-[#020010] px-6 py-16 md:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-black/40 shadow-[0_50px_140px_-70px_rgba(0,0,0,0.95)] backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
            Live terminal
          </div>
          <div className="flex gap-2">
            <span className="size-2 rounded-full bg-rose-400/80" />
            <span className="size-2 rounded-full bg-amber-300/80" />
            <span className="size-2 rounded-full bg-emerald-400/80" />
          </div>
        </div>

        <div className="space-y-3 p-5 font-mono text-[12px] leading-relaxed text-emerald-200/85 md:p-7 md:text-sm">
          {history.map((l) => (
            <div key={l.cmd} className="space-y-2">
              <div>
                <span className="text-white/35">$ </span>
                {l.cmd}
              </div>
              <div className="text-cyan-200/75">{l.out}</div>
            </div>
          ))}

          <div className="space-y-2">
            <div>
              <span className="text-white/35">$ </span>
              {text}
              <motion.span
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 0.9, repeat: Infinity }}
                className="inline-block w-2 translate-y-[2px] bg-emerald-200/80"
              >
                ▍
              </motion.span>
            </div>
            {text === active.cmd ? <div className="text-cyan-200/75">{active.out}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
