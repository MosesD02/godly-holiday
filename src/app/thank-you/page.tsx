import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GodlyButton } from "@/components/ui/godly-button";
import ArrowRight from "@/assets/arrow-right.svg";
import { BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Thank You | Godly Holiday Lights",
  description:
    "Thank you for reaching out to Godly Holiday Lights. Expect a call from us shortly.",
  alternates: {
    canonical: "/thank-you",
  },
  // Confirmation page — keep it out of search results.
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Thank You | Godly Holiday Lights",
    description:
      "Thank you for reaching out to Godly Holiday Lights. Expect a call from us shortly.",
    url: `${BASE_URL}/thank-you`,
    siteName: "Godly Holiday Lights",
    locale: "en_US",
    type: "website",
  },
};

export default function ThankYouPage() {
  return (
    <section className="min-h-with-header flex flex-col items-center justify-center px-6 py-20 text-center md:py-28">
      <h1 className="font-marlton text-[clamp(56px,15vw,200px)] leading-[0.9] tracking-[2px] text-white uppercase">
        Thank You
      </h1>

      <p className="font-satoshi mt-8 max-w-2xl text-lg leading-relaxed font-medium text-[#F3CA9E] md:text-2xl">
        Expect a call from us shortly.
        <br />
        Looking forward to taking care of you.
      </p>

      <GodlyButton asChild className="mt-12">
        <Link href="/">
          <span>Back to Home</span>
          <Image src={ArrowRight.src} alt="" width={32} height={33} />
        </Link>
      </GodlyButton>
    </section>
  );
}
