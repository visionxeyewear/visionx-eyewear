import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  tag?: string;
}

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "David Jones Sunglasses (Model: 0025/105)",
    price: 6299,
    originalPrice: 8700,
    image: "/images/1.jpeg",
    tag: "NEW"
  },
  {
    id: "2",
    name: "Rayban (Model: 3025 001/58)",
    price: 9399,
    originalPrice: 10990,
    image: "/images/2.jpeg",
    tag: "BESTSELLER"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">VisionX Eyewear</h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          Precision in Every Lens. Elevating your vision with sophisticated designer eyewear.
        </p>
        <Link 
          href="/category/sunglasses-men" 
          className="bg-black text-white px-8 py-3 rounded-md font-semibold text-sm hover:bg-gray-800 transition-colors"
        >
          Explore Collection
        </Link>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Featured Sunglasses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl p-4 border border-gray-200 group shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                {/* Image Link */}
                <Link href={`/product/${product.id}`} className="block relative aspect-square w-full overflow-hidden rounded-lg mb-4 bg-gray-50">
                  {product.tag && (
                    <span className="absolute top-2 left-2 z-10 bg-black text-white text-[10px] font-bold px-2 py-1 rounded-sm tracking-wider">
                      {product.tag}
                    </span>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300" 
                  />
                </Link>

                <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-1">SUNGLASSES MEN</p>
                
                {/* Title Link */}
                <Link href={`/product/${product.id}`}>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 hover:underline">{product.name}</h4>
                </Link>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-base font-bold text-gray-950">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-500 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
              </div>

              {/* View Product & Add to Cart Buttons */}
              <div className="grid grid-cols-2 gap-2 mt-2">
                <Link 
                  href={`/product/${product.id}`}
                  className="border border-gray-900 text-gray-900 py-2 px-2 rounded-md text-xs font-semibold text-center hover:bg-gray-900 hover:text-white transition-colors flex items-center justify-center"
                >
                  View Product
                </Link>
                <Link 
                  href="/cart"
                  className="bg-gray-950 text-white py-2 px-2 rounded-md text-xs font-semibold hover:bg-gray-800 transition-colors text-center flex items-center justify-center"
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
