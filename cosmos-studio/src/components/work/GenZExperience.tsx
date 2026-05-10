"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function GenZExperience() {
  return (
    <main className="min-h-screen bg-[#DBFF00] text-black overflow-hidden selection:bg-black selection:text-[#DBFF00]">
      {/* Marquee Header */}
      <div className="fixed top-0 w-full overflow-hidden bg-black text-[#DBFF00] py-3 z-50 border-b-[3px] border-black flex">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="flex whitespace-nowrap text-xs sm:text-sm font-bold uppercase tracking-widest"
        >
          {Array(10).fill("CREATIVE CHAOS • NOT YOUR AVERAGE PORTFOLIO • ").map((text, i) => (
            <span key={i} className="px-4">{text}</span>
          ))}
        </motion.div>
      </div>

      <nav className="fixed bottom-6 left-6 z-50">
        <Link href="/#work" className="inline-flex items-center justify-center p-4 bg-black text-white hover:bg-white hover:text-black transition-colors rounded-full font-bold uppercase text-[10px] sm:text-xs">
          ← Go Back
        </Link>
      </nav>

      <section className="min-h-screen relative flex items-center justify-center px-4 pt-16">
        
        {/* Abstract shapes / bold stickers */}
        <motion.div 
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 12 }}
          transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
          className="absolute top-1/4 right-[10%] sm:right-[20%] w-24 h-24 sm:w-32 sm:h-32 bg-[#FF00FF] rounded-full mix-blend-multiply flex items-center justify-center text-white font-bold rotate-12 z-0"
        >
          <span className="text-center text-[10px] uppercase leading-none">Made<br/>You<br/>Look</span>
        </motion.div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "backOut" }}
          className="relative z-10 w-full max-w-4xl"
        >
          {/* Main Content Card */}
          <div className="bg-white border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-2xl p-6 sm:p-12">
            <h1 className="text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-[0.85] tracking-tighter mb-6">
              Loud & <br/>
              <span className="text-[#FF00FF]">Modular.</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-8 items-end">
              <p className="text-sm sm:text-base font-medium leading-relaxed border-l-4 border-black pl-4">
                Breaking the grid. Neo-brutalism meets Gen-Z aesthetic. High contrast, aggressive typography, and bold interactive components that demand attention.
              </p>

              <div className="aspect-[4/3] w-full border-[3px] border-black bg-gray-200 relative overflow-hidden rounded-xl">
                 <Image 
                    src="https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&w=1200&q=80"
                    alt="Creative portrait"
                    fill
                    className="object-cover contrast-[1.2] saturate-[1.5]"
                 />
              </div>
            </div>
          </div>
        </motion.div>

      </section>
    </main>
  );
}