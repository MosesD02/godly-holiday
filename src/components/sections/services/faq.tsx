import { faqs } from "@/data/services/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export function ServicesFAQ() {
  return (
    <section
      id="faq"
      className="py-12 sm:py-20 lg:py-[100px] bg-paper-16-3 flex items-center flex-col px-4 sm:px-6 lg:px-8"
    >
      <div className="text-transparent pb-12 sm:pb-20 lg:pb-[120px] relative max-w-5xl mx-auto">
        <h2 className="font-marlton relative text-2xl sm:text-3xl lg:text-[40px] text-center leading-tight sm:leading-10 lg:leading-12 tracking-[1.2px] sm:tracking-[1.8px] lg:tracking-[2.4px]">
          <span className="text-3xl sm:text-4xl lg:text-[64px] leading-tight sm:leading-12 lg:leading-20 tracking-[1.8px] sm:tracking-[2.5px] lg:tracking-[3.84px]">
            FREQUENTLY
          </span>{" "}
          <br />
          <span className="font-luminaire absolute inset-0 text-2xl sm:text-4xl pt-6 lg:text-6xl leading-normal tracking-normal">
            Asked
          </span>
          <span className="text-3xl sm:text-4xl lg:text-[64px] leading-tight sm:leading-12 lg:leading-20 tracking-[1.8px] sm:tracking-[2.5px] lg:tracking-[3.84px]">
            QUESTIONS
          </span>
        </h2>
        <Image
          src="/images/services/faq/title.svg"
          alt="FAQ Title"
          width={370}
          height={175}
          className="absolute bottom-1/2 lg:bottom-30 pointer-events-none object-contain scale-170"
        />
      </div>
      <div className="relative w-full max-w-[900px] mx-4 sm:mx-6 lg:mx-auto">
        <Image
          src="/images/services/faq/bg.webp"
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
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="border-[rgba(45,43,43,0.20)]"
            >
              <AccordionTrigger className="text-[#0E0E0E] [&_svg]:text-[#0E0E0E]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#2D2B2B]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
