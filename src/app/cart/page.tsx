"use client";

import { useCart } from "@/context/CartContext"; 
import Link from "next/link";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Your Shopping Bag is Empty</h1>
        <p className="text-gray-500 text-sm">Discover our collection and add your favorite frames or sunglasses.</p>
        <div>
          <Link
            href="/"
            className="inline-block mt-4 bg-black text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Bag</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => {
            const price = item.product.salePrice ?? item.product.price;
            return (
              <div key={item.product.id} className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-lg shadow-sm">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded bg-gray-100 flex-shrink-0"
                />
                <div className="flex-grow">
                  <h3 className="text-sm font-semibold text-gray-900">{item.product.name}</h3>
                  <p className="text-xs text-gray-500 uppercase">{item.product.categoryName}</p>
                  <span className="text-sm font-bold text-gray-900 mt-1 block">₹{price}</span>
                </div>

                {/* Quantity Control */}
                <div className="flex items-center border border-gray-300 rounded">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="px-2.5 py-1 text-sm font-medium hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-sm font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="px-2.5 py-1 text-sm font-medium hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 h-fit space-y-6">
          <h2 className="text-lg font-semibold text-gray-900">Order Summary</h2>
          <div className="space-y-3 text-sm border-b border-gray-200 pb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold text-gray-900">₹{subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-semibold text-green-600">FREE</span>
            </div>
          </div>
          <div className="flex justify-between text-base font-bold text-gray-900">
            <span>Total</span>
            <span>₹{subtotal}</span>
          </div>
          <button
            onClick={() => alert("Checkout flow simulated successfully!")}
            className="w-full bg-black text-white py-3.5 rounded-md font-medium text-sm hover:bg-gray-800 transition-colors shadow-sm"
          >
            Proceed to Checkout
          </button>
        </div>

      </div>
    </div>
  );
}
