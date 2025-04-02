
import React from 'react';
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CustomButtonProps extends ButtonProps {
  colorScheme?: "purple" | "gold" | "white";
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, colorScheme = "purple", children, ...props }, ref) => {
    const colorClasses = {
      purple: "bg-gyanmarg-purple text-white",
      gold: "bg-gyanmarg-gold text-gyanmarg-purple",
      white: "bg-white text-gyanmarg-purple border border-gyanmarg-purple",
    };

    return (
      <Button
        className={cn(colorClasses[colorScheme], "transition-none", className)}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton };
