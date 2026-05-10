"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export function ArtisanExperience() {
  return (
    <main className="min-h-screen bg-[#F6F4EE] text-[#4A3B32] font-serif selection:bg-[#E2C7A8] selection:text-[#4A3B32]">
      {/* Paper texture overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/rice-paper-2.png')" }} />

      <nav className="fixed top-0 p-6 md:p-10 w-full flex justify-between z-40">
        <Link href="/#work" className="font-mono text-xs tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">Back to Studio</Link>
        <span className="font-mono text-xs tracking-widest uppercase opacity-60">Est. 2024</span>
      </nav>

      <section className="min-h-screen flex items-center justify-center relative px-6 py-24 object-contain">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, rotate: -2, y: 20 }}
            animate={{ opacity: 1, rotate: 0, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="order-2 md:order-1 relative aspect-[3/4] md:aspect-[4/5] w-full p-4 bg-white shadow-xl rotate-1 hover:rotate-0 transition-transform duration-700"
          >
            <div className="relative w-full h-full overflow-hidden border border-[#eae6df]">
              <Image 
                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=80"
                alt="Artisan coffee pouring"
                fill
                className="object-cover sepia-[0.2] saturate-[0.8]"
              />
            </div>
            <p className="mt-4 text-center font-handwriting text-xl text-[#786354] opacity-80 rotate-[-2deg]">Morning ritual.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="order-1 md:order-2 space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-extralight tracking-tight leading-[0.9]">
                Warmth <br/>in <i className="italic text-[#A8886C]">details.</i>
              </h1>
              <div className="w-12 h-px bg-[#A8886C]" />
            </div>
            <p className="font-sans text-sm md:text-base opacity-70 leading-relaxed font-light">
              Crafting a digital presence that feels as tactical and grounded as the physical space. Imperfect layouts, handwritten annotations, and earthy palettes.
            </p>
          </motion.div>

        </div>
      </section>
    </main>
  );
}