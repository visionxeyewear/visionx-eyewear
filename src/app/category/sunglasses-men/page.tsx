"use client";
import { useState, useEffect } from "react";
import { Product } from "@/data/products";
import { supabase } from "@/lib/supabase";
import ProductCard from "@/components/ProductCard";

export default function SunglassesMenPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("category", "sunglasses-men")
        .lte("price", maxPrice);

      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    }

    fetchProducts();
  }, [maxPrice]);

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

      {loading ? (
        <p className="text-center py-12">Loading products from Supabase...</p>
      ) : products.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
