"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { scaleIn, stagger, viewport } from "@/lib/animations";
import {
  FlaticonChefHat,
  FlaticonWineGlass,
  FlaticonSparkles,
  FlaticonAwardMedal,
} from "@/components/icons/FlaticonIcons";

const icons = [
  <FlaticonChefHat key="chef" size={32} className="text-gold" />,
  <FlaticonWineGlass key="wine" size={32} className="text-gold" />,
  <FlaticonSparkles key="sparkle" size={32} className="text-gold" />,
  <FlaticonAwardMedal key="award" size={32} className="text-gold" />,
];

export function InfoCards() {
  const t = useTranslations();
  const info = t.raw("info") as { t: string; d: string }[];

  return (
    <section className="relative -mt-6 z-10 py-10 px-5">
      <motion.div
        className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger(0.05, 0.12)}
      >
        {info.map((i, index) => (
          <motion.div
            key={i.t}
            variants={scaleIn}
            className="luxury-card group rounded-2xl border border-line bg-bg/90 p-7 text-center shadow-card backdrop-blur-sm"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-bg-alt transition-transform duration-300 group-hover:scale-110 group-hover:border-gold/50">
              {icons[index % icons.length]}
            </div>
            <h3 className="font-heading text-xl font-bold text-fg group-hover:text-gold transition-colors">
              {i.t}
            </h3>
            <p className="mt-2 text-xs text-fg-2 leading-relaxed">{i.d}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
