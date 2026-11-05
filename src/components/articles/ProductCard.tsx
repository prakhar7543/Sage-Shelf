import React from "react";
import productsData from "../../data/products.json";
import { Product } from "../../types";
import { AmazonButton } from "./AmazonButton";
import { Check, ShieldCheck, Ruler, Sparkles } from "lucide-react";

interface ProductCardProps {
  productId: string;
}

export function ProductCard({ productId }: ProductCardProps) {
  const products: Product[] = productsData as Product[];
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="p-4 my-6 bg-[#FBEBE7] border border-[#C86D51]/30 rounded-xl text-xs text-[#C86D51]">
        <strong>Product Not Found:</strong> Could not resolve product ID <code>"{productId}"</code> from the centralized database.
      </div>
    );
  }

  return (
    <div className="my-8 bg-white border border-[#EFECE6] rounded-2xl p-5 sm:p-6 shadow-xs hover:border-[#7A8C7D]/30 transition-all">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="md:w-52 shrink-0">
          <div className="relative aspect-4/3 md:aspect-square rounded-xl overflow-hidden bg-[#F9F8F6] border border-[#EFECE6]">
            <img
              src={product.image}
              alt={product.imageAlt}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {product.productStatus === "sample" && (
              <span className="absolute top-2 left-2 text-[10px] bg-[#2C3531]/80 text-white px-2 py-0.5 rounded backdrop-blur-xs font-mono">
                Sample Model
              </span>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-xs text-[#7A8C7D] font-medium tracking-wide">
                {product.category}
              </span>
              {product.renterFriendly && (
                <span className="text-[11px] text-[#58685B] font-medium flex items-center gap-1 bg-[#EBF0EC] px-2 py-0.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7A8C7D]" />
                  Renter Friendly
                </span>
              )}
            </div>

            <h3 className="font-serif text-lg md:text-xl font-semibold text-[#2C3531] leading-snug">
              {product.name}
            </h3>

            <p className="text-xs md:text-sm text-[#2C3531]/80 mt-2 leading-relaxed">
              {product.description}
            </p>

            {/* Specifications Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4 p-3 bg-[#F9F8F6] rounded-xl text-xs">
              <div>
                <span className="text-[#2C3531]/60 block text-[11px]">Best For:</span>
                <span className="font-medium text-[#2C3531]">{product.bestFor}</span>
              </div>
              <div>
                <span className="text-[#2C3531]/60 block text-[11px]">Dimensions:</span>
                <span className="font-mono text-[#2C3531] font-semibold tabular-nums">
                  {product.dimensions.width} × {product.dimensions.depth}
                </span>
              </div>
              <div>
                <span className="text-[#2C3531]/60 block text-[11px]">Material:</span>
                <span className="font-medium text-[#2C3531]">{product.material}</span>
              </div>
            </div>

            {/* Features Bullet List */}
            <ul className="space-y-1 mb-4 text-xs text-[#2C3531]/85">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#7A8C7D] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-[#EFECE6] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-[11px] text-[#2C3531]/60 leading-tight">
              * Dimensions approximate. Verify drawer or shelf depth on Amazon listing.
            </div>
            <AmazonButton url={product.amazonUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
