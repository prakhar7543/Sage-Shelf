import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import categoriesData from "../data/categories.json";
import articlesData from "../data/articles.json";
import productsData from "../data/products.json";
import { CategoryData, Article, Product } from "../types";
import { ProductCard } from "../components/articles/ProductCard";
import { KitchenDrawerCalculator } from "../components/calculators/KitchenDrawerCalculator";
import { UnderSinkCalculator } from "../components/calculators/UnderSinkCalculator";
import { PantryShelfCalculator } from "../components/calculators/PantryShelfCalculator";
import { ProductComparisonTool } from "../components/comparison/ProductComparisonTool";
import { ArrowRight, Ruler, CheckCircle2, ShieldCheck, ChevronRight } from "lucide-react";

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const categories: CategoryData[] = categoriesData as CategoryData[];
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return <Navigate to="/404" replace />;
  }

  const allArticles: Article[] = articlesData as Article[];
  const categoryArticles = allArticles.filter((a) => a.categorySlug === category.slug);

  const allProducts: Product[] = productsData as Product[];
  const categoryProducts = allProducts.filter((p) => p.categorySlug === category.slug);

  return (
    <div className="min-h-screen bg-[#F9F8F6] pb-24">
      {/* Category Hero Header */}
      <section className="bg-white border-b border-[#EFECE6] pt-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb kicker (unboxed, Zero-Pill compliant) */}
          <div className="flex items-center gap-2 text-xs text-[#2C3531]/60 mb-4">
            <Link to="/" className="hover:text-[#7A8C7D] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#2C3531] font-medium">{category.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold text-[#7A8C7D] uppercase tracking-wider block">
                Category Blueprint
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2C3531] tracking-tight leading-[1.15]">
                {category.heroHeadline}
              </h1>
              <p className="text-sm md:text-base text-[#2C3531]/80 leading-relaxed max-w-2xl">
                {category.heroDescription}
              </p>

              {/* Practical Measurement Advice Box */}
              <div className="p-4 bg-[#F9F8F6] border border-[#EFECE6] rounded-xl text-xs space-y-2 mt-4">
                <div className="flex items-center gap-2 font-semibold text-[#58685B]">
                  <Ruler className="w-4 h-4 text-[#7A8C7D]" />
                  <span>Measurement Rule for {category.name}:</span>
                </div>
                <p className="text-[#2C3531]/80 leading-relaxed">
                  {category.measurementAdvice}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-sm border border-[#EFECE6] bg-[#F9F8F6] aspect-4/3">
                <img
                  src={category.heroImage}
                  alt={category.heroImageAlt}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-20">
        {/* Section 1: Featured Editorial Guides in this Category */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-semibold text-[#7A8C7D] uppercase tracking-wider block mb-1">
                Editorial Guides
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C3531]">
                Guides & Blueprints
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/articles/${article.slug}`}
                className="group bg-white rounded-xl border border-[#EFECE6] overflow-hidden hover:border-[#7A8C7D]/40 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-16/10 overflow-hidden bg-[#F9F8F6]">
                    <img
                      src={article.featuredImage}
                      alt={article.featuredImageAlt}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-[#7A8C7D] font-medium block mb-1">
                      {article.readingTime} min read
                    </span>
                    <h3 className="font-serif text-base font-semibold text-[#2C3531] group-hover:text-[#58685B] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-[#2C3531]/75 line-clamp-2 mt-2 leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0 border-t border-[#EFECE6] flex items-center justify-between text-xs text-[#C86D51] font-semibold">
                  <span>Read Guide</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Section 2: Curated Products Recommended in this Category */}
        <section>
          <div className="mb-8">
            <span className="text-xs font-semibold text-[#C86D51] uppercase tracking-wider block mb-1">
              Curated Products
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C3531]">
              Recommended Organizers for {category.name}
            </h2>
            <p className="text-xs md:text-sm text-[#2C3531]/75 mt-1">
              Dimensional specifications, material disclosures, and direct Amazon shopping links.
            </p>
          </div>

          <div className="space-y-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} productId={product.id} />
            ))}
          </div>
        </section>

        {/* Section 3: Category-Specific Measurement Calculator */}
        <section className="scroll-mt-24" id="calculator">
          <div className="mb-6">
            <span className="text-xs font-semibold text-[#7A8C7D] uppercase tracking-wider block mb-1">
              Interactive Tool
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C3531]">
              Calculate Your Space Before Buying
            </h2>
          </div>

          {category.calculatorId === "drawer" && <KitchenDrawerCalculator />}
          {category.calculatorId === "under-sink" && <UnderSinkCalculator />}
          {category.calculatorId === "pantry" && <PantryShelfCalculator />}
        </section>

        {/* Section 4: Category Side-by-Side Comparison Tool */}
        <section>
          <ProductComparisonTool
            initialProductIds={category.recommendedProductIds}
            filterCategory={category.slug}
          />
        </section>
      </div>
    </div>
  );
}
