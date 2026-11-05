import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, X } from "lucide-react";

export function AnnouncementStrip() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      ref={(el) => {
        if (el) {
          el.style.setProperty("border-radius", "0px", "important");
          el.style.setProperty("border-top-left-radius", "0px", "important");
          el.style.setProperty("border-top-right-radius", "0px", "important");
          el.style.setProperty("border-bottom-left-radius", "0px", "important");
          el.style.setProperty("border-bottom-right-radius", "0px", "important");
        }
      }}
      className="w-full bg-[#EFECE6] border-b border-[#E5E1D8] text-[#2C3531] text-[11px] sm:text-xs py-2 px-4 transition-all rounded-none"
      style={{
        borderRadius: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        WebkitBorderTopLeftRadius: 0,
      }}
    >
      <div
        ref={(el) => {
          if (el) {
            el.style.setProperty("border-radius", "0px", "important");
            el.style.setProperty("border-top-left-radius", "0px", "important");
            el.style.setProperty("border-top-right-radius", "0px", "important");
          }
        }}
        className="max-w-7xl mx-auto flex items-center justify-between gap-4 rounded-none"
        style={{ borderRadius: 0, borderTopLeftRadius: 0 }}
      >
        <div className="flex-1 flex items-center justify-center gap-2 text-center">
          <span className="font-serif italic text-[#7A8C7D] hidden sm:inline">Sage & Shelf Editorial:</span>
          <span>Helping you create a more organized kitchen, one smart measurement at a time.</span>
          <Link
            to="/calculators"
            className="font-semibold text-[#C86D51] hover:underline underline-offset-2 ml-1 hidden md:inline"
          >
            Try Our Free Space Calculators &rarr;
          </Link>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-[#2C3531]/40 hover:text-[#2C3531] p-0.5 rounded transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
