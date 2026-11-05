import React, { useState } from "react";
import productsData from "../../data/products.json";
import { Product } from "../../types";
import { buildAmazonUrl } from "../../config/affiliate";
import { ArrowRight, Check, X, SlidersHorizontal, ExternalLink, ShieldCheck } from "lucide-react";

interface ProductComparisonToolProps {
  initialProductIds?: string[];
  filterCategory?: string;
}

export function ProductComparisonTool({
  initialProductIds = ["bamboo-expandable-organizer-01", "spring-bamboo-dividers-02", "tiered-drawer-spice-rack-03"],
  filterCategory,
}: ProductComparisonToolProps) {
  const allProducts: Product[] = productsData as Product[];

  const [selectedIds, setSelectedIds] = useState<string[]>(initialProductIds);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>(filterCategory || "all");

  const filteredCatalog = allProducts.filter((p) => {
    if (activeCategoryFilter === "all") return true;
    return p.categorySlug === activeCategoryFilter;
  });

  const selectedProducts = selectedIds
    .map((id) => allProducts.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  const toggleProduct = (productId: string) => {
    if (selectedIds.includes(productId)) {
      if (selectedIds.length > 2) {
        setSelectedIds(selectedIds.filter((id) => id !== productId));
      }
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, productId]);
      } else {
        // Replace the last item
        setSelectedIds([selectedIds[0], selectedIds[1], productId]);
      }
    }
  };

  return (
    <div className="w-full bg-white border border-[#EFECE6] rounded-xl p-6 md:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#EFECE6] pb-4 mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#7A8C7D] font-medium tracking-wide uppercase">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Interactive Comparison Matrix</span>
          </div>
          <h3 className="text-xl md:text-2xl font-serif text-[#2C3531] mt-1">
            Compare Storage Products Side-by-Side
          </h3>
          <p className="text-xs text-[#2C3531]/70 mt-1">
            Compare up to 3 storage solutions by dimensions, materials, and renter-friendly status.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F9F8F6] rounded-lg border border-[#EFECE6] self-start sm:self-auto">
          <button
            onClick={() => setActiveCategoryFilter("all")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
              activeCategoryFilter === "all" ? "bg-white text-[#2C3531] shadow-2xs" : "text-[#2C3531]/70 hover:text-[#2C3531]"
            }`}
          >
            All Categories
          </button>
          <button
            onClick={() => setActiveCategoryFilter("kitchen-drawers")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
              activeCategoryFilter === "kitchen-drawers" ? "bg-white text-[#2C3531] shadow-2xs" : "text-[#2C3531]/70 hover:text-[#2C3531]"
            }`}
          >
            Drawers
          </button>
          <button
            onClick={() => setActiveCategoryFilter("under-sink")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
              activeCategoryFilter === "under-sink" ? "bg-white text-[#2C3531] shadow-2xs" : "text-[#2C3531]/70 hover:text-[#2C3531]"
            }`}
          >
            Under-Sink
          </button>
          <button
            onClick={() => setActiveCategoryFilter("pantry")}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
              activeCategoryFilter === "pantry" ? "bg-white text-[#2C3531] shadow-2xs" : "text-[#2C3531]/70 hover:text-[#2C3531]"
            }`}
          >
            Pantry
          </button>
        </div>
      </div>

      {/* Product Selection Bar */}
      <div className="mb-6">
        <span className="text-xs font-semibold text-[#2C3531] block mb-2">
          Select items to compare ({selectedProducts.length}/3 selected):
        </span>
        <div className="flex flex-wrap gap-2">
          {filteredCatalog.map((product) => {
            const isSelected = selectedIds.includes(product.id);
            return (
              <button
                key={product.id}
                type="button"
                onClick={() => toggleProduct(product.id)}
                className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#EBF0EC] border-[#7A8C7D] text-[#58685B] font-semibold"
                    : "bg-[#F9F8F6] border-[#EFECE6] text-[#2C3531]/80 hover:bg-[#EFECE6]"
                }`}
              >
                {isSelected ? <Check className="w-3.5 h-3.5 text-[#7A8C7D]" /> : null}
                <span>{product.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop Comparison Table (Hidden on Mobile) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-[#EFECE6]">
              <th className="py-4 px-3 font-semibold text-[#2C3531]/60 w-1/4">Specification</th>
              {selectedProducts.map((p) => (
                <th key={p.id} className="py-4 px-4 font-serif text-sm font-semibold text-[#2C3531] w-1/3 align-top">
                  <div className="mb-2">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      className="w-full h-32 object-cover rounded-lg border border-[#EFECE6] mb-2"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[11px] text-[#7A8C7D] font-sans font-medium block">
                      {p.category}
                    </span>
                    <span className="line-clamp-2 leading-snug">{p.name}</span>
                  </div>
                  <a
                    href={buildAmazonUrl(p.amazonUrl)}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 bg-[#C86D51] hover:bg-[#B55C41] text-white text-xs font-semibold rounded-lg transition-colors"
                  >
                    <span>Check Price on Amazon</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EFECE6]">
            <tr>
              <td className="py-3 px-3 font-semibold text-[#2C3531]">Best Use Case</td>
              {selectedProducts.map((p) => (
                <td key={p.id} className="py-3 px-4 text-[#2C3531]/80 leading-relaxed">
                  {p.bestFor}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3 px-3 font-semibold text-[#2C3531]">Dimensions</td>
              {selectedProducts.map((p) => (
                <td key={p.id} className="py-3 px-4 text-[#2C3531] font-mono tabular-nums leading-relaxed">
                  <div><strong>W:</strong> {p.dimensions.width}</div>
                  <div><strong>D:</strong> {p.dimensions.depth}</div>
                  <div><strong>H:</strong> {p.dimensions.height}</div>
                  {p.dimensions.clearanceRequired && (
                    <div className="text-[11px] text-[#7A8C7D] mt-1 font-sans">
                      Clearance: {p.dimensions.clearanceRequired}
                    </div>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3 px-3 font-semibold text-[#2C3531]">Primary Material</td>
              {selectedProducts.map((p) => (
                <td key={p.id} className="py-3 px-4 text-[#2C3531]">
                  {p.material}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3 px-3 font-semibold text-[#2C3531]">Installation Type</td>
              {selectedProducts.map((p) => (
                <td key={p.id} className="py-3 px-4 text-[#2C3531]">
                  {p.installationType}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3 px-3 font-semibold text-[#2C3531]">Renter Friendly</td>
              {selectedProducts.map((p) => (
                <td key={p.id} className="py-3 px-4">
                  {p.renterFriendly ? (
                    <span className="inline-flex items-center gap-1 text-[#58685B] font-semibold">
                      <Check className="w-4 h-4 text-[#7A8C7D]" />
                      <span>Yes (No drilling required)</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[#C86D51] font-medium">
                      <X className="w-4 h-4 text-[#C86D51]" />
                      <span>Permanent (Screw-mount)</span>
                    </span>
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-3 px-3 font-semibold text-[#2C3531]">Key Features</td>
              {selectedProducts.map((p) => (
                <td key={p.id} className="py-3 px-4 text-[#2C3531]/80">
                  <ul className="space-y-1 list-disc list-inside">
                    {p.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="leading-snug">{feat}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Cards Layout (Complies with Step 12 & 17) */}
      <div className="md:hidden space-y-6">
        {selectedProducts.map((product) => (
          <div key={product.id} className="bg-[#F9F8F6] border border-[#EFECE6] rounded-xl p-4 space-y-3">
            <div className="flex gap-3">
              <img
                src={product.image}
                alt={product.imageAlt}
                className="w-20 h-20 object-cover rounded-lg border border-[#EFECE6] shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-[11px] text-[#7A8C7D] font-medium uppercase tracking-wider block">
                  {product.category}
                </span>
                <h4 className="font-serif text-sm font-semibold text-[#2C3531] line-clamp-2 mt-0.5">
                  {product.name}
                </h4>
                <div className="mt-1">
                  {product.renterFriendly ? (
                    <span className="text-[11px] text-[#58685B] font-medium flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#7A8C7D]" />
                      Renter Friendly
                    </span>
                  ) : (
                    <span className="text-[11px] text-[#C86D51] font-medium">
                      Screw-mount Required
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="text-xs space-y-2 border-t border-[#EFECE6] pt-3 text-[#2C3531]/80">
              <div>
                <strong className="text-[#2C3531]">Best For:</strong> {product.bestFor}
              </div>
              <div className="font-mono tabular-nums">
                <strong className="text-[#2C3531] font-sans">Dimensions:</strong> {product.dimensions.width} W × {product.dimensions.depth} D × {product.dimensions.height} H
              </div>
              <div>
                <strong className="text-[#2C3531]">Material:</strong> {product.material} ({product.installationType})
              </div>
            </div>

            <a
              href={buildAmazonUrl(product.amazonUrl)}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 bg-[#C86D51] hover:bg-[#B55C41] text-white text-xs font-semibold rounded-lg transition-colors"
            >
              <span>Check Price on Amazon</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-[#EFECE6] text-[11px] text-[#2C3531]/60 leading-relaxed">
        * Specifications are compiled for editorial comparison. All purchases qualify under Amazon Associates Program policies.
      </div>
    </div>
  );
}
