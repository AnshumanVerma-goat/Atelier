"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export function PageReveal({ children }: Props) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    queueMicrotask(() => setMounted(true));
  }, []);

  return (
    <motion.div
      initial={{ opacity: reduce ? 1 : 0 }}
      animate={{ opacity: mounted ? 1 : 0 }}
      transition={{ duration: reduce ? 0 : 0.95, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
