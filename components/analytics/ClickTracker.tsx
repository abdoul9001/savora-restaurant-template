"use client";
import { useEffect } from "react";
import { track } from "@/lib/analytics";

export function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const page = window.location.pathname;
      if (href.startsWith("https://wa.me")) track("whatsapp_click", { page });
      else if (href.startsWith("tel:")) track("phone_click", { page });
      else if (href.includes("google.com/maps")) track("directions_click", { page });
      else if (/\/reservation$/.test(href)) track("booking_click", { page });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}