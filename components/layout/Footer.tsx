"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { restaurant } from "@/data/restaurant";
import { whatsappUrl } from "@/lib/whatsapp";
import {
  FlaticonPinMap,
  FlaticonPhoneCall,
  FlaticonClockTime,
  FlaticonSparkles,
} from "@/components/icons/FlaticonIcons";

export function Footer() {
  const t = useTranslations("footer");
  const w = useTranslations("wa");

  const experienceLinks = [
    { href: "/menu", label: t("links.menu") },
    { href: "/reservation", label: t("links.booking") },
    { href: "/livraison", label: t("links.delivery") },
    { href: "/galerie", label: t("links.gallery") },
    { href: "/a-propos", label: t("links.about") },
  ] as const;

  const socials = [
    { label: "Facebook", href: restaurant.socials.facebook },
    { label: "Instagram", href: restaurant.socials.instagram },
  ].filter((s) => s.href);

  return (
    <footer className="border-t border-line/80 bg-bg-alt py-16 text-xs sm:text-sm text-fg-2 transition-colors">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* 1. Identité & Prestige */}
        <div className="space-y-3">
          <Link href="/" className="inline-block group">
            <span className="font-heading text-2xl font-bold tracking-[0.25em] text-fg transition-colors group-hover:text-gold">
              INTIMISSIME
            </span>
          </Link>
          <p className="text-xs text-fg-mute leading-relaxed">
            {t("tagline")}
          </p>
          <div className="pt-1 flex items-center gap-2 text-xs">
            <span className="text-gold font-bold">★ {restaurant.rating.score} / 5</span>
            <span className="text-fg-mute">({restaurant.rating.count} avis Google)</span>
          </div>
          <p className="text-[11px] text-fg-mute">
            Nocturne jusqu&apos;à 06h00 · Parking gratuit
          </p>
        </div>

        {/* 2. L'Expérience (remplace la navigation redondante) */}
        <div>
          <p className="mb-3 font-semibold uppercase tracking-wider text-fg text-xs">
            {t("experience")}
          </p>
          <ul className="space-y-2.5">
            {experienceLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-gold block"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Horaires & Accès */}
        <div className="space-y-3">
          <p className="mb-3 font-semibold uppercase tracking-wider text-fg text-xs">
            {t("access")}
          </p>
          <a
            href={restaurant.mapsUrl}
            target="_blank"
            rel="noopener"
            className="flex items-start gap-2 hover:text-gold transition-colors group"
          >
            <FlaticonPinMap size={16} className="text-gold shrink-0 mt-0.5" />
            <span className="group-hover:underline">{restaurant.address}</span>
          </a>
          <p className="flex items-start gap-2 text-xs text-fg-mute leading-relaxed">
            <FlaticonClockTime size={16} className="text-gold shrink-0 mt-0.5" />
            <span>{restaurant.hours.summary}</span>
          </p>
          <p className="text-[11px] text-fg-mute pt-1">
            Service voiturier disponible en soirée
          </p>
        </div>

        {/* 4. Conciergerie & Réseaux */}
        <div className="space-y-3">
          <p className="mb-3 font-semibold uppercase tracking-wider text-fg text-xs">
            {t("concierge")}
          </p>
          <p className="flex items-center gap-2">
            <FlaticonPhoneCall size={16} className="text-gold shrink-0" />
            <a
              href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
              className="hover:text-gold font-semibold text-fg"
            >
              {restaurant.phone}
            </a>
          </p>

          <div>
            <a
              href={whatsappUrl(w("info"))}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 font-semibold text-whatsapp hover:underline text-xs"
            >
              <FlaticonSparkles size={14} />
              <span>Conciergerie WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center gap-3 pt-2 text-xs">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener"
                className="transition-colors hover:text-gold text-fg-2 font-medium"
              >
                {s.label}
              </a>
            ))}
          </div>

          <p className="text-[10px] text-fg-mute pt-2">
            Cartes · NFC · T-Money · Flooz · Espèces
          </p>
        </div>
      </div>

      {/* Barre inférieure */}
      <div className="mx-auto mt-12 max-w-6xl border-t border-line/60 px-5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-fg-mute">
        <p>© 2026 INTIMISSIME Lomé · {t("rights")}</p>
        <p className="font-heading italic text-sm text-gold">
          L&apos;Excellence Gastronomique & Lounge
        </p>
      </div>
    </footer>
  );
}