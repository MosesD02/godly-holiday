import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { BlogFaqItem } from "@/data/sanity-content";

export function BlogPostFaq({ faq }: { faq: BlogFaqItem[] }) {
  if (!faq || faq.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="trim mb-6 font-marlton text-2xl font-normal text-[#0E0E0E] md:text-3xl">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faq.map((item, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="border-[rgba(45,43,43,0.2)]"
          >
            <AccordionTrigger className="text-left font-satoshi text-lg font-medium text-[#0E0E0E] [&_svg]:text-[#0E0E0E]">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="font-satoshi text-base font-light leading-relaxed text-[#2D2B2B]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
