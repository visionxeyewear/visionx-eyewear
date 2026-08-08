"use client";

import Link from "next/link";
import { Product } from "@/data/products";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="group relative flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      
      {/* Wishlist Button */}
      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute top-3 right-3 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 hover:text-black transition-colors"
        aria-label="Wishlist"
      >
        <Heart size={16} className={isWishlisted ? "fill-black text-black" : ""} />
      </button>

      {/* Image Container */}
      <Link href={`/product/${product.id}`} className="block relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-black text-white text-[10px] font-semibold uppercase px-2.5 py-1 rounded">
            New
          </span>
        )}
      </Link>

      {/* Details */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{product.categoryName}</p>
          <Link href={`/product/${product.id}`}>
            <h3 className="text-sm font-medium text-gray-900 hover:underline line-clamp-1">{product.name}</h3>
          </Link>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-gray-900">
              ₹{product.salePrice ?? product.price}
            </span>
            {product.salePrice && (
              <span className="text-xs text-gray-400 line-through">₹{product.price}</span>
            )}
          </div>
          <Link
            href={`/product/${product.id}`}
            className="text-xs font-medium text-black underline underline-offset-4 hover:text-gray-600 transition-colors"
          >
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
}
