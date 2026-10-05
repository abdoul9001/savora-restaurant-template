# ROADMAP — INTIMISSIME

> Pistes d amélioration identifiées après audit complet du projet.
> Chaque item est classé par priorité et domaine, avec une estimation d effort.

---

## Légende

| Symbole | Priorité |
|---|---|
| Haute | Impact direct sur la conversion ou l expérience utilisateur |
| Moyenne | Améliore la robustesse ou la scalabilité |
| Basse | Nice-to-have, confort ou évolutivité future |

| Symbole | Effort |
|---|---|
| Rapide | < 1 jour |
| Modéré | 1 à 3 jours |
| Important | > 3 jours |

---

## 1. Formulaire de Réservation — Backend Réel

**Priorité : Haute · Effort : Modéré**

Actuellement le formulaire de réservation génère un lien WhatsApp côté client.
L objectif est de brancher un vrai endpoint transactionnel pour envoyer des e-mails de confirmation automatiques.

### Options recommandées

| Solution | Avantage | Complexité |
|---|---|---|
| Resend (resend.com) | API simple, templates React, plan gratuit généreux | Faible |
| Nodemailer + SMTP | Auto-hébergé, aucun fournisseur tiers | Moyen |
| SendGrid | Analytics e-mail intégrés | Moyen |

### Fichiers à créer / modifier

```
app/api/reservation/route.ts   <- POST handler Next.js (App Router)
lib/mailer.ts                  <- Abstraction d envoi d e-mail
```

### Variables d environnement à ajouter

```env
RESEND_API_KEY=re_xxxx
RESERVATION_TO_EMAIL=reservations@intimissime.com

# OU SMTP classique
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=noreply@intimissime.com
SMTP_PASS=xxxx
```

---

## 2. Analytics — Suivi des Conversions

**Priorité : Haute · Effort : Rapide**

Mesurer les clics sur les boutons de réservation, les pages les plus visitées — sans cookie tracking invasif.

### Options recommandées

| Solution | RGPD | Coût |
|---|---|---|
| Plausible Analytics | Sans cookie | 9 euros/mois |
| Umami | Auto-hébergeable | Gratuit open-source |
| PostHog | Auto-hébergeable | Gratuit self-hosted |

### Événements à tracker

```typescript
trackEvent('reservation_started')
trackEvent('reservation_whatsapp_click', { guests: 2 })
trackEvent('menu_filter_used', { category: 'poissons' })
trackEvent('gallery_lightbox_opened')
trackEvent('phone_click')
```

### Fichiers à créer

```
components/analytics/PlausibleProvider.tsx
components/analytics/events.ts
```

---

## 3. CMS Headless — Contenu Éditable sans Code

**Priorité : Moyenne · Effort : Important**

Actuellement les données (menu, galerie, infos restaurant) sont des fichiers .ts statiques.
Un CMS permettrait au gérant de modifier le menu et ajouter des photos sans toucher au code.

### Options recommandées

| CMS | Plan gratuit | Docker |
|---|---|---|
| Sanity.io | Généreux (cloud) | Non applicable |
| Directus | Self-hosted | Excellent |
| PayloadCMS | Self-hosted | Très bon |

---

## 4. Tests E2E — Playwright

**Priorité : Moyenne · Effort : Modéré**

### Flux à tester en priorité

```
tests/home.spec.ts           <- Chargement, liens CTA
tests/menu.spec.ts           <- Filtres, recherche, affichage
tests/reservation.spec.ts    <- Formulaire, validation, lien WhatsApp
tests/gallery.spec.ts        <- Ouverture lightbox, navigation
tests/i18n.spec.ts           <- Basculement FR / EN
```

### Installation

```bash
npm install -D @playwright/test
npx playwright install
```

### Script à ajouter dans package.json

```json
{
  "scripts": {
    "test": "playwright test",
    "test:ui": "playwright test --ui"
  }
}
```

---

## 5. CI/CD — Pipeline GitHub Actions

