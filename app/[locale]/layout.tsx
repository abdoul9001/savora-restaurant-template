import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Dancing_Script, Open_Sans } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { siteUrl } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBar } from "@/components/layout/MobileBar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { RestaurantJsonLd } from "@/components/seo/RestaurantJsonLd";
import "../globals.css";
import Script from "next/script";
import { Analytics } from "@/components/analytics/Analytics";
import { ClickTracker } from "@/components/analytics/ClickTracker";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Savora",
    default: "Savora | Haute Gastronomie & Lounge Bar",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Savora",
  },
};

export const generateStaticParams = () => routing.locales.map((locale) => ({ locale }));

const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  // Fournir l'ensemble des traductions aux composants clients
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${dancing.variable} ${openSans.variable}`}
    >
      <body className="pb-16 font-sans lg:pb-0 selection:bg-gold selection:text-white">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <RestaurantJsonLd />
        <Analytics />
        <ClickTracker />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileBar />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}