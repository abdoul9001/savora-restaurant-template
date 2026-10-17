# Savora — Site Vitrine Officiel

> Restaurant gastronomique à Lomé, Togo · Site bilingue FR / EN

[![Next.js](https://img.shields.io/badge/Next.js-16.3.8-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?logo=docker)](https://docker.com)
[![License](https://img.shields.io/badge/licence-privée-red)](.)
[![Roadmap](https://img.shields.io/badge/Roadmap-10_items-gold)](./ROADMAP.md)

---

## Stack technique

| Technologie | Version | Rôle |
|---|---|---|
| **Next.js** | 16.3.8 | Framework React — App Router, SSG, Standalone |
| **React** | 19.2.8 | UI |
| **TypeScript** | 5 | Typage statique |
| **Tailwind CSS** | v4 | Styles utilitaires |
| **Framer Motion** | 14 | Animations & transitions |
| **next-intl** | 4 | Internationalisation FR / EN |
| **Lucide React** | 1.52 | Icônes |
| **Node.js** | 20 LTS | Runtime |

---

## Démarrage rapide

### Prérequis

- [Node.js 20+](https://nodejs.org)
- [Docker Desktop](https://docker.com/products/docker-desktop) *(pour la production)*

### 1. Cloner et configurer

```powershell
git clone <repo-url>
cd Savora

# Copier les variables d'environnement
copy .env.example .env.local
```

### 2. Développement local

```powershell
npm install
npm run dev
```

L'application démarre sur **http://localhost:3000** et redirige automatiquement vers `/fr`.

| URL | Description |
|---|---|
| http://localhost:3000/fr | Version française |
| http://localhost:3000/en | Version anglaise |

---

## Scripts disponibles

```powershell
npm run dev        # Serveur de développement avec hot-reload (Turbopack)
npm run build      # Build de production optimisé
npm run start      # Serveur de production (après build)
npm run typecheck  # Vérification TypeScript (tsc --noEmit)
npm run lint       # Analyse ESLint
```

---

## Déploiement Docker (Production)

### Lancement en une commande

```bash
docker compose up -d --build
```

Accès : **http://localhost:3000/fr** · **http://localhost:3000/en**

### Commandes Docker utiles

```bash
# Démarrer (en arrière-plan)
docker compose up -d

# Voir les logs en temps réel
docker compose logs -f

# Arrêter et supprimer les conteneurs
docker compose down

# Reconstruire l'image après une modification
docker compose up -d --build

# Inspecter l'image
docker image ls Savora-app
docker image inspect Savora-app:latest
```

### Architecture multi-stage

```
Dockerfile
├── deps    → npm ci (installation propre des dépendances)
├── builder → next build (bundle standalone optimisé)
└── runner  → Image finale (~120 Mo), utilisateur non-root
```

> **Performance** : Mode `standalone` de Next.js — aucun `node_modules` dans le runner, démarrage < 300 ms, image ~120 Mo.

### Variables d'environnement

| Variable | Description | Exemple |
|---|---|---|
| `NODE_ENV` | Environnement | `production` |
| `PORT` | Port d'écoute | `3000` |
| `NEXT_PUBLIC_SITE_URL` | URL publique du site | `https://Savora.com` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Numéro WhatsApp (réservations) | `22871030810` |

Copier `.env.example` en `.env.local` et renseigner les valeurs.

---

## Structure du projet

```
Savora/
├── app/
│   ├── [locale]/              # Pages par langue (FR / EN)
│   │   ├── page.tsx           # Accueil
│   │   ├── a-propos/          # À propos
│   │   ├── menu/              # Carte du restaurant
│   │   ├── reservation/       # Formulaire de réservation (WhatsApp)
│   │   ├── galerie/           # Galerie photo
│   │   ├── livraison/         # Page livraison
│   │   └── contact/           # Contact & localisation
│   ├── globals.css            # Design system — variables CSS, tokens
│   ├── robots.ts              # robots.txt
│   └── sitemap.ts             # sitemap.xml
│
├── components/
│   ├── home/                  # Sections de la page d'accueil
│   │   ├── Hero.tsx           # Section héro plein écran
│   │   ├── AboutPreview.tsx   # Aperçu "À propos"
│   │   ├── Specialties.tsx    # Plats signature
│   │   ├── Reviews.tsx        # Avis clients
│   │   └── Why.tsx            # Pourquoi nous choisir
│   ├── layout/
│   │   ├── Header.tsx         # Navigation principale
│   │   ├── Footer.tsx         # Pied de page
│   │   └── Toggles.tsx        # Sélecteurs langue / thème
│   ├── icons/
│   │   └── FlaticonIcons.tsx  # Collection SVG sur-mesure
│   ├── seo/
│   │   └── RestaurantJsonLd.tsx # Données structurées (Schema.org)
│   ├── menu/                  # Composants de la carte
│   ├── gallery/               # Composants galerie
│   ├── reservation/           # Formulaire de réservation
│   ├── analytics/             # Suivi d'événements
│   └── ui/                    # Composants génériques (Button, etc.)
│
├── data/
│   ├── restaurant.ts          # Infos du restaurant (horaires, contacts…)
│   ├── menu.ts                # Données de la carte
│   └── gallery.ts             # Photos de la galerie
│
├── messages/
│   ├── fr.json                # Traductions françaises
│   └── en.json                # Traductions anglaises
│
├── i18n/
│   ├── navigation.ts          # Liens localisés
│   └── request.ts             # Config next-intl
│
├── lib/
│   └── utils.ts               # Utilitaires (cn, etc.)
│
├── public/
│   └── images/                # Photos du restaurant (WebP optimisé)
│
├── Dockerfile                 # Build multi-stage production
├── docker-compose.yml         # Orchestration conteneur
├── next.config.ts             # Config Next.js (standalone, images, headers)
└── .env.example               # Modèle de variables d'environnement
```

---

## Fonctionnalités

- 🌐 **Bilingue** — Français / Anglais avec redirection automatique selon le navigateur
- 🎨 **Design luxe & animations** — Cormorant Garamond (titres) + Plus Jakarta Sans (corps), palette or/noir, micro-interactions & animations d'entrée scroll-triggered Framer Motion
- 📱 **Responsive & Mobile First** — Barre d'action rapide tactile, détection de route active et bouton retour en haut fluide
- ⚡ **Performances extrêmes** — Prégénération statique (SSG 21/21 routes), images WebP haute compression (-85%), cache immutable, Turbopack
- 🖼️ **Galerie d'Art Gastronomique** — Grille masonry adaptative et lightbox immersif plein écran avec navigation tactile
- 🍽️ **Carte & Menu dynamique** — Filtres par catégorie animés (sliding pill), recherche instantanée et accords mets-vins
- 📋 **Réservation VIP & Conciergerie** — Formulaire avec état de chargement, récapitulatif interactif et confirmation WhatsApp directe
- 📲 **PWA Ready (Progressive Web App)** — Manifest web, icônes adaptatives, mode autonome pour installation sur smartphone
- 🔍 **SEO complet** — Schema.org JSON-LD, OpenGraph dynamiques, sitemap.xml, robots.txt
- 🌙 **Dark/Light mode** — Basculement instantané sans flash visuel
- 🚀 **Docker-ready** — Image de production ~120 Mo, démarrage < 300 ms, multi-stage unprivileged

---

## Informations restaurant

| | |
|---|---|
| **Nom** | Savora |
| **Adresse** | 647W+2P, Lomé, Togo |
| **Téléphone** | +228 71 03 08 10 |
| **Note Google** | ⭐ 4,4 / 5 (18 avis) |
| **Horaires** | Mer fermé · Mar–Sam 18h–00h + 00h–06h · Dim 00h–06h & 18h–00h |
| **Services** | Repas sur place · Livraison · Drive · Terrasse |

---

## Roadmap

Les pistes d'amélioration du projet sont documentées dans **[ROADMAP.md](./ROADMAP.md)**.

| Priorité | Items |
|---|---|
| 🔴 Haute (à traiter en priorité) | Backend e-mail réservation · Analytics (Plausible/Umami) |
| 🟠 Moyenne | CMS Headless · Tests E2E Playwright · CI/CD GitHub Actions · Monitoring Sentry |
| 🟢 Basse | Nouvelles langues IT/DE · Avis Google Places · Carte interactive · Notifications Push PWA |

---

## Licence

Projet privé — tous droits réservés © Savora.
