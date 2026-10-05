"use client";
import { useCallback, useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { gallery, galleryCategories, type GalleryCategory } from "@/data/gallery";
import { Photo } from "@/components/ui/Photo";
import { cn } from "@/lib/utils";
import { scaleIn, stagger, viewport } from "@/lib/animations";

const navBtn =
  "absolute flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md border border-white/15 transition-all duration-200 hover:bg-gold hover:border-gold hover:scale-110 active:scale-95";

export function GalleryGrid() {
  const t = useTranslations("gallery");
  const locale = useLocale() as Locale;
  const [cat, setCat] = useState<"all" | GalleryCategory>("all");
  const [open, setOpen] = useState<number | null>(null);

  const items = gallery.filter((g) => cat === "all" || g.category === cat);
  const count = items.length;

  const go = useCallback(
    (d: number) => setOpen((o) => (o === null ? o : (o + d + count) % count)),
    [count]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  // Bloquer le scroll quand lightbox ouverte
  useEffect(() => {
    document.body.style.overflow = open !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const current = open !== null ? items[open] : null;

  return (
    <>
      {/* Filtres par catégorie */}
      <div className="mb-8 flex flex-wrap gap-2">
        {(["all", ...galleryCategories] as const).map((c) => {
          const isSelected = c === cat;
          return (
            <button
              key={c}
              onClick={() => { setCat(c); setOpen(null); }}
              className={cn(
                "rounded-full border px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 active:scale-95",
                isSelected
                  ? "border-gold bg-gold text-white shadow-md shadow-gold/25"
                  : "border-line bg-bg-alt text-fg-2 hover:border-gold/50 hover:text-fg"
              )}
            >
              {t(c)}
            </button>
          );
        })}
      </div>

      {/* Grille photographique masonry-like */}
      <motion.div
        className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger(0.03, 0.08)}
      >
        {items.map((g, i) => (
          <motion.button
            key={g.id}
            variants={scaleIn}
            onClick={() => setOpen(i)}
            className="luxury-card group relative w-full overflow-hidden rounded-2xl border border-line text-left shadow-card block break-inside-avoid"
          >
            <Photo
              src={g.src}
              alt={g.title[locale]}
              className={cn(
                "w-full object-cover transition-transform duration-700 group-hover:scale-105",
                // Hauteurs alternées pour effet masonry visuel
                i % 3 === 0 ? "aspect-[4/3]" : i % 3 === 1 ? "aspect-[4/5]" : "aspect-square"
              )}
            />

            {/* Overlay d'information au survol */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-5">
              <span className="text-[10px] uppercase font-semibold text-gold tracking-widest">
                {t(g.category)}
              </span>
              <h3 className="font-heading text-lg font-bold text-white mt-0.5">
                {g.title[locale]}
              </h3>
              <p className="text-xs text-gray-300 mt-1 line-clamp-2">
                {g.caption[locale]}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-gold">
                <ZoomIn className="size-3.5" />
                <span>Agrandir</span>
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Lightbox plein écran améliorée */}
      <AnimatePresence>
        {current && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.title[locale]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/96 p-4 sm:p-8 backdrop-blur-sm"
          >
            {/* Bouton fermer */}
            <button
              aria-label={t("close")}
              onClick={() => setOpen(null)}
              className={cn(navBtn, "right-4 top-4 sm:right-6 sm:top-6 z-10")}
            >
              <X className="size-5" />
            </button>

            {/* Navigation prev/next */}
            {count > 1 && (
              <>
                <button
                  aria-label={t("prev")}
                  onClick={(e) => { e.stopPropagation(); go(-1); }}
                  className={cn(navBtn, "left-3 top-1/2 -translate-y-1/2 sm:left-5")}
                >
                  <ChevronLeft className="size-6" />
                </button>

                <button
                  aria-label={t("next")}
                  onClick={(e) => { e.stopPropagation(); go(1); }}
                  className={cn(navBtn, "right-3 top-1/2 -translate-y-1/2 sm:right-5")}
                >
                  <ChevronRight className="size-6" />
                </button>
              </>
            )}

            {/* Contenu lightbox */}
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-neutral-900 shadow-2xl"
            >
              {/* Image */}
              <div className="relative bg-black" style={{ aspectRatio: "16/10" }}>
                <Photo
                  src={current.src}
                  alt={current.title[locale]}
                  sizes="100vw"
                  priority
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Footer avec infos + compteur */}
              <div className="p-5 flex items-center justify-between bg-neutral-950/95 backdrop-blur-sm text-white gap-4">
                <div className="min-w-0">
                  <span className="text-[10px] uppercase font-semibold text-gold tracking-widest block">
                    {t(current.category)}
                  </span>
                  <p className="font-heading text-xl font-bold mt-0.5 truncate">
                    {current.title[locale]}
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5 line-clamp-1">
                    {current.caption[locale]}
                  </p>
                </div>

                {/* Compteur + dots de navigation */}
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="text-xs text-neutral-500 font-mono tabular-nums">
                    {(open ?? 0) + 1} / {count}
                  </span>
                  {count > 1 && count <= 10 && (
                    <div className="flex gap-1">
                      {items.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => { e.stopPropagation(); setOpen(i); }}
                          className={cn(
                            "h-1.5 rounded-full transition-all duration-300",
                            i === open ? "w-4 bg-gold" : "w-1.5 bg-neutral-600 hover:bg-neutral-400"
                          )}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}