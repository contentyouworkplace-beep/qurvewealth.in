"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

export default function AnimateOnScroll({ children, delay = 0, className = "", y = 20 }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
