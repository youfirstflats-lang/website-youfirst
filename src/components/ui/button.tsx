import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform-gpu rounded-full",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_4px_14px_0_rgba(14,165,233,0.39)] hover:bg-primary/90 hover:scale-[1.02] hover:shadow-[0_6px_20px_0_rgba(14,165,233,0.5)] active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[0_4px_14px_0_rgba(239,68,68,0.39)] hover:bg-destructive/90 hover:scale-[1.02] hover:shadow-[0_6px_20px_0_rgba(239,68,68,0.5)] active:scale-[0.98]",
        outline:
          "border-2 border-primary/30 bg-background text-primary shadow-sm hover:bg-primary/5 hover:border-primary/50 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]",
        ghost: 
          "text-foreground hover:bg-secondary hover:text-foreground rounded-lg hover:scale-[1.02]",
        link: 
          "text-primary underline-offset-4 hover:underline",
        hero:
          "bg-primary text-primary-foreground shadow-[0_8px_24px_0_rgba(14,165,233,0.45)] hover:bg-primary/90 hover:scale-[1.03] hover:shadow-[0_12px_32px_0_rgba(14,165,233,0.55)] active:scale-[0.98]",
        heroOutline:
          "border-2 border-primary/30 bg-background text-primary shadow-sm hover:bg-primary/5 hover:border-primary hover:scale-[1.03] hover:shadow-lg active:scale-[0.98]",
      },
      size: {
        default: "h-12 px-8 text-sm",
        sm: "h-10 px-6 text-sm",
        lg: "h-14 px-10 text-base",
        xl: "h-16 px-12 text-lg",
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
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
