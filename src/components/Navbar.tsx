"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartCount } = useCart();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-black"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img
                src="/images/logo.jpeg"
                alt="VisionX Eyewear"
                className="h-20 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/category/frame-men" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Frame Men
            </Link>
            <Link href="/category/frame-women" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Frame Women
            </Link>
            <Link href="/category/sunglasses-men" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Sunglasses Men
            </Link>
            <Link href="/category/sunglasses-women" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
              Sunglasses Women
            </Link>
          </nav>

          {/* Icons Action Area */}
          <div className="flex items-center space-x-5">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-700 hover:text-black transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <Link href="/account" className="hidden sm:block p-2 text-gray-700 hover:text-black transition-colors" aria-label="Account">
              <User size={20} />
            </Link>
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-black transition-colors" aria-label="Cart">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-black text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Search Bar Dropdown */}
        {searchOpen && (
          <div className="py-3 border-t border-gray-100 animate-fadeIn">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                placeholder="Search frames, sunglasses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black text-sm"
                autoFocus
              />
              <button
                type="submit"
                className="bg-black text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-gray-900 border-b border-gray-100"
          >
            Home
          </Link>
          <Link
            href="/category/frame-men"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-gray-900 border-b border-gray-100"
          >
            Frame Men
          </Link>
          <Link
            href="/category/frame-women"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-gray-900 border-b border-gray-100"
          >
            Frame Women
          </Link>
          <Link
            href="/category/sunglasses-men"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-gray-900 border-b border-gray-100"
          >
            Sunglasses Men
          </Link>
          <Link
            href="/category/sunglasses-women"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-gray-900 border-b border-gray-100"
          >
            Sunglasses Women
          </Link>
          <Link
            href="/account"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-gray-900"
          >
            My Account
          </Link>
        </div>
      )}
    </header>
  );
}
