"use client";
import { useState, useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { menu } from "@/data/menu";
import type { MenuCategory } from "@/types/menu";
import { Button } from "@/components/ui/button";
import { Photo } from "@/components/ui/Photo";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import {
  FlaticonCloche,
  FlaticonCutlery,
  FlaticonGrill,
  FlaticonSparkles,
  FlaticonCocktail,
} from "@/components/icons/FlaticonIcons";

const categoryList: { key: "all" | MenuCategory; icon?: React.ReactNode }[] = [
  { key: "all" },
  { key: "starters", icon: <FlaticonCloche size={16} /> },
  { key: "mains", icon: <FlaticonCutlery size={16} /> },
  { key: "grills", icon: <FlaticonGrill size={16} /> },
  { key: "desserts", icon: <FlaticonSparkles size={16} /> },
  { key: "drinks", icon: <FlaticonCocktail size={16} /> },
];

export function MenuGrid() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const [cat, setCat] = useState<"all" | MenuCategory>("all");
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    return menu.filter((m) => {
      if (!m.available) return false;
      const matchesCat = cat === "all" || m.category === cat;
      const query = search.trim().toLowerCase();
      if (!query) return matchesCat;
      const matchesName = m.name[locale].toLowerCase().includes(query);
      const matchesDesc = m.description[locale].toLowerCase().includes(query);
      return matchesCat && (matchesName || matchesDesc);
    });
  }, [cat, search, locale]);

  return (
    <>
      {/* Barre de recherche & filtres */}
      <div className="mb-8 space-y-5">
        <div className="relative max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-fg-mute" />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("menu.searchPlaceholder")}
            className="w-full rounded-full border border-line bg-bg px-10 py-2.5 text-sm text-fg placeholder:text-fg-mute focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 shadow-sm"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-fg-mute hover:text-fg transition-colors"
            >
              {t("menu.clearSearch")}
            </button>
          )}
        </div>

        {/* Pilules de catégories avec icônes Flaticon et sliding pill motion */}
        <div className="flex flex-wrap gap-2">
          {categoryList.map(({ key, icon }) => {
            const count = key === "all"
              ? menu.filter((m) => m.available).length
              : menu.filter((m) => m.available && m.category === key).length;
            const isSelected = key === cat;
            return (
              <button
                key={key}
                onClick={() => setCat(key)}
                className={cn(
                  "relative inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200",
                  isSelected
                    ? "border-gold text-white shadow-md shadow-gold/25"
                    : "border-line bg-bg-alt text-fg-2 hover:border-gold/50 hover:text-fg"
                )}
              >
                {isSelected && (
                  <motion.div
                    layoutId="menuActiveTab"
                    className="absolute inset-0 rounded-full bg-gold"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {icon}
                  <span>{t(`menu.${key}`)}</span>
                </span>
                <span
                  className={cn(
                    "relative z-10 rounded-full px-1.5 py-0.2 text-[10px] font-semibold",
                    isSelected ? "bg-white/20 text-white" : "bg-bg text-fg-mute"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grille des plats */}
      {filteredItems.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-line bg-bg-alt/50 p-12 text-center"
        >
          <p className="font-heading text-2xl text-fg">{t("menu.emptyTitle")}</p>
          <p className="mt-2 text-sm text-fg-2">
            {t("menu.emptySubtitle")}
          </p>
          <Button
            variant="outline"
            className="mt-4 text-xs"
            onClick={() => {
              setCat("all");
              setSearch("");
            }}
          >
            {t("menu.resetFilters")}
          </Button>
        </motion.div>
      ) : (
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((m) => (
              <motion.article
                layout
                key={m.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="luxury-card group flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-bg shadow-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Photo
                    src={m.image}
                    alt={m.name[locale]}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {m.badge && (
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-bg/95 backdrop-blur-md border border-gold/40 px-3 py-1 text-[11px] font-semibold text-gold shadow-sm">
                      <Sparkles className="size-3" />
                      {m.badge[locale]}
                    </span>
                  )}
                  <div className="absolute top-3 right-3 flex gap-1">
                    {m.spicy && (
                      <span className="rounded-full bg-red-950/80 backdrop-blur-md border border-red-500/40 px-2.5 py-0.5 text-[10px] font-semibold text-red-200">
                        🌶️ {t("menu.spicyBadge")}
                      </span>
                    )}
                    {m.vegetarian && (
                      <span className="rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-200">
                        🌱 {t("menu.vegBadge")}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading text-2xl font-bold text-fg group-hover:text-gold transition-colors">
                        {m.name[locale]}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-fg-2 leading-relaxed">
                      {m.description[locale]}
                    </p>
                    {m.pairing && (
                      <p className="text-[11px] text-fg-mute italic pt-1 border-t border-line/40">
                        <span className="font-semibold text-gold not-italic">{t("menu.pairingLabel")} </span>
                        {m.pairing[locale]}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-line/60 flex items-center justify-between">
                    <div>
                      <span className="font-heading text-2xl font-bold text-gold">
                        {m.price.toLocaleString(locale)}
                      </span>
                      <span className="ml-1 text-xs font-semibold text-fg-2">{t("menu.fcfa")}</span>
                    </div>

                    <Button asChild variant="whatsapp" className="px-4 py-2 text-xs">
                      <a
                        target="_blank"
                        rel="noopener"
                        href={whatsappUrl(t("wa.dish", { dish: m.name[locale] }))}
                      >
                        {t("menu.order")}
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Garantie fraîcheur et préparation minute */}
      <div className="mt-12 rounded-2xl border border-gold/30 bg-bg-alt/70 p-6 text-center text-sm text-fg-2">
        <p className="font-heading text-lg font-semibold text-fg mb-1">
          {t("menu.guaranteeTitle")}
        </p>
        <p className="text-xs text-fg-mute max-w-2xl mx-auto">
          {t("menu.notice")}
        </p>
      </div>
    </>
  );
}