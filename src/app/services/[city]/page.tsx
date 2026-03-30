import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCityContent, getAllCitySlugs } from "@/data/services/city-content";
import { Hero } from "@/components/sections/services/hero";
import { RecentLightInstallation } from "@/components/sections/services/light-installation";
import { LightingSolution } from "@/components/sections/services/lighting-solution";
import { WhyChooseUs } from "@/components/sections/services/why-us";
import { HowItWorks } from "@/components/sections/services/how-it-works";
import { Trust } from "@/components/sections/services/trust";
import { Testimonials } from "@/components/sections/services/testimonials";
import { ServicesFAQ } from "@/components/sections/services/faq";
import { ServicesCTA } from "@/components/sections/services/cta";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const content = getCityContent(city);
  if (!content) return {};

  return {
    title: content.meta.title,
    description: content.meta.description,
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url: `https://godlyholidaylights.com/services/${city}`,
    },
  };
}

export default async function CityServicePage({ params }: PageProps) {
  const { city } = await params;
  const content = getCityContent(city);
  if (!content) notFound();

  return (
    <div className="flex flex-col items-center overflow-x-clip justify-center relative">
      <div className="relative z-20 w-full">
        <Hero
          cityName={content.nameUpper}
          subheadline={content.hero.subheadline}
        />
        <RecentLightInstallation cityName={content.name} />
        <LightingSolution
          residentialDescription={content.lightingSolution.residentialDescription}
          commercialDescription={content.lightingSolution.commercialDescription}
        />
        <WhyChooseUs items={content.whyUs} />
        <HowItWorks
          steps={content.howItWorks}
          trustedByCities={content.trustedBy.cities}
        />
        <Trust regionName={content.nameUpper} />
        <Testimonials />
        <ServicesFAQ items={content.faq} />
        <ServicesCTA cityName={content.name} />
      </div>
    </div>
  );
}
