"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function TechExperience() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30 font-sans overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(30,40,60,0.5),rgba(10,10,10,1)_60%)] -z-10" />

      {/* Tech Navigation */}
      <nav className="fixed top-0 inset-x-0 p-6 flex justify-between items-center z-50">
        <Link href="/#work" className="text-[12px] font-mono opacity-50 hover:opacity-100 transition-opacity">← Back</Link>
        <div className="flex gap-2 items-center">
            <span className="size-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[12px] font-mono opacity-80">v.2.0 LIVE</span>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-xl">
             <span className="text-[11px] font-medium tracking-wide uppercase opacity-70">Case Study</span>
             <span className="text-[11px] font-medium tracking-wide uppercase text-blue-400">Northline</span>
          </div>
          <h1 className="text-[clamp(3.5rem,8vw,6rem)] font-bold tracking-tighter leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">
            Quiet interface clarity.
          </h1>
          <p className="text-[16px] sm:text-[18px] text-white/50 max-w-xl mx-auto font-light leading-relaxed">
            Proof before polish. An immersive dark-mode product experience prioritizing data density and rapid cognitive scanning for enterprise tooling.
          </p>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4, duration: 1 }}
           className="w-full max-w-5xl aspect-video mt-16 rounded-2xl border border-white/10 bg-white/5 relative overflow-hidden backdrop-blur-3xl shadow-[0_0_80px_rgba(30,60,255,0.1)]"
        >
          <Image 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
            alt="Dashboard"
            fill
            className="object-cover opacity-60 mix-blend-luminosity"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </motion.div>
      </section>
    </main>
  );
}