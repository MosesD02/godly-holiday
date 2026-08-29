import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

import { getCityContent, getAllCitySlugs } from "@/data/services/city-content";
import { getCityHomeContent } from "@/data/city-home-content";
import { HappyCustomer } from "@/components/sections/home/happy-customer";
import { Hero } from "@/components/sections/home/hero";
import { LightInstallation } from "@/components/sections/home/light-installation";
import { WrapperUp } from "@/components/sections/home/wrapped-up";
import { WeGotYouCovered } from "@/components/sections/home/we-got-you-covered";
import { LightingUpNights } from "@/components/sections/home/lighting-up-nights";
import { RemoveStress } from "@/components/sections/home/remove-stress";
import { CTA } from "@/components/sections/home/cta";
import { Map } from "@/components/sections/home/map";
import { FAQ } from "@/components/sections/faq";
import AboutUs from "@/components/sections/home/about-us";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({ city: slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city } = await params;
  const content = getCityContent(city);
  if (!content) return {};

  const cityHomeContent = getCityHomeContent(city);
  const title =
    cityHomeContent?.meta.title ??
    `Professional Holiday Light Installation In ${content.nameUpper}`;
  const description =
    cityHomeContent?.meta.description ??
    `We provide everything—premium lights, full installation, and hassle-free removal—so your ${content.name} home or business shines all season without the ladders or storage stress.`;
  const url = `https://godlyholidaylights.com/${city}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      images: "/og.png",
      title,
      description,
      url,
      siteName: "Godly Holiday Lights",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: "/og.png",
    },
  };
}

export default async function CityHomePage({ params }: PageProps) {
  const { city } = await params;
  const content = getCityContent(city);
  if (!content) notFound();
  const cityHomeContent = getCityHomeContent(city);

  return (
    <div className="flex flex-col max-w-screen overflow-x-clip items-center justify-center relative">
      <Image
        src="/images/home/hero/hero.jpg"
        alt=""
        className="absolute top-0 md:top-0 left-0 object-[50%_-200px] md:object-[50%_70%] w-full h-[min(100svh,960px)] object-cover z-0"
        width={2000}
        height={2000}
        priority
      />

      <div
        className="absolute top-0 left-0 w-full h-[min(100svh,960px)] z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#201E1E_62%)] md:bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#201E1E_79.64%)]"
      ></div>

      <div className="relative z-20 w-full">
        <Hero
          cityNameUpper={content.nameUpper}
          cityName={content.name}
          headingCityName={cityHomeContent?.headingCityName}
          description={cityHomeContent?.intro}
        />
        <LightingUpNights />
        <WeGotYouCovered />
        <HappyCustomer />
        <LightInstallation
          cityName={content.name}
          commercialDescription={cityHomeContent?.commercialDescription}
          residentialDescription={cityHomeContent?.residentialDescription}
        />
        <WrapperUp cityName={cityHomeContent?.wrappedUpCityName} />
        <AboutUs />
        <RemoveStress />
        <CTA />
        <Map />
        <FAQ />
      </div>
    </div>
  );
}
