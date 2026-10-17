import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Photo } from "@/components/ui/Photo";
import { restaurant } from "@/data/restaurant";
import { pageMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import {
  FlaticonChefHat,
  FlaticonShieldGuarantee,
  FlaticonAwardMedal,
  FlaticonSparkles,
  FlaticonCalendarTable,
} from "@/components/icons/FlaticonIcons";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return pageMetadata(locale, "about", "/a-propos");
}

const valueIcons = [
  <FlaticonChefHat key="1" size={28} className="text-gold" />,
  <FlaticonShieldGuarantee key="2" size={28} className="text-gold" />,
  <FlaticonAwardMedal key="3" size={28} className="text-gold" />,
];

export default function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("about");
  const values = t.raw("values") as string[];
  const valuesDesc = t.raw("valuesDesc") as string[];

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      {/* En-tête */}
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-2">
          <FlaticonSparkles size={16} />
          <span>Histoire & Philosophie</span>
        </div>
        <h1 className="font-heading text-5xl font-bold text-fg">
          {t("title")}
        </h1>
      </div>

      {/* Récit & Photo du restaurant */}
      <div className="grid items-center gap-12 md:grid-cols-2 mb-16">
        <div className="relative group">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-gold/30 to-transparent blur-xl opacity-60" />
          <Photo
            src={restaurant.images.about}
            alt="La Maison Savora"
            className="relative aspect-[4/3] rounded-3xl border border-line shadow-2xl object-cover"
          />
        </div>

        <div className="space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-fg leading-tight">
            {t("heading")}
          </h2>
          <p className="text-fg-2 text-base leading-relaxed">
            {t("text")}
          </p>

          <blockquote className="border-l-2 border-gold pl-5 py-2 font-heading text-xl italic text-fg">
            {t("quote")}
            <footer className="mt-2 text-xs not-italic font-sans font-semibold tracking-wider text-gold uppercase">
              {t("chefTitle")}
            </footer>
          </blockquote>

          <div className="pt-2">
            <Button asChild className="gap-2 px-6 py-3">
              <Link href="/reservation">
                <FlaticonCalendarTable size={16} />
                <span>Réserver une table</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Les valeurs fondamentales */}
      <div className="mb-14">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase font-semibold text-gold tracking-widest">
            Nos Engagements
          </span>
          <h3 className="font-heading text-3xl font-bold text-fg mt-1">
            Les Trois Piliers de Notre Exigence
          </h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((v, i) => (
            <div
              key={v}
              className="luxury-card rounded-2xl border border-line bg-bg p-8 text-center shadow-card flex flex-col items-center"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-bg-alt">
                {valueIcons[i % valueIcons.length]}
              </div>
              <h4 className="font-heading text-xl font-bold text-fg mb-2">
                {v}
              </h4>
              <p className="text-xs text-fg-2 leading-relaxed">
                {valuesDesc[i] || ""}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Chiffres clés */}
      <div className="rounded-3xl border border-gold/30 bg-bg-alt/70 p-8 sm:p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {restaurant.stats.map((st) => (
            <div key={st.label}>
              <span className="font-heading text-4xl sm:text-5xl font-bold text-gold block">
                {st.value}
              </span>
              <span className="text-xs text-fg-2 font-medium mt-1 block">
                {st.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}