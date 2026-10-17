"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { navLinks } from "@/data/nav";
import { restaurant } from "@/data/restaurant";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  FlaticonCalendarTable,
  FlaticonPhoneCall,
  FlaticonPinMap,
  FlaticonSparkles,
} from "@/components/icons/FlaticonIcons";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <button
        aria-label="Menu de navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:border-gold hover:text-gold active:scale-95"
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-20 z-50 border-b border-gold/20 bg-[#0d1522]/98 backdrop-blur-xl p-6 text-white shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.key}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium tracking-wide transition-colors",
                    isActive
                      ? "text-gold font-semibold bg-gold/10 ring-1 ring-gold/20"
                      : "text-white/80 hover:text-gold hover:bg-white/5"
                  )}
                >
                  <span className="flex items-center gap-2">
                    {isActive && <FlaticonSparkles size={13} className="text-gold" />}
                    {t(l.key)}
                  </span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
            <Button asChild className="w-full gap-2 py-3 text-xs font-semibold shadow-md bg-gold text-navy hover:bg-[#dfa745]">
              <Link href="/reservation" onClick={() => setOpen(false)}>
                <FlaticonCalendarTable size={16} />
                <span>{t("cta")}</span>
              </Link>
            </Button>

            <div className="pt-2 text-center text-xs text-white/70 space-y-1">
              <p className="flex items-center justify-center gap-1.5">
                <FlaticonPhoneCall size={12} className="text-gold" />
                <a href={`tel:${restaurant.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                  {restaurant.phone}
                </a>
              </p>
              <p className="flex items-center justify-center gap-1.5 text-[11px] text-white/60">
                <FlaticonPinMap size={12} className="text-gold" />
                <span>{restaurant.address}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}