import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] pb-24">
      <header className="bg-white border-b border-[#EFECE6] pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-[#2C3531]/60 mb-4">
            <Link to="/" className="hover:text-[#7A8C7D] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#2C3531] font-medium">Privacy Policy</span>
          </div>

          <span className="text-xs font-semibold text-[#7A8C7D] uppercase tracking-wider block mb-1">
            Data Governance
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2C3531] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#2C3531]/60 mt-2">
            Last updated: November 5, 2026
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12">
        <div className="bg-white rounded-2xl border border-[#EFECE6] p-8 md:p-12 space-y-8 text-sm md:text-base leading-relaxed text-[#2C3531]/85 shadow-2xs">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-[#2C3531] mb-3">
              1. Overview & Data Minimization
            </h2>
            <p>
              Sage & Shelf is a static editorial website. We do not require user accounts, passwords, email newsletter registrations, payment processing, or personal data collection.
            </p>
            <p className="mt-3">
              All measurement calculators (Kitchen Drawer, Under-Sink, and Pantry tools) execute <strong>100% client-side inside your browser</strong>. Your entered cabinet dimensions are never transmitted to our servers or saved to any database.
            </p>
          </div>

          <div className="pt-6 border-t border-[#EFECE6]">
            <h2 className="font-serif text-2xl font-semibold text-[#2C3531] mb-3">
              2. Third-Party Links & Amazon Associates
            </h2>
            <p>
              Our website contains links to Amazon.com. When you click an Amazon link, you leave Sage & Shelf and enter Amazon's platform. Amazon's privacy policy and terms of service govern your interactions, browsing data, and purchases on Amazon.com. We do not receive, store, or have access to your personal Amazon payment details, address, or credit card numbers.
            </p>
          </div>

          <div className="pt-6 border-t border-[#EFECE6]">
            <h2 className="font-serif text-2xl font-semibold text-[#2C3531] mb-3">
              3. Server Logs & Hosting
            </h2>
            <p>
              When you load web pages on Sage & Shelf, standard non-identifying server request headers (such as IP address, browser type, referring URL, and timestamp) may be logged by our content delivery network (Cloudflare Pages) strictly for performance caching and DDoS security protection.
            </p>
          </div>

          <div className="pt-6 border-t border-[#EFECE6]">
            <h2 className="font-serif text-2xl font-semibold text-[#2C3531] mb-3">
              4. Contact Regarding Privacy
            </h2>
            <p>
              If you have any questions about our privacy practices, please contact us at <a href="mailto:privacy@sageandshelf.com" className="text-[#C86D51] underline">privacy@sageandshelf.com</a>.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
