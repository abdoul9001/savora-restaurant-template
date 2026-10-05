import type { MenuItem } from "@/types/menu";

export const menu: MenuItem[] = [
  // --- ENTRÉES (STARTERS) ---
  {
    id: "carpaccio-daurade",
    name: {
      fr: "Carpaccio de Daurade Royale & Passion",
      en: "Sea Bream Carpaccio & Passion Fruit",
    },
    description: {
      fr: "Fines tranches de daurade sauvage de l'Atlantique, marinade fruit de la passion et baies roses, huile d'olive vierge et pousses fraîches.",
      en: "Thin slices of wild Atlantic sea bream, passion fruit marinade, pink peppercorns, extra virgin olive oil and microgreens.",
    },
    price: 6500,
    image: "/images/dishes/carpaccio-daurade.webp",
    category: "starters",
    available: true,
    badge: { fr: "Signature", en: "Signature" },
    pairing: { fr: "Chablis Domaine Saint-Martin", en: "Chablis Domaine Saint-Martin" },
  },
  {
    id: "nems-crevettes-lome",
    name: {
      fr: "Croquants de Gambas au Gingembre & Combawa",
      en: "Crispy King Prawns with Ginger & Kaffir Lime",
    },
    description: {
      fr: "Gambas marinées aux herbes côtières, enveloppées d'une pâte croustillante, sauce aigre-douce pimentée maison.",
      en: "King prawns marinated in coastal herbs, wrapped in crispy pastry, house sweet and spicy chili dip.",
    },
    price: 5500,
    image: "/images/dishes/langouste-grillee.webp",
    category: "starters",
    available: true,
    spicy: true,
  },
  {
    id: "veloute-igname-truffe",
    name: {
      fr: "Velouté d'Igname Douce & Huile de Truffe",
      en: "Sweet Yam Velouté & Truffle Essence",
    },
    description: {
      fr: "Crème onctueuse d'igname locale infusée aux éclats de truffe noire, tuile de parmesan et graines de courge torréfiées.",
      en: "Creamy local yam infused with black truffle essence, parmesan crisp, and roasted pumpkin seeds.",
    },
    price: 4800,
    image: "/images/dishes/filet-boeuf.webp",
    category: "starters",
    available: true,
    vegetarian: true,
  },

  // --- PLATS (MAINS) ---
  {
    id: "filet-boeuf-rossini",
    name: {
      fr: "Filet Mignon Braisé & Mousseline Truffée",
      en: "Grilled Beef Tenderloin & Truffled Purée",
    },
    description: {
      fr: "Cœur de filet de bœuf cuit à la braise, mousseline de patate douce à la truffe, asperges vertes rôties et réduction au vin rouge d'hibiscus.",
      en: "Flame-grilled tenderloin, truffled sweet potato purée, charred green asparagus, and hibiscus red wine jus.",
    },
    price: 15500,
    image: "/images/dishes/filet-boeuf.webp",
    category: "mains",
    available: true,
    badge: { fr: "Coup de Cœur du Chef", en: "Chef's Favorite" },
    pairing: { fr: "Château Margaux Cru d'Exception", en: "Château Margaux Reserve" },
  },
  {
    id: "pave-saumon-agrumes",
    name: {
      fr: "Pavé de Mérou Rôti aux Agrumes & Beurre Blanc",
      en: "Roasted Sea Grouper with Citrus Beurre Blanc",
    },
    description: {
      fr: "Mérou frais de pêche locale, émulsion aux agrumes de Kpalimé, étuvée de légumes maraîchers et riz sauvage.",
      en: "Locally caught sea grouper, Kpalimé citrus beurre blanc emulsion, steamed organic vegetables and wild rice.",
    },
    price: 14000,
    image: "/images/dishes/carpaccio-daurade.webp",
    category: "mains",
    available: true,
  },

  // --- GRILLADES (GRILLS) ---
  {
    id: "langouste-grillee-aloco",
    name: {
      fr: "Langouste Royale Grillée & Aloco Croustillant",
      en: "Grilled Royal Lobster & Golden Plantains",
    },
    description: {
      fr: "Langouste entière grillée au feu de bois, beurre persillé aillé, quartiers de citron vert braisé et dés d'aloco doré.",
      en: "Wood-fired whole Atlantic lobster, garlic herb melted butter, grilled lime, and crispy caramelized plantain bites.",
    },
    price: 22000,
    image: "/images/dishes/langouste-grillee.webp",
    category: "grills",
    available: true,
    badge: { fr: "Prestige", en: "Prestige" },
    pairing: { fr: "Champagne Ruinart Blanc de Blancs", en: "Champagne Ruinart Blanc de Blancs" },
  },
  {
    id: "poulet-fermier-braise",
    name: {
      fr: "Poulet Fermier Braisé Façon Intimissime",
      en: "Signature Braised Farm Chicken",
    },
    description: {
      fr: "Suprême et cuisse de poulet mariné 24h aux épices traditionnelles togolaises, compotée d'oignons caramélisés et attiéké royal.",
      en: "Slow-marinated farm chicken with aromatic Togolese spices, sweet caramelized onion confit, and royal attiéké.",
    },
    price: 9500,
    image: "/images/dishes/poulet-braise.webp",
    category: "grills",
    available: true,
    badge: { fr: "Incontournable", en: "Must Have" },
    spicy: true,
  },
  {
    id: "cote-boeuf-tomahawk",
    name: {
      fr: "Côte de Bœuf Maturée à Partager (1 kg)",
      en: "Dry-Aged Tomahawk Steak to Share (1 kg)",
    },
    description: {
      fr: "Sélection persillée maturée 28 jours, saisie à la flamme vive, trio de sauces maison (chimichurri, poivre vert, béarnaise).",
      en: "Prime marble cut dry-aged 28 days, flame-seared, served with house trio of sauces (chimichurri, green peppercorn, béarnaise).",
    },
    price: 32000,
    image: "/images/dishes/filet-boeuf.webp",
    category: "grills",
    available: true,
  },

  // --- DESSERTS ---
  {
    id: "sphere-chocolat-baobab",
    name: {
      fr: "Entremets Chocolat Grand Cru & Cœur Baobab",
      en: "Grand Cru Chocolate Sphere & Baobab Cream",
    },
    description: {
      fr: "Coque craquante de chocolat noir 72%, mousse veloutée, coulis acidulé de pulpe de baobab et feuilles d'or 24 carats.",
      en: "Crisp 72% dark chocolate shell, velvety mousse, tangy baobab pulp coulis, and 24-karat edible gold leaves.",
    },
    price: 5500,
    image: "/images/about.webp",
    category: "desserts",
    available: true,
    badge: { fr: "Création", en: "Creation" },
  },
  {
    id: "ananas-flambe-rhum",
    name: {
      fr: "Carpaccio d'Ananas Rôti au Rhum Vieux & Glace Vanille",
      en: "Roasted Pineapple Flambé with Aged Rum & Vanilla Gelato",
    },
    description: {
      fr: "Ananas Victoria caramélisé aux épices douces, flambé en salle au rhum ambré, glace vanille bourbon de Madagascar.",
      en: "Caramelized Victoria pineapple infused with warm spices, tableside flambéed with aged amber rum, bourbon vanilla gelato.",
    },
    price: 4500,
    image: "/images/hero.webp",
    category: "desserts",
    available: true,
    vegetarian: true,
  },

  // --- BOISSONS & COCKTAILS (DRINKS) ---
  {
    id: "cocktail-intimissime-gold",
    name: {
      fr: "Cocktail Signature 'L'Élixir Intimissime'",
      en: "Signature Cocktail 'The Intimissime Elixir'",
    },
    description: {
      fr: "Rhum ambré premium, liqueur de maracuja, sirop de gingembre artisanal, fumée de romarin et paillettes d'or comestibles.",
      en: "Premium aged rum, passion fruit liqueur, artisanal ginger syrup, smoked rosemary sprig, and edible gold flakes.",
    },
    price: 6000,
    image: "/images/hero.webp",
    category: "drinks",
    available: true,
    badge: { fr: "Cocktail Phare", en: "House Special" },
  },
  {
    id: "mojito-passion-hibiscus",
    name: {
      fr: "Mojito Royal Bissap & Fleur d'Oranger",
      en: "Royal Hibiscus & Orange Blossom Mojito",
    },
    description: {
      fr: "Feuilles de menthe fraîche pilées, réduction de bissap maison, touche de fleur d'oranger, eau pétillante et glace pilée.",
      en: "Crushed fresh mint, homemade hibiscus flower cordial, touch of orange blossom, sparkling soda and crushed ice.",
    },
    price: 4500,
    image: "/images/about.webp",
    category: "drinks",
    available: true,
  },
];
