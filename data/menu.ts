import type { MenuItem } from "@/types/menu";

// =====================================================
// DONNÉES DU MENU — À PERSONNALISER
// Remplacer chaque plat par les vrais plats du restaurant.
// Catégories disponibles : "starters" | "mains" | "desserts" | "drinks"
// =====================================================

export const menu: MenuItem[] = [

  // --- ENTRÉES (STARTERS) ---
  {
    id: "entree-1",
    name: {
      fr: "Entrée du Chef",
      en: "Chef Starter",
    },
    description: {
      fr: "Description de l'entrée à compléter.",
      en: "Starter description to be filled in.",
    },
    price: 0000,
    image: "/images/dishes/carpaccio-daurade.webp",
    category: "starters",
    available: true,
    badge: { fr: "Signature", en: "Signature" },
  },
  {
    id: "entree-2",
    name: {
      fr: "Deuxième Entrée",
      en: "Second Starter",
    },
    description: {
      fr: "Description à compléter.",
      en: "Description to be filled in.",
    },
    price: 0000,
    image: "/images/dishes/langouste-grillee.webp",
    category: "starters",
    available: true,
  },

  // --- PLATS (MAINS) ---
  {
    id: "plat-1",
    name: {
      fr: "Plat Principal du Chef",
      en: "Chef Main Course",
    },
    description: {
      fr: "Description du plat à compléter.",
      en: "Main course description to be filled in.",
    },
    price: 0000,
    image: "/images/dishes/filet-boeuf.webp",
    category: "mains",
    available: true,
    badge: { fr: "Spécialité", en: "Specialty" },
  },
  {
    id: "plat-2",
    name: {
      fr: "Deuxième Plat",
      en: "Second Main",
    },
    description: {
      fr: "Description à compléter.",
      en: "Description to be filled in.",
    },
    price: 0000,
    image: "/images/dishes/poulet-braise.webp",
    category: "mains",
    available: true,
  },

  // --- DESSERTS ---
  {
    id: "dessert-1",
    name: {
      fr: "Dessert du Jour",
      en: "Dessert of the Day",
    },
    description: {
      fr: "Description du dessert à compléter.",
      en: "Dessert description to be filled in.",
    },
    price: 0000,
    image: "/images/dishes/carpaccio-daurade.webp",
    category: "desserts",
    available: true,
  },

  // --- BOISSONS (DRINKS) ---
  {
    id: "boisson-1",
    name: {
      fr: "Cocktail Signature",
      en: "Signature Cocktail",
    },
    description: {
      fr: "Description du cocktail à compléter.",
      en: "Cocktail description to be filled in.",
    },
    price: 0000,
    image: "/images/dishes/langouste-grillee.webp",
    category: "drinks",
    available: true,
  },
];