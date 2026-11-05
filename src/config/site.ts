/**
 * Sage & Shelf – Centralized Site Configuration
 * Supports configurable production domain and metadata
 */

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  author: string;
  establishedYear: number;
  market: string;
  locale: string;
  currency: string;
  social: {
    pinterest: string;
    instagram: string;
    facebook: string;
    youtube: string;
  };
  categories: {
    id: string;
    slug: string;
    name: string;
    shortName: string;
    description: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Sage & Shelf",
  tagline: "Thoughtful Spaces. Beautifully Organized.",
  description:
    "Practical kitchen organization guides, measurement-first storage calculators, and curated Amazon product recommendations for drawers, under-sink cabinets, and pantries.",
  url: typeof window !== "undefined" && window.location.origin ? window.location.origin : "https://sageandshelf.pages.dev",
  author: "Sage & Shelf Editorial Team",
  establishedYear: 2026,
  market: "US",
  locale: "en-US",
  currency: "USD",
  social: {
    pinterest: "https://pinterest.com/sageandshelf",
    instagram: "https://instagram.com/sageandshelf",
    facebook: "https://facebook.com/sageandshelf",
    youtube: "https://youtube.com/@sageandshelf",
  },
  categories: [
    {
      id: "kitchen-drawers",
      slug: "kitchen-drawers",
      name: "Kitchen Drawer Organization",
      shortName: "Kitchen Drawers",
      description: "Smart utensil dividers, deep pots-and-pans drawers, spice inserts, and measurement-tested storage setups.",
    },
    {
      id: "under-sink",
      slug: "under-sink",
      name: "Under-Sink Storage",
      shortName: "Under-Sink",
      description: "Plumbing-aware tiered sliding baskets, U-shaped pullouts, door racks, and leak-safe cabinet solutions.",
    },
    {
      id: "pantry",
      slug: "pantry",
      name: "Pantry Organization",
      shortName: "Pantry",
      description: "Airtight decanting systems, bamboo lazy Susans, tiered shelf risers, and inventory-friendly walk-in setups.",
    },
  ],
};
