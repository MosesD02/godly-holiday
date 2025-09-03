import { cn } from "@/lib/utils";
import Image from "next/image";

interface CardProps {
  index: number;
  title: string;
  description: string;
  image: string;
  theme: string;
  imageClass: string;
  className: string;
}

export function Card({
  index,
  title,
  description,
  image,
  theme,
  imageClass,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        theme === "dark" ? "bg-[#201E1E]" : "bg-[#E7E3E0]",
        className,
        "max-w-[600px] relative w-full flex flex-col p-3 gap-2 rounded-2xl shadow-[0_4px_4px_0_rgba(255,_255,_255,_0.30)_inset,_0_3.015px_3.015px_0_rgba(0,_0,_0,_0.25)]"
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-10 p-8 pb-10 rounded-[10px]",
          theme === "dark"
            ? "border border-dashed border-[#515050] text-white"
            : "border border-dashed border-[#312E2C] text-[#191717]"
        )}
      >
        <div
          className="font-marlton text-5xl"
          style={
            theme === "light"
              ? {
                  WebkitTextStrokeWidth: "2px",
                  WebkitTextStrokeColor: "#b7b5b3",
                  paintOrder: "stroke fill",
                }
              : {}
          }
        >
          {0}
          {index}
        </div>
        <div className="space-y-7">
          <h3 className="font-marlton text-[32px] uppercase">{title}</h3>
          <p className="font-satoshi text-base font-medium leading-[24px]">
            {description}
          </p>
        </div>
      </div>
      <div
        className={cn(
          "absolute inset-0 top-0 left-full -translate-x-full",
          imageClass
        )}
      >
        <Image
          src={image}
          alt={title}
          className={cn(imageClass, "object-contain")}
          width={220}
          height={220}
        />
      </div>
    </div>
  );
}
