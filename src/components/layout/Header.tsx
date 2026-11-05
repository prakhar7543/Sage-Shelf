import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { SearchModal } from "../search/SearchModal";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/category/kitchen-drawers", label: "Kitchen Drawers" },
    { href: "/category/under-sink", label: "Under-Sink" },
    { href: "/category/pantry", label: "Pantry" },
    { href: "/articles", label: "Guides" },
    { href: "/calculators", label: "Calculators" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className="sticky top-0 z-40 bg-[#FFFFFF] border-b border-[#EFECE6] transition-all !rounded-none !rounded-tl-none !rounded-tr-none !rounded-bl-none !rounded-br-none"
        style={{
          borderRadius: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          WebkitBorderTopLeftRadius: 0,
        }}
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 !rounded-none !rounded-tl-none"
          style={{ borderRadius: 0, borderTopLeftRadius: 0 }}
        >
          <div
            className="flex items-center justify-between gap-3 sm:gap-4 lg:gap-6 xl:gap-8 h-16 sm:h-18 !rounded-none !rounded-tl-none"
            style={{ borderRadius: 0, borderTopLeftRadius: 0 }}
          >
            {/* Zone 1: Single text element wordmark (Display face, no badges or subtitle tags) */}
            <Link
              to="/"
              className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#2C3531] whitespace-nowrap shrink-0 hover:text-[#58685B] transition-colors rounded-none"
            >
              Sage & Shelf
            </Link>

            {/* Zone 2: 4-5 clean single-line text navigation links (hidden on tablet portrait & mobile, visible on desktop/landscape lg+) */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-7 text-xs xl:text-sm font-medium text-[#2C3531]/80 shrink min-w-0">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`hover:text-[#2C3531] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                    isActive(link.href)
                      ? "border-[#7A8C7D] text-[#2C3531] font-semibold"
                      : "border-transparent text-[#2C3531]/75"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Zone 3: 1 primary action or search trigger + responsive tablet/mobile menu */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-1.5 sm:gap-2 py-2 px-2.5 sm:px-3.5 text-xs font-medium text-[#2C3531]/80 bg-[#F9F8F6] hover:bg-[#EFECE6] hover:text-[#2C3531] border border-[#EFECE6] rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0"
                aria-label="Search guides and products"
              >
                <Search className="w-3.5 h-3.5 text-[#7A8C7D]" />
                <span className="hidden xs:inline sm:inline">Search...</span>
              </button>

              {/* Tablet & Mobile Hamburger Toggle (visible up to lg) */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-[#2C3531]/70 hover:text-[#2C3531] rounded-lg hover:bg-[#F9F8F6] transition-colors cursor-pointer shrink-0"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Tablet & Mobile Dropdown Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[#EFECE6] bg-[#FFFFFF] px-4 pt-3 pb-6 space-y-1 shadow-lg rounded-none">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2.5 px-3 rounded-lg text-sm font-medium ${
                  isActive(link.href)
                    ? "bg-[#EBF0EC] text-[#58685B] font-semibold"
                    : "text-[#2C3531]/80 hover:bg-[#F9F8F6]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-[#EFECE6] mt-2 space-y-1">
              <Link
                to="/compare"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 px-3 text-xs text-[#2C3531]/70 hover:text-[#2C3531]"
              >
                Product Comparison Matrix
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 px-3 text-xs text-[#2C3531]/70 hover:text-[#2C3531]"
              >
                About Sage & Shelf
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Client-Side Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
