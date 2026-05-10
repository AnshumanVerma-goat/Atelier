"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function FashionExperience() {
  return (
    <main className="min-h-screen bg-[#ece9e4] text-[#1a1a1a] selection:bg-[#1a1a1a] selection:text-[#ece9e4]">
      {/* Custom distinct navigation for Fashion */}
      <nav className="fixed top-0 inset-x-0 p-6 flex justify-between items-center z-50 mix-blend-difference text-[#e5e5e5]">
        <Link href="/#work" className="text-[10px] uppercase font-medium tracking-[0.2em]">Close</Link>
        <div className="text-[10px] uppercase font-medium tracking-[0.2em]">Maison Velours</div>
      </nav>

      <section className="h-[100svh] relative flex flex-col justify-end p-6 sm:p-12">
        <motion.div
           initial={{ opacity: 0, scale: 1.05 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
           className="absolute inset-0 z-0"
        >
          <Image 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80"
            alt="Fashion Hero"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#ece9e4] via-transparent to-transparent opacity-80" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="relative z-10 w-full"
        >
          <h1 className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.85] tracking-tight uppercase">Maison<br/>Velours</h1>
          <div className="grid grid-cols-2 gap-4 mt-12 border-t border-[#1a1a1a]/20 pt-6">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] opacity-60">Role</p>
              <p className="text-[13px] mt-2 font-medium">Art Direction<br/>Digital Platform</p>
            </div>
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] opacity-60">Vibe</p>
              <p className="text-[13px] mt-2 font-medium">Quiet Luxury<br/>Patience</p>
            </div>
          </div>
        </motion.div>
      </section>
      
      <section className="py-32 px-6 sm:px-12 max-w-4xl mx-auto">
        <p className="text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.3] font-light">
          A restaurant treating negative space like silence. We designed a typography-led menu and reservation experience focusing purely on the rhythm of ingredients.
        </p>
      </section>
    </main>
  );
}