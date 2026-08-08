import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-900 text-white">
        {/* बॅकग्राउंड इमेज (Unsplash कडून थेट लिंक) */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1592878968032-411333830001?q=80&w=2070&auto=format&fit=crop" 
            alt="VisionX Eyewear"
            className="w-full h-full object-cover opacity-60"
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
            Style That Speaks You
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

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Explore Categories</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Frame Men */}
          <Link href="/category/frame-men" className="group relative rounded-lg overflow-hidden h-80 flex items-end p-6">
            <img src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=500&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Frame Men" />
            <div className="absolute inset-0 bg-black/40" />
            <h3 className="relative text-xl font-bold text-white">Frame Men</h3>
          </Link>

          {/* Frame Women */}
          <Link href="/category/frame-women" className="group relative rounded-lg overflow-hidden h-80 flex items-end p-6">
            <img src="https://images.unsplash.com/photo-1577210497954-454178550175?q=80&w=500&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Frame Women" />
            <div className="absolute inset-0 bg-black/40" />
            <h3 className="relative text-xl font-bold text-white">Frame Women</h3>
          </Link>

          {/* Sunglasses Men */}
          <Link href="/category/sunglasses-men" className="group relative rounded-lg overflow-hidden h-80 flex items-end p-6">
            <img src="https://images.unsplash.com/photo-1507764923504-cd8357253519?q=80&w=500&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Sunglasses Men" />
            <div className="absolute inset-0 bg-black/40" />
            <h3 className="relative text-xl font-bold text-white">Sunglasses Men</h3>
          </Link>

          {/* Sunglasses Women */}
          <Link href="/category/sunglasses-women" className="group relative rounded-lg overflow-hidden h-80 flex items-end p-6">
            <img src="https://images.unsplash.com/photo-1517022812141-2365fa45d5a0?q=80&w=500&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Sunglasses Women" />
            <div className="absolute inset-0 bg-black/40" />
            <h3 className="relative text-xl font-bold text-white">Sunglasses Women</h3>
          </Link>
        </div>
      </section>
    </div>
  );
}
