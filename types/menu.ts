import type { Locale } from "@/i18n/routing";

export type MenuCategory = "starters" | "mains" | "grills" | "desserts" | "drinks";

export interface MenuItem {
  id: string;
  name: Record<Locale, string>;
  description: Record<Locale, string>;
  price: number;
  image: string;
  category: MenuCategory;
  available: boolean;
  badge?: Record<Locale, string>;
  spicy?: boolean;
  vegetarian?: boolean;
  pairing?: Record<Locale, string>;
}
