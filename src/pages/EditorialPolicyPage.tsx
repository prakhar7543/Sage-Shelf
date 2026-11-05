import React from "react";
import { Link } from "react-router-dom";
import { Check, ShieldCheck, Ruler, AlertCircle } from "lucide-react";

export function EditorialPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] pb-24">
      <header className="bg-white border-b border-[#EFECE6] pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-[#2C3531]/60 mb-4">
            <Link to="/" className="hover:text-[#7A8C7D] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#2C3531] font-medium">Editorial Policy</span>
          </div>

          <span className="text-xs font-semibold text-[#7A8C7D] uppercase tracking-wider block mb-1">
            Quality Standards
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2C3531] tracking-tight">
            How We Choose & Verify Products
          </h1>
          <p className="text-sm md:text-base text-[#2C3531]/80 mt-3 leading-relaxed max-w-2xl">
            Our systematic framework for evaluating kitchen storage products, checking physical dimensions, and preventing sponsored bias.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12">
        <div className="bg-white rounded-2xl border border-[#EFECE6] p-8 md:p-12 space-y-8 text-sm md:text-base leading-relaxed text-[#2C3531]/85 shadow-2xs">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#2C3531] mb-3">
              1. Product Selection Criteria
            </h2>
            <p>
              We do not publish 50-item roundups of every organizer sold online. Instead, we select products based on four rigorous functional standards:
            </p>
            <ul className="mt-3 space-y-2 text-xs md:text-sm pl-2">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#7A8C7D] shrink-0 mt-0.5" />
                <span><strong>Dimensional Utility:</strong> Products must fit standard American cabinet footprints (e.g. 24" base cabinet depths, 3/4" door thicknesses, and standard plumbing clearances).</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#7A8C7D] shrink-0 mt-0.5" />
                <span><strong>Material Longevity:</strong> We prioritize solid bamboo, BPA-free shatter-resistant acrylic, and powder-coated alloy steel over brittle, low-grade plastic that warps.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#7A8C7D] shrink-0 mt-0.5" />
                <span><strong>Renter Viability:</strong> We verify whether an organizer can be installed and removed without drilling holes into cabinet baseboards or leaving destructive adhesive residue.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#7A8C7D] shrink-0 mt-0.5" />
                <span><strong>Aesthetic Cohesion:</strong> Storage should elevate the visual warmth of a kitchen rather than adding visual clutter.</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-[#EFECE6]">
            <h2 className="font-serif text-2xl font-semibold text-[#2C3531] mb-3">
              2. How Specifications Are Audited
            </h2>
            <p>
              Manufacturer product dimensions are frequently ambiguous or misprinted (for example, confusing external package dimensions with internal drawer compartment clearance).
            </p>
            <p className="mt-3">
              Our editorial desk cross-checks manufacturer engineering schematics, verifies interior versus exterior widths, and accounts for mechanical hardware (such as sliding ball-bearing rails and mounting bracket flanges).
            </p>
          </div>

          <div className="pt-6 border-t border-[#EFECE6]">
            <h2 className="font-serif text-2xl font-semibold text-[#2C3531] mb-3">
              3. Commercial Integrity & Zero Sponsored Bias
            </h2>
            <p>
              We never accept money, complimentary gifts, or free samples in exchange for positive reviews or favored placements. If a manufacturer approaches us offering payment to feature an item in our guides, we decline.
            </p>
          </div>

          <div className="pt-6 border-t border-[#EFECE6]">
            <h2 className="font-serif text-2xl font-semibold text-[#2C3531] mb-3">
              4. Handling Errors & Outdated Listings
            </h2>
            <p>
              Manufacturers periodically modify item dimensions or discontinue specific models. If you identify an outdated specification, broken link, or unavailable Amazon listing, please notify our editorial desk at <a href="mailto:editorial@sageandshelf.com" className="text-[#C86D51] underline">editorial@sageandshelf.com</a>. We aim to review and correct reports within 48 business hours.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
