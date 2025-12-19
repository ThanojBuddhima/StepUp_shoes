import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-[#086E0A] text-white hover:bg-[#065408]",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-[#086E0A] bg-background text-[#086E0A] hover:bg-[#086E0A]/10 dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-[#086E0A] text-white hover:bg-[#065408]",
        ghost:
          "hover:bg-[#086E0A]/10 hover:text-[#086E0A] dark:hover:bg-accent/50",
        link: "text-[#086E0A] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";
  const isDefault = variant === "default" || variant === undefined;
  const isSecondary = variant === "secondary";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      style={
        isDefault || isSecondary
          ? { backgroundColor: "#086E0A", color: "#ffffff" }
          : undefined
      }
      onMouseEnter={
        isDefault || isSecondary
          ? (e) => {
              e.currentTarget.style.backgroundColor = "#065408";
            }
          : undefined
      }
      onMouseLeave={
        isDefault || isSecondary
          ? (e) => {
              e.currentTarget.style.backgroundColor = "#086E0A";
            }
          : undefined
      }
      {...props}
    />
  );
}

export { Button, buttonVariants };
