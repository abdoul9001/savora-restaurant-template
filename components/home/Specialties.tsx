"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { menu } from "@/data/menu";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/Photo";
import { whatsappUrl } from "@/lib/whatsapp";
import { fadeUp, scaleIn, stagger, viewport } from "@/lib/animations";
import {
  FlaticonCloche,
} from "@/components/icons/FlaticonIcons";

export function Specialties() {
  const t = useTranslations("home.specialties");
  const mTrans = useTranslations("menu");
  const locale = useLocale() as Locale;
  // Sélectionner les 4 créations phares avec photos
  const items = menu.filter((m) => m.available).slice(0, 4);

  return (
    <section className="bg-bg-alt/60 py-20 border-y border-line/60">
      <div className="mx-auto max-w-6xl px-5">
        {/* En-tête animé */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0, 0.1)}
        >
          <div>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-2">
              <FlaticonCloche size={16} />
              <span>{t("kicker")}</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-fg">
              {t("title")}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-2 text-fg-2 max-w-xl text-sm sm:text-base">
              {t("subtitle")}
            </motion.p>
          </div>
          <motion.div variants={fadeUp}>
            <Button asChild variant="outline" className="self-start md:self-auto">
              <Link href="/menu">{t("cta")}</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Grille des plats en cascade */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.05, 0.12)}
        >
          {items.map((m) => (
            <motion.article
              key={m.id}
              variants={scaleIn}
              className="luxury-card group flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-bg shadow-card transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Photo
                  src={m.image}
                  alt={m.name[locale]}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {m.badge && (
                  <span className="absolute top-3 left-3 rounded-full bg-bg/90 backdrop-blur-md border border-gold/40 px-3 py-1 text-[11px] font-semibold text-gold shadow-sm">
                    {m.badge[locale]}
                  </span>
                )}
                {m.spicy && (
                  <span className="absolute top-3 right-3 rounded-full bg-red-950/80 backdrop-blur-md border border-red-500/40 px-2 py-0.5 text-[10px] font-semibold text-red-200">
                    🌶️ Épicé
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col justify-between p-5 space-y-3">
                <div>
                  <h3 className="font-heading text-xl font-bold text-fg group-hover:text-gold transition-colors">
                    {m.name[locale]}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs text-fg-2 leading-relaxed">
                    {m.description[locale]}
                  </p>
                </div>

                <div className="pt-2 border-t border-line/60 flex items-center justify-between">
                  <p className="font-heading text-lg font-bold text-gold">
                    {m.price.toLocaleString(locale)} <span className="text-xs font-sans font-semibold">{mTrans("fcfa")}</span>
                  </p>
                  <Button asChild variant="whatsapp" className="px-3 py-1.5 text-xs">
                    <a
                      target="_blank"
                      rel="noopener"
                      href={whatsappUrl(
                        `Bonjour INTIMISSIME,\nJe souhaite commander le plat "${m.name[locale]}".`
                      )}
                    >
                      Commander
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}