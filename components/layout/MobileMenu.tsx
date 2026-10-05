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
} from "@/components/icons/FlaticonIcons";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <div className="xl:hidden">
      <button
        aria-label="Menu de navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bg-alt text-fg transition-colors hover:border-gold hover:text-gold"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <div className="fixed inset-x-0 top-20 z-50 border-b border-line bg-bg/95 p-6 backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.key}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-gold/15 text-gold font-bold"
                      : "text-fg-2 hover:bg-bg-alt hover:text-fg"
                  )}
                >
                  <span>{t(l.key)}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-gold" />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 pt-6 border-t border-line/60 space-y-3">
            <Button asChild className="w-full gap-2 py-3 text-xs font-semibold shadow-md">
              <Link href="/reservation" onClick={() => setOpen(false)}>
                <FlaticonCalendarTable size={16} />
                <span>{t("cta")}</span>
              </Link>
            </Button>

            <div className="pt-2 text-center text-xs text-fg-mute space-y-1">
              <p className="flex items-center justify-center gap-1.5">
                <FlaticonPhoneCall size={12} className="text-gold" />
                <a href={`tel:${restaurant.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                  {restaurant.phone}
                </a>
              </p>
              <p className="flex items-center justify-center gap-1.5 text-[11px]">
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