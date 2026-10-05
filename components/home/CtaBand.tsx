"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/whatsapp";
import { fadeUp, scaleIn, stagger, viewport } from "@/lib/animations";
import {
  FlaticonCalendarTable,
  FlaticonSparkles,
} from "@/components/icons/FlaticonIcons";

export function CtaBand() {
  const t = useTranslations();

  return (
    <section className="py-20 px-5 relative overflow-hidden">
      <motion.div
        className="mx-auto max-w-5xl rounded-3xl border border-gold/40 bg-gradient-to-br from-bg via-bg-alt to-bg p-8 sm:p-14 text-center shadow-2xl relative"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={scaleIn}
      >
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />

        <motion.div
          className="relative z-10 max-w-2xl mx-auto space-y-4"
          variants={stagger(0.05, 0.12)}
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            <FlaticonSparkles size={16} />
            <span>{t("home.cta.kicker")}</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="font-heading text-4xl sm:text-5xl font-bold text-fg">
            {t("home.cta.title")}
          </motion.h2>

          <motion.p variants={fadeUp} className="text-fg-2 text-sm sm:text-base leading-relaxed">
            {t("home.cta.subtitle")}
          </motion.p>

          <motion.div variants={fadeUp} className="pt-4 flex flex-wrap justify-center gap-4">
            <Button asChild className="gap-2 px-7 py-3.5 shadow-lg">
              <Link href="/reservation">
                <FlaticonCalendarTable size={18} />
                <span>{t("nav.cta")}</span>
              </Link>
            </Button>

            <Button asChild variant="whatsapp" className="gap-2 px-7 py-3.5">
              <a href={whatsappUrl(t("wa.order"))} target="_blank" rel="noopener">
                <FlaticonSparkles size={16} />
                <span>{t("hero.whatsapp")}</span>
              </a>
            </Button>
          </motion.div>

          <motion.p variants={fadeUp} className="pt-2 text-xs text-fg-mute font-medium">
            Service voiturier · Salons climatisés & terrasse végétale · Lomé, Togo
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}