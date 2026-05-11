"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Cinematic staggered parallax
  const y1 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -30]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-[90svh] sm:min-h-[100svh] overflow-hidden flex flex-col justify-center bg-[#ECEAE4]"
    >
      {/* Deep Layer 0: Cinematic Baseline Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9F8F5] via-transparent to-[#DCD8CD] opacity-80" />

      {/* Deep Layer 1: Slow Cinematic Blooms (Warmth & Haze) */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-[15%] top-[-10%] size-[min(110vw,900px)] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(225,210,190,0.6)_0%,transparent_70%)] blur-[100px] mix-blend-multiply"
      />
      
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="pointer-events-none absolute -left-[20%] bottom-[5%] size-[min(90vw,700px)] rounded-full bg-[radial-gradient(circle,rgba(245,235,225,0.7)_0%,transparent_60%)] blur-[90px]"
      />

      {/* Overlay Texture: Film grain & Vignette Shadow */}
      <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png')]" />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(42,38,35,0.06)]" />

      <div className="relative z-10 mx-auto flex h-full min-h-[90svh] w-full max-w-[1400px] flex-col justify-center px-6 sm:px-12 lg:px-20 pt-32 pb-16">
        
        <motion.div style={{ opacity: opacityFade }} className="relative h-full flex flex-col justify-center w-full">
          
          {/* Poetic & Staggered Typography */}
          <div className="relative w-full mb-16 sm:mb-24">
            
            {/* Ambient Background Text (Art Direction depth) */}
            <motion.div 
               style={{ y: y1 }} 
               className="absolute -top-10 sm:-top-24 -left-4 sm:-left-12 text-[100px] sm:text-[220px] font-serif italic text-[var(--charcoal)] opacity-[0.015] select-none pointer-events-none tracking-tighter"
            >
              Presence
            </motion.div>

            <h1 className="font-display text-[clamp(3.25rem,8vw,6.5rem)] font-light leading-[1.02] tracking-[-0.03em] text-[var(--charcoal)] mix-blend-darken relative z-10 flex flex-col">
              <motion.span
                initial={{ opacity: 0, y: 35, rotate: 1 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                className="block origin-bottom-left"
              >
                Editorial websites
              </motion.span>
              
              <motion.span
                initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.8, delay: 0.35, ease: "easeOut" }}
                className="block text-[0.8em] mt-1.5 sm:mt-5 italic text-[var(--taupe)] font-serif self-start sm:ml-[8%]"
              >
                for modern brands.
              </motion.span>
            </h1>
          </div>

          {/* Asymmetrical Offset Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 w-full relative z-20">
             <div className="md:col-start-6 md:col-span-6 lg:col-start-7 lg:col-span-5 xl:col-start-8 xl:col-span-4 flex flex-col items-start pr-4 sm:pr-0">
                <motion.div
                   style={{ y: y2 }}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 1.4, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                   className="relative"
                >
                  <div className="absolute -left-5 sm:-left-8 top-2.5 h-px w-3 sm:w-5 bg-[var(--charcoal)]/30" />
                  <p className="text-[15px] sm:text-[15.5px] font-light leading-[1.75] tracking-[-0.01em] text-[var(--charcoal)]/85 sm:text-justify max-w-[22rem]">
                    An independent design and development practice. We build custom websites, headless ecommerce platforms, and booking systems for hospitality and fashion labels. Grounded in strict typography systems, UI/UX interaction studies, and clean frontend development.
                  </p>
                </motion.div>

                {/* Highly Editorial CTA */}
                <motion.div
                   style={{ y: y3 }}
                   initial={{ opacity: 0, filter: "blur(5px)" }}
                   animate={{ opacity: 1, filter: "blur(0px)" }}
                   transition={{ duration: 1.4, delay: 1.2, ease: "easeOut" }}
                   className="mt-12 sm:mt-16"
                >
                  <Link
                    href="#work"
                    className="group relative flex items-center gap-5 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-medium text-[var(--charcoal)] w-fit"
                  >
                    <span className="relative overflow-hidden py-1">
                      <span className="inline-block transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:-translate-y-[120%]">View Portfolio</span>
                      <span className="absolute inset-0 translate-y-[120%] inline-block transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:translate-y-[10%]">View Portfolio</span>
                    </span>
                    <div className="flex justify-center items-center h-[1px] w-12 sm:w-16 overflow-hidden bg-transparent relative">
                       {/* Idle Line */}
                       <div className="absolute inset-0 bg-[var(--taupe)]/40 transition-opacity duration-300 group-hover:opacity-0" />
                       {/* Animated Hover Line */}
                       <div className="absolute inset-0 bg-[var(--charcoal)] -translate-x-[101%] transition-transform duration-[800ms] ease-[0.16,1,0.3,1] group-hover:translate-x-0" />
                    </div>
                  </Link>
                </motion.div>
             </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
