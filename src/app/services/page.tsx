import { LightingSolution } from "@/components/sections/services/lighting-solution";
import { ServicesFAQ } from "@/components/sections/services/faq";
import { ServicesCTA } from "@/components/sections/services/cta";
import { Testimonials } from "@/components/sections/services/testimonials";
import { RecentLightInstallation } from "@/components/sections/services/light-installation";
import { Trust } from "@/components/sections/services/trust";
import { WhyChooseUs } from "@/components/sections/services/why-us";
import { HowItWorks } from "@/components/sections/services/how-it-works";
import { Hero } from "@/components/sections/services/hero";
import { faqs } from "@/data/services/faq";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holiday Light Installation Services | Godly Holiday Lights",
  description:
    "Professional holiday light installation for homes, businesses, and estates across South Florida. Custom designs, commercial-grade lights, full maintenance, and takedown included.",
  openGraph: {
    title: "Holiday Light Installation Services | Godly Holiday Lights",
    description:
      "Professional holiday light installation for homes, businesses, and estates across South Florida. Custom designs, commercial-grade lights, full maintenance, and takedown included.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center overflow-x-clip justify-center relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="relative z-20 w-full">
        <Hero />
        <RecentLightInstallation />
        <LightingSolution />
        <WhyChooseUs />
        <HowItWorks />
        <Trust />
        <Testimonials />
        <ServicesFAQ />
        <ServicesCTA />
      </div>
    </div>
  );
}
