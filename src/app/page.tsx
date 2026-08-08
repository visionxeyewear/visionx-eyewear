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

      {/* Categories / Rest of the home page content can go here */}
    </div>
  );
}
