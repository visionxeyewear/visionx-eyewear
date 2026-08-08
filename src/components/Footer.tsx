import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <span className="text-xl font-bold tracking-tight text-gray-900">VisionX Eyewear</span>
            <p className="text-sm text-gray-600 leading-relaxed">
              Precision in Every Lens. Elevating your vision with sophisticated design, premium materials, and unmatched clarity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-black transition-colors">Home</Link></li>
              <li><Link href="/category/frame-men" className="hover:text-black transition-colors">Frame Men</Link></li>
              <li><Link href="/category/frame-women" className="hover:text-black transition-colors">Frame Women</Link></li>
              <li><Link href="/category/sunglasses-men" className="hover:text-black transition-colors">Sunglasses Men</Link></li>
              <li><Link href="/category/sunglasses-women" className="hover:text-black transition-colors">Sunglasses Women</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Customer Care</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-black transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-black transition-colors">Contact</Link></li>
              <li><Link href="/shipping-returns" className="hover:text-black transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-black transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Social / Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Stay Connected</h3>
            <p className="text-sm text-gray-600 mb-4">Follow our journey on social media for new collection drops.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-black">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-black">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-black">Twitter</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} VisionX Eyewear. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
