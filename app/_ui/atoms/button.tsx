import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn, tw } from "@/app/_lib/utils";

const buttonVariants = cva(
  tw`inline-flex items-center justify-center whitespace-nowrap rounded font-medium uppercase transition-all hover:scale-[1.01] hover:shadow-lg disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: tw`bg-green-500 text-white`,
        destructive: tw`bg-destructive text-destructive-foreground hover:bg-destructive/90`,
        outline: tw`border border-input bg-background hover:bg-accent hover:text-accent-foreground`,
        secondary: tw`bg-white text-green-700`,
        ghost: tw`hover:bg-accent hover:text-accent-foreground`,
        link: tw`text-primary underline-offset-4 hover:underline`,
      },
      size: {
        default: `px-6 py-2.5`,
        sm: `h-9 rounded-md px-3`,
        lg: `h-11 rounded-md px-8`,
        icon: `h-10 w-10`,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
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
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
