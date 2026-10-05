"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { gallery } from "@/data/gallery";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/Photo";
import { fadeUp, scaleIn, stagger, viewport } from "@/lib/animations";
import { FlaticonSparkles } from "@/components/icons/FlaticonIcons";

export function GalleryPreview() {
  const t = useTranslations("home.gallery");
  const g = useTranslations("gallery");
  const locale = useLocale() as Locale;

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        {/* En-tête */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0, 0.1)}
        >
          <div>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-2">
              <FlaticonSparkles size={16} />
              <span>{t("kicker")}</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-fg">
              {t("title")}
            </motion.h2>
          </div>
          <motion.div variants={fadeUp}>
            <Button asChild variant="outline">
              <Link href="/galerie">{t("cta")}</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Grille photos en cascade */}
        <motion.div
          className="grid grid-cols-2 gap-4 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.04, 0.09)}
        >
          {gallery.slice(0, 6).map((p) => (
            <motion.div key={p.id} variants={scaleIn}>
              <Link
                href="/galerie"
                className="luxury-card group relative block overflow-hidden rounded-2xl border border-line shadow-card aspect-[4/3]"
              >
                <Photo
                  src={p.src}
                  alt={p.title[locale]}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4">
                  <span className="text-[10px] uppercase font-semibold text-gold tracking-widest">
                    {g(p.category)}
                  </span>
                  <p className="font-heading text-base font-bold text-white">
                    {p.title[locale]}
                  </p>
                  <p className="text-[11px] text-gray-300 line-clamp-1">
                    {p.caption[locale]}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}