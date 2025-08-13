import europe from "@/assets/covers/backpacking-europe.jpg";
import japan from "@/assets/covers/hidden-japan.jpg";
import maldives from "@/assets/covers/ultimate-maldives.jpg";
import sydney from "@/assets/covers/sydney-east-coast.jpg";
import switzerland from "@/assets/covers/alpine-switzerland.jpg";
import sahara from "@/assets/covers/sahara-adventures.jpg";
import nyc from "@/assets/covers/nyc-weekend.jpg";
import patagonia from "@/assets/covers/patagonia-trekking.jpg";
import bali from "@/assets/covers/bali-surf.jpg";

// Newly added covers
import worldTour from "@/assets/covers/world-tour-planner.jpg";
import digitalNomad from "@/assets/covers/digital-nomad-handbook.jpg";
import seAsia from "@/assets/covers/southeast-asia-backpacking.jpg";
import nzRoad from "@/assets/covers/new-zealand-road-trip.jpg";
import usaParks from "@/assets/covers/usa-national-parks.jpg";
import scandi from "@/assets/covers/scandinavian-adventures.jpg";
import medIslands from "@/assets/covers/mediterranean-islands.jpg";
import goldenTriangle from "@/assets/covers/india-golden-triangle.jpg";
import middleEast from "@/assets/covers/middle-east-marvels.jpg";
import rockies from "@/assets/covers/canadian-rockies.jpg";
import safari from "@/assets/covers/africa-safari-essentials.jpg";
import saHighlights from "@/assets/covers/south-america-highlights.jpg";
import ceCities from "@/assets/covers/central-europe-cities.jpg";
import remoteVisas from "@/assets/covers/remote-work-visas.jpg";
import jrItineraries from "@/assets/covers/japan-rail-itineraries.jpg";

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
  },
  // New additions
  {
    id: "world-tour-planner",
    slug: "ultimate-world-tour-planner",
    title: "Ultimate World Tour Planner",
    description: "Design your dream year-long world tour with route maps, sample budgets, and time-zone hacks.",
    priceUSD: 16,
    priceINR: 1299,
    image: worldTour,
    alt: "Ultimate World Tour Planner ebook cover with world map and flight routes"
  },
  {
    id: "digital-nomad-handbook",
    slug: "digital-nomad-handbook",
    title: "Digital Nomad Handbook",
    description: "Visas, taxes, remote work setup, and the best nomad cities with cost-of-living breakdowns.",
    priceUSD: 14,
    priceINR: 1149,
    image: digitalNomad,
    alt: "Digital Nomad Handbook ebook cover with laptop by tropical beach cafe"
  },
  {
    id: "se-asia-backpacking",
    slug: "backpacking-southeast-asia",
    title: "Backpacking Southeast Asia",
    description: "Classic backpacker route across Thailand, Vietnam, Cambodia, and Laos with hostel tips.",
    priceUSD: 12,
    priceINR: 999,
    image: seAsia,
    alt: "Backpacking Southeast Asia ebook cover with rice terraces and tuk-tuk"
  },
  {
    id: "new-zealand-road-trip",
    slug: "new-zealand-road-trip",
    title: "New Zealand Road Trip",
    description: "Epic drives on North and South Islands, campervan planning, and must-see stops.",
    priceUSD: 13,
    priceINR: 1049,
    image: nzRoad,
    alt: "New Zealand Road Trip ebook cover with winding road and turquoise lake"
  },
  {
    id: "usa-national-parks",
    slug: "usa-national-parks-explorer",
    title: "USA National Parks Explorer",
    description: "Itineraries for Zion, Yosemite, Yellowstone and more with permits, trails, and lodging.",
    priceUSD: 14,
    priceINR: 1149,
    image: usaParks,
    alt: "USA National Parks Explorer ebook cover with canyon sunrise"
  },
  {
    id: "scandinavian-adventures",
    slug: "scandinavian-adventures",
    title: "Scandinavian Adventures",
    description: "Northern lights, fjords, Arctic trains, and cozy city breaks across Norway, Sweden, Finland.",
    priceUSD: 15,
    priceINR: 1249,
    image: scandi,
    alt: "Scandinavian Adventures ebook cover with aurora over fjords"
  },
  {
    id: "mediterranean-islands",
    slug: "mediterranean-island-hopping",
    title: "Mediterranean Island Hopping",
    description: "Santorini to Sardinia: ferry routes, beaches, boutique stays, and food trails.",
    priceUSD: 12,
    priceINR: 999,
    image: medIslands,
    alt: "Mediterranean Island Hopping ebook cover with whitewashed houses and blue sea"
  },
  {
    id: "golden-triangle",
    slug: "india-golden-triangle",
    title: "India's Golden Triangle",
    description: "Delhi, Agra, Jaipur: palaces, bazaars, street-food routes, and sunrise at the Taj.",
    priceUSD: 10,
    priceINR: 799,
    image: goldenTriangle,
    alt: "India's Golden Triangle ebook cover with Taj Mahal at dawn"
  },
  {
    id: "middle-east-marvels",
    slug: "middle-east-marvels",
    title: "Middle East Marvels",
    description: "Petra, Wadi Rum, Dubai, Muscat: ancient wonders and modern skylines in one trip.",
    priceUSD: 13,
    priceINR: 1049,
    image: middleEast,
    alt: "Middle East Marvels ebook cover with ancient sandstone city"
  },
  {
    id: "canadian-rockies",
    slug: "canadian-rockies-explorer",
    title: "Canadian Rockies Explorer",
    description: "Banff, Jasper, Yoho: emerald lakes, glacier hikes, and scenic drives.",
    priceUSD: 12,
    priceINR: 999,
    image: rockies,
    alt: "Canadian Rockies Explorer ebook cover with emerald lake and peaks"
  },
  {
    id: "africa-safari-essentials",
    slug: "africa-safari-essentials",
    title: "Africa Safari Essentials",
    description: "Best seasons, parks, ethical operators, packing lists, and wildlife photography tips.",
    priceUSD: 11,
    priceINR: 899,
    image: safari,
    alt: "Africa Safari Essentials ebook cover with acacia tree and giraffes at sunset"
  },
  {
    id: "south-america-highlights",
    slug: "south-america-highlights",
    title: "South America Highlights",
    description: "From the Andes to the Amazon: itineraries across Peru, Chile, Argentina, and Brazil.",
    priceUSD: 14,
    priceINR: 1149,
    image: saHighlights,
    alt: "South America Highlights ebook cover with colorful Andean cityscape"
  },
  {
    id: "central-europe-cities",
    slug: "central-europe-cities",
    title: "Central Europe Cities",
    description: "Prague, Vienna, Budapest: architecture walks, coffee houses, and river cruises.",
    priceUSD: 10,
    priceINR: 799,
    image: ceCities,
    alt: "Central Europe Cities ebook cover with gothic spires and tram"
  },
  {
    id: "remote-work-visas",
    slug: "remote-work-visas-and-cities",
    title: "Remote Work Visas & Cities",
    description: "Countries offering digital nomad visas, application steps, and best neighborhoods to live.",
    priceUSD: 12,
    priceINR: 999,
    image: remoteVisas,
    alt: "Remote Work Visas & Cities ebook cover with city skyline and coworking interior"
  },
  {
    id: "japan-rail-itineraries",
    slug: "japan-rail-itineraries",
    title: "Japan Rail Itineraries",
    description: "JR Pass routes from Tokyo to Hiroshima with day-by-day plans and seat reservation tips.",
    priceUSD: 11,
    priceINR: 899,
    image: jrItineraries,
    alt: "Japan Rail Itineraries ebook cover with shinkansen and Mount Fuji"
  }
];
