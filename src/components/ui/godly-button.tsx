import { cn } from "@/lib/utils";

export function GodlyButton({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button className={cn("godly-button", className)} {...props}>
      {props.children}
    </button>
  );
}
