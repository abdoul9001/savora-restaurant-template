"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/Photo";
import { restaurant } from "@/data/restaurant";
import { whatsappUrl } from "@/lib/whatsapp";
import { fadeUp, fadeIn, viewport } from "@/lib/animations";
import {
  FlaticonCalendarTable,
  FlaticonCutlery,
  FlaticonSparkles,
  FlaticonAwardMedal,
} from "@/components/icons/FlaticonIcons";

export function Hero() {
  const t = useTranslations();
  const hero = restaurant.images.hero;

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-5 py-24 text-center">
      {/* Photo de fond immersive avec assombrissement cinématique */}
      {hero ? (
        <div className="absolute inset-0">
          <Photo
            src={hero}
            alt="Ambiance restaurant & lounge INTIMISSIME Lomé"
            priority
            sizes="100vw"
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/40 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-bg)_85%)] opacity-80" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_srgb,var(--gold)_22%,transparent),transparent_65%)]" />
      )}

      {/* Halo d'ambiance doré */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
        }}
        className="relative mx-auto max-w-4xl pt-6"
      >
        {/* Badge d'excellence */}
        <motion.div variants={fadeIn} className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-bg/85 px-4 py-1.5 backdrop-blur-md shadow-sm">
          <FlaticonAwardMedal size={16} className="text-gold" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {t("hero.kicker")}
          </span>
        </motion.div>

        {/* Titre principal majestueux */}
        <motion.h1 variants={fadeUp} className="mt-6 font-heading text-6xl font-bold tracking-wider text-fg sm:text-7xl md:text-8xl">
          INTIMISSIME
        </motion.h1>

        <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-lg font-light text-fg-2 sm:text-xl md:text-2xl font-heading italic text-gold">
          {t("hero.title")}
        </motion.p>

        <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-2xl text-sm text-fg-2 sm:text-base leading-relaxed">
          {t("hero.subtitle")}
        </motion.p>

        {/* Boutons d'action */}
        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap justify-center items-center gap-3">
          <Button asChild className="gap-2 px-6 py-3.5 shadow-lg">
            <Link href="/menu">
              <FlaticonCutlery size={17} />
              <span>{t("hero.seeMenu")}</span>
            </Link>
          </Button>

          <Button asChild variant="outline" className="gap-2 px-6 py-3.5 backdrop-blur-sm">
            <Link href="/reservation">
              <FlaticonCalendarTable size={17} className="text-gold" />
              <span>{t("hero.bookTable")}</span>
            </Link>
          </Button>

          <Button asChild variant="whatsapp" className="gap-2 px-6 py-3.5">
            <a href={whatsappUrl(t("wa.order"))} target="_blank" rel="noopener">
              <FlaticonSparkles size={16} />
              <span>{t("hero.whatsapp")}</span>
            </a>
          </Button>
        </motion.div>

        {/* Piliers rassurants sous le hero */}
        <motion.div variants={fadeIn} className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-line/60 pt-6 text-xs text-fg-2">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="text-gold">★</span>
            <span className="font-semibold text-fg">{t("hero.rating")}</span>
            <span>{t("hero.reviewsCount", { count: 18 })}</span>
          </div>
          <span className="hidden sm:inline text-line">•</span>
          <div className="flex items-center gap-1.5 font-medium">
            <span className="text-gold">✓</span>
            <span>{t("hero.terraceFeature")}</span>
          </div>
          <span className="hidden sm:inline text-line">•</span>
          <div className="flex items-center gap-1.5 font-medium">
            <span className="text-gold">✓</span>
            <span>{t("hero.serviceNightFeature")}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}