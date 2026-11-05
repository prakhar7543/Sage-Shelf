import React from "react";
import { Check, X } from "lucide-react";

interface ProsConsProps {
  pros: string[];
  cons: string[];
}

export function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Pros Box */}
      <div className="bg-[#EBF0EC]/60 border border-[#7A8C7D]/30 rounded-xl p-5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#58685B] mb-3 flex items-center gap-1.5">
          <Check className="w-4 h-4 text-[#7A8C7D]" />
          <span>What We Love</span>
        </h4>
        <ul className="space-y-2 text-xs md:text-sm text-[#2C3531]">
          {pros.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-[#7A8C7D] font-bold mt-0.5">•</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cons Box */}
      <div className="bg-[#FBEBE7]/60 border border-[#C86D51]/30 rounded-xl p-5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#C86D51] mb-3 flex items-center gap-1.5">
          <X className="w-4 h-4 text-[#C86D51]" />
          <span>Keep In Mind</span>
        </h4>
        <ul className="space-y-2 text-xs md:text-sm text-[#2C3531]">
          {cons.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-[#C86D51] font-bold mt-0.5">•</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
