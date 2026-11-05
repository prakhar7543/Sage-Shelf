import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site";
import { affiliateConfig } from "../../config/affiliate";

export function Footer() {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#EFECE6] text-[#2C3531] pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#EFECE6]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="text-2xl font-serif font-bold text-[#2C3531] tracking-tight block">
              {siteConfig.name}
            </Link>
            <p className="font-serif italic text-sm text-[#7A8C7D]">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-[#2C3531]/75 leading-relaxed max-w-sm">
              An independent home organization publication dedicated to practical kitchen measurements, intentional storage systems, and honest product recommendations for American homeowners and renters.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-medium text-[#2C3531]/70">
              <a
                href={siteConfig.social.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C86D51] transition-colors"
              >
                Pinterest
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C86D51] transition-colors"
              >
                Instagram
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C86D51] transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#58685B] mb-4">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-[#2C3531]/80">
              <li>
                <Link to="/category/kitchen-drawers" className="hover:text-[#C86D51] transition-colors">
                  Kitchen Drawer Organization
                </Link>
              </li>
              <li>
                <Link to="/category/under-sink" className="hover:text-[#C86D51] transition-colors">
                  Under-Sink Storage
                </Link>
              </li>
              <li>
                <Link to="/category/pantry" className="hover:text-[#C86D51] transition-colors">
                  Pantry Organization
                </Link>
              </li>
              <li>
                <Link to="/articles" className="hover:text-[#C86D51] transition-colors">
                  All Guides & Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Tools & Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#58685B] mb-4">
              Interactive Tools
            </h4>
            <ul className="space-y-2.5 text-xs text-[#2C3531]/80">
              <li>
                <Link to="/calculators" className="hover:text-[#C86D51] transition-colors">
                  Kitchen Space Calculators
                </Link>
              </li>
              <li>
                <Link to="/compare" className="hover:text-[#C86D51] transition-colors">
                  Product Comparison Matrix
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C86D51] transition-colors">
                  About Sage & Shelf
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C86D51] transition-colors">
                  Contact Editorial Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Editorial & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#58685B] mb-4">
              Compliance & Policies
            </h4>
            <ul className="space-y-2.5 text-xs text-[#2C3531]/80">
              <li>
                <Link to="/affiliate-disclosure" className="hover:text-[#C86D51] transition-colors font-medium">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link to="/editorial-policy" className="hover:text-[#C86D51] transition-colors">
                  Editorial & Product Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#C86D51] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#C86D51] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="hover:text-[#C86D51] transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Amazon Associates Disclosure Bar */}
        <div className="pt-8 pb-6 border-b border-[#EFECE6] text-xs text-[#2C3531]/70 leading-relaxed max-w-4xl">
          <p className="font-semibold text-[#2C3531] mb-1">
            Amazon Associates Disclosure:
          </p>
          <p>
            {affiliateConfig.disclosureStatement}
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#2C3531]/60">
          <div>
            &copy; {new Date().getFullYear()} Sage & Shelf. All rights reserved. Thoughtful spaces. Beautifully organized.
          </div>
          <div className="flex items-center gap-3">
            <span>Built for US Kitchen Storage</span>
            <span aria-hidden="true">·</span>
            <Link to="/affiliate-disclosure" className="underline underline-offset-2 hover:text-[#2C3531]">
              FTC Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
