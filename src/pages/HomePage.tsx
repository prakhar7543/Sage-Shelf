import React from "react";
import { Link } from "react-router-dom";
import categoriesData from "../data/categories.json";
import articlesData from "../data/articles.json";
import productsData from "../data/products.json";
import { CategoryData, Article, Product } from "../types";
import { AmazonButton } from "../components/articles/AmazonButton";
import { ArrowRight, Ruler, Wrench, Package, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";

export function HomePage() {
  const categories: CategoryData[] = categoriesData as CategoryData[];
  const articles: Article[] = articlesData as Article[];
  const products: Product[] = productsData as Product[];

  // 3 featured editor's pick products (one from each category)
  const editorsPicks = [
    products.find((p) => p.id === "bamboo-expandable-organizer-01")!,
    products.find((p) => p.id === "two-tier-sliding-undersink-04")!,
    products.find((p) => p.id === "airtight-food-canister-set-07")!,
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-[#F9F8F6]">
      {/* ------------------------------------------------------------- */}
      {/* C. HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#EFECE6] bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Editorial Headline & Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center text-xs text-[#7A8C7D] font-semibold tracking-wider uppercase">
                <span>Editorial Home Storage</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2C3531] tracking-tight leading-[1.1] text-balance">
                Make Room for a More Organized Kitchen.
              </h1>

              <p className="text-base sm:text-lg text-[#2C3531]/80 leading-relaxed max-w-xl">
                Thoughtful storage ideas, practical organizing guides, and carefully selected products to help you make the most of every kitchen space.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#categories"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#7A8C7D] hover:bg-[#58685B] text-white text-xs font-semibold rounded-xl shadow-xs transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>Explore Organization Ideas</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  to="/calculators"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F9F8F6] hover:bg-[#EFECE6] text-[#2C3531] border border-[#EFECE6] text-xs font-semibold rounded-xl transition-colors whitespace-nowrap"
                >
                  <span>Find Your Storage Solution</span>
                </Link>
              </div>

              {/* Editorial Quality Markers */}
              <div className="pt-6 border-t border-[#EFECE6] grid grid-cols-3 gap-4 text-xs text-[#2C3531]/70">
                <div>
                  <strong className="block font-semibold text-[#2C3531]">Exact Dimensions</strong>
                  <span>Tested interior fits</span>
                </div>
                <div>
                  <strong className="block font-semibold text-[#2C3531]">Renter Friendly</strong>
                  <span>Zero drill damage</span>
                </div>
                <div>
                  <strong className="block font-semibold text-[#2C3531]">Plumbing Aware</strong>
                  <span>P-trap clearance</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Lifestyle Imagery */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-sm border border-[#EFECE6] bg-[#F9F8F6]">
                <img
                  src="/images/homepage/hero_kitchen.jpg"
                  alt="High-end organized modern kitchen with warm oak cabinetry, marble countertops and glass storage jars"
                  className="w-full h-[360px] sm:h-[460px] lg:h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-[#EFECE6]/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#7A8C7D]" />
                    <span className="font-serif italic font-medium text-[#2C3531]">
                      "Thoughtful Spaces. Beautifully Organized."
                    </span>
                  </div>
                  <span className="text-[11px] text-[#2C3531]/60 font-sans hidden sm:inline">
                    Sage & Shelf Editorial
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* D. THREE MAIN CATEGORY CARDS */}
      {/* ------------------------------------------------------------- */}
      <section id="categories" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-[#7A8C7D] uppercase tracking-wider block mb-1">
            Focus Areas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2C3531] tracking-tight">
            Three Problem Spaces. Real Solutions.
          </h2>
          <p className="text-xs sm:text-sm text-[#2C3531]/75 mt-3 leading-relaxed">
            Rather than generic home decor, Sage & Shelf focuses exclusively on the three most difficult storage areas in your kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-2xl border border-[#EFECE6] overflow-hidden flex flex-col justify-between hover:border-[#7A8C7D]/40 hover:shadow-sm transition-all"
            >
              <div>
                <div className="aspect-4/3 overflow-hidden bg-[#F9F8F6] relative">
                  <img
                    src={category.heroImage}
                    alt={category.heroImageAlt}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#58685B] text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-2xs">
                    {category.name}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-[#2C3531] group-hover:text-[#58685B] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs md:text-sm text-[#2C3531]/75 mt-2 line-clamp-3 leading-relaxed">
                    {category.heroDescription}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[#EFECE6] space-y-1.5 text-xs text-[#2C3531]/70">
                    <span className="font-semibold text-[#2C3531] block mb-1 text-[11px] uppercase tracking-wider">
                      Key Highlights:
                    </span>
                    {category.keyProblemsSolved.slice(0, 2).map((prob, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 leading-snug">
                        <span className="text-[#7A8C7D] mt-0.5">•</span>
                        <span className="line-clamp-1">{prob}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/category/${category.slug}`}
                  className="inline-flex items-center justify-between w-full py-2.5 px-4 bg-[#F9F8F6] hover:bg-[#EBF0EC] text-[#2C3531] group-hover:text-[#58685B] text-xs font-semibold rounded-xl border border-[#EFECE6] transition-colors"
                >
                  <span>Explore {category.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#7A8C7D]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* E. FEATURED ORGANIZATION GUIDES */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-[#FFFFFF] border-y border-[#EFECE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold text-[#7A8C7D] uppercase tracking-wider block mb-1">
                From The Editors
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2C3531] tracking-tight">
                Featured Organization Guides
              </h2>
              <p className="text-xs sm:text-sm text-[#2C3531]/75 mt-2">
                In-depth blueprints with realistic measurements, zoning techniques, and step-by-step methods.
              </p>
            </div>
            <Link
              to="/articles"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7A8C7D] hover:text-[#58685B] transition-colors shrink-0"
            >
              <span>View All Guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col justify-between bg-[#F9F8F6] rounded-2xl border border-[#EFECE6] overflow-hidden hover:border-[#7A8C7D]/40 hover:shadow-sm transition-all"
              >
                <div>
                  <Link to={`/articles/${article.slug}`} className="block aspect-16/10 overflow-hidden bg-white">
                    <img
                      src={article.featuredImage}
                      alt={article.featuredImageAlt}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[#7A8C7D] font-medium mb-2">
                      <span>{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readingTime} min read</span>
                    </div>

                    <Link to={`/articles/${article.slug}`}>
                      <h3 className="font-serif text-lg md:text-xl font-semibold text-[#2C3531] group-hover:text-[#58685B] transition-colors leading-snug">
                        {article.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-[#2C3531]/75 mt-3 line-clamp-2 leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#EFECE6] flex items-center justify-between text-xs text-[#2C3531]/60">
                  <span>By {article.author}</span>
                  <Link
                    to={`/articles/${article.slug}`}
                    className="font-semibold text-[#C86D51] hover:underline"
                  >
                    Read Guide &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* F. SHOP SMART / EDITOR'S PICKS */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-[#C86D51] uppercase tracking-wider block mb-1">
            Curated Recommendations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2C3531] tracking-tight">
            Shop Smart: Editor's Tested Storage Picks
          </h2>
          <p className="text-xs sm:text-sm text-[#2C3531]/75 mt-3 leading-relaxed">
            Practical organizers selected for durability, renter-friendly compatibility, and verified dimensional standards. No fabricated reviews or fake discounts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {editorsPicks.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-[#EFECE6] p-6 flex flex-col justify-between shadow-2xs hover:border-[#7A8C7D]/40 transition-all"
            >
              <div>
                <div className="aspect-4/3 rounded-xl overflow-hidden bg-[#F9F8F6] border border-[#EFECE6] mb-4">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] text-[#7A8C7D] font-medium uppercase tracking-wider">
                    {product.category}
                  </span>
                  {product.renterFriendly && (
                    <span className="text-[10px] text-[#58685B] bg-[#EBF0EC] px-2 py-0.5 rounded-full font-medium">
                      Renter Safe
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-base font-semibold text-[#2C3531] line-clamp-2 leading-snug">
                  {product.name}
                </h3>

                <p className="text-xs text-[#2C3531]/75 mt-2 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                <div className="my-4 p-3 bg-[#F9F8F6] rounded-xl text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-[#2C3531]/60">Best For:</span>
                    <span className="font-medium text-[#2C3531] truncate max-w-[160px]">{product.bestFor}</span>
                  </div>
                  <div className="flex justify-between font-mono tabular-nums">
                    <span className="text-[#2C3531]/60 font-sans">Dimensions:</span>
                    <span className="font-semibold text-[#2C3531]">{product.dimensions.width}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#EFECE6]">
                <AmazonButton url={product.amazonUrl} className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* G. MEASUREMENT TOOLS SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 bg-[#FFFFFF] border-y border-[#EFECE6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 text-xs text-[#7A8C7D] font-semibold tracking-wider uppercase mb-1">
              <Ruler className="w-4 h-4" />
              <span>Browser-Based Calculators</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2C3531] tracking-tight">
              Measure First. Organize Smarter.
            </h2>
            <p className="text-xs sm:text-sm text-[#2C3531]/75 mt-3 leading-relaxed">
              Never buy a storage organizer that doesn't fit. Use our three free planning tools to compute square inches, plumbing clearances, and container capacities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Drawer Tool Card */}
            <div className="p-6 rounded-2xl bg-[#F9F8F6] border border-[#EFECE6] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF0EC] text-[#58685B] flex items-center justify-center mb-4">
                  <Ruler className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#2C3531] mb-2">
                  Kitchen Drawer Calculator
                </h3>
                <p className="text-xs text-[#2C3531]/80 leading-relaxed mb-4">
                  Calculates internal footprint in square inches and recommends maximum expandable cutlery tray and tension divider dimensions.
                </p>
              </div>
              <Link
                to="/calculators"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#58685B] hover:text-[#2C3531] transition-colors"
              >
                <span>Launch Drawer Tool &rarr;</span>
              </Link>
            </div>

            {/* Under-Sink Tool Card */}
            <div className="p-6 rounded-2xl bg-[#F9F8F6] border border-[#EFECE6] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FBEBE7] text-[#C86D51] flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#2C3531] mb-2">
                  Under-Sink Space Calculator
                </h3>
                <p className="text-xs text-[#2C3531]/80 leading-relaxed mb-4">
                  Accounts for garbage disposals and P-trap drain lines to calculate remaining side-flank clearances for two-tier sliding caddies.
                </p>
              </div>
              <Link
                to="/calculators"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#C86D51] hover:text-[#B55C41] transition-colors"
              >
                <span>Launch Plumbing Tool &rarr;</span>
              </Link>
            </div>

            {/* Pantry Tool Card */}
            <div className="p-6 rounded-2xl bg-[#F9F8F6] border border-[#EFECE6] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#EBF0EC] text-[#58685B] flex items-center justify-center mb-4">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#2C3531] mb-2">
                  Pantry Shelf & Container Fit
                </h3>
                <p className="text-xs text-[#2C3531]/80 leading-relaxed mb-4">
                  Simulates top-down shelf footprint arrangements for modular decanting canisters, canned soup risers, and turntable clearances.
                </p>
              </div>
              <Link
                to="/calculators"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#58685B] hover:text-[#2C3531] transition-colors"
              >
                <span>Launch Pantry Tool &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* I. ORGANIZATION INSPIRATION: BEFORE & AFTER */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold text-[#7A8C7D] uppercase tracking-wider block mb-1">
            Real Transformations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#2C3531] tracking-tight">
            The Power of Intentional Zoning
          </h2>
          <p className="text-xs sm:text-sm text-[#2C3531]/75 mt-3 leading-relaxed">
            See how small spatial adjustments create high-efficiency kitchens that stay neat month after month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-[#EFECE6] shadow-2xs">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs text-[#58685B] font-semibold mb-3">
              <Sparkles className="w-4 h-4 text-[#7A8C7D]" />
              <span>Case Study: Cutlery & Prep Tool Separation</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#2C3531] mb-3">
              From Jammed Flatware to 8 Dedicated Zones
            </h3>
            <p className="text-xs sm:text-sm text-[#2C3531]/80 leading-relaxed mb-4">
              By replacing a generic 4-slot plastic tray with an expandable bamboo organizer, this homeowner gained 6 inches of usable width, added slots for steak knives, and eliminated drawer-track jamming forever.
            </p>
            <ul className="space-y-2 text-xs text-[#2C3531]/80 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7A8C7D]" />
                <span>Zero screw holes or drawer modifications needed</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7A8C7D]" />
                <span>Dishwasher unloading time reduced by 50%</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7A8C7D]" />
                <span>Organic bamboo dampens metal silverware clatter</span>
              </li>
            </ul>
            <Link
              to="/articles/kitchen-drawer-organization"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#C86D51] hover:underline"
            >
              <span>Read the Full Drawer Organization Guide &rarr;</span>
            </Link>
          </div>

          <div className="rounded-xl overflow-hidden border border-[#EFECE6] shadow-xs">
            <img
              src="/images/categories/kitchen_drawers.jpg"
              alt="Beautifully organized kitchen drawer with natural bamboo dividers"
              className="w-full h-auto object-cover max-h-[380px]"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
