"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="border-b p-4 flex justify-between items-center bg-white sticky top-0 z-50">
      <Link href="/" className="font-bold text-xl">VisionX</Link>
      
      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">Menu</button>

      {/* Nav Links */}
      <div className={`${isOpen ? "block" : "hidden"} md:block absolute md:static top-16 left-0 w-full bg-white p-4 md:p-0`}>
        <Link href="/" className="block md:inline-block px-4">Home</Link>
        <Link href="/category/sunglasses-men" className="block md:inline-block px-4">Sunglasses Men</Link>
        <Link href="/cart" className="block md:inline-block px-4">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
}
