"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, subtotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 px-4">
        <h2 className="text-2xl font-bold mb-2">Your Shopping Bag is Empty</h2>
        <p className="text-gray-500 mb-6">Discover our collection and add your favorite frames or sunglasses.</p>
        <Link href="/" className="bg-black text-white px-6 py-3 rounded-md text-sm font-semibold">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => {
            const itemPrice = item.price;

            return (
              <div key={item.id} className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-contain bg-gray-50 rounded-lg p-2 border border-gray-100" 
                  />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900">{item.name}</h4>
                    <p className="text-sm font-bold text-gray-950 mt-1">
                      ₹{itemPrice.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2.5 py-1 text-gray-600 hover:bg-gray-100 font-bold"
                    >
                      -
                    </button>
                    <span className="px-3 text-sm font-medium">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2.5 py-1 text-gray-600 hover:bg-gray-100 font-bold"
                    >
                      +
                    </button>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-xs font-semibold hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Summary Sidebar */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-fit">
          <h3 className="text-lg font-bold mb-4">Order Summary</h3>
          <div className="flex justify-between mb-4 text-sm text-gray-600">
            <span>Subtotal</span>
            <span className="font-bold text-gray-950 text-base">₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="border-t border-gray-200 pt-4 mb-6 flex justify-between text-base font-bold text-gray-950">
            <span>Total Amount</span>
            <span>₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
