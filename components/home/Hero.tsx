"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { restaurant } from "@/data/restaurant";
import { whatsappUrl } from "@/lib/whatsapp";
import { fadeUp, fadeIn } from "@/lib/animations";
import { FlaticonCutlery, FlaticonCalendarTable } from "@/components/icons/FlaticonIcons";

// Hero façon Feane : fond sombre pleine largeur, texte à gauche, assiette à droite.
export function Hero() {
  const t = useTranslations();
  const dish = restaurant.images.hero;

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/feane-hero-bg.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy/60" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        className="relative mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2"
      >
        <div>
          <motion.p variants={fadeIn} className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            {t("hero.kicker")}
          </motion.p>
          <motion.h1 variants={fadeUp} className="mt-3 font-heading text-6xl font-bold sm:text-7xl">
            Savora
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-2 font-heading text-2xl text-gold sm:text-3xl">
            {t("hero.title")}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
            {t("hero.subtitle")}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild className="gap-2 px-10 py-3">
              <Link href="/menu">
                <FlaticonCutlery size={17} />
                <span>{t("hero.seeMenu")}</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2 px-8 py-3 text-white">
              <Link href="/reservation">
                <FlaticonCalendarTable size={17} />
                <span>{t("hero.bookTable")}</span>
              </Link>
            </Button>
            <Button asChild variant="whatsapp" className="gap-2 px-8 py-3">
              <a href={whatsappUrl(t("wa.order"))} target="_blank" rel="noopener">
                <span>{t("hero.whatsapp")}</span>
              </a>
            </Button>
          </motion.div>

          <motion.div variants={fadeIn} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-white/80">
            <span className="font-semibold"><span className="text-gold">★</span> {t("hero.rating")} · {t("hero.reviewsCount", { count: restaurant.rating.count })}</span>
            <span><span className="text-gold">✓</span> {t("hero.terraceFeature")}</span>
            <span><span className="text-gold">✓</span> {t("hero.serviceNightFeature")}</span>
          </motion.div>
        </div>

        {/* Plat en médaillon rond, bordure jaune (signature Feane) */}
        {dish && (
          <motion.div variants={fadeIn} className="mx-auto hidden md:block">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-8 border-gold shadow-2xl lg:h-96 lg:w-96">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={dish} alt="Spécialité Savora" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}