import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Ruler, Sparkles, ShieldCheck } from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] pb-24">
      <header className="bg-white border-b border-[#EFECE6] pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-[#2C3531]/60 mb-4">
            <Link to="/" className="hover:text-[#7A8C7D] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#2C3531] font-medium">About Sage & Shelf</span>
          </div>

          <span className="text-xs font-semibold text-[#7A8C7D] uppercase tracking-wider block mb-1">
            Our Mission & Philosophy
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2C3531] tracking-tight">
            Thoughtful Spaces. Beautifully Organized.
          </h1>
          <p className="text-base sm:text-lg text-[#2C3531]/80 mt-4 leading-relaxed max-w-2xl">
            Sage & Shelf is an independent home organization publication created to bridge the gap between high-end aesthetic inspiration and practical everyday kitchen reality.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12">
        <div className="bg-white rounded-2xl border border-[#EFECE6] p-8 md:p-12 space-y-8 text-sm md:text-base leading-relaxed text-[#2C3531]/85 shadow-2xs">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#2C3531] mb-3">
              Why We Started Sage & Shelf
            </h2>
            <p>
              Most kitchen organization content on the internet falls into one of two extremes: either expensive luxury custom cabinetry that requires tens of thousands of dollars, or generic listicles filled with low-quality plastic gadgets that crack or don't fit inside standard American cabinetry.
            </p>
            <p className="mt-3">
              We started Sage & Shelf with a simple conviction: <strong>true organization begins with measurement, not shopping</strong>. A $25 bamboo drawer divider that fits your drawer within an eighth of an inch brings more daily peace of mind than a messy closet full of mismatched containers.
            </p>
          </div>

          <div className="pt-6 border-t border-[#EFECE6]">
            <h2 className="font-serif text-2xl font-semibold text-[#2C3531] mb-4">
              Our 4 Editorial Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm">
              <div className="p-4 bg-[#F9F8F6] rounded-xl border border-[#EFECE6]">
                <div className="flex items-center gap-2 font-semibold text-[#58685B] mb-1">
                  <Ruler className="w-4 h-4 text-[#7A8C7D]" />
                  <span>1. Measurements Come First</span>
                </div>
                <p className="text-[#2C3531]/75 leading-relaxed">
                  Every guide we publish emphasizes interior drawer box dimensions, plumbing P-trap clearances, and shelf depths before product links.
                </p>
              </div>

              <div className="p-4 bg-[#F9F8F6] rounded-xl border border-[#EFECE6]">
                <div className="flex items-center gap-2 font-semibold text-[#58685B] mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#7A8C7D]" />
                  <span>2. Renter-Friendly Sensitivity</span>
                </div>
                <p className="text-[#2C3531]/75 leading-relaxed">
                  Over a third of American households rent. We prominently verify whether organizers require drilling into cabinetry or utilize non-marring tension and freestanding designs.
                </p>
              </div>

              <div className="p-4 bg-[#F9F8F6] rounded-xl border border-[#EFECE6]">
                <div className="flex items-center gap-2 font-semibold text-[#58685B] mb-1">
                  <Sparkles className="w-4 h-4 text-[#7A8C7D]" />
                  <span>3. Tactile Natural Materials</span>
                </div>
                <p className="text-[#2C3531]/75 leading-relaxed">
                  We champion durable materials like renewable Moso bamboo, heavy-gauge steel wire, and food-grade glass canisters over flimsy single-use plastics.
                </p>
              </div>

              <div className="p-4 bg-[#F9F8F6] rounded-xl border border-[#EFECE6]">
                <div className="flex items-center gap-2 font-semibold text-[#58685B] mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#7A8C7D]" />
                  <span>4. Complete Commercial Transparency</span>
                </div>
                <p className="text-[#2C3531]/75 leading-relaxed">
                  We clearly disclose our affiliate relationships. We never fabricate user reviews, artificial star ratings, or misleading discount claims.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#EFECE6]">
            <h2 className="font-serif text-2xl font-semibold text-[#2C3531] mb-3">
              Editorial Accountability
            </h2>
            <p>
              Sage & Shelf is supported by affiliate commissions on qualifying Amazon purchases made through our recommendation links. These commissions allow us to build and maintain our free measurement calculators and keep our articles free of paywalls and intrusive banner popups.
            </p>
            <p className="mt-3">
              Read our full <Link to="/editorial-policy" className="text-[#C86D51] underline font-medium">Editorial Policy</Link> and <Link to="/affiliate-disclosure" className="text-[#C86D51] underline font-medium">Affiliate Disclosure</Link> to learn more about how we curate products and maintain editorial independence.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
