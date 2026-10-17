"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/Photo";
import { restaurant } from "@/data/restaurant";
import { fadeUp, slideLeft, slideRight, stagger, viewport } from "@/lib/animations";
import { FlaticonSparkles } from "@/components/icons/FlaticonIcons";

export function AboutPreview() {
  const t = useTranslations("home.about");
  const a = useTranslations("about");

  return (
    <section className="overflow-hidden bg-navy py-20 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        {/* Colonne texte — slide depuis la gauche */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.05, 0.12)}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            <FlaticonSparkles size={16} />
            <span>{t("kicker")}</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold leading-tight text-white">
            {t("title")}
          </motion.h2>

          <motion.p variants={fadeUp} className="text-base text-white/85 leading-relaxed">
            {t("text")}
          </motion.p>

          <motion.blockquote variants={slideLeft} className="border-l-2 border-gold pl-4 py-1 italic font-heading text-xl text-white">
            {a("quote")}
          </motion.blockquote>

          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3 pt-2">
            {restaurant.stats.slice(0, 3).map((st) => (
              <div key={st.label} className="rounded-xl border border-white/15 bg-white/5 p-3 text-center">
                <span className="block font-heading text-2xl font-bold text-gold">{st.value}</span>
                <span className="block text-[11px] text-white/80 font-medium leading-tight mt-0.5">{st.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="pt-2">
            <Button asChild className="px-10 py-3">
              <Link href="/a-propos">{t("cta")}</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Visuel — slide depuis la droite */}
        <motion.div
          className="relative group"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={slideRight}
        >
          <div className="hidden" />
          <div className="relative overflow-hidden rounded-full border-8 border-gold shadow-2xl">
            <Photo
              src={restaurant.images.about}
              alt="Cadre somptueux et dîner gastronomique chez Savora Lomé"
              className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}