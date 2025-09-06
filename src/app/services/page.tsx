import { LightingSolution } from "@/components/sections/services/lighting-solution";
import { ServicesFAQ } from "@/components/sections/services/faq";
import { ServicesCTA } from "@/components/sections/services/cta";
import { Testimonials } from "@/components/sections/services/testimonials";
import { RecentLightInstallation } from "@/components/sections/services/light-installation";
import { Trust } from "@/components/sections/services/trust";

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <div className="relative z-20 w-full">
        <LightingSolution />
        <Trust />
        <RecentLightInstallation />
        <Testimonials />
        <ServicesFAQ />
        <ServicesCTA />
      </div>
    </div>
  );
}
