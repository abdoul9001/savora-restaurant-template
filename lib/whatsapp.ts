import { restaurant } from "@/data/restaurant";

export const whatsappUrl = (message: string) =>
  `https://wa.me/${restaurant.whatsapp}?text=${encodeURIComponent(message)}`;
