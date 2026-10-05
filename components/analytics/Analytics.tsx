import Script from "next/script";

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const gaId = process.env.NEXT_PUBLIC_GA_ID;

// Chargé uniquement en production, pour ne pas fausser les statistiques pendant le développement.
export function Analytics() {
  if (process.env.NODE_ENV !== "production") return null;
  return (
    <>
      {plausibleDomain && (
        <>
          <Script id="plausible-stub" strategy="afterInteractive">
            {`window.plausible=window.plausible||function(){(window.plausible.q=window.plausible.q||[]).push(arguments)}`}
          </Script>
          <Script src="https://plausible.io/js/script.js" data-domain={plausibleDomain} strategy="afterInteractive" />
        </>
      )}
      {gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaId}');`}
          </Script>
        </>
      )}
    </>
  );
}