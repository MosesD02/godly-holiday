export interface CityHomeContent {
  meta: {
    title: string;
    description: string;
  };
  headingCityName: string;
  intro: string;
  commercialDescription: string;
  residentialDescription: string;
  wrappedUpCityName: string;
}

const cityHomeContentMap: Record<string, CityHomeContent> = {
  parkland: {
    meta: {
      title: "Professional Holiday Light Installation In Parkland",
      description:
        "We bring the premium lights, handle the full install, and take it all down after the season, so your Parkland home or business shines with zero hassle.",
    },
    headingCityName: "Parkland",
    intro:
      "We handle it all, the premium lights, the full install, and the takedown after, so your Parkland home or business glows all season with no ladders or storage stress.",
    commercialDescription:
      "We light up Parkland businesses too, from storefronts and offices to plazas, so your property looks festive all season without anyone on staff ever touching a ladder.",
    residentialDescription:
      "Whether you want something subtle or the whole house glowing, we bring holiday cheer to homes across Parkland, from the estates in Heron Bay to Parkland Golf and Country Club, setup to takedown.",
    wrappedUpCityName: "Parkland",
  },
  "delray-beach": {
    meta: {
      title: "Professional Holiday Light Installation In Delray Beach",
      description:
        "We bring the premium lights, handle the full install, and take it all down after the season, so your Delray Beach home or business shines with zero hassle.",
    },
    headingCityName: "Delray Beach",
    intro:
      "We take care of everything, the premium lights, the full install, and the takedown after, so your Delray Beach home or business glows all season with no ladders or stress.",
    commercialDescription:
      "We light up Delray Beach businesses too, from the Atlantic Avenue storefronts to offices and plazas, so your property looks festive all season without anyone climbing a ladder.",
    residentialDescription:
      "Whether you want subtle or the whole house glowing, we bring holiday cheer to homes across Delray Beach, from the waterfront near Lake Ida to the historic streets of Del Ida Park, setup to takedown.",
    wrappedUpCityName: "Delray Beach",
  },
  sunrise: {
    meta: {
      title: "Professional Holiday Light Installation In Sunrise",
      description:
        "We bring the premium lights, handle the full install, and take it all down after the season, so your Sunrise home or business shines with zero hassle.",
    },
    headingCityName: "Sunrise",
    intro:
      "We handle everything, the premium lights, the full install, and the takedown after, so your Sunrise home or business shines all season with no ladders or storage stress.",
    commercialDescription:
      "We do outdoor holiday lighting for Sunrise businesses too, from storefronts near Sawgrass to offices and plazas, so your property looks festive without anyone touching a ladder.",
    residentialDescription:
      "Whether you want something subtle or the whole house lit up, we bring holiday cheer to homes across Sunrise, from the family streets of Welleby to Springtree and Sunrise Lakes, setup to takedown.",
    wrappedUpCityName: "Sunrise",
  },
};

export function getCityHomeContent(
  slug: string,
): CityHomeContent | undefined {
  return cityHomeContentMap[slug];
}
