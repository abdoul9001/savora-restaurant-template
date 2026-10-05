# ==============================================================================
# Multi-stage Dockerfile optimisé pour Next.js (Standalone)
# Image ultra-légère (~120 Mo), démarrage < 300 ms, sécurité non-root
# ==============================================================================

# --- Étape 1 : Dépendances ---
FROM node:20-alpine AS deps
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./
RUN npm ci

# --- Étape 2 : Construction du projet ---
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Variables d'environnement de build par défaut
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

# --- Étape 3 : Image de production minimale (Runner) ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Sécurité : exécution sous utilisateur non-root
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copie des fichiers publics et des assets statiques
COPY --from=builder /app/public ./public

# Copie automatique du bundle autonome standalone généré par Next.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
