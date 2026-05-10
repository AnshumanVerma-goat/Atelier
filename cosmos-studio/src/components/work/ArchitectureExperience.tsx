"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function ArchitectureExperience() {
  return (
    <main className="min-h-screen bg-[#fAf9f7] text-[#4a4946]">
      {/* Custom distinct navigation for Architecture */}
      <nav className="fixed top-0 inset-x-0 p-8 flex justify-between items-center z-50 border-b border-[#e2e0dc] bg-[#fAf9f7]/90 backdrop-blur-md">
        <div className="text-[11px] font-mono uppercase tracking-widest text-[#8a8782]">01. Kanso Minimal</div>
        <Link href="/#work" className="text-[11px] font-mono uppercase tracking-widest text-[#8a8782] hover:text-[#4a4946]">Index</Link>
      </nav>

      <section className="pt-40 px-8 sm:px-16 grid lg:grid-cols-12 gap-8 lg:gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-4 flex flex-col justify-between h-full min-h-[40vh]"
        >
          <div>
            <h1 className="text-[2rem] sm:text-[3rem] font-light tracking-[-0.03em] leading-tight">Architecture<br/>as void.</h1>
            <p className="mt-8 text-[14px] leading-relaxed opacity-80">Bare materials and negative space. The digital extension of Kanso uses a blueprint-like grid, prioritizing structural precision over decoration.</p>
          </div>
          <div className="hidden lg:block space-y-4">
             <div className="h-px bg-[#e2e0dc] w-full" />
             <p className="text-[10px] font-mono uppercase tracking-widest opacity-60">Status: Built / 2026</p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
           animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
           transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
           className="lg:col-span-8 relative aspect-[4/5] sm:aspect-[16/10] w-full bg-[#eee] overflow-hidden"
        >
          <Image 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Minimalist concrete architecture"
            fill
            className="object-cover grayscale mix-blend-multiply opacity-80"
            priority
          />
        </motion.div>
      </section>
    </main>
  );
}