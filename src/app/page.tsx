import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-zinc-950 text-white px-4">
        {/* टेक्स्ट कंटेंट */}
        <div className="relative z-10 text-center max-w-3xl">
          <span className="text-xs sm:text-sm uppercase tracking-widest text-amber-400 font-semibold">
            VISIONX EYEWEAR
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-3 mb-4 text-white">
            Style That Speaks You
          </h1>
          <p className="text-base sm:text-xl text-gray-300 mb-8 font-light">
            Discover our exclusive collection of premium frames and sunglasses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/category/frame-men"
              className="bg-white text-black px-8 py-3.5 rounded-md font-medium hover:bg-gray-200 transition-colors shadow-lg"
            >
              Shop Men's Frames
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
          <Link href="/category/frame-men" className="group bg-gray-50 rounded-xl overflow-hidden p-8 text-center shadow-sm hover:shadow-xl transition-all border border-gray-200 flex flex-col justify-between h-64">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">👓</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Frame Men</h3>
              <p className="text-sm text-gray-500 mt-1">Explore Collection &rarr;</p>
            </div>
          </Link>

          <Link href="/category/frame-women" className="group bg-gray-50 rounded-xl overflow-hidden p-8 text-center shadow-sm hover:shadow-xl transition-all border border-gray-200 flex flex-col justify-between h-64">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">👓</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Frame Women</h3>
              <p className="text-sm text-gray-500 mt-1">Explore Collection &rarr;</p>
            </div>
          </Link>

          <Link href="/category/sunglasses-men" className="group bg-gray-50 rounded-xl overflow-hidden p-8 text-center shadow-sm hover:shadow-xl transition-all border border-gray-200 flex flex-col justify-between h-64">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">🕶️</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Sunglasses Men</h3>
              <p className="text-sm text-gray-500 mt-1">Explore Collection &rarr;</p>
            </div>
          </Link>

          <Link href="/category/sunglasses-women" className="group bg-gray-50 rounded-xl overflow-hidden p-8 text-center shadow-sm hover:shadow-xl transition-all border border-gray-200 flex flex-col justify-between h-64">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">🕶️</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Sunglasses Women</h3>
              <p className="text-sm text-gray-500 mt-1">Explore Collection &rarr;</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
