/**
 * Core Domain Interfaces for Sage & Shelf
 */

export interface ProductDimensions {
  width: string;
  depth: string;
  height: string;
  clearanceRequired?: string;
  expandableRange?: string;
}

export interface Product {
  id: string;
  name: string;
  brand?: string;
  category: "Kitchen Drawer Organization" | "Under-Sink Storage" | "Pantry Organization";
  categorySlug: "kitchen-drawers" | "under-sink" | "pantry";
  description: string;
  bestFor: string;
  dimensions: ProductDimensions;
  material: string;
  installationType: "Freestanding" | "Expandable / Drop-in" | "Adhesive / Non-drill" | "Screw-mount" | "Modular";
  renterFriendly: boolean;
  features: string[];
  pros: string[];
  cons: string[];
  image: string;
  imageAlt: string;
  asin?: string;
  amazonUrl: string;
  affiliateStatus: "placeholder" | "active";
  productStatus: "sample" | "editorial_selection";
  sampleNotice?: string;
}

export interface ArticleHeading {
  id: string;
  text: string;
  level: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Article {
  slug: string;
  title: string;
  category: "Kitchen Drawer Organization" | "Under-Sink Storage" | "Pantry Organization";
  categorySlug: "kitchen-drawers" | "under-sink" | "pantry";
  description: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  updatedAt: string;
  featuredImage: string;
  featuredImageAlt: string;
  readingTime: number; // in minutes
  featured: boolean;
  tags: string[];
  relatedSlugs: string[];
  productIds: string[];
  faqs: FAQItem[];
  tableOfContents?: ArticleHeading[];
}

export interface CategoryData {
  id: string;
  slug: string;
  name: string;
  heroHeadline: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  keyProblemsSolved: string[];
  measurementAdvice: string;
  recommendedProductIds: string[];
  calculatorId: "drawer" | "under-sink" | "pantry";
}
