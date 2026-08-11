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
    name: "Classic Men Frame 01",
    price: 3499,
    originalPrice: 4999,
    image: "/images/frame-men.PNG",
    tag: "NEW"
  }
];

export default function FrameMenPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Frame Men</h1>
        <p className="text-gray-600 mb-8">Explore our finely curated range of frames for men.</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="md:col-span-1 border-r border-gray-200 pr-6">
            <h3 className="font-bold text-lg mb-4">FILTERS</h3>
            <div className="space-y-6 text-sm">
              <div>
                <label className="font-medium block mb-2">MAX PRICE: ₹15000</label>
                <input 
                  type="range" 
                  min="500" 
                  max="15000" 
                  defaultValue="15000"
                  className="w-full accent-black cursor-pointer" 
                />
              </div>
              <div>
                <label className="font-medium block mb-1">FRAME SHAPE</label>
                <select className="w-full border border-gray-300 p-2 rounded-md">
                  <option>All Shapes</option>
                </select>
              </div>
              <div>
                <label className="font-medium block mb-1">FRAME MATERIAL</label>
                <select className="w-full border border-gray-300 p-2 rounded-md">
                  <option>All Materials</option>
                </select>
              </div>
              <div>
                <label className="font-medium block mb-1">COLOR</label>
                <select className="w-full border border-gray-300 p-2 rounded-md">
                  <option>All Colors</option>
                </select>
              </div>
              <div>
                <label className="font-medium block mb-1">SIZE</label>
                <select className="w-full border border-gray-300 p-2 rounded-md">
                  <option>All Sizes</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-xl p-4 border border-gray-200 group shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div>
                    <div className="relative aspect-square w-full overflow-hidden rounded-lg mb-4 bg-gray-50">
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

                    <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-1">FRAME MEN</p>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">{product.name}</h4>

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

                  {/* Buttons */}
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
          </div>
        </div>
      </div>
    </div>
  );
}
