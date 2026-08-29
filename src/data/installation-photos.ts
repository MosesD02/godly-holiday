export interface InstallationPhoto {
  src: string;
  location: string;
  alt: string;
  objectPosition?: string;
}

export const installationPhotos = [
  {
    src: "/images/home/lighting-up-nights/images/16.webp",
    location: "Fort Lauderdale",
    alt: "Mediterranean-style home with warm white holiday lights, palm trees, and a lit wreath",
  },
  {
    src: "/images/home/lighting-up-nights/images/17.webp",
    location: "Boca Raton",
    alt: "Large home with red, white, and blue holiday lights across its palm trees and landscaping",
  },
  {
    src: "/images/home/lighting-up-nights/images/18.webp",
    location: "Oakland Park",
    alt: "Modern home entrance lined with cone-shaped trees wrapped in warm white lights",
  },
  {
    src: "/images/home/lighting-up-nights/images/19.webp",
    location: "Delray Beach",
    alt: "South Florida estate framed by tall palm and pine trees wrapped in holiday lights",
  },
  {
    src: "/images/home/lighting-up-nights/images/20.webp",
    location: "Weston",
    alt: "White two-story home with roofline lights and illuminated palm trunks at blue hour",
  },
  {
    src: "/images/home/lighting-up-nights/images/21.webp",
    location: "Lighthouse Point",
    alt: "Close view of a lit holiday wreath and palm trees wrapped in red and warm white lights",
  },
  {
    src: "/images/home/lighting-up-nights/images/22.webp",
    location: "Aventura",
    alt: "Group of four palm trees illuminated in red, green, and warm white holiday lights",
    objectPosition: "center 42%",
  },
  {
    src: "/images/home/lighting-up-nights/images/23.webp",
    location: "Boynton Beach",
    alt: "Single-story home decorated with a wreath, roofline lights, and three illuminated palms",
  },
  {
    src: "/images/home/lighting-up-nights/images/24.webp",
    location: "Davie",
    alt: "Large tree wrapped in warm white lights with hanging strands across its branches",
  },
  {
    src: "/images/home/lighting-up-nights/images/25.webp",
    location: "Deerfield Beach",
    alt: "Wide date palm wrapped from trunk to fronds in blue and warm white holiday lights",
  },
  {
    src: "/images/home/lighting-up-nights/images/26.webp",
    location: "Fort Lauderdale",
    alt: "Commercial condominium entrance lined with a group of illuminated palm trees",
    objectPosition: "center 54%",
  },
] as const satisfies readonly InstallationPhoto[];

export const commercialInstallationPhotos = [
  installationPhotos[10],
  installationPhotos[6],
] as const;

export const residentialInstallationPhotos = [
  installationPhotos[4],
  installationPhotos[3],
] as const;
