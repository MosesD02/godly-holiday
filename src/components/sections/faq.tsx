import { faqs } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import ArrowRight from "@/assets/arrow-right.svg";
import { QuoteButton } from "../ui/quote-button";

export function FAQ() {
  return (
    <section
      id="faq"
      className="py-12 sm:py-20 lg:py-[100px] bg-paper-16-2 flex items-center flex-col px-4 sm:px-6 lg:px-8"
    >
      <div className="text-transparent pb-12 sm:pb-20 lg:pb-[120px] relative max-w-5xl mx-auto">
        <h2 className="font-marlton relative text-2xl sm:text-3xl lg:text-[40px] text-center leading-tight sm:leading-10 lg:leading-12 tracking-[1.2px] sm:tracking-[1.8px] lg:tracking-[2.4px]">
          <span className="text-3xl bg-[#191717] text-grain-2 sm:text-4xl lg:text-[64px] leading-tight sm:leading-12 lg:leading-20 tracking-[1.8px] sm:tracking-[2.5px] lg:tracking-[3.84px]">
            FREQUENTLY
          </span>{" "}
          <br />
          <span
            className="font-luminaire text-[#FFE7AF] rotate-[-7.9deg] absolute inset-0 text-2xl sm:text-4xl pt-6 lg:text-6xl leading-normal tracking-normal"
            style={{
              textShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
              WebkitTextStrokeWidth: "6px",
              WebkitTextStrokeColor: "#1E1C1C",
              paintOrder: "stroke fill",
            }}
          >
            Asked
          </span>
          <span className="text-3xl bg-[#191717] text-grain-2 sm:text-4xl lg:text-[64px] leading-tight sm:leading-12 lg:leading-20 tracking-[1.8px] sm:tracking-[2.5px] lg:tracking-[3.84px]">
            QUESTIONS
          </span>
        </h2>
      </div>
      <div className="relative w-full max-w-[900px] mx-4 sm:mx-6 lg:mx-auto">
        <Image
          src="/images/home/faq/bg.webp"
          alt="FAQ BG"
          width={1224}
          height={800}
          className="absolute inset-0 left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-full h-full"
        />
        <Accordion
          type="single"
          collapsible
          className="z-10 relative px-4 py-4 sm:px-8 sm:py-6 lg:px-[60px] lg:py-[40px]"
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <QuoteButton className="mt-8 sm:mt-12 lg:mt-[102px] mx-4 sm:mx-6 lg:mx-0">
        <span className="text-2xl">Request a Quote</span>
        <Image src={ArrowRight.src} alt="Arrow Right" width={32} height={33} />
      </QuoteButton>
    </section>
  );
}
