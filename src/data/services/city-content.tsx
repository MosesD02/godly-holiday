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
    subheadline: string;
  };
  recentInstallations: {
    locationName: string;
  };
  lightingSolution: {
    residentialDescription: string;
    commercialDescription: string;
    commercialNearbyCities: string;
  };
  whyUs: CityWhyUsItem[];
  howItWorks: CityHowItWorksStep[];
  trustedBy: {
    cities: string;
  };
  trust: {
    regionName: string;
  };
  faq: CityFaq[];
  cta: {
    cityName: string;
  };
}

function createCityContent(input: {
  name: string;
  slug: string;
  nearbyCities: [string, string, string];
  residentialDescription: string;
  commercialDescription: string;
}): CityContent {
  const { name, slug, nearbyCities, residentialDescription, commercialDescription } = input;
  const nameUpper = name.toUpperCase();
  const nearbyList = `${nearbyCities[0]}, ${nearbyCities[1]}, and ${nearbyCities[2]}`;

  return {
    name,
    nameUpper,
    slug,
    meta: {
      title: `Professional Holiday Light Installation in ${name} | Godly Holiday Lights`,
      description: `Full-service holiday light installation in ${name}, FL. Custom designs, commercial-grade lights, 24-hour maintenance, and hassle-free takedown. Licensed & insured. Book your free consultation today.`,
    },
    hero: {
      subheadline: `Full-service holiday lighting for homes, storefronts, and buildings in ${name}. Designed, installed, maintained, and removed by your local holiday lighting professionals.`,
    },
    recentInstallations: {
      locationName: name,
    },
    lightingSolution: {
      residentialDescription,
      commercialDescription,
      commercialNearbyCities: nearbyList,
    },
    whyUs: [
      {
        title: `Custom Designs for Your ${name} Property`,
        description: `Every display is tailored specifically for your home or business. We take the time to understand your vision and design a holiday light setup that fits your ${name} property perfectly.`,
        image: "/images/services/why-us/custom-designs.svg",
      },
      {
        title: "Full-Service Installation",
        description: "Commercial-grade lights, automatic timers, professional takedown, and off-season storage all included. You don't have to worry about a thing.",
        image: "/images/services/why-us/full-service-installation.svg",
      },
      {
        title: "24-Hour Maintenance Guarantee",
        description: "If anything stops working, we fix it within 24 hours at no extra cost. Your display stays perfect all season long.",
        image: "/images/services/why-us/24-hour-maintenance-guarantee.svg",
      },
      {
        title: "Licensed & Insured Professionals",
        description: `Safe, professional, and fully covered. You can trust our team with your ${name} property.`,
        image: "/images/services/why-us/licensed-insured-professionals.svg",
      },
    ],
    howItWorks: [
      {
        title: "Free Design Consultation",
        description: `We visit your ${name} property to plan the perfect holiday display. We'll walk the space with you, discuss your ideas, and create a custom design that makes your property stand out.`,
      },
      {
        title: "Professional Installation",
        description: "Safe, clean, and efficient setup using commercial-grade LED lights. Our team handles rooflines, trees, walkways, and any custom features your design calls for.",
      },
      {
        title: "24-Hour Maintenance",
        description: "Something not working right? We're on it within 24 hours, no questions asked and no extra charge.",
      },
      {
        title: "Takedown & Storage",
        description: "Once the season wraps up, we carefully remove everything and store your lights safely for next year. Completely hassle-free.",
      },
    ],
    trustedBy: {
      cities: `${name}, ${nearbyList}`,
    },
    trust: {
      regionName: nameUpper,
    },
    faq: [
      {
        question: "Do you handle both home and commercial jobs?",
        answer: `Absolutely. We install holiday lights for homes of all sizes and commercial properties throughout ${name} and ${nearbyList}. From single-family homes to shopping centers, we've got you covered.`,
      },
      {
        question: "Are you a full-service provider?",
        answer: "Yes. We handle everything from the initial design consultation to installation, maintenance throughout the season, and complete takedown and storage when the holidays are over. You never have to touch a single light.",
      },
      {
        question: "Is maintenance included?",
        answer: "Yes. Our 24-hour maintenance guarantee means if anything stops working at any point during the season, we fix it at no extra cost. Your display stays perfect from the first night to the last.",
      },
      {
        question: `Do you serve ${name}?`,
        answer: `Yes, we proudly serve ${name} and the surrounding areas including ${nearbyList}. We're local to South Florida and know the area well.`,
      },
      {
        question: "Do you have a minimum?",
        answer: "We work with properties of all sizes. Contact us for a free consultation and we'll put together a custom quote based on your specific needs.",
      },
      {
        question: "What's the process?",
        answer: `It starts with a free design consultation where we visit your ${name} property. From there, we create a custom plan, handle the full installation using commercial-grade lights, maintain everything throughout the season, and take it all down and store it when the holidays are over.`,
      },
    ],
    cta: {
      cityName: name,
    },
  };
}

