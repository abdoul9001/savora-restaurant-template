import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Savora | Haute Gastronomie & Lounge",
    short_name: "Savora",
    description: "Haute Gastronomie, Lounge Feutré & Mixologie d'Exception à Lomé, Togo.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0D0D",
    theme_color: "#C5A880",
    orientation: "portrait",
    icons: [
      {
        src: "/icon",
        sizes: "64x64",
        type: "image/png",
      },
    ],
  };
}
