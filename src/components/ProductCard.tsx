"use client";
import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group block bg-white border rounded-2xl p-4 overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="relative bg-gray-50 rounded-xl aspect-square overflow-hidden mb-4 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 bg-black text-white text-[10px] font-semibold uppercase px-2.5 py-1 rounded">
            {product.tag}
          </span>
        )}
      </div>

      <div>
        <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">
          {product.category.replace("-", " ")}
        </span>
        <h3 className="font-semibold text-gray-900 text-sm truncate mb-2">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="font-bold text-black text-base">₹{product.price}</span>
          <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
        </div>
      </div>
    </Link>
  );
}
