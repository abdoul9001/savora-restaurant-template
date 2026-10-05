"use client";
import { useLocale, useTranslations } from "next-intl";
import { Moon, Sun, Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const btn =
  "inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-line bg-bg-alt/50 px-3 text-xs font-semibold transition-all duration-200 hover:border-gold hover:text-gold hover:shadow-sm active:scale-95";

export function ThemeToggle() {
  const t = useTranslations();

  function toggle() {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {}
  }

  return (
    <button className={btn} aria-label={t("theme")} onClick={toggle}>
      <Sun className="hidden size-4 dark:block text-gold" />
      <Moon className="size-4 dark:hidden" />
    </button>
  );
}

export function LangToggle() {
  const locale = useLocale();
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <button
      className={cn(btn, "gap-1.5")}
      aria-label={t("lang")}
      onClick={() =>
        router.replace(pathname, { locale: locale === "fr" ? "en" : "fr" })
      }
    >
      <Globe className="size-3.5 text-gold" />
      <span className="font-bold tracking-wider">
        {locale === "fr" ? "EN" : "FR"}
      </span>
    </button>
  );
}