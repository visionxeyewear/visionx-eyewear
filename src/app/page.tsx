import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-900 text-white">
        {/* बॅकग्राउंड इमेज */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/banner.jpg" 
            alt="Eyewear Banner"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        {/* टेक्स्ट कंटेंट */}
        <div className="relative z-10 text-center max-w-3xl px-4">
          <span className="text-sm uppercase tracking-widest text-gray-300 font-medium">
            VISIONX EYEWEAR
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mt-2 mb-4">
            Discover Your Perfect Look
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Find handcrafted optical frames and trendy sunglasses designed for everyday comfort and style.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/category/frame-men"
              className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Shop Frames
            </Link>
            <Link
              href="/category/sunglasses-men"
              className="bg-transparent border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-black transition-colors"
            >
              Shop Sunglasses
            </Link>
          </div>
        </div>
      </section>

      {/* Categories / Featured Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Explore Categories</h2>
          <p className="text-gray-600 mt-2">Find the perfect look tailored for your style.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Frame Men */}
          <Link href="/category/frame-men" className="group relative rounded-lg overflow-hidden bg-gray-100 h-80 flex items-end p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
            <div className="relative z-20 text-white">
              <h3 className="text-xl font-bold">Frame Men</h3>
              <p className="text-sm text-gray-200 mt-1">Explore Collection &rarr;</p>
            </div>
          </Link>

          {/* Frame Women */}
          <Link href="/category/frame-women" className="group relative rounded-lg overflow-hidden bg-gray-100 h-80 flex items-end p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
            <div className="relative z-20 text-white">
              <h3 className="text-xl font-bold">Frame Women</h3>
              <p className="text-sm text-gray-200 mt-1">Explore Collection &rarr;</p>
            </div>
          </Link>

          {/* Sunglasses Men */}
          <Link href="/category/sunglasses-men" className="group relative rounded-lg overflow-hidden bg-gray-100 h-80 flex items-end p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
            <div className="relative z-20 text-white">
              <h3 className="text-xl font-bold">Sunglasses Men</h3>
              <p className="text-sm text-gray-200 mt-1">Explore Collection &rarr;</p>
            </div>
          </Link>

          {/* Sunglasses Women */}
          <Link href="/category/sunglasses-women" className="group relative rounded-lg overflow-hidden bg-gray-100 h-80 flex items-end p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
            <div className="relative z-20 text-white">
              <h3 className="text-xl font-bold">Sunglasses Women</h3>
              <p className="text-sm text-gray-200 mt-1">Explore Collection &rarr;</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
