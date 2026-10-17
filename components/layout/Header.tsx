"use client";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { navLinks } from "@/data/nav";
import { LangToggle, ThemeToggle } from "./Toggles";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";
import { FlaticonCalendarTable, FlaticonSparkles } from "@/components/icons/FlaticonIcons";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  // Sur desktop, on affiche les liens principaux ; la réservation est mise en valeur via le bouton doré dédié
  const desktopLinks = navLinks.filter((l) => l.key !== "booking");

  return (
    <header className="sticky top-0 z-40 bg-[#0d1522]/95 backdrop-blur-md border-b border-gold/15 text-white shadow-[0_4px_30px_rgba(0,0,0,0.35)] transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo & Identité Savora */}
        <Link href="/" className="group flex flex-col shrink-0">
          <div className="flex items-center gap-1.5">
            <FlaticonSparkles size={16} className="text-gold transition-transform group-hover:scale-110 duration-300" />
            <span className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white transition-colors group-hover:text-gold whitespace-nowrap">
              Savora
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.28em] text-gold/90 font-sans font-medium whitespace-nowrap pl-5">
            Haute Gastronomie · Lounge
          </span>
        </Link>

        {/* Liens de navigation Desktop épurés & élégants */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {desktopLinks.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.key}
                href={l.href}
                className={cn(
                  "relative whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-wide transition-all duration-200 select-none",
                  isActive
                    ? "text-gold font-semibold bg-gold/10 ring-1 ring-gold/25 shadow-[0_0_12px_rgba(200,147,56,0.15)]"
                    : "text-white/80 hover:text-gold hover:bg-white/[0.04]"
                )}
              >
                {t(l.key)}
              </Link>
            );
          })}
        </nav>

        {/* Actions : Toggles & Bouton Réserver */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <LangToggle />
          <ThemeToggle />

          {/* Bouton CTA Réserver une Table */}
          <Link
            href="/reservation"
            className={cn(
              "hidden lg:inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md",
              pathname === "/reservation"
                ? "bg-gold text-navy shadow-gold/30 ring-2 ring-gold/40"
                : "bg-gold text-navy hover:bg-[#dfa745] hover:shadow-lg hover:shadow-gold/25 hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            <FlaticonCalendarTable size={15} />
            <span>{t("cta")}</span>
          </Link>

          {/* Menu Mobile */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}