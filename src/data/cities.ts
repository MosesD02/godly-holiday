export const cities = [
  {
    name: "BOCA RATON",
    key: "boca-raton",
  },
  {
    name: "COCONUT CREEK",
    key: "coconut-creek",
  },
  {
    name: "COOPER CITY",
    key: "cooper-city",
  },
  {
    name: "CORAL SPRINGS",
    key: "coral-springs",
  },
  {
    name: "DAVIE",
    key: "davie",
  },
  {
    name: "DEERFIELD BEACH",
    key: "deerfield-beach",
  },
  {
    name: "DELRAY BEACH",
    key: "delray-beach",
  },
  {
    name: "FORT LAUDERDALE",
    key: "fort-lauderdale",
  },
  {
    name: "HALLANDALE BEACH",
    key: "hallandale-beach",
  },
  {
    name: "HILLSBORO BEACH",
    key: "hillsboro-beach",
  },
  {
    name: "HOLLYWOOD",
    key: "hollywood",
  },
  {
    name: "LAUDERDALE-BY-THE-SEA",
    key: "lauderdale-by-the-sea",
  },
  {
    name: "LIGHTHOUSE POINT",
    key: "lighthouse-point",
  },
  {
    name: "MARGATE",
    key: "margate",
  },
  {
    name: "MIRAMAR",
    key: "miramar",
  },
  {
    name: "OAKLAND PARK",
    key: "oakland-park",
  },
  {
    name: "PARKLAND",
    key: "parkland",
  },
  {
    name: "PEMBROKE PINES",
    key: "pembroke-pines",
  },
  {
    name: "PLANTATION",
    key: "plantation",
  },
  {
    name: "POMPANO BEACH",
    key: "pompano-beach",
  },
  {
    name: "ROYAL PALM BEACH",
    key: "royal-palm-beach",
  },
  {
    name: "SOUTHWEST RANCHES",
    key: "southwest-ranches",
  },
  {
    name: "SUNRISE",
    key: "sunrise",
  },
  {
    name: "TAMARAC",
    key: "tamarac",
  },
  {
    name: "WEST PARK",
    key: "west-park",
  },
  {
    name: "WESTON",
    key: "weston",
  },
];

/** Slug → uppercase label (blog, SEO, cookies). Includes `south-florida` for the all-areas blog index. */
export const citiesMap: Record<string, string> = Object.fromEntries([
  ...cities.map((c) => [c.key, c.name] as const),
  ["south-florida", "SOUTH FLORIDA"] as const,
]);
