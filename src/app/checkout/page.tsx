"use client";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart, subtotal } = useCart();

  const handleOrder = async () => {
    alert("Order placed successfully! Redirecting to payment...");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="bg-gray-50 p-4 rounded mb-6">
        {cart.map(item => (
          <div key={item.id} className="flex justify-between py-2">
            <span>{item.name} x {item.quantity}</span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
        <div className="border-t mt-4 pt-4 font-bold text-lg">Total: ₹{subtotal}</div>
      </div>
      <button 
        onClick={handleOrder}
        className="w-full bg-green-600 text-white py-3 rounded-lg font-bold"
      >
        Place Order (Cash on Delivery)
      </button>
    </div>
  );
}
