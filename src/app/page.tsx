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
      
      {/* Hero Section with Background Video */}
      <section className="relative bg-gray-900 text-white py-28 px-4 text-center overflow-hidden flex items-center justify-center min-h-[500px]">
        {/* Background Video - POSTERV.mp4 */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/images/POSTERV.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>
        
        <div className="relative max-w-3xl mx-auto z-10">
          <span className="text-xs uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-4 inline-block font-medium">New Collection 2026</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">VisionX Eyewear</h1>
          
          <p className="text-gray-200 text-lg sm:text-xl mb-8 font-medium">
            Discover Your Perfect Look
          </p>

          <Link 
            href="/category/sunglasses-men" 
            className="bg-white text-black px-8 py-3.5 rounded-md font-bold text-sm hover:bg-gray-100 transition-colors shadow-lg inline-block"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8">Featured Sunglasses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl p-4 border border-gray-200 group shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
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
