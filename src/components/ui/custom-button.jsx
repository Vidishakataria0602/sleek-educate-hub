import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CustomButton = React.forwardRef(
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