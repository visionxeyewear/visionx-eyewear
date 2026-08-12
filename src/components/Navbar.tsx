"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        
        {/* Old Logo Image */}
        <Link href="/" className="flex items-center">
          <img 
            src="/images/logo.png" 
            alt="VisionX Logo" 
            className="h-8 w-auto object-contain" 
          />
        </Link>

        {/* Desktop Menu Options */}
        <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <Link href="/category/frame-men" className="hover:text-black transition-colors">
            Frame Men
          </Link>
          <Link href="/category/frame-women" className="hover:text-black transition-colors">
            Frame Women
          </Link>
          <Link href="/category/sunglasses-men" className="hover:text-black transition-colors">
            Sunglasses Men
          </Link>
          <Link href="/category/sunglasses-women" className="hover:text-black transition-colors">
            Sunglasses Women
          </Link>
        </div>

        {/* Right Side: Cart Icon & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative flex items-center text-gray-700 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Hamburger Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-gray-700 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b px-4 pt-2 pb-4 space-y-3">
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 font-medium hover:text-black"
          >
            Home
          </Link>
          <Link 
            href="/category/frame-men" 
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 font-medium hover:text-black"
          >
            Frame Men
          </Link>
          <Link 
            href="/category/frame-women" 
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 font-medium hover:text-black"
          >
            Frame Women
          </Link>
          <Link 
            href="/category/sunglasses-men" 
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 font-medium hover:text-black"
          >
            Sunglasses Men
          </Link>
          <Link 
            href="/category/sunglasses-women" 
            onClick={() => setIsOpen(false)}
            className="block text-gray-700 font-medium hover:text-black"
          >
            Sunglasses Women
          </Link>
        </div>
      )}
    </nav>
  );
}
