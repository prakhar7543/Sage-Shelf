import React, { useState } from "react";
import { FAQItem } from "../../types";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQSectionProps {
  faqs: FAQItem[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="my-12 pt-8 border-t border-[#EFECE6]">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7A8C7D] mb-2">
        <HelpCircle className="w-4 h-4 text-[#7A8C7D]" />
        <span>Expert Guidance</span>
      </div>
      <h3 className="font-serif text-2xl font-semibold text-[#2C3531] mb-6">
        Frequently Asked Questions
      </h3>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div
              key={idx}
              className="border border-[#EFECE6] rounded-xl overflow-hidden bg-white transition-all"
            >
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-serif text-sm md:text-base font-semibold text-[#2C3531] hover:text-[#58685B] transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#7A8C7D] shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-[#2C3531]/80 leading-relaxed border-t border-[#EFECE6]/50">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
