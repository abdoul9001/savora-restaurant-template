import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { restaurant } from "@/data/restaurant";
import { whatsappUrl } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/seo";
import {
  FlaticonPinMap,
  FlaticonPhoneCall,
  FlaticonClockTime,
  FlaticonSparkles,
  FlaticonAccessibility,
  FlaticonCarParking,
  FlaticonCocktail,
  FlaticonCreditCard,
} from "@/components/icons/FlaticonIcons";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return pageMetadata(locale, "contact", "/contact");
}

export default function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("contact");
  const w = useTranslations("wa");

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      {/* En-tête */}
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-2">
          <FlaticonPinMap size={16} />
          <span>{t("kicker")}</span>
        </div>
        <h1 className="font-heading text-5xl font-bold text-fg">
          {t("title")}
        </h1>
        <p className="mt-3 text-fg-2 text-base leading-relaxed">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 items-start">
        {/* Carte de coordonnées et horaires */}
        <div className="space-y-6 lg:col-span-5">
          <div className="luxury-card rounded-3xl border border-line bg-bg p-7 sm:p-8 shadow-card space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                {t("mainVenue")}
              </p>
              <h2 className="font-heading text-3xl font-bold text-fg mt-1">
                INTIMISSIME
              </h2>
              <p className="text-xs text-fg-mute font-medium">
                {restaurant.subtitle}
              </p>
            </div>

            <div className="space-y-4 text-sm text-fg-2">
              <div className="flex items-start gap-3">
                <FlaticonPinMap size={20} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-fg">{t("addressLabel")}</p>
                  <p className="text-xs text-fg-2">{restaurant.address}</p>
                  <p className="text-[11px] text-fg-mute mt-0.5">{t("locationDesc")}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FlaticonPhoneCall size={20} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-fg">{t("directBooking")}</p>
                  <a
                    href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
                    className="text-xs font-bold text-gold hover:underline"
                  >
                    {restaurant.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FlaticonClockTime size={20} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-fg">{t("hours")}</p>
                  <p className="text-xs text-fg-2">{t("hoursDetails")}</p>
                  <p className="text-[11px] text-fg-mute mt-1 italic">{t("closedDay")}</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Button asChild className="flex-1">
                <a href={`tel:${restaurant.phone.replace(/\s/g, "")}`}>
                  <FlaticonPhoneCall size={16} />
                  <span>{t("call")}</span>
                </a>
              </Button>

              <Button asChild variant="whatsapp" className="flex-1">
                <a href={whatsappUrl(w("info"))} target="_blank" rel="noopener">
                  <FlaticonSparkles size={16} />
                  <span>{t("whatsapp")}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Iframe Carte interactive */}
        <div className="lg:col-span-7">
          <div className="luxury-card overflow-hidden rounded-3xl border border-line bg-bg shadow-card">
            <iframe
              title="Localisation Google Maps INTIMISSIME Lomé"
              loading="lazy"
              className="h-96 w-full border-0"
              src={`https://maps.google.com/maps?q=${encodeURIComponent("647W+2P, Lomé, Togo")}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
            />
            <div className="p-4 bg-bg-alt flex items-center justify-between">
              <span className="text-xs text-fg-2">
                {t("gpsCoord")}
              </span>
              <Button asChild variant="outline" className="text-xs px-3 py-1.5">
                <a href={restaurant.mapsUrl} target="_blank" rel="noopener">
                  {t("route")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services, Équipements & Accessibilité vérifiés Google */}
      <div className="mt-16 space-y-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-2">
            <FlaticonSparkles size={16} />
            <span>{t("comfortTitle")}</span>
          </div>
          <h2 className="font-heading text-3xl font-bold text-fg">
            {t("comfortSubtitle")}
          </h2>
          <p className="mt-2 text-sm text-fg-2">
            {t("comfortDesc")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="luxury-card rounded-2xl border border-line bg-bg p-6 shadow-card space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
              <FlaticonAccessibility size={24} />
            </div>
            <h3 className="font-heading text-lg font-bold text-fg">{t("accessibilityTitle")}</h3>
            <ul className="space-y-1.5 text-xs text-fg-2">
              {restaurant.amenities.accessibility.slice(0, 4).map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span className="text-gold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="luxury-card rounded-2xl border border-line bg-bg p-6 shadow-card space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
              <FlaticonCarParking size={24} />
            </div>
            <h3 className="font-heading text-lg font-bold text-fg">{t("parkingTitle")}</h3>
            <ul className="space-y-1.5 text-xs text-fg-2">
              {restaurant.amenities.parking.map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span className="text-gold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="luxury-card rounded-2xl border border-line bg-bg p-6 shadow-card space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
              <FlaticonCocktail size={24} />
            </div>
            <h3 className="font-heading text-lg font-bold text-fg">{t("atmosphereTitle")}</h3>
            <ul className="space-y-1.5 text-xs text-fg-2">
              {restaurant.amenities.services.slice(0, 4).map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span className="text-gold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="luxury-card rounded-2xl border border-line bg-bg p-6 shadow-card space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
              <FlaticonCreditCard size={24} />
            </div>
            <h3 className="font-heading text-lg font-bold text-fg">{t("paymentTitle")}</h3>
            <ul className="space-y-1.5 text-xs text-fg-2">
              {restaurant.amenities.payments.map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span className="text-gold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}