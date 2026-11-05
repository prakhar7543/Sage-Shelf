import React from "react";
import { Link } from "react-router-dom";

export function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] pb-24">
      <header className="bg-white border-b border-[#EFECE6] pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-[#2C3531]/60 mb-4">
            <Link to="/" className="hover:text-[#7A8C7D] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#2C3531] font-medium">Terms & Conditions</span>
          </div>

          <span className="text-xs font-semibold text-[#7A8C7D] uppercase tracking-wider block mb-1">
            Legal Terms
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2C3531] tracking-tight">
            Terms of Service
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
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and browsing Sage & Shelf ("the Website"), you agree to be bound by these Terms of Service, applicable laws, and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </div>

          <div className="pt-6 border-t border-[#EFECE6]">
            <h2 className="font-serif text-2xl font-semibold text-[#2C3531] mb-3">
              2. Educational & Informational Purpose
            </h2>
            <p>
              All guides, measurement recommendations, and interactive calculators on Sage & Shelf are provided solely for general educational, editorial, and informational purposes. While we strive for precision in our dimensional analysis, cabinet construction and plumbing layouts vary widely across manufacturers.
            </p>
            <p className="mt-3">
              You are solely responsible for verifying physical dimensions with a steel tape measure before ordering products or altering household cabinetry.
            </p>
          </div>

          <div className="pt-6 border-t border-[#EFECE6]">
            <h2 className="font-serif text-2xl font-semibold text-[#2C3531] mb-3">
              3. Amazon Associates Disclaimer
            </h2>
            <p>
              Sage & Shelf participates in the Amazon Services LLC Associates Program. All product purchases made through Amazon links are transactions conducted directly between you and Amazon.com (or third-party sellers on Amazon). Sage & Shelf is not the seller, manufacturer, or distributor of any physical products.
            </p>
          </div>

          <div className="pt-6 border-t border-[#EFECE6]">
            <h2 className="font-serif text-2xl font-semibold text-[#2C3531] mb-3">
              4. Limitation of Liability
            </h2>
            <p>
              In no event shall Sage & Shelf, its creators, or contributors be liable for any direct, indirect, incidental, or consequential damages arising from the use of our guides, calculators, or linked products.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
