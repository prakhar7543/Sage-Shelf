import React from "react";
import { Link } from "react-router-dom";
import { affiliateConfig } from "../config/affiliate";
import { ShieldCheck, AlertCircle } from "lucide-react";

export function AffiliateDisclosurePage() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] pb-24">
      <header className="bg-white border-b border-[#EFECE6] pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-[#2C3531]/60 mb-4">
            <Link to="/" className="hover:text-[#7A8C7D] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#2C3531] font-medium">Affiliate Disclosure</span>
          </div>

          <span className="text-xs font-semibold text-[#C86D51] uppercase tracking-wider block mb-1">
            FTC & Amazon Associates Compliance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2C3531] tracking-tight">
            Amazon Affiliate Disclosure
          </h1>
          <p className="text-sm md:text-base text-[#2C3531]/80 mt-3 leading-relaxed max-w-2xl">
            Complete transparency regarding our commercial relationships, affiliate commissions, and editorial guidelines.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12">
        <div className="bg-white rounded-2xl border border-[#EFECE6] p-8 md:p-12 space-y-8 text-sm md:text-base leading-relaxed text-[#2C3531]/85 shadow-2xs">
          {/* Statutory Amazon Statement */}
          <div className="p-6 bg-[#F9F8F6] rounded-xl border border-[#EFECE6] space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#58685B]">
              <ShieldCheck className="w-4 h-4 text-[#7A8C7D]" />
              <span>Mandatory Operating Agreement Statement</span>
            </div>
            <p className="font-serif italic text-base md:text-lg text-[#2C3531] font-semibold">
              "{affiliateConfig.shortDisclosure}"
            </p>
            <p className="text-xs text-[#2C3531]/75 pt-2">
              Sage & Shelf is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for websites to earn advertising fees by advertising and linking to Amazon.com.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#2C3531] mb-3">
              How Affiliate Links Work
            </h2>
            <p>
              When you click on a product recommendation link on Sage & Shelf (such as "Check Price on Amazon" or product title hyperlinks), you may be redirected to Amazon.com through an affiliate link containing our unique tracking identifier (Store ID).
            </p>
            <p className="mt-3">
              If you decide to make a purchase on Amazon after clicking one of our links, Amazon pays us a small percentage of the purchase price as an advertising referral commission. <strong>This occurs at absolutely zero extra cost to you.</strong> The price you pay on Amazon is identical whether you use our link or navigate to Amazon directly.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#2C3531] mb-3">
              Pricing and Availability Disclaimers
            </h2>
            <p>
              Product prices, customer ratings, coupon availability, and shipping timelines on Amazon fluctuate frequently based on inventory and third-party seller listings.
            </p>
            <div className="mt-4 p-4 bg-[#FBEBE7]/50 rounded-xl border border-[#C86D51]/30 text-xs text-[#2C3531]/80 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-[#C86D51] shrink-0 mt-0.5" />
              <span>
                {affiliateConfig.disclosureStatement}
              </span>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#2C3531] mb-3">
              Editorial Independence
            </h2>
            <p>
              Our product recommendations are never influenced by manufacturer sponsorship, paid placements, or commission rates. If a product does not meet our dimensional standards, lacks durability, or requires destructive drilling in a rental kitchen, we do not recommend it.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
