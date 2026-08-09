export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://godlyholidaylights.com";

export const BUSINESS_INFO = {
  name: "Godly Holiday Lights",
  address: "4832 NE 12th Ave, Oakland Park, FL 33334",
  phone: "(954) 751-4128",
  phoneHref: "+19547514128",
  hours: "Open 24 hours",
  areaServed: "South Florida",
} as const;

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#localbusiness`,
  name: BUSINESS_INFO.name,
  url: BASE_URL,
  telephone: BUSINESS_INFO.phone,
  address: BUSINESS_INFO.address,
  openingHours: BUSINESS_INFO.hours,
  areaServed: BUSINESS_INFO.areaServed,
  email: "hello@godlyholidaylights.com",
  image: `${BASE_URL}/og.png`,
  serviceType: "Holiday Light Installation",
  priceRange: "$$",
} as const;

export const GTM_ID = "GTM-W9G48J8N";
export const GA4_ID = "G-XSRDJ3H6PH";
export const GOOGLE_ADS_ID = "AW-17589576084";
