"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/whatsapp";
import {
  FlaticonDeliveryScooter,
  FlaticonShieldGuarantee,
  FlaticonClockTime,
  FlaticonCutlery,
  FlaticonSparkles,
} from "@/components/icons/FlaticonIcons";
import { cn } from "@/lib/utils";

interface DeliveryZone {
  id: string;
  name: string;
  districts: string;
  fee: number;
  time: string;
}

const zones: DeliveryZone[] = [
  {
    id: "centre",
    name: "Zone 1 : Hyper Centre & Marina",
    districts: "Boulevard Circulaire, Marina, Quartier Administratif, Assigamé",
    fee: 1500,
    time: "25 - 35 min",
  },
  {
    id: "proche",
    name: "Zone 2 : Quartiers Résidentiels Proches",
    districts: "Tokoin, Kodjoviakopé, Nyékonakpoè, Dékon, Forever",
    fee: 1500,
    time: "30 - 40 min",
  },
  {
    id: "intermediaire",
    name: "Zone 3 : Est & Nord Intermédiaire",
    districts: "Hedzranawoé, Bè-Kpota, Agbalépédogan, Totsi, Casablanca",
    fee: 2000,
    time: "35 - 50 min",
  },
  {
    id: "nord",
    name: "Zone 4 : Grand Nord & Périphérie",
    districts: "Agoè-Nyivé, Cacaveli, Vakpossito, Logopé, Zossimé",
    fee: 2500,
    time: "45 - 60 min",
  },
  {
    id: "cote",
    name: "Zone 5 : Littoral & Est",
    districts: "Baguida, Avépozo, Zone Portuaire, Adakpamé",
    fee: 3000,
    time: "45 - 60 min",
  },
];

const stepIcons = [
  <FlaticonCutlery key="1" size={24} className="text-gold" />,
  <FlaticonDeliveryScooter key="2" size={24} className="text-gold" />,
  <FlaticonClockTime key="3" size={24} className="text-gold" />,
  <FlaticonShieldGuarantee key="4" size={24} className="text-gold" />,
];

export default function DeliveryPage() {
  const t = useTranslations("delivery");
  const steps = t.raw("steps") as string[];
  const [selectedZone, setSelectedZone] = useState<DeliveryZone>(zones[0]);

  const orderMessage = `Bonjour Savora,\nJe souhaite passer une commande pour livraison.\n\nZone sélectionnée : ${selectedZone.name}\nFrais prévus : ${selectedZone.fee.toLocaleString()} FCFA\n\nVoici les plats souhaités :\n- \n\nAdresse exacte de livraison :\nNom & contact :`;

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      {/* En-tête */}
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-2">
          <FlaticonDeliveryScooter size={16} />
          <span>Service Traiteur & Livraison Privée</span>
        </div>
        <h1 className="font-heading text-5xl font-bold text-fg">
          {t("title")}
        </h1>
        <p className="mt-3 text-fg-2 text-base leading-relaxed">
          {t("subtitle")}
        </p>
      </div>

      {/* 4 Étapes avec icônes Flaticon */}
      <div className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div
            key={s}
            className="luxury-card rounded-2xl border border-line bg-bg p-6 shadow-card flex flex-col justify-between"
          >
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-bg-alt border border-line">
                {stepIcons[i % stepIcons.length]}
              </div>
              <h3 className="font-heading text-lg font-bold text-fg">
                {s}
              </h3>
            </div>
            <div className="mt-4 pt-3 border-t border-line/60 text-[11px] font-mono font-bold text-gold tracking-widest">
              ÉTAPE 0{i + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Sélecteur interactif des zones de livraison à Lomé */}
      <div className="mb-12 rounded-3xl border border-line bg-bg p-6 sm:p-10 shadow-card">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-fg">
              {t("zonesTitle")}
            </h2>
            <p className="text-xs text-fg-2 mt-1">
              Sélectionnez votre quartier pour estimer le délai et initier votre commande.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/menu">Consulter la Carte</Link>
          </Button>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {zones.map((z) => {
            const isSelected = selectedZone.id === z.id;
            return (
              <button
                key={z.id}
                onClick={() => setSelectedZone(z)}
                className={cn(
                  "rounded-2xl border p-4 text-left transition-all duration-200 flex flex-col justify-between",
                  isSelected
                    ? "border-gold bg-gold/10 shadow-md shadow-gold/15"
                    : "border-line bg-bg-alt hover:border-gold/40"
                )}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-fg">{z.name}</span>
                    <span className="font-heading text-sm font-bold text-gold">
                      {z.fee.toLocaleString()} FCFA
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-fg-2 line-clamp-2">
                    {z.districts}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-line/50 flex items-center gap-1.5 text-[10px] text-fg-mute">
                  <FlaticonClockTime size={12} className="text-gold" />
                  <span>Délai moyen : {z.time}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Panneau de commande WhatsApp personnalisé */}
        <div className="rounded-2xl border border-gold/40 bg-gradient-to-r from-bg-alt via-bg to-bg-alt p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase font-semibold text-gold tracking-widest">
              Zone Active : {selectedZone.name}
            </p>
            <p className="font-heading text-2xl font-bold text-fg mt-1">
              Frais de livraison : {selectedZone.fee.toLocaleString()} FCFA · {selectedZone.time}
            </p>
            <p className="text-xs text-fg-2 mt-1">
              Paiement à la livraison en espèces ou par T-Money / Flooz.
            </p>
          </div>

          <Button asChild variant="whatsapp" className="w-full md:w-auto px-7 py-3.5 text-sm font-bold shadow-lg">
            <a href={whatsappUrl(orderMessage)} target="_blank" rel="noopener">
              <FlaticonSparkles size={16} />
              <span>{t("cta")}</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Garantie d'excellence */}
      <div className="rounded-2xl border border-line bg-bg-alt/70 p-6 flex items-center gap-4 text-xs text-fg-2">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
          <FlaticonShieldGuarantee size={24} />
        </div>
        <p className="leading-relaxed">
          {t("guarantee")}
        </p>
      </div>
    </div>
  );
}