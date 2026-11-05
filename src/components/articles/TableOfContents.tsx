import React, { useState } from "react";
import { ArticleHeading } from "../../types";
import { ListOrdered, ChevronDown, ChevronUp } from "lucide-react";

interface TableOfContentsProps {
  headings: ArticleHeading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  if (!headings || headings.length === 0) return null;

  return (
    <div className="bg-[#FFFFFF] border border-[#EFECE6] rounded-xl p-5 shadow-2xs my-6 md:my-0">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-bold uppercase tracking-wider text-[#58685B] flex items-center gap-2">
          <ListOrdered className="w-4 h-4 text-[#7A8C7D]" />
          <span>In This Guide</span>
        </h4>

        {/* Mobile toggle button */}
        <button
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="md:hidden text-xs text-[#2C3531]/70 flex items-center gap-1 py-1 px-2 rounded-md hover:bg-[#F9F8F6]"
        >
          <span>{isOpenMobile ? "Hide" : "Show"}</span>
          {isOpenMobile ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Headings list */}
      <nav className={`mt-3 space-y-1 text-xs ${isOpenMobile ? "block" : "hidden md:block"}`}>
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className="block py-1.5 text-[#2C3531]/80 hover:text-[#C86D51] transition-colors leading-snug pl-1 border-l-2 border-transparent hover:border-[#7A8C7D]"
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
