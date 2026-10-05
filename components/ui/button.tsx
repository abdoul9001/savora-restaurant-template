import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-gold disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        gold: "bg-gradient-to-r from-gold via-gold-hover to-[#98701e] text-white shadow-md shadow-gold/20 hover:shadow-lg hover:shadow-gold/30 hover:brightness-105",
        outline: "border border-line bg-bg text-fg hover:border-gold hover:text-gold hover:bg-gold/5",
        whatsapp: "bg-[#25D366] text-white shadow-md shadow-emerald-500/20 hover:bg-[#20bd5a] hover:shadow-lg",
      },
      size: {
        default: "px-6 py-3 text-sm",
        sm: "px-4 py-2 text-xs",
        lg: "px-8 py-3.5 text-base",
      },
    },
    defaultVariants: { variant: "gold", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
