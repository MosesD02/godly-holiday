/**
 * Godly Holiday Lights — city-specific testimonials (4 reviewers × 26 cities = 104 unique quotes).
 * Canonical copy: "City-Specific Testimonials" (March 31, 2026). Shown in STORIES FROM Happy HOMES & BUSINESSES.
 */
export interface CityTestimonial {
  name: string;
  quote: string;
  image: string;
}

export const CITY_TESTIMONIALS_BY_SLUG: Record<string, CityTestimonial[]> = {
  "boca-raton": [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "Our Boca Raton home looked absolutely stunning. Incredible work from start to finish!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "Moses and his team paid such close attention to every detail on our Boca Raton home. You can tell they genuinely care about quality.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "The crew that came to our Boca Raton home was professional, efficient, and the finished product is absolutely flawless. Couldn't be happier.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "This is our second year using them for our Boca Raton home and they keep getting better. Total trust in this team. Would recommend to anyone.",
    },
  ],
  "coconut-creek": [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "They transformed our Coconut Creek house into a holiday wonderland. Loved every bit of it!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "The attention to detail on our Coconut Creek installation was impressive. Moses really takes pride in his work and it shows.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "Working with this team on our Coconut Creek property was a breeze. They were respectful of our home and the quality of work was exceptional.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "We've referred them to all our Coconut Creek neighbors and every single one has been just as happy. Reliable, trustworthy, and the results are always perfect.",
    },
  ],
  "cooper-city": [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "Best decision we made for our Cooper City home this season. The lights were perfect!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "Moses personally made sure everything was perfect at our Cooper City house. That kind of dedication is rare to find these days.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "From start to finish, the Cooper City installation was handled with such skill. The crew was friendly and the results are stunning.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "After seeing what they did for our Cooper City home, we wouldn't go with anyone else. Consistent quality you can count on every single time.",
    },
  ],
  "coral-springs": [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "Our Coral Springs neighbors couldn't stop complimenting the display. Fantastic job!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "From the first consultation to the final light in Coral Springs, Moses was professional and thorough. Really appreciate the quality.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "The team was incredible at our Coral Springs home. They worked quickly without cutting any corners and the display looks phenomenal.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "Our Coral Springs property has been in their hands for two seasons now and the results just keep impressing us. Full confidence in this team.",
    },
  ],
  davie: [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "The team made our Davie property look magical. We'll definitely be back next year!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "Moses and his crew treated our Davie property like it was their own. Meticulous work and genuinely kind people.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "Our Davie property needed a custom approach and the crew delivered perfectly. They were thoughtful about every placement and the result is amazing.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "We trust them completely with our Davie home and for good reason. Every time they show up, the results are better than the last.",
    },
  ],
  "deerfield-beach": [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "Absolutely beautiful work on our Deerfield Beach home. Exceeded all our expectations!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "The quality of the installation at our Deerfield Beach home was exceptional. Moses clearly holds his team to a high standard.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "Smooth process from beginning to end at our Deerfield Beach home. The crew was polite, professional, and the lights look unbelievable.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "They've earned our complete trust in Deerfield Beach. No surprises, no issues, just beautiful results every single season.",
    },
  ],
  "delray-beach": [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "Our Delray Beach house has never looked better during the holidays. Top notch work!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "Moses went above and beyond for our Delray Beach property. He even came back to adjust a few lights to make sure everything was perfect.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "The Delray Beach installation exceeded every expectation. The crew was a joy to work with and the quality is truly in a league of its own.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "We've recommended them to so many people in Delray Beach and the feedback is always the same. Everyone loves them. Consistently outstanding.",
    },
  ],
  "fort-lauderdale": [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "They knocked it out of the park with our Fort Lauderdale home. Stunning display!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "Working with Moses on our Fort Lauderdale home was a pleasure. He's detail-oriented, responsive, and delivers top quality every time.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "The crew at our Fort Lauderdale home was one of the best teams I've ever worked with. Efficient, skilled, and the end result is perfection.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "Our Fort Lauderdale home is in the best hands with this crew. They deliver perfection every time without us having to worry about a thing.",
    },
  ],
  "hallandale-beach": [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "Our Hallandale Beach condo building looks incredible. Residents love it!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "Moses and his team were so thorough with our Hallandale Beach building. Every light was placed with care and precision.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "They handled our Hallandale Beach property with such care and precision. The professionalism from the whole crew was impressive.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "Year after year, our Hallandale Beach building looks amazing thanks to this team. Total confidence in everything they do.",
    },
  ],
  "hillsboro-beach": [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "The elegance they brought to our Hillsboro Beach estate was beyond what we imagined!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "The craftsmanship on our Hillsboro Beach estate was impeccable. Moses has a real eye for design and quality.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "The installation at our Hillsboro Beach estate was flawless. The crew understood the premium nature of the property and delivered accordingly.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "For our Hillsboro Beach estate, we need a team we can trust completely and these guys are it. Impeccable results, always.",
    },
  ],
  hollywood: [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "Our Hollywood home is the talk of the neighborhood thanks to these guys. Amazing!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "Moses personally oversaw our Hollywood installation and you could see the difference. Attention to detail like no one else.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "Our Hollywood home installation was completed ahead of schedule and the quality blew us away. This crew really knows what they're doing.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "Our Hollywood home has been their project for two years now and they never disappoint. Can't say enough good things about this team.",
    },
  ],
  "lauderdale-by-the-sea": [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "Perfect holiday lights for our Lauderdale-by-the-Sea cottage. Charming and beautiful!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "Our Lauderdale-by-the-Sea home looks perfect thanks to Moses. He truly cares about getting every detail right.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "The Lauderdale-by-the-Sea team was respectful, efficient, and talented. Our small property looks like something out of a holiday movie.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "Living in Lauderdale-by-the-Sea, we needed a team that gets the coastal vibe right. They nailed it. Complete trust in their work.",
    },
  ],
  "lighthouse-point": [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "Our Lighthouse Point home on the water looks spectacular with their lights. Love it!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "Moses took the time to understand exactly what we wanted for our Lighthouse Point property. The result speaks for itself.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "The crew that handled our Lighthouse Point waterfront home was outstanding. Careful with the property and the work is second to none.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "Our Lighthouse Point home is always in great hands. They know exactly what we want and deliver beyond expectations every time.",
    },
  ],
  margate: [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "They did a wonderful job on our Margate house. The whole street looks festive now!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "Really impressed with how Moses handled our Margate project. Professional from start to finish with excellent quality.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "Really impressed with the team at our Margate home. They were organized, quick, and the lights look absolutely beautiful.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "We've trusted them with our Margate home and they've never let us down. The consistency is what really sets them apart.",
    },
  ],
  miramar: [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "Incredible transformation for our Miramar home. The kids are absolutely thrilled!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "Moses brought such a thoughtful approach to our Miramar home. Every design choice was intentional and the result is beautiful.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "The Miramar crew was fantastic to work with. They listened to what we wanted and delivered something even better than we imagined.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "Our Miramar property always looks incredible thanks to this crew. We trust them without hesitation and recommend them to everyone.",
    },
  ],
  "oakland-park": [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "Our Oakland Park house looks like something out of a magazine. Truly great work!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "The level of care Moses puts into his Oakland Park installations is something special. You can tell this isn't just a job for him.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "Our Oakland Park home was treated with such care by the installation team. The quality of the work speaks for itself.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "They've become our go-to team for our Oakland Park home. The trust is earned through consistently outstanding work every season.",
    },
  ],
  parkland: [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "The display on our Parkland estate is breathtaking. Worth every penny!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "Moses treated our Parkland estate with the attention it deserved. The display is elegant and flawlessly executed.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "The crew at our Parkland estate was incredibly skilled. They handled every roofline and tree with precision and the result is breathtaking.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "For a Parkland estate, you need a team that understands the standard. These guys get it and deliver every single time.",
    },
  ],
  "pembroke-pines": [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "Our Pembroke Pines home has never gotten so many compliments. Outstanding job!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "Our Pembroke Pines installation was handled with such professionalism by Moses. He made the whole process effortless.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "Everything about the Pembroke Pines installation was top tier. The crew was professional and the display is absolutely gorgeous.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "We've sent multiple Pembroke Pines neighbors their way and everyone has the same reaction. Pure satisfaction. Trustworthy team all around.",
    },
  ],
  plantation: [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "They made our Plantation property look absolutely magical this holiday season!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "Moses is the real deal. Our Plantation home looks incredible and he made the entire experience smooth from day one.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "Working with this team on our Plantation home was effortless. They showed up on time, worked clean, and the finished product is stunning.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "Our Plantation home is always in perfect hands with this crew. They make the holidays stress-free and the results speak for themselves.",
    },
  ],
  "pompano-beach": [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "Beautiful work on our Pompano Beach home. Clean, professional, and stunning!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "The quality Moses delivered at our Pompano Beach property was outstanding. He's clearly passionate about what he does.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "The Pompano Beach crew was outstanding. They took the time to get every detail right and our home has never looked better for the holidays.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "Pompano Beach residents, look no further. This team delivers outstanding results and you can trust them completely with your property.",
    },
  ],
  "royal-palm-beach": [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "Our Royal Palm Beach house looks amazing. The neighbors keep stopping to take photos!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "Moses was so attentive during our Royal Palm Beach installation. He checked in multiple times to make sure we were happy.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "The team at our Royal Palm Beach home was friendly, fast, and the quality of their work is unmatched. Highly recommend.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "Our Royal Palm Beach home has never looked better and it's all because of this crew. Reliable, talented, and worth every penny.",
    },
  ],
  "southwest-ranches": [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "They handled our large Southwest Ranches property with ease. The result is gorgeous!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "Handling our large Southwest Ranches estate was no small task, but Moses and his team nailed every detail. Truly impressed.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "Our Southwest Ranches estate required a large-scale installation and the crew handled it beautifully. Professional from start to finish.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "We trust them with our entire Southwest Ranches estate and they never cut corners. The results are consistently remarkable.",
    },
  ],
  sunrise: [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "Love what they did with our Sunrise home. Simple, elegant, and perfectly executed!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "Moses brought real professionalism to our Sunrise home. Careful, clean work with a great eye for how everything should look.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "The Sunrise crew was great to have around. They were efficient, tidy, and the end result is something we're truly proud to show off.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "Our Sunrise home is the envy of the street every holiday season thanks to this team. Absolute trust and total satisfaction.",
    },
  ],
  tamarac: [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "Our Tamarac house has never looked this good during the holidays. Great team!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "Really happy with how Moses handled our Tamarac installation. He's thorough, honest, and the quality is always consistent.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "Fantastic experience with the team at our Tamarac home. They were skilled, courteous, and the lights are absolutely perfect.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "They've been handling our Tamarac home for two years and we wouldn't dream of switching. Consistent excellence is their standard.",
    },
  ],
  "west-park": [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "Wonderful job on our West Park home. Everything was done professionally and on time!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "Moses and his team were fantastic at our West Park home. You can tell they take real pride in every single project.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "The West Park installation crew was one of the most professional teams I've worked with. Clean work and the result is incredible.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "Every time they work on our West Park home, the results are outstanding. Full trust in this team and can't recommend them enough.",
    },
  ],
  weston: [
    {
      name: "Deborah Klassen",
      image: "/images/services/testimonials/Deborah-Klassen.png",
      quote:
        "Our Weston home looks like a winter wonderland. The whole family is in love with it!",
    },
    {
      name: "Lilly Thomas",
      image: "/images/services/testimonials/Lilly-Thomas.png",
      quote:
        "Moses is incredibly conscientious about his work. Our Weston home has never looked this beautiful during the holidays.",
    },
    {
      name: "Joe Harb",
      image: "/images/services/testimonials/Joe-Harb.png",

      quote:
        "Our Weston home got the royal treatment from this crew. Every single detail was handled with care and the display is flawless.",
    },
    {
      name: "Yazmin Thomas",
      image: "/images/services/testimonials/Yazmin-Thomas.png",
      quote:
        "Our Weston home gets the same amazing treatment every season. This crew has earned our complete trust and we tell everyone about them.",
    },
  ],
};

export function getCityTestimonials(
  slug: string,
): CityTestimonial[] | undefined {
  return CITY_TESTIMONIALS_BY_SLUG[slug];
}
