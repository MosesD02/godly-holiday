import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export function GodlyButton({
  className,
  variant = "red",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & {
  variant?: "red" | "gray";
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        variant === "gray" && "godly-button-gray",
        variant === "red" && "godly-button",
        className,
      )}
      {...props}
    />
  );
}
