import React from "react";
import { Link } from "react-router-dom";
import { Info } from "lucide-react";

export function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] pb-24">
      <header className="bg-white border-b border-[#EFECE6] pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-[#2C3531]/60 mb-4">
            <Link to="/" className="hover:text-[#7A8C7D] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#2C3531] font-medium">Cookie Policy</span>
          </div>

          <span className="text-xs font-semibold text-[#7A8C7D] uppercase tracking-wider block mb-1">
            Browser Storage
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2C3531] tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-xs text-[#2C3531]/60 mt-2">
            Last updated: November 5, 2026
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12">
        <div className="bg-white rounded-2xl border border-[#EFECE6] p-8 md:p-12 space-y-8 text-sm md:text-base leading-relaxed text-[#2C3531]/85 shadow-2xs">
          <div className="p-4 bg-[#EBF0EC]/60 border border-[#7A8C7D]/30 rounded-xl text-xs text-[#58685B] flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#7A8C7D] shrink-0 mt-0.5" />
            <span>
              <strong>Owner Notice:</strong> This Cookie Policy accurately describes the current static architecture of Sage & Shelf. When connecting third-party analytics (like Google Analytics) or advertising pixels in production, the site operator must update this document and obtain local legal review.
            </span>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#2C3531] mb-3">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files placed on your computer or mobile device by websites that you visit. They are widely used to make websites function efficiently and provide reporting information.
            </p>
          </div>

          <div className="pt-6 border-t border-[#EFECE6]">
            <h2 className="font-serif text-2xl font-semibold text-[#2C3531] mb-3">
              2. Technologies Implemented on Sage & Shelf
            </h2>
            <p>
              Sage & Shelf does not currently deploy first-party marketing cookies, cross-site trackers, or invasive session recorders.
            </p>
            <ul className="mt-3 space-y-2 text-xs md:text-sm pl-2">
              <li>
                <strong>Client-Side Local Storage:</strong> Temporary browser storage may be used locally to store dismissed announcement banners or calculator inputs so your screen does not reset upon refresh.
              </li>
              <li>
                <strong>Third-Party Outbound Links:</strong> Clicking an Amazon affiliate link passes our tracking code to Amazon.com. Amazon uses cookies on their domain to record qualifying referral sales in accordance with Amazon's own cookie policy.
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-[#EFECE6]">
            <h2 className="font-serif text-2xl font-semibold text-[#2C3531] mb-3">
              3. Managing Cookies
            </h2>
            <p>
              You can control and manage cookies through your web browser settings. Most browsers allow you to block or delete cookies. Note that blocking all cookies may impact functionality on external merchant sites like Amazon.com.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
