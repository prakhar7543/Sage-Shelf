import React from "react";
import { ExternalLink } from "lucide-react";
import { buildAmazonUrl, affiliateConfig } from "../../config/affiliate";

interface AmazonButtonProps {
  url?: string;
  asin?: string;
  text?: string;
  className?: string;
  variant?: "primary" | "secondary" | "subtle";
}

export function AmazonButton({
  url,
  asin,
  text = affiliateConfig.primaryCtaText,
  className = "",
  variant = "primary",
}: AmazonButtonProps) {
  const targetUrl = buildAmazonUrl(url || asin || "");

  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold text-xs transition-all cursor-pointer rounded-lg px-4 py-2.5 whitespace-nowrap shrink-0";

  const variantStyles = {
    primary: "bg-[#C86D51] hover:bg-[#B55C41] text-white shadow-xs hover:shadow-sm",
    secondary: "bg-[#7A8C7D] hover:bg-[#58685B] text-white shadow-xs",
    subtle: "bg-[#F9F8F6] hover:bg-[#EFECE6] text-[#2C3531] border border-[#EFECE6]",
  };

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      title="Check Price and Availability on Amazon"
    >
      <span>{text}</span>
      <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-85" />
    </a>
  );
}
