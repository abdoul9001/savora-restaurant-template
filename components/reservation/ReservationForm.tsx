"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import {
  FlaticonCalendarTable,
  FlaticonClockTime,
  FlaticonShieldGuarantee,
  FlaticonSparkles,
} from "@/components/icons/FlaticonIcons";
import { cn } from "@/lib/utils";
import { Users, Sparkles, CheckCircle2, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const inputClass =
  "mt-1.5 w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-fg transition-colors focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/15";

interface SubmittedReservation {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  area: string;
  occasion: string;
  whatsappLink: string;
}

export function ReservationForm() {
  const t = useTranslations();
  const today = new Date().toISOString().split("T")[0];

  const [guests, setGuests] = useState(2);
  const [selectedArea, setSelectedArea] = useState<"main" | "terrace" | "vip">("main");
  const [selectedOccasion, setSelectedOccasion] = useState<string>("dinner");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<SubmittedReservation | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "");

    const areaLabel = t(`booking.areas.${selectedArea}`);
    const occasionLabel = t(`booking.occasions.${selectedOccasion}`);

    const msg = t("wa.booking", {
      name: v("name"),
      phone: v("phone"),
      date: v("date"),
      time: v("time"),
      guests,
      area: areaLabel,
      occasion: occasionLabel,
      message: v("message") || "Aucune demande spécifique",
    });

    track("booking_submit");
    const link = whatsappUrl(msg);

    // Simulation fluide de traitement conciergerie
    setTimeout(() => {
      setSubmittedData({
        name: v("name"),
        phone: v("phone"),
        date: v("date"),
        time: v("time"),
        guests,
        area: areaLabel,
        occasion: occasionLabel,
        whatsappLink: link,
      });
      setIsSubmitting(false);
      window.open(link, "_blank", "noopener");
    }, 600);
  }

  const areas: ("main" | "terrace" | "vip")[] = ["main", "terrace", "vip"];
  const occasions = ["dinner", "romantic", "business", "birthday", "drinks"];

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      {/* Formulaire principal ou Confirmation */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          {submittedData ? (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -15 }}
              transition={{ duration: 0.35 }}
              className="luxury-card rounded-3xl border border-gold/50 bg-gradient-to-b from-bg-alt via-bg to-bg-alt p-6 sm:p-10 shadow-2xl space-y-8"
            >
              <div className="text-center max-w-md mx-auto space-y-3">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/15 text-gold border border-gold/30 shadow-lg shadow-gold/10">
                  <CheckCircle2 className="size-8" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-fg">
                  {t("booking.toastSuccess")}
                </h3>
                <p className="text-xs sm:text-sm text-fg-2 leading-relaxed">
                  {t("booking.toastSubtitle")}
                </p>
              </div>

              {/* Récapitulatif élégant */}
              <div className="rounded-2xl border border-line bg-bg p-5 sm:p-6 space-y-4 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold flex items-center gap-1.5">
                  <FlaticonSparkles size={14} />
                  <span>{t("booking.summaryTitle")}</span>
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-fg-mute block">{t("booking.name")}</span>
                    <span className="font-semibold text-fg text-sm">{submittedData.name}</span>
                  </div>
                  <div>
                    <span className="text-fg-mute block">{t("booking.phone")}</span>
                    <span className="font-semibold text-fg text-sm">{submittedData.phone}</span>
                  </div>
                  <div>
                    <span className="text-fg-mute block">{t("booking.date")}</span>
                    <span className="font-semibold text-fg text-sm">{submittedData.date}</span>
                  </div>
                  <div>
                    <span className="text-fg-mute block">{t("booking.time")}</span>
                    <span className="font-semibold text-fg text-sm">{submittedData.time}</span>
                  </div>
                  <div>
                    <span className="text-fg-mute block">{t("booking.guests")}</span>
                    <span className="font-semibold text-gold text-sm">
                      {submittedData.guests}{" "}
                      {submittedData.guests > 1 ? t("booking.personPlural") : t("booking.personSingle")}
                    </span>
                  </div>
                  <div>
                    <span className="text-fg-mute block">{t("booking.area")}</span>
                    <span className="font-semibold text-fg text-sm">{submittedData.area}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" className="flex-1 py-4 text-sm font-bold shadow-lg">
                  <a href={submittedData.whatsappLink} target="_blank" rel="noopener">
                    <FlaticonCalendarTable size={18} />
                    <span>{t("booking.reopenWhatsapp")}</span>
                  </a>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSubmittedData(null)}
                  className="py-4 text-xs font-semibold gap-1.5"
                >
                  <RotateCcw className="size-4" />
                  <span>{t("booking.newBooking")}</span>
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={onSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="luxury-card rounded-3xl border border-line bg-bg p-6 sm:p-8 shadow-card space-y-6"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Nom */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-fg-2">
                    {t("booking.name")} *
                  </label>
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    placeholder={t("booking.namePlaceholder")}
                    className={inputClass}
                  />
                </div>

                {/* Téléphone WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-fg-2">
                    {t("booking.phone")} *
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder={t("booking.phonePlaceholder")}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {/* Date */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-fg-2">
                    {t("booking.date")} *
                  </label>
                  <input
                    name="date"
                    type="date"
                    min={today}
                    defaultValue={today}
                    required
                    className={inputClass}
                  />
                </div>

                {/* Heure */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-fg-2">
                    {t("booking.time")} *
                  </label>
                  <input
                    name="time"
                    type="time"
                    defaultValue="19:30"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Nombre de convives avec contrôleur +/- */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-fg-2 mb-2">
                  {t("booking.guests")} *
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-line rounded-xl bg-bg-alt overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setGuests((g) => Math.max(1, g - 1))}
                      className="h-11 w-11 flex items-center justify-center text-lg font-bold hover:bg-gold/15 text-fg transition"
                    >
                      −
                    </button>
                    <div className="w-14 text-center font-heading text-xl font-bold text-gold">
                      {guests}
                    </div>
                    <button
                      type="button"
                      onClick={() => setGuests((g) => Math.min(25, g + 1))}
                      className="h-11 w-11 flex items-center justify-center text-lg font-bold hover:bg-gold/15 text-fg transition"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-xs text-fg-2 flex items-center gap-1.5">
                    <Users className="size-4 text-gold" />
                    {guests > 1
                      ? `${guests} ${t("booking.personPlural")}`
                      : `1 ${t("booking.personSingle")}`}
                  </span>
                </div>
              </div>

              {/* Choix de l'espace */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-fg-2 mb-2">
                  {t("booking.area")}
                </label>
                <div className="grid gap-2.5 sm:grid-cols-3">
                  {areas.map((a) => (
                    <button
                      key={a}
                      type="button"
                      onClick={() => setSelectedArea(a)}
                      className={cn(
                        "rounded-xl border p-3 text-left transition-all duration-200",
                        selectedArea === a
                          ? "border-gold bg-gold/10 text-fg shadow-sm"
                          : "border-line bg-bg-alt text-fg-2 hover:border-gold/40"
                      )}
                    >
                      <span className="block text-xs font-semibold text-fg">
                        {t(`booking.areas.${a}`)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-fg-2 mb-2">
                  {t("booking.occasion")}
                </label>
                <div className="flex flex-wrap gap-2">
                  {occasions.map((occ) => (
                    <button
                      key={occ}
                      type="button"
                      onClick={() => setSelectedOccasion(occ)}
                      className={cn(
                        "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all",
                        selectedOccasion === occ
                          ? "border-gold bg-gold text-white shadow-sm"
                          : "border-line bg-bg-alt text-fg-2 hover:border-gold/40"
                      )}
                    >
                      {t(`booking.occasions.${occ}`)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message / Demandes particulières */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-fg-2">
                  {t("booking.message")}
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder={t("booking.messagePlaceholder")}
                  className={inputClass}
                />
              </div>

              {/* Bouton de confirmation avec état loading */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="whatsapp"
                  className="w-full py-4 text-sm font-bold shadow-lg disabled:opacity-70 transition-all"
                >
                  <FlaticonCalendarTable size={18} />
                  <span>
                    {isSubmitting ? t("booking.submitting") : t("booking.send")}
                  </span>
                </Button>
              </div>

              <p className="flex items-center justify-center gap-1.5 text-center text-xs text-fg-mute">
                <FlaticonShieldGuarantee size={14} className="text-gold" />
                <span>{t("booking.guarantee")}</span>
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* Colonne latérale d'informations & conciergerie */}
      <div className="space-y-6 lg:col-span-4">
        <div className="luxury-card rounded-3xl border border-line bg-bg-alt p-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
            <FlaticonClockTime size={16} />
            <span>Horaires des Services</span>
          </div>

          <div className="space-y-3 text-xs text-fg-2">
            <div className="border-b border-line/60 pb-2">
              <p className="font-semibold text-fg">Service en Soirée & Lounge</p>
              <p className="mt-0.5 text-fg-mute">18h00 à 06h00 (Mercredi au Dimanche)</p>
            </div>
            <div className="border-b border-line/60 pb-2">
              <p className="font-semibold text-fg">Nocturne du Dimanche au Lundi</p>
              <p className="mt-0.5 text-fg-mute">00h00 à 06h00 (Lundi matin)</p>
            </div>
            <div className="border-b border-line/60 pb-2">
              <p className="font-semibold text-gold">Mardi</p>
              <p className="mt-0.5 text-fg-mute">Fermeture hebdomadaire</p>
            </div>
            <div className="pt-1 text-[11px] text-fg-mute space-y-1">
              <p>✓ Réservations recommandées</p>
              <p>✓ Temps d&apos;attente estimé &lt; 10 min</p>
              <p>✓ Parking gratuit sur place</p>
            </div>
          </div>
        </div>

        <div className="luxury-card rounded-3xl border border-gold/40 bg-gradient-to-br from-bg via-bg-alt to-bg p-6 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
            <Sparkles className="size-4" />
            <span>Privatisation & Événements</span>
          </div>
          <p className="text-xs text-fg-2 leading-relaxed">
            Pour vos réceptions privées, anniversaires d&apos;exception ou séminaires de direction, notre salon VIP est entièrement privatisable.
          </p>
          <div className="pt-1">
            <a
              href="tel:+22871030810"
              className="inline-flex items-center gap-2 text-xs font-bold text-gold hover:underline"
            >
              Ligne Conciergerie : +228 71 03 08 10
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
