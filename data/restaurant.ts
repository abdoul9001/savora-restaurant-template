export const restaurant = {
  // =====================================================
  // CONFIGURATION DU RESTAURANT — MODÈLE SAVORA
  // =====================================================

  name: "Savora",
  subtitle: "Haute Gastronomie & Lounge Bar",

  // Coordonnées de contact
  phone: "+228 90 12 34 56",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+22890123456",
  address: "Boulevard Circulaire, Quartier Résidentiel, Lomé, Togo",
  mapsUrl:
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ??
    "https://maps.google.com/?q=Lome+Togo",

  // Note & Réputation
  rating: { score: 4.9, count: 284 },

  // Réseaux sociaux
  socials: {
    facebook:  process.env.NEXT_PUBLIC_FACEBOOK_URL  ?? "https://facebook.com",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://instagram.com",
  },

  // Images principales
  images: {
    hero:  "/images/hero-lounge.jpg",
    about: "/images/about-dining.jpg",
  },

  // Horaires de service
  hours: {
    schedule: [
      { day: "Lundi",    slots: ["Fermé"] },
      { day: "Mardi",    slots: ["12:00 – 15:00", "19:00 – 23:30"] },
      { day: "Mercredi", slots: ["12:00 – 15:00", "19:00 – 23:30"] },
      { day: "Jeudi",    slots: ["12:00 – 15:00", "19:00 – 23:30"] },
      { day: "Vendredi", slots: ["12:00 – 15:00", "19:00 – 01:00"] },
      { day: "Samedi",   slots: ["12:00 – 15:30", "19:00 – 01:00"] },
      { day: "Dimanche", slots: ["12:00 – 16:00 (Brunch & Déjeuner)"] },
    ],
    summary: "Mar–Sam : 12h–15h & 19h–00h · Dim : 12h–16h · Lun : Fermé",
  },

  // Services & aménagements
  amenities: {
    accessibility: [
      "Entrée de plain-pied accessible PMR",
      "Places assises spacieuses et confortables",
    ],
    services: [
      "Dîner en salle intimiste & terrasse",
      "Salons VIP privés pour affaires & familles",
      "Service traiteur & livraison soignée",
    ],
    strengths: [
      "Cuisine d'auteur 100% faite maison",
      "Sélection de produits nobles & terroirs frais",
    ],
    diets: [
      "Options végétariennes & sans gluten",
      "Adaptation aux allergies sur demande",
    ],
    atmosphere: [
      "Ambiance feutrée, musique soignée & lumière ambrée",
      "Cadre romantique et confidentiel",
    ],
    parking: [
      "Parking privé surveillé & service voiturier",
    ],
    payments: [
      "Cartes bancaires (Visa, Mastercard)",
      "Mobile Money (T-Money, Moov Money) & Espèces",
    ],
  },

  // Chiffres clés affichés sur la page d'accueil
  stats: [
    { value: "4,9★",  label: "Note Google Maps" },
    { value: "280+",  label: "Avis Élogieux" },
    { value: "100%",  label: "Produits Frais & Fait Maison" },
    { value: "VIP",   label: "Terrasse & Salons Privés" },
  ],
};