**Priorité : Moyenne · Effort : Modéré**

Automatiser le build, les tests, et le push de l image Docker à chaque push sur main.

### Fichier à créer : .github/workflows/ci.yml

```yaml
name: CI/CD Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run typecheck
      - run: npm run lint
      - run: npm run build
      - uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: GITHUB_ACTOR
          password: GITHUB_TOKEN (secrets)
      - uses: docker/build-push-action@v5
        with:
          push: true
          tags: ghcr.io/OWNER/intimissime:latest
```

---

## 6. Monitoring — Sentry

**Priorité : Moyenne · Effort : Rapide**

Capturer les erreurs JavaScript et les crashes en production.

### Installation

```bash
npx @sentry/wizard@latest -i nextjs
```

### Variables à ajouter

```env
NEXT_PUBLIC_SENTRY_DSN=https://xxxx@oXXX.ingest.sentry.io/XXXX
SENTRY_AUTH_TOKEN=xxxx
SENTRY_ORG=intimissime
SENTRY_PROJECT=intimissime-web
```

### Bénéfices

- Alerte automatique en cas d erreur 500
- Stack trace complète avec contexte utilisateur
- Suivi des performances (LCP, FID, CLS)

---

## 7. Nouvelles Langues (IT / DE)

**Priorité : Basse · Effort : Modéré**

La clientèle est internationale. Ajouter une langue nécessite uniquement un nouveau fichier dans messages/.

### Fichiers à créer

```
messages/fr.json   <- Existant
messages/en.json   <- Existant
messages/de.json   <- A créer (Allemand)
messages/it.json   <- A créer (Italien — cohérence avec le nom)
```

---

## 8. Avis Google Places API — Dynamiques

**Priorité : Basse · Effort : Modéré**

Afficher les vrais avis Google en temps réel au lieu des avis statiques.

### Variables à ajouter

```env
GOOGLE_PLACES_API_KEY=AIzaxxxx
NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJxxxxxxxx
```

Note : La clé API doit être utilisée côté serveur uniquement (SSR/API route).

---

## 9. Carte Interactive (Leaflet / Mapbox)

**Priorité : Basse · Effort : Rapide**

Remplacer le lien Google Maps statique par une carte interactive dans la page Contact.

| Librairie | Coût | Avantage |
|---|---|---|
| Leaflet.js | Gratuit | Open-source, OpenStreetMap |
| Mapbox | Plan gratuit | Design premium, thème sombre |

```bash
npm install leaflet react-leaflet
# OU
npm install mapbox-gl
```

---

## 10. Notifications Push — PWA

**Priorité : Basse · Effort : Important**

Envoyer des notifications push aux clients ayant installé la PWA (offres spéciales, événements).

### Variables à ajouter

```env
VAPID_PUBLIC_KEY=xxxx
VAPID_PRIVATE_KEY=xxxx
VAPID_SUBJECT=mailto:contact@intimissime.com
```

---

## Récapitulatif Priorisé

| # | Fonctionnalité | Priorité | Effort | Impact |
|---|---|---|---|---|
| 1 | Backend e-mail réservation | Haute | Modéré | Conversion directe |
| 2 | Analytics Plausible/Umami | Haute | Rapide | Données décision |
| 3 | CMS Headless | Moyenne | Important | Autonomie opérationnelle |
| 4 | Tests E2E Playwright | Moyenne | Modéré | Stabilité |
| 5 | CI/CD GitHub Actions | Moyenne | Modéré | Déploiement automatisé |
| 6 | Monitoring Sentry | Moyenne | Rapide | Fiabilité production |
| 7 | Nouvelles langues IT/DE | Basse | Modéré | Reach international |
| 8 | Avis Google Places API | Basse | Modéré | Social proof |
| 9 | Carte interactive | Basse | Rapide | UX Contact |
| 10 | Notifications Push PWA | Basse | Important | Engagement |

---

*Roadmap générée le 5 octobre 2026 — à réviser trimestriellement.*