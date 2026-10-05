import { restaurant } from "@/data/restaurant";
import { siteUrl } from "@/lib/seo";

export function RestaurantJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    description: "Haute Gastronomie, Lounge Feutré et Mixologie d'Exception à Lomé, Togo.",
    url: siteUrl,
    telephone: restaurant.phone,
    hasMap: restaurant.mapsUrl,
    priceRange: "$$$",
    servesCuisine: [
      "Haute Gastronomie",
      "Cuisine Togolaise Créative",
      "Grillades au feu de bois",
      "Mixologie",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "647W+2P",
      addressLocality: "Lomé",
      addressCountry: "TG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.136",
      longitude: "1.222",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.4",
      reviewCount: "18",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "18:00",
        closes: "06:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday"],
        opens: "00:00",
        closes: "06:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}