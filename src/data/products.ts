"use client";
import { useParams, useRouter } from "next/navigation";
import { allProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();

  const product = allProducts.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button onClick={() => router.push("/")} className="bg-black text-white px-6 py-2 rounded">
          Back to Home
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    router.push("/cart");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-gray-50 rounded-2xl p-4 border aspect-square flex items-center justify-center">
          <img src={product.image} alt={product.name} className="max-h-full object-contain" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider bg-gray-100 px-3 py-1 rounded text-gray-600 mb-3 inline-block">
            {product.category.replace("-", " ")}
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-bold text-black">₹{product.price}</span>
            <span className="text-base text-gray-400 line-through">₹{product.originalPrice}</span>
          </div>

          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            Premium quality eyewear designed for durability, comfort, and ultimate UV protection. Lightweight frame structure ensuring all-day comfort.
          </p>

          <button 
            onClick={handleAddToCart}
            className="w-full bg-black text-white py-3.5 rounded-xl font-bold hover:bg-gray-800 transition shadow-lg"
          >
            Add to Cart & View Cart
          </button>
        </div>
      </div>
    </div>
  );
}
