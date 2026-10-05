import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/seo";

const paths = ["", "/menu", "/galerie", "/reservation", "/livraison", "/a-propos", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((p) =>
    routing.locales.map((l) => ({
      url: `${siteUrl}/${l}${p}`,
      lastModified: new Date(),
      changeFrequency: p === "/menu" ? ("weekly" as const) : ("monthly" as const),
      priority: p === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(routing.locales.map((x) => [x, `${siteUrl}/${x}${p}`])),
      },
    })),
  );
}