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
        "max-w-[600px] relative w-full flex flex-col p-2 sm:p-3 gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl shadow-[0_4px_4px_0_rgba(255,_255,_255,_0.30)_inset,_0_3.015px_3.015px_0_rgba(0,_0,_0,_0.25)]"
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-6 sm:gap-8 lg:gap-10 p-4 sm:p-6 lg:p-8 pb-6 sm:pb-8 lg:pb-10 rounded-[8px] sm:rounded-[10px]",
          theme === "dark"
            ? "border border-dashed border-[#515050] text-white"
            : "border border-dashed border-[#312E2C] text-[#191717]"
        )}
      >
        <div
          className="font-marlton text-3xl sm:text-4xl lg:text-5xl"
          style={
            theme === "light"
              ? {
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#b7b5b3",
                  paintOrder: "stroke fill",
                }
              : {}
          }
        >
          {0}
          {index}
        </div>
        <div className="space-y-4 sm:space-y-5 lg:space-y-7">
          <h3 className="font-marlton text-xl sm:text-2xl lg:text-[32px] uppercase">{title}</h3>
          <p className="font-satoshi text-sm sm:text-base font-medium leading-5 sm:leading-6">
            {description}
          </p>
        </div>
      </div>
      <div
        className={cn(
          "absolute top-0 right-0 sm:left-full sm:-translate-x-3/4 lg:-translate-x-full flex items-start justify-end sm:items-center sm:justify-center",
          imageClass
        )}
      >
        <Image
          src={image}
          alt={title}
          className={cn(imageClass, "object-contain w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px]")}
          width={220}
          height={220}
        />
      </div>
    </div>
  );
}
