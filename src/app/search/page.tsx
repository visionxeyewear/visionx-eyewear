"use client";

import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Suspense } from "react";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const results = products.filter((p) => {
    return (
      p.name.toLowerCase().includes(query) ||
      p.categoryName.toLowerCase().includes(query) ||
      p.shape.toLowerCase().includes(query) ||
      p.material.toLowerCase().includes(query)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Search Results for &quot;{query}&quot;</h1>
      <p className="text-sm text-gray-500 mb-8">Found {results.length} matching products</p>

      {results.length === 0 ? (
        <div className="py-20 text-center text-gray-500">
          No eyewear found matching your search query. Try another term.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="py-32 text-center text-gray-500">Loading search results...</div>}>
      <SearchContent />
    </Suspense>
  );
}
