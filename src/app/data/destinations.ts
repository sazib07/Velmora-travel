
export type Destination = {
  id: string;
  slug: string;
  name: string;
  country: string;
  category: string;
  description: string;
  image: string;
  priceFrom: number;
  rating: number;
  duration: string;
};

export const destinations: Destination[] = [
  {
    id: "1",
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    category: "Island Escape",
    description: "Tropical coastlines and peaceful retreats.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=85",
    priceFrom: 450,
    rating: 4.9,
    duration: "5–7 days",
  },
  {
    id: "2",
    slug: "swiss-alps",
    name: "Swiss Alps",
    country: "Switzerland",
    category: "Mountain Retreat",
    description: "Alpine villages and breathtaking peaks.",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1000&q=85",
    priceFrom: 890,
    rating: 4.9,
    duration: "6–8 days",
  },
  {
    id: "3",
    slug: "santorini",
    name: "Santorini",
    country: "Greece",
    category: "Coastal Luxury",
    description: "Whitewashed villages and sunset views.",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1000&q=85",
    priceFrom: 720,
    rating: 4.8,
    duration: "4–6 days",
  },
  {
    id: "4",
    slug: "kyoto",
    name: "Kyoto",
    country: "Japan",
    category: "Cultural Journey",
    description: "Ancient temples and serene gardens.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85",
    priceFrom: 650,
    rating: 4.8,
    duration: "4–5 days",
  },
];
