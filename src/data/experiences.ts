import { Experience, ExperienceCategory } from "@/types/experience";

export const categories: ExperienceCategory[] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

export const destinations: string[] = [
  "Kyoto, Japan",
  "Cusco, Peru",
  "Lisbon, Portugal",
  "Marrakech, Morocco",
  "Reykjavik, Iceland",
  "Bali, Indonesia",
  "Dubrovnik, Croatia",
  "Cape Town, South Africa",
  "Queenstown, New Zealand",
  "Barcelona, Spain",
  "Athens, Greece",
  "Istanbul, Turkey",
  "Hanoi, Vietnam",
  "Seoul, South Korea",
  "Mexico City, Mexico",
  "Santiago, Chile",
  "Banff, Canada",
  "Edinburgh, Scotland",
  "Amman, Jordan",
  "Zanzibar City, Tanzania",
];

const titlePrefixes = [
  "Sunrise",
  "Hidden",
  "Coastal",
  "Mountain",
  "Urban",
  "Sacred",
  "Wild",
  "Golden",
  "Moonlit",
  "Ancient",
];

const titleNouns = [
  "Trail",
  "Workshop",
  "Expedition",
  "Tasting",
  "Retreat",
  "Safari",
  "Circuit",
  "Escape",
  "Journey",
  "Discovery",
];

export const experiences: Experience[] = Array.from({ length: 100 }, (_, index) => {
  const id = index + 1;
  const category = categories[index % categories.length];
  const destination = destinations[index % destinations.length];
  const prefix = titlePrefixes[index % titlePrefixes.length];
  const noun = titleNouns[(index * 3) % titleNouns.length];

  return {
    id,
    title: `${prefix} ${destination.split(",")[0]} ${noun}`,
    description:
      "A curated Wanderlust Labs experience with expert local hosts, small groups, and immersive storytelling.",
    category,
    destination,
    price: 45 + (index % 12) * 15,
    rating: Number((4 + (index % 10) * 0.09).toFixed(1)),
    imageUrl: `https://picsum.photos/seed/wanderlust-${id}/800/500`,
  };
});
