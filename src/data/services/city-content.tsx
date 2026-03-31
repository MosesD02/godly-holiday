export type { CityFaq, CityHowItWorksStep, CityWhyUsItem, CityContent } from "./types";
import type { CityContent } from "./types";

import { bocaRaton } from "./cities/boca-raton";
import { coconutCreek } from "./cities/coconut-creek";
import { cooperCity } from "./cities/cooper-city";
import { coralSprings } from "./cities/coral-springs";
import { davie } from "./cities/davie";
import { deerfieldBeach } from "./cities/deerfield-beach";
import { delrayBeach } from "./cities/delray-beach";
import { fortLauderdale } from "./cities/fort-lauderdale";
import { hallandaleBeach } from "./cities/hallandale-beach";
import { hillsboroBeach } from "./cities/hillsboro-beach";
import { hollywood } from "./cities/hollywood";
import { lauderdaleByTheSea } from "./cities/lauderdale-by-the-sea";
import { lighthousePoint } from "./cities/lighthouse-point";
import { margate } from "./cities/margate";
import { miramar } from "./cities/miramar";
import { oaklandPark } from "./cities/oakland-park";
import { parkland } from "./cities/parkland";
import { pembrokePines } from "./cities/pembroke-pines";
import { plantation } from "./cities/plantation";
import { pompanoBeach } from "./cities/pompano-beach";
import { royalPalmBeach } from "./cities/royal-palm-beach";
import { southwestRanches } from "./cities/southwest-ranches";
import { sunrise } from "./cities/sunrise";
import { tamarac } from "./cities/tamarac";
import { westPark } from "./cities/west-park";
import { weston } from "./cities/weston";

const cityContentMap: Record<string, CityContent> = {
  "boca-raton": bocaRaton,
  "coconut-creek": coconutCreek,
  "cooper-city": cooperCity,
  "coral-springs": coralSprings,
  "davie": davie,
  "deerfield-beach": deerfieldBeach,
  "delray-beach": delrayBeach,
  "fort-lauderdale": fortLauderdale,
  "hallandale-beach": hallandaleBeach,
  "hillsboro-beach": hillsboroBeach,
  "hollywood": hollywood,
  "lauderdale-by-the-sea": lauderdaleByTheSea,
  "lighthouse-point": lighthousePoint,
  "margate": margate,
  "miramar": miramar,
  "oakland-park": oaklandPark,
  "parkland": parkland,
  "pembroke-pines": pembrokePines,
  "plantation": plantation,
  "pompano-beach": pompanoBeach,
  "royal-palm-beach": royalPalmBeach,
  "southwest-ranches": southwestRanches,
  "sunrise": sunrise,
  "tamarac": tamarac,
  "west-park": westPark,
  "weston": weston,
};

export function getCityContent(slug: string): CityContent | undefined {
  return cityContentMap[slug];
}

export function getAllCitySlugs(): string[] {
  return Object.keys(cityContentMap);
}
