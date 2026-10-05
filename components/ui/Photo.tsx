import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhotoProps {
  src?: string;
  alt: string;
  label?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

// Affiche la photo si `src` est renseigné, sinon un dégradé placeholder.
export function Photo({
  src,
  alt,
  label,
  className,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority,
}: PhotoProps) {
  return (
    <div className={cn("relative overflow-hidden bg-gradient-to-br from-gold/50 to-fg/70", className)}>
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : label ? (
        <span className="absolute bottom-3 left-3 text-xs text-white">{label}</span>
      ) : null}
    </div>
  );
}