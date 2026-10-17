export type GalleryCategory = "dishes" | "venue" | "mood" | "events";

export const galleryCategories: GalleryCategory[] = ["dishes", "venue", "mood", "events"];

export interface GalleryItem {
  id: number;
  category: GalleryCategory;
  src: string;
  title: { fr: string; en: string };
  caption: { fr: string; en: string };
}

// =====================================================
// GALERIE PHOTO — EXPÉRIENCE VISUELLE SAVORA
// =====================================================

export const gallery: GalleryItem[] = [
  {
    id: 1,
    category: "venue",
    src: "/images/gallery/1.webp",
    title: { fr: "La Grande Salle", en: "The Main Dining Room" },
    caption: {
      fr: "Un décor chaleureux et tamisé aux accents contemporains, pensé pour savourer chaque instant.",
      en: "A warm, intimate ambiance with contemporary design, crafted to savor every moment.",
    },
  },
  {
    id: 2,
    category: "mood",
    src: "/images/gallery/2.webp",
    title: { fr: "L'Espace Lounge & Bar", en: "The Lounge & Bar Area" },
    caption: {
      fr: "Lumières ambrées, fauteuils velours et sélection raffinée de grands crus et cocktails signatures.",
      en: "Amber lighting, velvet armchairs, and an exquisite selection of fine wines and signature cocktails.",
    },
  },
  {
    id: 3,
    category: "dishes",
    src: "/images/gallery/3.webp",
    title: { fr: "Filet de Bœuf au Jus Truffé", en: "Truffle Jus Beef Tenderloin" },
    caption: {
      fr: "Cœur de filet tendre sublimé par une mousseline onctueuse et une réduction corsée à la truffe.",
      en: "Tender filet mignon paired with creamy mousseline and rich black truffle reduction.",
    },
  },
  {
    id: 4,
    category: "dishes",
    src: "/images/gallery/4.webp",
    title: { fr: "Langouste Braisée au Feu de Bois", en: "Wood-Grilled Spiny Lobster" },
    caption: {
      fr: "Queue de langouste fraîche au beurre maître d'hôtel et alloco doré façon bistronomique.",
      en: "Fresh spiny lobster tail with herb butter and golden sweet plantains.",
    },
  },
  {
    id: 5,
    category: "events",
    src: "/images/gallery/5.webp",
    title: { fr: "Salons Privés & Réceptions", en: "Private Rooms & Receptions" },
    caption: {
      fr: "Un cadre discret et exclusif pour vos dîners d'affaires, réunions familiales ou réceptions privées.",
      en: "A discreet, exclusive setting for your business dinners, family gatherings, or private parties.",
    },
  },
  {
    id: 6,
    category: "dishes",
    src: "/images/gallery/6.webp",
    title: { fr: "Carpaccio de Daurade & Agrumes", en: "Sea Bream Carpaccio & Citrus" },
    caption: {
      fr: "Fines lamelles de daurade sauvage, émulsion aux agrumes et baies roses croquantes.",
      en: "Thinly sliced wild sea bream with delicate citrus emulsion and crisp pink peppercorns.",
    },
  },
];