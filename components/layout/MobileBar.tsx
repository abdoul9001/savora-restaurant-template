"use client";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import {
  FlaticonCalendarTable,
  FlaticonSparkles,
  FlaticonCutlery,
} from "@/components/icons/FlaticonIcons";

export function MobileBar() {
  const t = useTranslations();
  const pathname = usePathname();

  const isMenu = pathname === "/menu";
  const isBooking = pathname === "/reservation";

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex items-center gap-2 border-t border-line/80 bg-bg/95 p-2.5 pb-[calc(0.6rem+env(safe-area-inset-bottom))] backdrop-blur-lg shadow-2xl lg:hidden">
      <Button
        asChild
        variant="outline"
        className={cn(
          "flex-1 text-xs gap-1.5 py-2.5 transition-all",
          isMenu && "border-gold bg-gold/15 text-gold font-bold shadow-sm"
        )}
      >
        <Link href="/menu">
          <FlaticonCutlery size={15} className="text-gold" />
          <span>{t("nav.menu")}</span>
        </Link>
      </Button>

      <Button
        asChild
        className={cn(
          "flex-1 text-xs gap-1.5 py-2.5 shadow-md transition-all",
          isBooking ? "ring-2 ring-gold/40 shadow-gold/25 font-bold" : "opacity-90"
        )}
      >
        <Link href="/reservation">
          <FlaticonCalendarTable size={15} />
          <span>{t("mobile.book")}</span>
        </Link>
      </Button>

      <Button asChild variant="whatsapp" className="flex-1 text-xs gap-1.5 py-2.5">
        <a href={whatsappUrl(t("wa.info"))} target="_blank" rel="noopener">
          <FlaticonSparkles size={15} />
          <span>WhatsApp</span>
        </a>
      </Button>
    </div>
  );
}