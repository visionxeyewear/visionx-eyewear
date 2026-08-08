"use client";

import { useParams } from "next/navigation";
import { products, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useState, useMemo } from "react";
import { SlidersHorizontal } from "lucide-react";

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const categoryNameMap: Record<string, string> = {
    "frame-men": "Frame Men",
    "frame-women": "Frame Women",
    "sunglasses-men": "Sunglasses Men",
    "sunglasses-women": "Sunglasses Women",
  };

  const currentCategoryTitle = categoryNameMap[slug] || "Eyewear Collection";

  // Filter States
  const [selectedShape, setSelectedShape] = useState<string>("all");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("all");
  const [selectedColor, setSelectedColor] = useState<string>("all");
  const [selectedSize, setSelectedSize] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<number>(3000);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filtered products calculation
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (p.category !== slug) return false;
      const effectivePrice = p.salePrice ?? p.price;
      if (effectivePrice > priceRange) return false;
      if (selectedShape !== "all" && p.shape.toLowerCase() !== selectedShape.toLowerCase()) return false;
      if (selectedMaterial !== "all" && p.material.toLowerCase() !== selectedMaterial.toLowerCase()) return false;
      if (selectedColor !== "all" && p.color.toLowerCase() !== selectedColor.toLowerCase()) return false;
      if (selectedSize !== "all" && p.size.toLowerCase() !== selectedSize.toLowerCase()) return false;
      return true;
    });
  }, [slug, selectedShape, selectedMaterial, selectedColor, selectedSize, priceRange]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Category Header */}
      <div className="mb-8 border-b border-gray-100 pb-6">
        <h1 className="text-3xl font-bold text-gray-900">{currentCategoryTitle}</h1>
        <p className="text-sm text-gray-500 mt-2">Explore our finely curated range of {currentCategoryTitle.toLowerCase()}.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Filters Sidebar (Desktop) */}
        <aside className="hidden lg:block w-64 flex-shrink-0 space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Filters</h2>
            <button
              onClick={() => {
                setSelectedShape("all");
                setSelectedMaterial("all");
                setSelectedColor("all");
                setSelectedSize("all");
                setPriceRange(3000);
              }}
              className="text-xs text-gray-500 hover:text-black underline"
            >
              Reset All
            </button>
          </div>

          {/* Price Filter */}
          <div className="space-y-3">
            <label className="text-xs font-semibold uppercase text-gray-700">Max Price: ₹{priceRange}</label>
            <input
              type="range"
              min="500"
              max="3000"
              step="100"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-black cursor-pointer"
            />
          </div>

          {/* Frame Shape */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase text-gray-700">Frame Shape</label>
            <select
              value={selectedShape}
              onChange={(e) => setSelectedShape(e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-black"
            >
              <option value="all">All Shapes</option>
              <option value="Hexagon">Hexagon</option>
              <option value="Wayfarer">Wayfarer</option>
              <option value="Round">Round</option>
              <option value="Cat-Eye">Cat-Eye</option>
              <option value="Aviator">Aviator</option>
              <option value="Square">Square</option>
              <option value="Oversized">Oversized</option>
            </select>
          </div>

          {/* Frame Material */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase text-gray-700">Frame Material</label>
            <select
              value={selectedMaterial}
              onChange={(e) => setSelectedMaterial(e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-black"
            >
              <option value="all">All Materials</option>
              <option value="Titanium">Titanium</option>
              <option value="Acetate">Acetate</option>
              <option value="Metal">Metal</option>
            </select>
          </div>

          {/* Color */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase text-gray-700">Color</label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-black"
            >
              <option value="all">All Colors</option>
              <option value="Black">Black</option>
              <option value="Gold">Gold</option>
              <option value="Gunmetal">Gunmetal</option>
              <option value="Tortoise">Tortoise</option>
              <option value="Brown">Brown</option>
            </select>
          </div>

          {/* Size */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase text-gray-700">Size</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-1 focus:ring-black"
            >
              <option value="all">All Sizes</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
        </aside>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex justify-between items-center bg-gray-50 p-3 rounded-md">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center gap-2 text-sm font-medium text-gray-800"
          >
            <SlidersHorizontal size={18} /> Filters
          </button>
          <span className="text-xs text-gray-500">{filteredProducts.length} items</span>
        </div>

        {/* Mobile Filter Drawer */}
        {mobileFiltersOpen && (
          <div className="lg:hidden bg-gray-50 p-4 rounded-md space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase text-gray-700">Max Price: ₹{priceRange}</label>
              <input
                type="range"
                min="500"
                max="3000"
                step="100"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-black"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <select
                value={selectedShape}
                onChange={(e) => setSelectedShape(e.target.value)}
                className="p-2 border rounded text-xs bg-white"
              >
                <option value="all">All Shapes</option>
                <option value="Hexagon">Hexagon</option>
                <option value="Wayfarer">Wayfarer</option>
                <option value="Round">Round</option>
                <option value="Cat-Eye">Cat-Eye</option>
                <option value="Aviator">Aviator</option>
                <option value="Square">Square</option>
                <option value="Oversized">Oversized</option>
              </select>
              <select
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="p-2 border rounded text-xs bg-white"
              >
                <option value="all">All Materials</option>
                <option value="Titanium">Titanium</option>
                <option value="Acetate">Acetate</option>
                <option value="Metal">Metal</option>
              </select>
            </div>
          </div>
        )}

        {/* Product Grid (Responsive: 2 mobile, 3 tablet, 4 desktop) */}
        <div className="flex-grow">
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center text-gray-500">
              No eyewear found matching your filter criteria.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
