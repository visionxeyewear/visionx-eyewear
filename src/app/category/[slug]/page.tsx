"use client";
import { useState } from "react";
import { allProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function SunglassesMenPage() {
  const categoryKey = "sunglasses-men";
  const [maxPrice, setMaxPrice] = useState(2000);

  const products = allProducts.filter(
    (p) => p.category === categoryKey && p.price <= maxPrice
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-2">Sunglasses Men Collection</h1>
      <p className="text-gray-500 mb-6">Showing {products.length} products</p>

      <div className="bg-gray-50 p-4 rounded-xl mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <label className="font-semibold text-sm">Filter by Max Price: ₹{maxPrice}</label>
        <input 
          type="range" min="500" max="2000" step="100" 
          value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full sm:w-64 accent-black"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
