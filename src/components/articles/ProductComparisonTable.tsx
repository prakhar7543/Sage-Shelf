import React from "react";
import productsData from "../../data/products.json";
import { Product } from "../../types";
import { buildAmazonUrl } from "../../config/affiliate";
import { Check, X, ExternalLink } from "lucide-react";

interface ProductComparisonTableProps {
  productIds: string[];
}

export function ProductComparisonTable({ productIds }: ProductComparisonTableProps) {
  const allProducts: Product[] = productsData as Product[];
  const selected = productIds
    .map((id) => allProducts.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  if (selected.length === 0) return null;

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#EFECE6] bg-white shadow-2xs">
      <div className="p-4 bg-[#F9F8F6] border-b border-[#EFECE6]">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#58685B]">
          Product Comparison Matrix
        </h4>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-[#EFECE6] bg-[#FFFFFF]">
              <th className="py-3 px-3 font-semibold text-[#2C3531]/60 w-1/4">Model</th>
              {selected.map((p) => (
                <th key={p.id} className="py-3 px-3 font-semibold text-[#2C3531] w-1/4">
                  <div className="font-serif text-sm leading-tight line-clamp-1">{p.name}</div>
                  <span className="text-[10px] text-[#7A8C7D] font-sans block">{p.material}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EFECE6]">
            <tr>
              <td className="py-2.5 px-3 font-semibold text-[#2C3531]">Dimensions</td>
              {selected.map((p) => (
                <td key={p.id} className="py-2.5 px-3 font-mono text-[#2C3531] tabular-nums">
                  {p.dimensions.width} × {p.dimensions.depth}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-2.5 px-3 font-semibold text-[#2C3531]">Best Use</td>
              {selected.map((p) => (
                <td key={p.id} className="py-2.5 px-3 text-[#2C3531]/80">
                  {p.bestFor}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-2.5 px-3 font-semibold text-[#2C3531]">Renter Safe</td>
              {selected.map((p) => (
                <td key={p.id} className="py-2.5 px-3">
                  {p.renterFriendly ? (
                    <span className="text-[#58685B] font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-[#7A8C7D]" /> Yes
                    </span>
                  ) : (
                    <span className="text-[#C86D51] font-medium flex items-center gap-1">
                      <X className="w-3.5 h-3.5 text-[#C86D51]" /> Drill Mount
                    </span>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3 px-3 font-semibold text-[#2C3531]">Pricing</td>
              {selected.map((p) => (
                <td key={p.id} className="py-3 px-3">
                  <a
                    href={buildAmazonUrl(p.amazonUrl)}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C86D51] hover:text-[#B55C41] underline underline-offset-2"
                  >
                    <span>Check Amazon</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
