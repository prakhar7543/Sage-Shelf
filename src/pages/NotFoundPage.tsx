import React from "react";
import { Link } from "react-router-dom";
import { Compass, ArrowRight, Home, BookOpen, Ruler } from "lucide-react";

export function NotFoundPage() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#F9F8F6] px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-2xl border border-[#EFECE6] p-8 text-center shadow-xs">
        <div className="w-14 h-14 rounded-2xl bg-[#EBF0EC] text-[#58685B] flex items-center justify-center mx-auto mb-4">
          <Compass className="w-7 h-7" />
        </div>

        <span className="text-xs font-mono font-semibold text-[#7A8C7D] uppercase tracking-wider block mb-1">
          404 · Page Not Found
        </span>

        <h1 className="font-serif text-3xl font-semibold text-[#2C3531] mb-2">
          Space Unaccounted For
        </h1>

        <p className="text-xs md:text-sm text-[#2C3531]/75 leading-relaxed mb-6">
          The page or kitchen guide you are searching for may have been relocated, renamed, or does not exist.
        </p>

        <div className="space-y-2 mb-6 text-left">
          <Link
            to="/"
            className="flex items-center justify-between p-3 rounded-xl border border-[#EFECE6] bg-[#F9F8F6] hover:bg-[#EBF0EC] text-xs font-medium text-[#2C3531] transition-colors"
          >
            <span className="flex items-center gap-2">
              <Home className="w-4 h-4 text-[#7A8C7D]" />
              Return to Homepage
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2C3531]/40" />
          </Link>

          <Link
            to="/articles"
            className="flex items-center justify-between p-3 rounded-xl border border-[#EFECE6] bg-[#F9F8F6] hover:bg-[#EBF0EC] text-xs font-medium text-[#2C3531] transition-colors"
          >
            <span className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#7A8C7D]" />
              Browse All Organization Guides
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2C3531]/40" />
          </Link>

          <Link
            to="/calculators"
            className="flex items-center justify-between p-3 rounded-xl border border-[#EFECE6] bg-[#F9F8F6] hover:bg-[#EBF0EC] text-xs font-medium text-[#2C3531] transition-colors"
          >
            <span className="flex items-center gap-2">
              <Ruler className="w-4 h-4 text-[#7A8C7D]" />
              Kitchen Measurement Calculators
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2C3531]/40" />
          </Link>
        </div>

        <Link
          to="/"
          className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-[#7A8C7D] hover:bg-[#58685B] text-white text-xs font-semibold rounded-xl transition-colors shadow-xs"
        >
          Back to Sage & Shelf
        </Link>
      </div>
    </div>
  );
}
