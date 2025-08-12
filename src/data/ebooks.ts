import europe from "@/assets/covers/backpacking-europe.jpg";
import japan from "@/assets/covers/hidden-japan.jpg";
import maldives from "@/assets/covers/ultimate-maldives.jpg";
import sydney from "@/assets/covers/sydney-east-coast.jpg";
import switzerland from "@/assets/covers/alpine-switzerland.jpg";
import sahara from "@/assets/covers/sahara-adventures.jpg";
import nyc from "@/assets/covers/nyc-weekend.jpg";
import patagonia from "@/assets/covers/patagonia-trekking.jpg";
import bali from "@/assets/covers/bali-surf.jpg";

export type Ebook = {
  id: string;
  slug: string;
  title: string;
  description: string;
  priceUSD: number;
  priceINR: number;
  image: string;
  alt: string;
};

export const ebooks: Ebook[] = [
  {
    id: "europe-budget",
    slug: "backpacking-europe-on-a-budget",
    title: "Backpacking Europe on a Budget",
    description:
      "A 200-page guide to exploring Europe without breaking the bank, covering 15 countries and over 50 cities.",
    priceUSD: 12,
    priceINR: 999,
    image: europe,
    alt: "Backpacking Europe on a Budget ebook cover with European landmarks"
  },
  {
    id: "hidden-japan",
    slug: "hidden-japan",
    title: "Hidden Japan",
    description:
      "Discover off-the-map locations in Japan with insider tips, secret food spots, and cultural experiences.",
    priceUSD: 15,
    priceINR: 1249,
    image: japan,
    alt: "Hidden Japan ebook cover with neon-lit Tokyo alley"
  },
  {
    id: "ultimate-maldives",
    slug: "ultimate-maldives-guide",
    title: "Ultimate Maldives Guide",
    description:
      "Your complete island-hopping itinerary, luxury resort hacks, and budget travel tips.",
    priceUSD: 10,
    priceINR: 799,
    image: maldives,
    alt: "Ultimate Maldives Guide ebook cover with turquoise water and villas"
  },
  {
    id: "sydney-east",
    slug: "sydney-and-the-east-coast",
    title: "Sydney & The East Coast",
    description: "From Sydney to the Great Barrier Reef — beaches, cities, and road trip gems.",
    priceUSD: 11,
    priceINR: 899,
    image: sydney,
    alt: "Sydney & The East Coast ebook cover with Opera House"
  },
  {
    id: "alpine-switzerland",
    slug: "alpine-switzerland-trails",
    title: "Alpine Switzerland Trails",
    description: "Breathtaking hikes, scenic trains, and alpine villages — all seasons covered.",
    priceUSD: 14,
    priceINR: 1149,
    image: switzerland,
    alt: "Alpine Switzerland Trails ebook cover with mountain landscape"
  },
  {
    id: "sahara-adventures",
    slug: "sahara-desert-adventures",
    title: "Sahara Desert Adventures",
    description: "Camel treks, desert camps, and photography routes across the Sahara dunes.",
    priceUSD: 9,
    priceINR: 749,
    image: sahara,
    alt: "Sahara Desert Adventures ebook cover with camel caravan"
  },
  {
    id: "nyc-weekend",
    slug: "nyc-weekend-playbook",
    title: "NYC Weekend Playbook",
    description: "48-hour itineraries, must-eat spots, and hidden neighborhoods in New York City.",
    priceUSD: 8,
    priceINR: 649,
    image: nyc,
    alt: "NYC Weekend Playbook ebook cover with city skyline"
  },
  {
    id: "patagonia-trekking",
    slug: "patagonia-trekking-handbook",
    title: "Patagonia Trekking Handbook",
    description: "Wilderness routes, gear checklists, and park permits for epic Patagonia treks.",
    priceUSD: 13,
    priceINR: 1049,
    image: patagonia,
    alt: "Patagonia Trekking Handbook ebook cover with rugged mountains"
  },
  {
    id: "bali-surf",
    slug: "bali-surf-and-serenity",
    title: "Bali Surf & Serenity",
    description: "Surf breaks, yoga retreats, and temple-filled days across Bali.",
    priceUSD: 9,
    priceINR: 749,
    image: bali,
    alt: "Bali Surf & Serenity ebook cover with beach and surfboard"
  }
];
