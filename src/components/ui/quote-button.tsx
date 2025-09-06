"use client";

import { useQuoteModal } from "@/hooks/use-quote-modal";
import { GodlyButton } from "./godly-button";

interface QuoteButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export function QuoteButton({
  children = "REQUEST A QUOTE",
  className,
}: QuoteButtonProps) {
  const { openModal } = useQuoteModal();

  return (
    <GodlyButton onClick={openModal} className={className}>
      {children}
    </GodlyButton>
  );
}
