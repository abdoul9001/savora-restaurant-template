"use client";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/nav";
import { LangToggle, ThemeToggle } from "./Toggles";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";
import { FlaticonCalendarTable } from "@/components/icons/FlaticonIcons";

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/95 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Logo de la marque */}
        <Link href="/" className="group flex flex-col shrink-0">
          <span className="font-heading text-2xl sm:text-3xl font-bold tracking-[0.25em] text-fg transition-colors group-hover:text-gold whitespace-nowrap">
            INTIMISSIME
          </span>
          <span className="text-[9px] uppercase tracking-[0.35em] text-gold font-sans font-semibold -mt-1 whitespace-nowrap">
            Restaurant & Lounge · Lomé
          </span>
        </Link>

        {/* Liens de navigation Desktop : strictement sur une seule ligne (aucun retour à la ligne, aucun trait souligné) */}
        <nav className="hidden items-center gap-1 lg:gap-2 text-xs font-medium xl:flex">
          {navLinks.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.key}
                href={l.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-3 py-1.5 transition-all duration-200 select-none",
                  isActive
                    ? "bg-gold/15 text-gold font-bold shadow-sm"
                    : "text-fg-2 hover:bg-gold/5 hover:text-gold"
                )}
              >
                {t(l.key)}
              </Link>
            );
          })}
        </nav>

        {/* Boutons d'action et Toggles */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <LangToggle />
          <ThemeToggle />
          <Button asChild className="hidden xl:inline-flex gap-2 px-5 py-2.5 text-xs font-semibold shadow-md whitespace-nowrap">
            <Link href="/reservation">
              <FlaticonCalendarTable size={15} />
              <span>{t("cta")}</span>
            </Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}