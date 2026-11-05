import React, { useState } from "react";
import { Link } from "react-router-dom";
import articlesData from "../../data/articles.json";
import { Article } from "../../types";
import { ArrowRight, Play, Sparkles } from "lucide-react";

interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
  sourceCredit?: string;
}

export function ImageWithCaption({ src, alt, caption, sourceCredit }: ImageWithCaptionProps) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-xl border border-[#EFECE6] bg-[#F9F8F6]">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover max-h-[500px]"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
      </div>
      <figcaption className="mt-2.5 text-center text-xs text-[#2C3531]/70 leading-normal flex items-center justify-center gap-2">
        <span>{caption}</span>
        {sourceCredit && (
          <span className="text-[#2C3531]/40 text-[11px]">({sourceCredit})</span>
        )}
      </figcaption>
    </figure>
  );
}

interface BeforeAfterGalleryProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  description?: string;
}

export function BeforeAfterGallery({
  beforeImage,
  afterImage,
  beforeLabel = "Before Organization",
  afterLabel = "After Sage & Shelf Zoning",
  description = "A standard 36-inch kitchen drawer transformed from loose, tangled flatware into dedicated zoned compartments.",
}: BeforeAfterGalleryProps) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div className="my-10 p-6 bg-[#FFFFFF] border border-[#EFECE6] rounded-2xl shadow-2xs">
      <div className="flex items-center gap-2 text-xs font-semibold text-[#7A8C7D] uppercase tracking-wider mb-2">
        <Sparkles className="w-4 h-4 text-[#7A8C7D]" />
        <span>Transformation Spotlight</span>
      </div>
      <h3 className="font-serif text-lg md:text-xl font-semibold text-[#2C3531] mb-2">
        Before & After Organization
      </h3>
      <p className="text-xs md:text-sm text-[#2C3531]/80 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Side-by-Side Cards (Responsive on Mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Before */}
        <div className="rounded-xl overflow-hidden border border-[#EFECE6] bg-[#F9F8F6]">
          <div className="relative aspect-4/3">
            <img
              src={beforeImage}
              alt={beforeLabel}
              className="w-full h-full object-cover filter grayscale contrast-90"
              referrerPolicy="no-referrer"
            />
            <span className="absolute top-3 left-3 bg-[#2C3531]/80 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-xs">
              {beforeLabel}
            </span>
          </div>
          <div className="p-3 text-xs text-[#2C3531]/70">
            Unsegmented chaos, loose cutlery, difficult-to-locate utensils.
          </div>
        </div>

        {/* After */}
        <div className="rounded-xl overflow-hidden border border-[#7A8C7D]/30 bg-white shadow-xs">
          <div className="relative aspect-4/3">
            <img
              src={afterImage}
              alt={afterLabel}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <span className="absolute top-3 left-3 bg-[#7A8C7D] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs">
              {afterLabel}
            </span>
          </div>
          <div className="p-3 text-xs text-[#58685B] font-medium">
            Natural bamboo partitions, dedicated silverware slots, instant visual scan.
          </div>
        </div>
      </div>
    </div>
  );
}

interface VideoEmbedProps {
  title: string;
  description?: string;
}

export function VideoEmbed({
  title,
  description = "Watch how quick tension adjustments lock spring-loaded dividers into place.",
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="my-8 rounded-xl border border-[#EFECE6] bg-[#FFFFFF] overflow-hidden p-6 text-center">
      <div className="aspect-16/9 bg-[#EFECE6] rounded-lg flex flex-col items-center justify-center p-6 relative">
        {!isPlaying ? (
          <button
            onClick={() => setIsPlaying(true)}
            className="flex flex-col items-center gap-3 group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-[#7A8C7D] group-hover:bg-[#58685B] text-white flex items-center justify-center shadow-md transition-all group-hover:scale-105">
              <Play className="w-6 h-6 ml-1" />
            </div>
            <span className="text-xs font-semibold text-[#2C3531]">{title}</span>
            <span className="text-[11px] text-[#2C3531]/60">Click to preview demonstration</span>
          </button>
        ) : (
          <div className="text-xs text-[#2C3531]/80 max-w-md">
            <span className="font-semibold block mb-1">Visual Walkthrough Loaded</span>
            <span>Video embeds load lightweight progressive media without tracking scripts.</span>
          </div>
        )}
      </div>
      <p className="text-xs text-[#2C3531]/70 mt-3">{description}</p>
    </div>
  );
}

interface RelatedArticlesProps {
  currentSlug: string;
  relatedSlugs: string[];
}

export function RelatedArticles({ currentSlug, relatedSlugs }: RelatedArticlesProps) {
  const allArticles: Article[] = articlesData as Article[];
  const related = allArticles.filter(
    (a) => a.slug !== currentSlug && relatedSlugs.includes(a.slug)
  );

  if (related.length === 0) return null;

  return (
    <section className="my-12 pt-8 border-t border-[#EFECE6]">
      <h3 className="font-serif text-2xl font-semibold text-[#2C3531] mb-6">
        Continue Reading
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {related.map((article) => (
          <Link
            key={article.slug}
            to={`/articles/${article.slug}`}
            className="group block bg-white border border-[#EFECE6] rounded-xl overflow-hidden hover:border-[#7A8C7D]/40 hover:shadow-sm transition-all"
          >
            <div className="aspect-16/9 overflow-hidden bg-[#F9F8F6]">
              <img
                src={article.featuredImage}
                alt={article.featuredImageAlt}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-xs text-[#7A8C7D] font-medium mb-1.5">
                <span>{article.category}</span>
                <span aria-hidden="true">·</span>
                <span>{article.readingTime} min read</span>
              </div>
              <h4 className="font-serif text-base font-semibold text-[#2C3531] group-hover:text-[#58685B] transition-colors leading-snug">
                {article.title}
              </h4>
              <p className="text-xs text-[#2C3531]/75 line-clamp-2 mt-2 leading-relaxed">
                {article.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
