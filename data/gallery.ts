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
// GALERIE PHOTO — À PERSONNALISER
// Remplacer les images dans public/images/gallery/
// et mettre à jour les titres/captions ci-dessous.
// =====================================================

export const gallery: GalleryItem[] = [
  {
    id: 1,
    category: "venue",
    src: "/images/gallery/1.webp",
    title: { fr: "La Salle", en: "The Dining Room" },
    caption: { fr: "Description de la salle à compléter.", en: "Dining room description to be filled in." },
  },
  {
    id: 2,
    category: "mood",
    src: "/images/gallery/2.webp",
    title: { fr: "L'Ambiance", en: "The Atmosphere" },
    caption: { fr: "Description de l'ambiance à compléter.", en: "Atmosphere description to be filled in." },
  },
  {
    id: 3,
    category: "dishes",
    src: "/images/gallery/3.webp",
    title: { fr: "Plat Signature", en: "Signature Dish" },
    caption: { fr: "Description du plat à compléter.", en: "Dish description to be filled in." },
  },
  {
    id: 4,
    category: "dishes",
    src: "/images/gallery/4.webp",
    title: { fr: "Spécialité du Chef", en: "Chef's Specialty" },
    caption: { fr: "Description à compléter.", en: "Description to be filled in." },
  },
  {
    id: 5,
    category: "events",
    src: "/images/gallery/5.webp",
    title: { fr: "Événement Privé", en: "Private Event" },
    caption: { fr: "Description de l'événement à compléter.", en: "Event description to be filled in." },
  },
  {
    id: 6,
    category: "dishes",
    src: "/images/gallery/6.webp",
    title: { fr: "Création du Jour", en: "Daily Creation" },
    caption: { fr: "Description à compléter.", en: "Description to be filled in." },
  },
];