import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-glow shadow-lg hover:shadow-2xl transform hover:scale-[1.05] hover:-translate-y-1",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl transform hover:scale-[1.03]",
        outline:
          "border-2 border-primary/30 bg-background hover:bg-primary/5 hover:text-primary hover:border-primary shadow-sm hover:shadow-lg transform hover:scale-[1.02]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/70 shadow-md hover:shadow-lg transform hover:scale-[1.02]",
        ghost: "hover:bg-accent/10 hover:text-accent transform hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-glow",
        premium: "bg-gradient-to-br from-primary via-primary-glow to-accent text-primary-foreground shadow-2xl hover:shadow-accent/50 transform hover:scale-110 hover:-translate-y-2 border-2 border-accent/30 font-bold btn-glow",
        glass: "backdrop-blur-2xl bg-white/[0.12] border-2 border-white/40 text-white hover:bg-white/[0.25] hover:border-white/60 shadow-xl hover:shadow-2xl transform hover:scale-110 hover:-translate-y-1",
      },
      size: {
        default: "h-11 px-5 py-2.5 text-sm",
        sm: "h-9 rounded-lg px-3 text-xs",
        lg: "h-14 rounded-xl px-10 py-4 text-base md:text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
