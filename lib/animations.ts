// Utilitaire centralisé pour les animations scroll-triggered (Framer Motion)
// Usage : importer fadeUp, fadeIn, stagger, slideLeft, slideRight, scaleIn
import type { Variants } from "framer-motion";

/** Fondu + glissement vers le haut */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Fondu simple */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

/** Glissement depuis la gauche */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Glissement depuis la droite */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Zoom entrant */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Conteneur stagger pour animer les enfants en cascade */
export function stagger(delayChildren = 0.08, staggerChildren = 0.1): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        delayChildren,
        staggerChildren,
      },
    },
  };
}

/** Paramètres viewport standard : déclenche une seule fois, 15% visible */
export const viewport = { once: true, margin: "-60px" } as const;
