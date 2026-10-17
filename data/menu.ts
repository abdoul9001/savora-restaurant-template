import type { MenuItem } from "@/types/menu";

// =====================================================
// DONNÉES DU MENU — TEMPLATE GASTRONOMIQUE SAVORA
// Catégories : "starters" | "mains" | "grills" | "desserts" | "drinks"
// =====================================================

export const menu: MenuItem[] = [
  // --- ENTRÉES (STARTERS) ---
  {
    id: "carpaccio-daurade",
    name: {
      fr: "Carpaccio de Daurade Royale",
      en: "Royal Sea Bream Carpaccio",
    },
    description: {
      fr: "Daurade tranchée finement, vinaigrette au yuzu, perles de grenade, fleur de sel et baies roses.",
      en: "Thinly sliced sea bream, yuzu vinaigrette, pomegranate pearls, sea salt, and pink peppercorns.",
    },
    price: 8500,
    image: "/images/dishes/carpaccio-daurade.webp",
    category: "starters",
    available: true,
    badge: { fr: "Signature", en: "Signature" },
    pairing: { fr: "Chablis Premier Cru", en: "Chablis Premier Cru" },
  },
  {
    id: "salade-gourmande",
    name: {
      fr: "Salade Gourmande Savora",
      en: "Savora Gourmet Salad",
    },
    description: {
      fr: "Jeunes pousses croquantes, suprêmes d'orange, tomates confites, avocat et noix de pécan toastées.",
      en: "Crisp baby greens, orange segments, confit tomatoes, avocado, and toasted pecans.",
    },
    price: 6500,
    image: "/images/gallery/6.webp",
    category: "starters",
    available: true,
    vegetarian: true,
  },

  // --- PLATS PRINCIPAUX (MAINS) ---
  {
    id: "filet-boeuf",
    name: {
      fr: "Filet de Bœuf au Jus Truffé",
      en: "Beef Tenderloin with Truffle Jus",
    },
    description: {
      fr: "Cœur de filet tendre, mousseline de pommes de terre au beurre noisette, asperges vertes rôties et réduction truffée.",
      en: "Tender filet mignon, brown butter potato mousseline, roasted green asparagus, and rich truffle reduction.",
    },
    price: 16500,
    image: "/images/dishes/filet-boeuf.webp",
    category: "mains",
    available: true,
    badge: { fr: "Incontournable", en: "Must Try" },
    pairing: { fr: "Saint-Émilion Grand Cru", en: "Saint-Émilion Grand Cru" },
  },
  {
    id: "saumon-risotto",
    name: {
      fr: "Pavé de Saumon & Risotto Safran",
      en: "Salmon Fillet & Saffron Risotto",
    },
    description: {
      fr: "Saumon croustillant à la plancha, risotto crémeux au safran d'Orient, pointes d'asperges et beurre blanc.",
      en: "Pan-crisped salmon fillet, creamy saffron risotto, baby asparagus tips, and lemon butter emulsion.",
    },
    price: 14500,
    image: "/images/gallery/3.webp",
    category: "mains",
    available: true,
  },

  // --- GRILLADES & TERROIR (GRILLS) ---
  {
    id: "langouste-grillee",
    name: {
      fr: "Langouste Grillée au Feu de Bois",
      en: "Wood-Grilled Spiny Lobster",
    },
    description: {
      fr: "Queue de langouste entière braisée au beurre d'ail et herbes fraîches, servie avec alloco doré et citron braisé.",
      en: "Whole spiny lobster tail braised with garlic herb butter, served with golden sweet plantains and charred lime.",
    },
    price: 19500,
    image: "/images/dishes/langouste-grillee.webp",
    category: "grills",
    available: true,
    badge: { fr: "Chef's Choice", en: "Chef's Choice" },
    pairing: { fr: "Meursault Blanc", en: "Meursault White" },
  },
  {
    id: "poulet-braise",
    name: {
      fr: "Poulet Fermier Braisé aux Aromates",
      en: "Braised Farm Chicken with Herbs",
    },
    description: {
      fr: "Volaille fermière marinée 24h aux épices de notre terroir, sauce aux oignons caramélisés et piment doux.",
      en: "Farm chicken marinated 24h in aromatic terroir herbs, caramelized onion sauce, and sweet pepper reduction.",
    },
    price: 9500,
    image: "/images/dishes/poulet-braise.webp",
    category: "grills",
    available: true,
    spicy: true,
    badge: { fr: "Spécialité", en: "Specialty" },
  },

  // --- DESSERTS ---
  {
    id: "sphere-chocolat",
    name: {
      fr: "Sphère Chocolat Noir Grand Cru",
      en: "Grand Cru Dark Chocolate Sphere",
    },
    description: {
      fr: "Dôme croquant au cacao 70%, cœur fondant praliné noisette, glace vanille Bourbon de Madagascar et coulis chaud.",
      en: "Crisp 70% dark chocolate dome, warm molten hazelnut praline core, Madagascar vanilla gelato, and hot coulis.",
    },
    price: 6000,
    image: "/images/dishes/sphere-chocolat.jpg",
    category: "desserts",
    available: true,
    badge: { fr: "Signature", en: "Signature" },
  },
  {
    id: "tartelette-mangue",
    name: {
      fr: "Tartelette Mangue & Sorbet Passion",
      en: "Mango Tart & Passion Fruit Sorbet",
    },
    description: {
      fr: "Pâte sablée pur beurre, fines lamelles de mangues caramélisées au miel sauvage et sorbet passion acidulé.",
      en: "Pure butter shortbread, wild honey caramelized mango slices, and tangy passion fruit sorbet.",
    },
    price: 5500,
    image: "/images/gallery/4.webp",
    category: "desserts",
    available: true,
    vegetarian: true,
  },

  // --- BOISSONS & MIXOLOGIE (DRINKS) ---
  {
    id: "cocktail-savora",
    name: {
      fr: "Cocktail Signature Savora Gold",
      en: "Savora Gold Signature Cocktail",
    },
    description: {
      fr: "Rhum vieux arrangé, pulpe fraîche de maracuja, trait de champagne, menthe fraîche et poudre d'or 24 carats.",
      en: "Aged spiced rum, fresh passion fruit puree, splash of champagne, crushed mint, and edible 24k gold rim.",
    },
    price: 7500,
    image: "/images/dishes/cocktail-savora.jpg",
    category: "drinks",
    available: true,
    badge: { fr: "Signature", en: "Signature" },
  },
  {
    id: "mocktail-eden",
    name: {
      fr: "Mocktail Jardin d'Éden (Sans Alcool)",
      en: "Garden of Eden Mocktail (Alcohol-Free)",
    },
    description: {
      fr: "Infusion de fleur de sureau, concombre frais pressé, menthe froissée et eau tonique pétillante.",
      en: "Elderflower infusion, freshly pressed cucumber, crushed mint, and sparkling artisanal tonic.",
    },
    price: 4500,
    image: "/images/dishes/cocktail-savora.jpg",
    category: "drinks",
    available: true,
    vegetarian: true,
  },
];