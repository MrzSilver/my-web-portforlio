import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold ring-offset-white transition-colors",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-cyan-500/75 to-pink-500/75 text-white ",
        primary: "bg-primary text-white",
        outline: "border border-cyan-500 text-white hover:bg-cyan-500 hover:text-primary hover:transition-all duration-300"

      },
      size: {
        default: "h-[44px] px-6 py-2 has-[>svg]:px-3",
        md: "h-[48px] rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-[56px] px-8 has-[>svg]:px-4 text-sm uppercase tracking-[2px]",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
