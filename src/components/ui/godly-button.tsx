import { cn } from "@/lib/utils";

export function GodlyButton({
  className,
  variant = "red",
  ...props
}: React.ComponentProps<"button"> & { variant?: "red" | "gray" }) {
  return (
    <button
      className={cn(
        variant === "gray" && "godly-button-gray",
        variant === "red" && "godly-button",
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
}
