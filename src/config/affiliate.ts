/**
 * Sage & Shelf – Centralized Amazon Affiliate Configuration
 * Strictly complies with Amazon Associates Program Operating Agreement and FTC Guidelines.
 */

export interface AffiliateConfig {
  tag: string;
  defaultDomain: string;
  isActivated: boolean;
  disclosureStatement: string;
  shortDisclosure: string;
  priceNotice: string;
  primaryCtaText: string;
  secondaryCtaText: string;
}

export const affiliateConfig: AffiliateConfig = {
  // Configurable Amazon Associates Tracking ID. Replace with your approved Store ID when approved.
  tag: "sageandshelf-20",
  defaultDomain: "www.amazon.com",
  // Indicates if production affiliate links or instructional placeholders are active
  isActivated: false,
  disclosureStatement:
    "Sage & Shelf is an independent publication. As an Amazon Associate, we earn from qualifying purchases at no additional cost to you. Product prices and availability are accurate as of the date/time indicated and are subject to change. Any price and availability information displayed on Amazon.com at the time of purchase will apply to the purchase of this product.",
  shortDisclosure: "As an Amazon Associate I earn from qualifying purchases.",
  priceNotice:
    "Prices and availability are subject to change. Check live product listing on Amazon for current pricing and delivery estimates.",
  primaryCtaText: "Check Price on Amazon",
  secondaryCtaText: "View on Amazon",
};

/**
 * Generates an Amazon affiliate link with the configured tracking tag
 * and safe query parameters.
 */
export function buildAmazonUrl(asinOrUrl: string, customTag?: string): string {
  const activeTag = customTag || affiliateConfig.tag;

  if (!asinOrUrl) {
    return `https://${affiliateConfig.defaultDomain}/s?k=kitchen+organization&tag=${activeTag}`;
  }

  // If already an Amazon URL
  if (asinOrUrl.startsWith("http://") || asinOrUrl.startsWith("https://")) {
    try {
      const url = new URL(asinOrUrl);
      url.searchParams.set("tag", activeTag);
      return url.toString();
    } catch {
      return asinOrUrl;
    }
  }

  // Treat as ASIN
  return `https://${affiliateConfig.defaultDomain}/dp/${asinOrUrl}?tag=${activeTag}&linkCode=ll1`;
}
