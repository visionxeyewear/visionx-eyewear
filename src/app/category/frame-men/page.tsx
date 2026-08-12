"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { allProducts, Product } from "@/data/products";

export default function FrameMenPage() {
  const categoryKey = "frame-men";
  const [maxPrice, setMaxPrice] = useState(2000);
  const { addToCart } = useCart();

  // Filter 15 products matching category and price
  const products = allProducts.filter(
    (p) => p.category === categoryKey && p.price <= maxPrice
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-2 capitalize">Frame Men Collection</h1>
      <p className="text-gray-500 mb-6">Showing {products.length} products</p>

      {/* Price Filter Slider */}
      <div className="bg-gray-50 p-4 rounded-xl mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <label className="font-semibold text-sm">Filter by Max Price: ₹{maxPrice}</label>
        <input 
          type="range" min="500" max="2000" step="100" 
          value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full sm:w-64 accent-black"
        />
      </div>

      {/* Grid of 15 products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex flex-col justify-between group">
            <div>
              <Link href={`/product/${product.id}`} className="block relative aspect-square overflow-hidden rounded-lg mb-3 bg-gray-50">
                {product.tag && (
                  <span className="absolute top-2 left-2 z-10 bg-black text-white text-[10px] font-bold px-2 py-1 rounded">
                    {product.tag}
                  </span>
                )}
                <img src={product.image} alt={product.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform" />
              </Link>
              <Link href={`/product/${product.id}`}>
                <h3 className="text-sm font-semibold text-gray-900 mb-2 hover:underline line-clamp-1">{product.name}</h3>
              </Link>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-bold text-base">₹{product.price}</span>
                <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Link href={`/product/${product.id}`} className="border border-black text-black py-2 rounded text-xs font-semibold text-center hover:bg-black hover:text-white transition">
                View
              </Link>
              <button 
                onClick={() => addToCart(product)}
                className="bg-black text-white py-2 rounded text-xs font-semibold hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
