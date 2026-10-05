"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { fadeUp, scaleIn, stagger, viewport } from "@/lib/animations";
import {
  FlaticonGrill,
  FlaticonShieldGuarantee,
  FlaticonWineGlass,
  FlaticonMusicLounge,
  FlaticonSparkles,
} from "@/components/icons/FlaticonIcons";

const whyIcons = [
  <FlaticonGrill key="grill" size={28} className="text-gold" />,
  <FlaticonShieldGuarantee key="shield" size={28} className="text-gold" />,
  <FlaticonWineGlass key="wine" size={28} className="text-gold" />,
  <FlaticonMusicLounge key="music" size={28} className="text-gold" />,
];

export function Why() {
  const t = useTranslations("home.why");
  const items = t.raw("items") as string[];
  const descriptions = t.raw("descriptions") as string[];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        {/* En-tête */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0, 0.1)}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-2">
            <FlaticonSparkles size={16} />
            <span>{t("kicker")}</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-fg">
            {t("title")}
          </motion.h2>
        </motion.div>

        {/* Grille des piliers en cascade */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.05, 0.13)}
        >
          {items.map((label, i) => (
            <motion.div
              key={label}
              variants={scaleIn}
              className="luxury-card group rounded-2xl border border-line bg-bg p-7 text-center shadow-card relative overflow-hidden flex flex-col justify-between"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/5 blur-2xl group-hover:bg-gold/15 transition duration-500" />

              <div>
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-bg-alt transition-transform duration-300 group-hover:scale-110 group-hover:border-gold/50 shadow-sm">
                  {whyIcons[i % whyIcons.length]}
                </div>
                <h3 className="font-heading text-xl font-bold text-fg group-hover:text-gold transition-colors">
                  {label}
                </h3>
                <p className="mt-2 text-xs text-fg-2 leading-relaxed">
                  {descriptions[i] || ""}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-line/50 text-[11px] font-mono font-semibold text-gold/80 tracking-widest">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}