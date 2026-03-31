export interface CityFaq {
  question: string;
  answer: string;
}

export interface CityHowItWorksStep {
  title: string;
  description: string;
}

export interface CityWhyUsItem {
  title: string;
  description: string;
  image: string;
}

export interface CityContent {
  name: string;
  nameUpper: string;
  slug: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    heading: string;
    subheadline: string;
  };
  recentInstallations: {
    locationName: string;
  };
  lightingSolution: {
    residentialHeading: string;
    residentialDescription: string;
    residentialServiceTypes: string[];
    commercialHeading: string;
    commercialDescription: string;
    commercialPropertyTypes: string[];
    commercialNearbyCities: string;
  };
  whyUs: CityWhyUsItem[];
  howItWorks: CityHowItWorksStep[];
  trustedBy: {
    cities: string;
    description: string;
  };
  trust: {
    regionName: string;
  };
  faq: CityFaq[];
  cta: {
    cityName: string;
    heading: string;
    subtext: string;
  };
}
