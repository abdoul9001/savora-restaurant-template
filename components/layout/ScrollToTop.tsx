"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Retour en haut de page"
          className={cn(
            "fixed bottom-24 right-4 z-40 lg:bottom-8 lg:right-8",
            "flex h-11 w-11 items-center justify-center rounded-full",
            "border border-gold/40 bg-bg/90 text-gold shadow-lg backdrop-blur-md",
            "transition-all duration-200 hover:bg-gold hover:text-white hover:border-gold hover:scale-110 active:scale-95",
            "gold-glow"
          )}
        >
          <ChevronUp className="size-5" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
