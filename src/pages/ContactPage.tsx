import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Clock, MapPin, Copy, Check } from "lucide-react";

export function ContactPage() {
  const [copied, setCopied] = useState(false);
  const editorialEmail = "editorial@sageandshelf.com";

  const handleCopy = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(editorialEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] pb-24">
      <header className="bg-white border-b border-[#EFECE6] pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-[#2C3531]/60 mb-4">
            <Link to="/" className="hover:text-[#7A8C7D] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#2C3531] font-medium">Contact Us</span>
          </div>

          <span className="text-xs font-semibold text-[#7A8C7D] uppercase tracking-wider block mb-1">
            Get In Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2C3531] tracking-tight">
            Contact the Editorial Team
          </h1>
          <p className="text-base sm:text-lg text-[#2C3531]/80 mt-3 leading-relaxed max-w-2xl">
            Have a question about kitchen drawer dimensions, feedback on one of our calculators, or an editorial correction? We welcome your input.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Direct Email Card */}
          <div className="bg-white rounded-2xl border border-[#EFECE6] p-8 shadow-2xs space-y-6">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EBF0EC] text-[#58685B] flex items-center justify-center mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-[#2C3531]">
                Direct Editorial Inquiries
              </h2>
              <p className="text-xs md:text-sm text-[#2C3531]/75 mt-2 leading-relaxed">
                We prefer direct email communication to ensure all inquiries receive thoughtful attention without automated ticket queues.
              </p>
            </div>

            <div className="p-4 bg-[#F9F8F6] rounded-xl border border-[#EFECE6] flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[11px] text-[#2C3531]/60 block">Editorial Desk:</span>
                <span className="text-xs sm:text-sm font-mono font-semibold text-[#2C3531] truncate block">
                  {editorialEmail}
                </span>
              </div>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#58685B] bg-white border border-[#EFECE6] hover:bg-[#EBF0EC] rounded-lg transition-colors cursor-pointer shrink-0"
                title="Copy email address"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#7A8C7D]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <a
              href={`mailto:${editorialEmail}?subject=Sage%20%26%20Shelf%20Editorial%20Inquiry`}
              className="block text-center w-full py-3 px-4 bg-[#7A8C7D] hover:bg-[#58685B] text-white text-xs font-semibold rounded-xl transition-colors shadow-xs"
            >
              Open in Default Email Client &rarr;
            </a>
          </div>

          {/* Operational Hours & Guidelines */}
          <div className="bg-white rounded-2xl border border-[#EFECE6] p-8 shadow-2xs space-y-6">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F9F8F6] text-[#7A8C7D] flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-[#2C3531]">
                Editorial Desk Hours
              </h2>
              <p className="text-xs md:text-sm text-[#2C3531]/75 mt-2 leading-relaxed">
                Our editorial team operates Monday through Friday, 9:00 AM – 5:00 PM Eastern Standard Time.
              </p>
            </div>

            <div className="space-y-3 text-xs text-[#2C3531]/80">
              <div className="p-3 bg-[#F9F8F6] rounded-xl border border-[#EFECE6]">
                <strong className="block text-[#2C3531] mb-0.5">Corrections & Updates</strong>
                <span>If you spot an outdated measurement or broken link, please include the URL in your email.</span>
              </div>
              <div className="p-3 bg-[#F9F8F6] rounded-xl border border-[#EFECE6]">
                <strong className="block text-[#2C3531] mb-0.5">Product Submissions</strong>
                <span>We do not accept paid reviews or promotional placements. All products are curated independently.</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
