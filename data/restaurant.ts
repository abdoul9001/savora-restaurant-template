export const restaurant = {
  // =====================================================
  // CONFIGURATION DU RESTAURANT — À PERSONNALISER
  // =====================================================

  name: "MON RESTAURANT",
  subtitle: "Restaurant & Lounge",

  // Coordonnées
  phone: "+XX XX XX XX XX",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "XXXXXXXXXXX",
  address: "Adresse du restaurant, Ville, Pays",
  mapsUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ??
    "https://www.google.com/maps",

  // Note Google
  rating: { score: 0.0, count: 0 },

  // Réseaux sociaux (optionnels — laisser vide si non utilisés)
  socials: {
    facebook:  process.env.NEXT_PUBLIC_FACEBOOK_URL  ?? "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  },

  // Images (remplacer par les vraies photos dans public/images/)
  images: {
    hero:  "/images/hero.webp",
    about: "/images/about.webp",
  },

  // Horaires — adapter selon le restaurant
  hours: {
    schedule: [
      { day: "Lundi",    slots: ["Fermé"] },
      { day: "Mardi",    slots: ["12:00 – 14:30", "19:00 – 23:00"] },
      { day: "Mercredi", slots: ["12:00 – 14:30", "19:00 – 23:00"] },
      { day: "Jeudi",    slots: ["12:00 – 14:30", "19:00 – 23:00"] },
      { day: "Vendredi", slots: ["12:00 – 14:30", "19:00 – 00:00"] },
      { day: "Samedi",   slots: ["12:00 – 14:30", "19:00 – 00:00"] },
      { day: "Dimanche", slots: ["12:00 – 15:00"] },
    ],
    summary: "Mar–Sam : 12h–14h30 & 19h–23h · Dim : 12h–15h · Lun : Fermé",
  },

  // Services & aménagements (adapter à la réalité du restaurant)
  amenities: {
    accessibility: [
      "Entrée accessible en fauteuil roulant",
      "Places assises accessibles en fauteuil roulant",
    ],
    services: [
      "Repas sur place",
      "Vente à emporter",
      "Livraison",
    ],
    strengths: [
      "Cuisine faite maison",
      "Produits frais et locaux",
    ],
    diets: [
      "Plats végétariens disponibles",
      "Allergènes sur demande",
    ],
    atmosphere: [
      "Ambiance conviviale",
      "Idéal pour les repas en famille ou en couple",
    ],
    parking: [
      "Parking à proximité",
    ],
    payments: [
      "Cartes bancaires acceptées",
      "Paiement en espèces",
    ],
  },

  // Chiffres clés affichés sur la page d'accueil
  stats: [
    { value: "0,0★",  label: "Note Google Maps" },
    { value: "0",     label: "Avis Clients" },
    { value: "Xh",    label: "Service continu" },
    { value: "VIP",   label: "Terrasse & Salons" },
  ],
};