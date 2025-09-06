import { LightingSolution } from "@/components/sections/services/lighting-solution";
import { ServicesFAQ } from "@/components/sections/services/faq";
import { ServicesCTA } from "@/components/sections/services/cta";
import { Testimonials } from "@/components/sections/services/testimonials";
import { RecentLightInstallation } from "@/components/sections/services/light-installation";
import { Trust } from "@/components/sections/services/trust";
import { WhyChooseUs } from "@/components/sections/services/why-us";
import { HowItWorks } from "@/components/sections/services/how-it-works";

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <div className="relative z-20 w-full">
        <LightingSolution />
        <WhyChooseUs />
        <HowItWorks />
        <Trust />
        <RecentLightInstallation />
        <Testimonials />
        <ServicesFAQ />
        <ServicesCTA />
      </div>
    </div>
  );
}
