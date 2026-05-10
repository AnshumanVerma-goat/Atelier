"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function WellnessExperience() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#4A5D4E] font-sans selection:bg-[#4A5D4E]/20">
      
      {/* Blurred decorative orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#E8F0EA] blur-[100px] opacity-70 -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#F5E6E6] blur-[100px] opacity-70 -z-10" />

      <nav className="fixed top-0 w-full p-8 md:p-12 flex justify-between items-center z-50 mix-blend-multiply">
        <span className="font-medium tracking-wide text-sm opacity-80">Aura</span>
        <Link href="/#work" className="text-xs font-medium uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity">Close /</Link>
      </nav>

      <section className="min-h-screen pt-32 pb-16 px-6 md:px-12 max-w-[1600px] mx-auto flex flex-col justify-center">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="aspect-[3/4] sm:aspect-[4/5] w-full max-w-md mx-auto relative rounded-[2rem] overflow-hidden bg-white/50 backdrop-blur-3xl shadow-[0_20px_40px_-20px_rgba(74,93,78,0.1)] border border-white p-4">
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80"
                  alt="Wellness skincare"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[-0.02em] leading-[1.1] mb-8">
              Breathe <br/>
              <span className="italic text-[#8C9C90]">in the calm.</span>
            </h1>
            <p className="max-w-md mx-auto lg:mx-0 text-base md:text-lg opacity-80 leading-relaxed font-light">
              A serene digital environment reflecting the purity of specialized skincare. Utilizing soft glassmorphism, delicate typography, and vast whitespace to evoke a sense of clarity.
            </p>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1, duration: 1 }}
               className="mt-12 flex items-center justify-center lg:justify-start gap-4"
            >
               <div className="h-px w-12 bg-[#4A5D4E]/30" />
               <span className="text-xs uppercase tracking-[0.2em] font-medium opacity-60">View Ingredients</span>
            </motion.div>
          </motion.div>

        </div>

      </section>

    </main>
  );
}