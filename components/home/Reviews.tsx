"use client";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { restaurant } from "@/data/restaurant";
import { fadeUp, scaleIn, stagger, viewport } from "@/lib/animations";
import { FlaticonSparkles, FlaticonShieldGuarantee } from "@/components/icons/FlaticonIcons";

export function Reviews() {
  const t = useTranslations("home.reviews");
  const locale = useLocale();
  const { score, count } = restaurant.rating;
  const reviewItems = t.raw("items") as {
    name: string;
    city: string;
    comment: string;
    rating: number;
    badge?: string;
    details?: string;
  }[];

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

          <motion.div variants={fadeUp} className="mt-4 flex items-center justify-center gap-3">
            <span className="font-heading text-4xl font-bold text-fg">
              {score.toLocaleString(locale)}
            </span>
            <div className="flex gap-1" aria-hidden="true">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="size-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-medium text-fg-2">
              ({t("count", { count })})
            </span>
          </motion.div>
        </motion.div>

        {/* Grille des témoignages clients réels Google Maps */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger(0.05, 0.12)}
        >
          {reviewItems.map((rev, idx) => (
            <motion.div
              key={`${rev.name}-${idx}`}
              variants={scaleIn}
              className="luxury-card flex flex-col justify-between rounded-md bg-navy p-6 text-white"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: rev.rating }, (_, i) => (
                      <Star key={i} className="size-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-whatsapp font-medium">
                    <FlaticonShieldGuarantee size={13} />
                    <span>Google</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-white/90 italic leading-relaxed">
                  « {rev.comment} »
                </p>

                {rev.details && (
                  <p className="mt-3 text-[11px] text-gold font-medium">
                    {rev.details}
                  </p>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-gold bg-white/10 font-heading font-bold text-gold text-lg">
                  {rev.name[0]}
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-white truncate">{rev.name}</h4>
                  <p className="text-[11px] text-white/60 truncate">
                    {rev.badge || rev.city}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <Button asChild className="px-10 py-2.5">
            <a href={restaurant.mapsUrl} target="_blank" rel="noopener">
              {t("cta")}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}