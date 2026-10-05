export type GalleryCategory = "dishes" | "venue" | "mood" | "events";

export const galleryCategories: GalleryCategory[] = ["dishes", "venue", "mood", "events"];

export interface GalleryItem {
  id: number;
  category: GalleryCategory;
  src: string;
  title: { fr: string; en: string };
  caption: { fr: string; en: string };
}

export const gallery: GalleryItem[] = [
  {
    id: 1,
    category: "venue",
    src: "/images/gallery/1.webp",
    title: { fr: "Le Grand Salon Lounge", en: "The Grand Lounge Salon" },
    caption: { fr: "Jeux de lumières ambrées, boiseries nobles et ambiance feutrée.", en: "Warm amber lighting, fine woodwork and cozy atmosphere." },
  },
  {
    id: 2,
    category: "mood",
    src: "/images/gallery/2.webp",
    title: { fr: "Table Gastronomique & Cave d'Exception", en: "Gourmet Table & Fine Cellar" },
    caption: { fr: "Un dîner d'exception autour de notre sélection de grands crus.", en: "An unforgettable dinner paired with our fine wine collection." },
  },
  {
    id: 3,
    category: "dishes",
    src: "/images/gallery/3.webp",
    title: { fr: "Filet Mignon & Mousseline Truffée", en: "Tenderloin & Truffled Purée" },
    caption: { fr: "Cuisson parfaite à la braise et réduction savoureuse.", en: "Perfect flame sear and luscious reduction." },
  },
  {
    id: 4,
    category: "dishes",
    src: "/images/gallery/4.webp",
    title: { fr: "Langouste Royale & Aloco Doré", en: "Royal Lobster & Golden Plantains" },
    caption: { fr: "La fraîcheur des côtes togolaises sublimée au feu de bois.", en: "Togolese coastal freshness elevated over woodfire." },
  },
  {
    id: 5,
    category: "events",
    src: "/images/gallery/5.webp",
    title: { fr: "Soirée Dégustation du Chef", en: "Chef's Tasting Soirée" },
    caption: { fr: "Poulet fermier mariné 24 heures et légumes maraîchers.", en: "24h marinated farm chicken with garden vegetables." },
  },
  {
    id: 6,
    category: "dishes",
    src: "/images/gallery/6.webp",
    title: { fr: "Carpaccio de Daurade Royale", en: "Sea Bream Carpaccio" },
    caption: { fr: "Équilibre subtil entre acidité du fruit de la passion et délicatesse marine.", en: "Subtle harmony of passion fruit and ocean delicacies." },
  },
];