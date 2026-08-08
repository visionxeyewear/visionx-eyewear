import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  const categories = [
    { name: "Frame Men", slug: "frame-men", image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80" },
    { name: "Frame Women", slug: "frame-women", image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80" },
    { name: "Sunglasses Men", slug: "sunglasses-men", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80" },
    { name: "Sunglasses Women", slug: "sunglasses-women", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1920&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 flex flex-col items-start">
          <span className="text-xs uppercase tracking-widest text-gray-300 font-semibold mb-3">VisionX Eyewear</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-2xl mb-6">Precision in Every Lens</h1>
          <p className="text-lg text-gray-200 max-w-xl mb-8">Discover handcrafted optical frames and luxury sunglasses built for superior comfort and timeless style.</p>
          <Link
            href="/category/frame-men"
            className="bg-white text-black px-8 py-3.5 rounded-md font-medium text-sm hover:bg-gray-100 transition-colors shadow-lg"
          >
            Shop Collection
          </Link>
        </div>
      </section>

      {/* Exactly Four Category Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Explore Categories</h2>
          <p className="text-sm text-gray-500 mt-2">Find the perfect look tailored for your style.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group relative h-96 rounded-lg overflow-hidden flex flex-col justify-end p-6 bg-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white mb-2">{cat.name}</h3>
                <span className="inline-block text-xs font-medium text-white underline underline-offset-4">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Collection Section */}
      <section className="bg-gray-50 py-20 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Collection</h2>
              <p className="text-sm text-gray-500 mt-1">Handpicked designs trending worldwide.</p>
            </div>
            <Link href="/category/frame-men" className="text-sm font-medium underline underline-offset-4 hover:text-gray-600">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand / About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">The VisionX Promise</span>
          <h2 className="text-3xl font-bold text-gray-900">Craftsmanship Meets Clarity</h2>
          <p className="text-gray-600 leading-relaxed">
            At VisionX Eyewear, we believe eyewear is more than a utility—it is an extension of identity. Each frame is rigorously designed using ultra-premium lightweight metals and durable Italian acetates, ensuring absolute precision in every single lens.
          </p>
        </div>
      </section>

    </div>
  );
}
