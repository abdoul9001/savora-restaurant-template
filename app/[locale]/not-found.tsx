import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { FlaticonPinMap } from "@/components/icons/FlaticonIcons";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-5 py-24 text-center">
      <div className="relative">
        <div className="pointer-events-none absolute -inset-8 rounded-full bg-gold/10 blur-3xl" />
        <p className="relative font-heading text-9xl font-bold text-gold/30 leading-none select-none">
          404
        </p>
      </div>

      <h1 className="mt-6 font-heading text-4xl font-bold text-fg">
        {t("title")}
      </h1>

      <p className="mt-3 max-w-md text-base text-fg-2 leading-relaxed">
        {t("text")}
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild className="gap-2 px-6 py-3">
          <Link href="/">
            <FlaticonPinMap size={16} />
            <span>{t("home")}</span>
          </Link>
        </Button>
        <Button asChild variant="outline" className="gap-2 px-6 py-3">
          <Link href="/menu">{t("menu")}</Link>
        </Button>
      </div>
    </div>
  );
}