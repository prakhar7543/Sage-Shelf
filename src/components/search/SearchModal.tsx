import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import articlesData from "../../data/articles.json";
import productsData from "../../data/products.json";
import { Article, Product } from "../../types";
import { Search, X, BookOpen, Tag, ArrowRight, Package } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedContentType, setSelectedContentType] = useState<string>("all");

  const articles: Article[] = articlesData as Article[];
  const products: Product[] = productsData as Product[];

  // Filter articles
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const q = query.toLowerCase().trim();
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.description.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q));

      const matchesCategory =
        selectedCategory === "all" || article.categorySlug === selectedCategory;

      const matchesType =
        selectedContentType === "all" ||
        (selectedContentType === "guides" && article.tags.some((t) => t.includes("Storage") || t.includes("Ideas"))) ||
        (selectedContentType === "measurement" && article.tags.some((t) => t.includes("Clearance") || t.includes("Measurement")));

      return matchesQuery && matchesCategory && matchesType;
    });
  }, [query, selectedCategory, selectedContentType, articles]);

  // Filter products
  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return products.filter((product) => {
      return (
        product.name.toLowerCase().includes(q) ||
        product.bestFor.toLowerCase().includes(q) ||
        product.material.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q)
      );
    });
  }, [query, products]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-[#2C3531]/40 backdrop-blur-xs transition-opacity"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white border border-[#EFECE6] rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-[#EFECE6] bg-[#F9F8F6]">
          <Search className="w-5 h-5 text-[#7A8C7D] shrink-0" />
          <input
            id="search-modal-title"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides, drawer dimensions, pantry jars, or plumbing tips..."
            className="w-full bg-transparent text-sm md:text-base text-[#2C3531] placeholder-[#2C3531]/40 focus:outline-none"
            autoFocus
          />
          {query ? (
            <button
              onClick={() => setQuery("")}
              className="text-[#2C3531]/40 hover:text-[#2C3531] text-xs p-1"
            >
              Clear
            </button>
          ) : null}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#2C3531]/60 hover:text-[#2C3531] hover:bg-[#EFECE6] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Pills / Tabs */}
        <div className="px-5 py-2.5 bg-white border-b border-[#EFECE6] flex flex-wrap items-center gap-1.5 text-xs">
          <span className="text-[#2C3531]/60 mr-1">Category:</span>
          {[
            { id: "all", label: "All" },
            { id: "kitchen-drawers", label: "Drawers" },
            { id: "under-sink", label: "Under-Sink" },
            { id: "pantry", label: "Pantry" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? "bg-[#7A8C7D] text-white font-medium"
                  : "bg-[#F9F8F6] text-[#2C3531]/70 hover:bg-[#EFECE6]"
              }`}
            >
              {cat.label}
            </button>
          ))}

          <span className="text-[#2C3531]/60 ml-2 mr-1">Topic:</span>
          {[
            { id: "all", label: "All Topics" },
            { id: "guides", label: "How-To Guides" },
            { id: "measurement", label: "Measurement" },
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedContentType(type.id)}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer whitespace-nowrap ${
                selectedContentType === type.id
                  ? "bg-[#58685B] text-white font-medium"
                  : "bg-[#F9F8F6] text-[#2C3531]/70 hover:bg-[#EFECE6]"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Results Container */}
        <div className="p-5 overflow-y-auto space-y-6">
          {/* Articles Section */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-[#2C3531]/60 uppercase tracking-wider mb-3">
              <span>Articles & Guides ({filteredArticles.length})</span>
            </div>

            {filteredArticles.length > 0 ? (
              <div className="space-y-3">
                {filteredArticles.map((article) => (
                  <Link
                    key={article.slug}
                    to={`/articles/${article.slug}`}
                    onClick={onClose}
                    className="group block p-3 rounded-xl border border-[#EFECE6] bg-[#F9F8F6] hover:bg-white hover:border-[#7A8C7D]/50 hover:shadow-xs transition-all"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 text-xs text-[#7A8C7D] font-medium mb-1">
                          <span>{article.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{article.readingTime} min read</span>
                        </div>
                        <h4 className="font-serif text-sm md:text-base font-semibold text-[#2C3531] group-hover:text-[#58685B] transition-colors leading-snug">
                          {article.title}
                        </h4>
                        <p className="text-xs text-[#2C3531]/75 line-clamp-2 mt-1 leading-relaxed">
                          {article.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#7A8C7D] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-6 text-center text-xs text-[#2C3531]/60 bg-[#F9F8F6] rounded-xl">
                No articles found matching "{query}". Try searching for "drawers", "sliding", or "containers".
              </div>
            )}
          </div>

          {/* Matched Products Section (if any query) */}
          {filteredProducts.length > 0 && (
            <div>
              <div className="flex items-center justify-between text-xs font-semibold text-[#2C3531]/60 uppercase tracking-wider mb-3">
                <span>Matching Storage Products ({filteredProducts.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/category/${product.categorySlug}`}
                    onClick={onClose}
                    className="flex gap-3 p-2.5 rounded-lg border border-[#EFECE6] bg-[#F9F8F6] hover:bg-white hover:border-[#7A8C7D]/40 transition-all"
                  >
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="w-12 h-12 object-cover rounded-md shrink-0 border border-[#EFECE6]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="min-w-0">
                      <span className="text-[10px] text-[#7A8C7D] font-medium block truncate">
                        {product.category}
                      </span>
                      <h5 className="text-xs font-semibold text-[#2C3531] truncate">
                        {product.name}
                      </h5>
                      <span className="text-[11px] text-[#2C3531]/60 font-mono block">
                        {product.dimensions.width}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#F9F8F6] border-t border-[#EFECE6] text-[11px] text-[#2C3531]/60 flex items-center justify-between">
          <span>Press ESC or click outside to dismiss</span>
          <span>Sage & Shelf Instant Search</span>
        </div>
      </div>
    </div>
  );
}
