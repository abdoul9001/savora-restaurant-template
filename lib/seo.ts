import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function pageMetadata(locale: string, key: string, path: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = t(`${key}.title`);
  const description = t(`${key}.description`);
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: Object.fromEntries(routing.locales.map((l) => [l, `/${l}${path}`])),
    },
    openGraph: {
      title,
      description,
      url: `/${locale}${path}`,
      siteName: "INTIMISSIME",
      type: "website",
      locale: locale === "fr" ? "fr_TG" : "en_US",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}