const cityContentMap: Record<string, CityContent> = {
  "boca-raton": createCityContent({
    name: "Boca Raton",
    slug: "boca-raton",
    nearbyCities: ["Delray Beach", "Deerfield Beach", "Coconut Creek"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Boca Raton home. From the grand homes along Mizner Boulevard to the sprawling estates in Royal Palm Yacht & Country Club, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Boca Raton business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Delray Beach, Deerfield Beach, and Coconut Creek. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "coconut-creek": createCityContent({
    name: "Coconut Creek",
    slug: "coconut-creek",
    nearbyCities: ["Parkland", "Margate", "Coral Springs"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Coconut Creek home. From the beautiful homes in Coconut Creek's Mainstreet district to the tree-lined neighborhoods off Lyons Road, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Coconut Creek business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Parkland, Margate, and Coral Springs. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "cooper-city": createCityContent({
    name: "Cooper City",
    slug: "cooper-city",
    nearbyCities: ["Davie", "Pembroke Pines", "Southwest Ranches"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Cooper City home. From the well-kept homes along Stirling Road to the peaceful neighborhoods near Brian Piccolo Park, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Cooper City business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Davie, Pembroke Pines, and Southwest Ranches. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "coral-springs": createCityContent({
    name: "Coral Springs",
    slug: "coral-springs",
    nearbyCities: ["Parkland", "Coconut Creek", "Margate"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Coral Springs home. From the beautiful communities off University Drive to the bustling plazas along Sample Road, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Coral Springs business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Parkland, Coconut Creek, and Margate. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "davie": createCityContent({
    name: "Davie",
    slug: "davie",
    nearbyCities: ["Cooper City", "Plantation", "Southwest Ranches"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Davie home. From the spacious properties along Griffin Road to the equestrian estates near Orange Drive, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Davie business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Cooper City, Plantation, and Southwest Ranches. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "deerfield-beach": createCityContent({
    name: "Deerfield Beach",
    slug: "deerfield-beach",
    nearbyCities: ["Boca Raton", "Lighthouse Point", "Pompano Beach"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Deerfield Beach home. From the waterfront properties near the pier to the family neighborhoods along Hillsboro Boulevard, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Deerfield Beach business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Boca Raton, Lighthouse Point, and Pompano Beach. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "delray-beach": createCityContent({
    name: "Delray Beach",
    slug: "delray-beach",
    nearbyCities: ["Boca Raton", "Boynton Beach", "Highland Beach"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Delray Beach home. From the beautiful homes lining Atlantic Avenue to the luxury estates in Lake Ida and Tropic Isle, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Delray Beach business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Boca Raton, Boynton Beach, and Highland Beach. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "fort-lauderdale": createCityContent({
    name: "Fort Lauderdale",
    slug: "fort-lauderdale",
    nearbyCities: ["Oakland Park", "Hollywood", "Lauderdale-by-the-Sea"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Fort Lauderdale home. From the stunning homes along Las Olas Boulevard to the waterfront estates in Harbor Beach and Rio Vista, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Fort Lauderdale business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Oakland Park, Hollywood, and Lauderdale-by-the-Sea. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "hallandale-beach": createCityContent({
    name: "Hallandale Beach",
    slug: "hallandale-beach",
    nearbyCities: ["Hollywood", "Aventura", "Golden Beach"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Hallandale Beach home. From the oceanfront condos along Collins Avenue to the residential neighborhoods near the Diplomat, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Hallandale Beach business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Hollywood, Aventura, and Golden Beach. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "hillsboro-beach": createCityContent({
    name: "Hillsboro Beach",
    slug: "hillsboro-beach",
    nearbyCities: ["Deerfield Beach", "Lighthouse Point", "Pompano Beach"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Hillsboro Beach home. From the stunning oceanfront mansions along A1A to the private estates nestled between the Intracoastal and the Atlantic, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Hillsboro Beach business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Deerfield Beach, Lighthouse Point, and Pompano Beach. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "hollywood": createCityContent({
    name: "Hollywood",
    slug: "hollywood",
    nearbyCities: ["Hallandale Beach", "Pembroke Pines", "Fort Lauderdale"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Hollywood home. From the historic homes in Hollywood Lakes to the beachside properties along the Broadwalk, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Hollywood business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Hallandale Beach, Pembroke Pines, and Fort Lauderdale. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "lauderdale-by-the-sea": createCityContent({
    name: "Lauderdale-by-the-Sea",
    slug: "lauderdale-by-the-sea",
    nearbyCities: ["Fort Lauderdale", "Pompano Beach", "Oakland Park"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Lauderdale-by-the-Sea home. From the charming cottages near Commercial Boulevard to the coastal homes along El Mar Drive, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Lauderdale-by-the-Sea business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Fort Lauderdale, Pompano Beach, and Oakland Park. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "lighthouse-point": createCityContent({
    name: "Lighthouse Point",
    slug: "lighthouse-point",
    nearbyCities: ["Pompano Beach", "Deerfield Beach", "Hillsboro Beach"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Lighthouse Point home. From the waterfront homes along the finger canals to the prestigious estates near the Lighthouse Point Yacht Club, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Lighthouse Point business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Pompano Beach, Deerfield Beach, and Hillsboro Beach. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "margate": createCityContent({
    name: "Margate",
    slug: "margate",
    nearbyCities: ["Coral Springs", "Coconut Creek", "Tamarac"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Margate home. From the family homes along Margate Boulevard to the neighborhoods surrounding the Everglades Holiday Park area, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Margate business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Coral Springs, Coconut Creek, and Tamarac. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "miramar": createCityContent({
    name: "Miramar",
    slug: "miramar",
    nearbyCities: ["Pembroke Pines", "Hollywood", "West Park"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Miramar home. From the newer developments in West Miramar to the established neighborhoods along Miramar Parkway, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Miramar business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Pembroke Pines, Hollywood, and West Park. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "oakland-park": createCityContent({
    name: "Oakland Park",
    slug: "oakland-park",
    nearbyCities: ["Fort Lauderdale", "Wilton Manors", "Lauderdale Lakes"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Oakland Park home. From the updated homes near Culinary Arts District to the charming neighborhoods along NE 38th Street, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Oakland Park business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Fort Lauderdale, Wilton Manors, and Lauderdale Lakes. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "parkland": createCityContent({
    name: "Parkland",
    slug: "parkland",
    nearbyCities: ["Coral Springs", "Coconut Creek", "Boca Raton"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Parkland home. From the luxurious estates in Heron Bay to the grand homes in MiraLago and Watercrest, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Parkland business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Coral Springs, Coconut Creek, and Boca Raton. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "pembroke-pines": createCityContent({
    name: "Pembroke Pines",
    slug: "pembroke-pines",
    nearbyCities: ["Miramar", "Cooper City", "Hollywood"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Pembroke Pines home. From the family homes in Chapel Trail to the communities along Sheridan Street and Pines Boulevard, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Pembroke Pines business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Miramar, Cooper City, and Hollywood. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "plantation": createCityContent({
    name: "Plantation",
    slug: "plantation",
    nearbyCities: ["Fort Lauderdale", "Davie", "Sunrise"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Plantation home. From the beautiful homes in Jacaranda to the estates along Broward Boulevard near Plantation Central Park, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Plantation business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Fort Lauderdale, Davie, and Sunrise. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "pompano-beach": createCityContent({
    name: "Pompano Beach",
    slug: "pompano-beach",
    nearbyCities: ["Lighthouse Point", "Deerfield Beach", "Fort Lauderdale"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Pompano Beach home. From the beachfront homes near the Fisher Family Pier to the residential areas along Federal Highway, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Pompano Beach business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Lighthouse Point, Deerfield Beach, and Fort Lauderdale. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "royal-palm-beach": createCityContent({
    name: "Royal Palm Beach",
    slug: "royal-palm-beach",
    nearbyCities: ["Wellington", "West Palm Beach", "Loxahatchee"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Royal Palm Beach home. From the welcoming neighborhoods near Royal Palm Beach Commons Park to the homes along Southern Boulevard, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Royal Palm Beach business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Wellington, West Palm Beach, and Loxahatchee. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "southwest-ranches": createCityContent({
    name: "Southwest Ranches",
    slug: "southwest-ranches",
    nearbyCities: ["Davie", "Cooper City", "Weston"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Southwest Ranches home. From the sprawling ranch estates along Griffin Road to the gated properties near Volunteer Park, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Southwest Ranches business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Davie, Cooper City, and Weston. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "sunrise": createCityContent({
    name: "Sunrise",
    slug: "sunrise",
    nearbyCities: ["Plantation", "Tamarac", "Fort Lauderdale"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Sunrise home. From the residential neighborhoods near BB&T Center to the family homes along Sunrise Boulevard, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Sunrise business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Plantation, Tamarac, and Fort Lauderdale. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "tamarac": createCityContent({
    name: "Tamarac",
    slug: "tamarac",
    nearbyCities: ["Sunrise", "Margate", "North Lauderdale"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Tamarac home. From the well-maintained homes in Woodlands to the communities along Commercial Boulevard, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Tamarac business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Sunrise, Margate, and North Lauderdale. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "west-park": createCityContent({
    name: "West Park",
    slug: "west-park",
    nearbyCities: ["Pembroke Pines", "Hollywood", "Miramar"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your West Park home. From the family homes along Hallandale Beach Boulevard to the neighborhoods near Johnson Street, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your West Park business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Pembroke Pines, Hollywood, and Miramar. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),

  "weston": createCityContent({
    name: "Weston",
    slug: "weston",
    nearbyCities: ["Southwest Ranches", "Davie", "Pembroke Pines"],
    residentialDescription: "Whether you want something subtle or a full showstopper, our holiday light installation services bring the magic of the season to your Weston home. From the prestigious homes in Weston Hills Country Club to the family neighborhoods in Savanna and The Ridges, we handle everything from design to takedown so you can enjoy the holidays without lifting a finger.",
    commercialDescription: "Make your Weston business the highlight of the season. Our commercial holiday light installation services create festive, professional displays that attract customers and spread holiday cheer throughout Southwest Ranches, Davie, and Pembroke Pines. We handle everything safely and efficiently so your team can focus on what they do best.",
  }),
};

export function getCityContent(slug: string): CityContent | undefined {
  return cityContentMap[slug];
}

export function getAllCitySlugs(): string[] {
  return Object.keys(cityContentMap);
}
