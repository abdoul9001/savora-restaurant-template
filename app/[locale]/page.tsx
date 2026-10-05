import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { InfoCards } from "@/components/home/InfoCards";
import { AboutPreview } from "@/components/home/AboutPreview";
import { Specialties } from "@/components/home/Specialties";
import { Why } from "@/components/home/Why";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Reviews } from "@/components/home/Reviews";
import { CtaBand } from "@/components/home/CtaBand";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return pageMetadata(locale, "home", "");
}

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <InfoCards />
      <AboutPreview />
      <Specialties />
      <Why />
      <GalleryPreview />
      <Reviews />
      <CtaBand />
    </>
  );
}