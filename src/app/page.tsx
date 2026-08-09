import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  tag?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "David Jones Sunglasses (Model: 0025/105)",
    price: 6299,
    originalPrice: 8700,
    image: "/images/1.jpeg",
    tag: "NEW"
  },
  {
    id: 2,
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
      <section 
        className="relative h-[60vh] flex items-center justify-center text-white px-4 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/banner.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center max-w-3xl">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-gray-200 font-semibold">
            VISIONX EYEWEAR
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-3 mb-4 text-white">
            Discover Your Perfect Look
          </h1>
          <p className="text-base sm:text-xl text-gray-100 mb-8 font-light">
            Style That Speaks You
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/category/frame-men"
              className="bg-white text-black px-8 py-3.5 rounded-md font-medium hover:bg-gray-200 transition-colors shadow-lg"
            >
              Shop Frames
            </Link>
            <Link
              href="/category/sunglasses-men"
              className="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-md font-medium hover:bg-white hover:text-black transition-colors"
            >
              Shop Sunglasses
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Explore Collections</h2>
          <p className="text-gray-600 mt-2">Choose your vibe</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <Link href="/category/frame-men" className="group bg-white rounded-2xl overflow-hidden p-4 text-center shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between h-[380px]">
            <div className="w-full h-64 overflow-hidden rounded-xl bg-gray-50">
              <img 
                src="/images/frame-men.PNG" 
                alt="Frame Men Collection" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="py-2">
              <h3 className="text-xl font-bold text-gray-950 group-hover:text-blue-700 transition-colors">Frame Men</h3>
              <p className="text-sm text-gray-500 mt-1">Explore Collection &rarr;</p>
            </div>
          </Link>

          <Link href="/category/frame-women" className="group bg-white rounded-2xl overflow-hidden p-4 text-center shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between h-[380px]">
            <div className="w-full h-64 overflow-hidden rounded-xl bg-gray-50">
              <img 
                src="/images/frame-women.PNG" 
                alt="Frame Women Collection" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="py-2">
              <h3 className="text-xl font-bold text-gray-950 group-hover:text-blue-700 transition-colors">Frame Women</h3>
              <p className="text-sm text-gray-500 mt-1">Explore Collection &rarr;</p>
            </div>
          </Link>

          <Link href="/category/sunglasses-men" className="group bg-white rounded-2xl overflow-hidden p-4 text-center shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between h-[380px]">
            <div className="w-full h-64 overflow-hidden rounded-xl bg-gray-50">
              <img 
                src="/images/sunglasses-men.PNG" 
                alt="Sunglasses Men Collection" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="py-2">
              <h3 className="text-xl font-bold text-gray-950 group-hover:text-blue-700 transition-colors">Sunglasses Men</h3>
              <p className="text-sm text-gray-500 mt-1">Explore Collection &rarr;</p>
            </div>
          </Link>

          <Link href="/category/sunglasses-women" className="group bg-white rounded-2xl overflow-hidden p-4 text-center shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col justify-between h-[380px]">
            <div className="w-full h-64 overflow-hidden rounded-xl bg-gray-50">
              <img 
                src="/images/sunglasses-women.PNG" 
                alt="Sunglasses Women Collection" 
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="py-2">
              <h3 className="text-xl font-bold text-gray-950 group-hover:text-blue-700 transition-colors">Sunglasses Women</h3>
              <p className="text-sm text-gray-500 mt-1">Explore Collection &rarr;</p>
            </div>
          </Link>

        </div>
      </section>

      {/* Dynamic Products Section for 1.jpeg and 2.jpeg */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Sunglasses</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl p-6 border border-gray-100 group shadow-lg">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg mb-5 bg-gray-100">
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
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Sunglasses Men</p>
                <h4 className="text-base font-semibold text-gray-900 mb-2">{product.name}</h4>

                <div className="flex items-center justify-center gap-2 mb-4">
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  <span className="text-lg font-bold text-gray-950">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                </div>

                <button className="w-full bg-gray-950 text-white py-2.5 px-4 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
