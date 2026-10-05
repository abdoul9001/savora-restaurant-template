type Props = Record<string, string | number>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Props }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

// Envoie l'événement à l'outil configuré (Plausible et/ou Google Analytics), sinon ne fait rien.
export function track(event: string, props: Props = {}) {
  if (typeof window === "undefined") return;
  window.plausible?.(event, { props });
  window.gtag?.("event", event, props);
}