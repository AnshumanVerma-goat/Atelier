"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

const REPLIES = [
  "I can help you pick a tier, timeline, and creative direction — what are you building?",
  "If you want WebGL moments, say the word. If you want conversion-first luxury, we’ll engineer both.",
  "Share your business type + budget range and I’ll suggest the fastest premium path.",
];

export function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "you" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");

  const starter = useMemo(
    () => [
      { role: "bot" as const, text: "COSMOS assistant online. What outcome do you want in 30 days?" },
    ],
    [],
  );

  const merged = messages.length ? messages : starter;

  const send = () => {
    const t = input.trim();
    if (!t) return;
    setMessages((m) => [...m, { role: "you", text: t }, { role: "bot", text: REPLIES[m.length % REPLIES.length] }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-24 right-4 z-[85] md:bottom-28 md:right-8">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 12, filter: "blur(10px)" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-[min(92vw,380px)] overflow-hidden rounded-3xl border border-white/10 bg-black/45 shadow-[0_50px_140px_-70px_rgba(0,0,0,0.95)] backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Assistant
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60 hover:text-white"
              >
                Close
              </button>
            </div>
            <div className="max-h-[320px] space-y-3 overflow-auto px-4 py-4">
              {merged.map((m, i) => (
                <div
                  key={`${i}-${m.text}`}
                  className={cn(
                    "rounded-2xl border px-3 py-2 text-sm leading-relaxed",
                    m.role === "bot"
                      ? "border-white/10 bg-white/[0.05] text-white/75"
                      : "ml-8 border-violet-300/15 bg-violet-500/10 text-white/85",
                  )}
                >
                  {m.text}
                </div>
              ))}
            </div>
            <div className="flex gap-2 border-t border-white/10 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                className="flex-1 rounded-2xl border border-white/10 bg-black/35 px-3 py-2 text-sm text-white outline-none ring-violet-400/25 focus:ring-2"
                placeholder="Type a message…"
              />
              <button
                type="button"
                onClick={send}
                className="rounded-2xl border border-white/15 bg-white/[0.08] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white"
              >
                Send
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.button
        type="button"
        data-cursor="open"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        className="relative grid size-14 place-items-center rounded-full border border-white/10 bg-gradient-to-br from-violet-500/35 to-cyan-400/15 text-lg text-white shadow-[0_30px_90px_-40px_rgba(139,92,246,0.75)] backdrop-blur-xl"
      >
        <span className="absolute inset-0 animate-pulse rounded-full bg-violet-400/15 blur-xl" />
        <span className="relative">✦</span>
      </motion.button>
    </div>
  );
}
