import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

// Collection d'icônes vectorielles style Flaticon / Uicons spécialisées gastronomie & lounge
export function FlaticonChefHat({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M6 13.8a5 5 0 0 1-2.8-4.6 4.8 4.8 0 0 1 5.4-4.8 5 5 0 0 1 6.8 0 4.8 4.8 0 0 1 5.4 4.8 5 5 0 0 1-2.8 4.6" />
      <path d="M6 17h12v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3z" />
      <line x1="6" y1="17" x2="6" y2="13.8" />
      <line x1="18" y1="17" x2="18" y2="13.8" />
      <line x1="10" y1="17" x2="10" y2="21" />
      <line x1="14" y1="17" x2="14" y2="21" />
    </svg>
  );
}

export function FlaticonCloche({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M12 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      <path d="M3 17h18" />
      <path d="M4 17a8 8 0 0 1 16 0" />
      <path d="M2 20h20a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v0a1 1 0 0 1 1-1z" />
      <path d="M10 10c0-1.1.9-2 2-2" strokeDasharray="1 1" />
    </svg>
  );
}

export function FlaticonCocktail({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="m4 5 8 8 8-8z" />
      <line x1="12" y1="13" x2="12" y2="20" />
      <line x1="8" y1="20" x2="16" y2="20" />
      <path d="M18 4l2-2" />
      <circle cx="20" cy="2" r="1" fill="currentColor" />
      <line x1="6.5" y1="7.5" x2="17.5" y2="7.5" strokeDasharray="2 1.5" />
    </svg>
  );
}

export function FlaticonWineGlass({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M7 2h10v6a5 5 0 0 1-10 0V2z" />
      <line x1="12" y1="13" x2="12" y2="21" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <path d="M7 6h10" strokeDasharray="1 2" />
    </svg>
  );
}

export function FlaticonCutlery({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M18 2v8a2 2 0 0 1-2 2h-1v10" />
      <path d="M15 2v5" />
      <path d="M6 2v6a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V2" />
      <line x1="9" y1="11" x2="9" y2="22" />
      <line x1="9" y1="2" x2="9" y2="6" />
    </svg>
  );
}

export function FlaticonGrill({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M4 11a8 8 0 0 0 16 0H4z" />
      <line x1="3" y1="11" x2="21" y2="11" />
      <line x1="7" y1="17" x2="5" y2="22" />
      <line x1="17" y1="17" x2="19" y2="22" />
      <path d="M8.5 7c0-1.5 1-2.5 1.5-3.5.5 1 1.5 2 1.5 3.5a1.5 1.5 0 0 1-3 0z" fill="currentColor" fillOpacity="0.2" />
      <path d="M12.5 8c0-1.5 1-2.5 1.5-3.5.5 1 1.5 2 1.5 3.5a1.5 1.5 0 0 1-3 0z" fill="currentColor" fillOpacity="0.3" />
    </svg>
  );
}

export function FlaticonDeliveryScooter({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M6 15h3l3-6h4l2 4h-3" />
      <rect x="13" y="5" width="5" height="5" rx="1" />
      <path d="M2 13h2" />
      <path d="M1 9h3" />
    </svg>
  );
}

export function FlaticonCalendarTable({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M12 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

export function FlaticonAwardMedal({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.4 12.8 17 22l-5-3-5 3 1.6-9.2" />
      <path d="m10.5 7.5 1.5-1.5 1.5 1.5-1.5 1.5z" fill="currentColor" />
    </svg>
  );
}

export function FlaticonSparkles({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="m12 3-1.9 4.8L5 9.7l4.1 3.5L8 18l4-2.5 4 2.5-1.1-4.8 4.1-3.5-5.1-1.9z" fill="currentColor" fillOpacity="0.2" />
      <path d="M19 3v4" />
      <path d="M21 5h-4" />
    </svg>
  );
}

export function FlaticonMusicLounge({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

export function FlaticonShieldGuarantee({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function FlaticonPinMap({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

export function FlaticonClockTime({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function FlaticonPhoneCall({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function FlaticonAccessibility({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <circle cx="16" cy="4" r="2" />
      <path d="M12 9h4l-2 6 3 4" />
      <path d="m8.5 13 2.5-3" />
      <circle cx="9" cy="17" r="4" />
      <path d="M9 13v4h4" />
    </svg>
  );
}

export function FlaticonCarParking({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </svg>
  );
}

export function FlaticonCreditCard({ size = 24, className = "", ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <line x1="6" y1="15" x2="10" y2="15" />
    </svg>
  );
}

