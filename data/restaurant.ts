export const restaurant = {
  name: "INTIMISSIME",
  subtitle: "Restaurant & Lounge",
  phone: "+228 71 03 08 10",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "22871030810",
  address: "647W+2P, Lomé, Togo",
  mapsUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ??
    "https://www.google.com/maps/search/?api=1&query=647W%2B2P+Lom%C3%A9",
  rating: { score: 4.4, count: 18 },
  socials: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  },
  images: {
    hero: "/images/hero.webp",
    about: "/images/about.webp",
  },
  // Horaires réels Google Maps
  hours: {
    schedule: [
      { day: "Lundi",    slots: ["00:00 à 06:00"] },
      { day: "Mardi",    slots: ["Fermé"] },
      { day: "Mercredi", slots: ["18:00 à 00:00"] },
      { day: "Jeudi",    slots: ["00:00 à 06:00", "18:00 à 00:00"] },
      { day: "Vendredi", slots: ["00:00 à 06:00", "18:00 à 00:00"] },
      { day: "Samedi",   slots: ["00:00 à 06:00", "18:00 à 00:00"] },
      { day: "Dimanche", slots: ["00:00 à 06:00", "18:00 à 00:00"] },
    ],
    summary: "Mercredi au Dimanche : 18:00 à 06:00 · Lundi : 00:00 à 06:00 · Mardi : Fermé",
  },
  // Catégories authentiques Google Business Profile
  amenities: {
    accessibility: [
      "Parking accessible en fauteuil roulant",
      "Entrée accessible en fauteuil roulant",
      "Places assises accessibles en fauteuil roulant",
      "Toilettes accessibles en fauteuil roulant",
      "Boucle magnétique",
      "Menu en braille",
    ],
    services: [
      "Repas sur place",
      "Terrasse lounge extérieure",
      "Drive & Vente à emporter",
      "Livraison sans contact",
      "Service nocturne ouvert jusqu'à 06h00",
      "Bar disponible sur place",
    ],
    strengths: [
      "Excellents cocktails signatures",
      "Excellents desserts du Chef",
      "Grand choix de vins et bières",
      "Happy hour sur boissons et restauration",
    ],
    diets: [
      "Plats halal",
      "Plats bio",
      "Convient aux végétariens",
      "Petites portions à partager",
      "Formule à volonté",
      "Menu enfant adapté aux familles",
    ],
    atmosphere: [
      "Ambiance décontractée et branchée",
      "Cadre agréable et calme",
      "Idéal pour dîner en solo, repas en couple ou groupes",
    ],
    parking: [
      "Parking gratuit privé sur place",
      "Parking gratuit disponible dans la rue",
      "Service voiturier en soirée",
    ],
    payments: [
      "Cartes de débit / bancaires",
      "Paiements mobiles NFC (T-Money, Flooz)",
      "Chèques acceptés",
      "Paiement en espèces",
    ],
  },
  stats: [
    { value: "4,4★", label: "Note Google Maps" },
    { value: "18",   label: "Avis Clients Vérifiés" },
    { value: "06h",  label: "Service Nuit & Lounge" },
    { value: "VIP",  label: "Terrasse & Salons" },
  ],
};