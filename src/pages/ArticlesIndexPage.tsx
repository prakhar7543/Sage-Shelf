import React, { useState } from "react";
import { Link } from "react-router-dom";
import articlesData from "../data/articles.json";
import { Article } from "../types";
import { ArrowRight, Clock, Calendar, Search } from "lucide-react";

export function ArticlesIndexPage() {
  const articles: Article[] = articlesData as Article[];
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.categorySlug === selectedCategory;
    const matchesQuery =
      !searchQuery.trim() ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-[#F9F8F6] pb-24">
      {/* Header */}
      <header className="bg-white border-b border-[#EFECE6] pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-[#7A8C7D] uppercase tracking-wider block mb-1">
              Editorial Library
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2C3531] tracking-tight">
              Kitchen Storage & Organization Guides
            </h1>
            <p className="text-sm md:text-base text-[#2C3531]/80 mt-3 leading-relaxed">
              Step-by-step room transformations, measurement checklists, and practical zoning strategies written for everyday home cooks and apartment renters.
            </p>
          </div>

          {/* Search & Category Filter Toolbar */}
          <div className="mt-8 pt-6 border-t border-[#EFECE6] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F9F8F6] rounded-xl border border-[#EFECE6]">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === "all" ? "bg-white text-[#2C3531] shadow-2xs" : "text-[#2C3531]/70 hover:text-[#2C3531]"
                }`}
              >
                All Categories
              </button>
              <button
                onClick={() => setSelectedCategory("kitchen-drawers")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === "kitchen-drawers" ? "bg-white text-[#2C3531] shadow-2xs" : "text-[#2C3531]/70 hover:text-[#2C3531]"
                }`}
              >
                Kitchen Drawers
              </button>
              <button
                onClick={() => setSelectedCategory("under-sink")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === "under-sink" ? "bg-white text-[#2C3531] shadow-2xs" : "text-[#2C3531]/70 hover:text-[#2C3531]"
                }`}
              >
                Under-Sink
              </button>
              <button
                onClick={() => setSelectedCategory("pantry")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === "pantry" ? "bg-white text-[#2C3531] shadow-2xs" : "text-[#2C3531]/70 hover:text-[#2C3531]"
                }`}
              >
                Pantry
              </button>
            </div>

            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-[#7A8C7D] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter guides by keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-[#EFECE6] rounded-xl focus:outline-none focus:border-[#7A8C7D]"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="group bg-white rounded-2xl border border-[#EFECE6] overflow-hidden hover:border-[#7A8C7D]/40 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <Link to={`/articles/${article.slug}`} className="block aspect-16/10 overflow-hidden bg-[#F9F8F6]">
                    <img
                      src={article.featuredImage}
                      alt={article.featuredImageAlt}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-[#7A8C7D] font-medium mb-2">
                      <span>{article.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readingTime} min read</span>
                    </div>

                    <Link to={`/articles/${article.slug}`}>
                      <h2 className="font-serif text-lg md:text-xl font-semibold text-[#2C3531] group-hover:text-[#58685B] transition-colors leading-snug">
                        {article.title}
                      </h2>
                    </Link>

                    <p className="text-xs md:text-sm text-[#2C3531]/75 mt-3 line-clamp-3 leading-relaxed">
                      {article.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {article.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="text-[11px] text-[#2C3531]/60 bg-[#F9F8F6] px-2 py-0.5 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#EFECE6] flex items-center justify-between text-xs">
                  <span className="text-[#2C3531]/60">Published {article.publishedAt}</span>
                  <Link
                    to={`/articles/${article.slug}`}
                    className="font-semibold text-[#C86D51] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-[#EFECE6] max-w-md mx-auto">
            <h3 className="font-serif text-lg font-semibold text-[#2C3531] mb-2">
              No matching guides found
            </h3>
            <p className="text-xs text-[#2C3531]/70 mb-4">
              We couldn't find any guides matching "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-4 py-2 bg-[#7A8C7D] text-white text-xs font-semibold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
