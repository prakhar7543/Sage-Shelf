import React from "react";
import { Link } from "react-router-dom";
import { ProductComparisonTool } from "../components/comparison/ProductComparisonTool";
import { SlidersHorizontal, ShieldAlert } from "lucide-react";
import { affiliateConfig } from "../config/affiliate";

export function ComparePage() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] pb-24">
      {/* Header */}
      <header className="bg-white border-b border-[#EFECE6] pt-12 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-[#2C3531]/60 mb-4">
            <Link to="/" className="hover:text-[#7A8C7D] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#2C3531] font-medium">Product Comparison</span>
          </div>

          <div className="inline-flex items-center gap-2 text-xs text-[#7A8C7D] font-semibold tracking-wider uppercase mb-2">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Specification Matrix</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2C3531] tracking-tight">
            Kitchen Storage Product Comparison
          </h1>

          <p className="text-sm md:text-base text-[#2C3531]/80 mt-3 leading-relaxed max-w-3xl">
            Evaluate expandable bamboo cutlery trays, 2-tier sliding under-sink organizers, and airtight pantry food storage canisters across exact physical dimensions, materials, and installation methods.
          </p>

          <div className="mt-6 p-4 rounded-xl bg-[#F9F8F6] border border-[#EFECE6] text-xs text-[#2C3531]/75 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-[#7A8C7D] shrink-0 mt-0.5" />
            <span>
              <strong>Editorial Transparency:</strong> {affiliateConfig.shortDisclosure} All specifications are compiled from manufacturer data and dimensional audits. Check live Amazon product listings for current pricing.
            </span>
          </div>
        </div>
      </header>

      {/* Main Tool Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12">
        <ProductComparisonTool />
      </main>
    </div>
  );
}
