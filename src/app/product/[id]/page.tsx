"use client";

import { useParams, useRouter } from "next/navigation";
import { products, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { Heart, ShieldCheck, Truck, RotateCcw } from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const router = useRouter();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedMessage, setAddedMessage] = useState(false);

  if (!product) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <button onClick={() => router.push("/")} className="mt-4 bg-black text-white px-6 py-2 rounded text-sm">
          Back to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2500);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    router.push("/cart");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Product Image Gallery */}
        <div className="bg-gray-100 rounded-lg overflow-hidden aspect-[4/3] relative shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-sm rounded-full text-gray-700 hover:text-black transition-colors"
          >
            <Heart size={20} className={isWishlisted ? "fill-black text-black" : ""} />
          </button>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">{product.categoryName}</span>
            <h1 className="text-3xl font-bold text-gray-900 mt-1">{product.name}</h1>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-gray-900">₹{product.salePrice ?? product.price}</span>
            {product.salePrice && (
              <span className="text-base text-gray-400 line-through">₹{product.price}</span>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed text-sm">{product.description}</p>

          {/* Specifications */}
          <div className="border-t border-b border-gray-200 py-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500 block">Frame Shape</span>
              <span className="font-semibold text-gray-900">{product.shape}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Frame Material</span>
              <span className="font-semibold text-gray-900">{product.material}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Color</span>
              <span className="font-semibold text-gray-900">{product.color}</span>
            </div>
            <div>
              <span className="text-gray-500 block">Size</span>
              <span className="font-semibold text-gray-900">{product.size}</span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-semibold uppercase text-gray-700">Quantity</span>
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 text-lg font-medium text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-1 text-sm font-semibold text-gray-900">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 text-lg font-medium text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white py-3.5 px-6 rounded-md font-medium text-sm hover:bg-gray-800 transition-colors shadow-sm"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 bg-gray-100 text-gray-900 py-3.5 px-6 rounded-md font-medium text-sm hover:bg-gray-200 transition-colors"
            >
              Buy Now
            </button>
          </div>

          {addedMessage && (
            <div className="p-3 bg-green-50 text-green-800 text-xs rounded font-medium text-center animate-fadeIn">
              Successfully added to cart!
            </div>
          )}

          {/* Value Props */}
          <div className="pt-6 border-t border-gray-100 grid grid-cols-3 gap-4 text-center text-xs text-gray-600">
            <div className="flex flex-col items-center space-y-1">
              <ShieldCheck size={20} className="text-gray-800" />
              <span>1 Year Warranty</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <Truck size={20} className="text-gray-800" />
              <span>Free Shipping</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <RotateCcw size={20} className="text-gray-800" />
              <span>Easy Returns</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
