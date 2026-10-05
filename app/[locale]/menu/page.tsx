import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { MenuGrid } from "@/components/menu/MenuGrid";
import { pageMetadata } from "@/lib/seo";
import { FlaticonCutlery } from "@/components/icons/FlaticonIcons";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return pageMetadata(locale, "menu", "/menu");
}

export default function MenuPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("menu");

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <div className="max-w-2xl mb-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-2">
          <FlaticonCutlery size={16} />
          <span>{t("kicker")}</span>
        </div>
        <h1 className="font-heading text-5xl font-bold text-fg">
          {t("title")}
        </h1>
        <p className="mt-3 text-fg-2 text-base leading-relaxed">
          {t("subtitle")}
        </p>
      </div>

      <MenuGrid />
    </div>
  );
}