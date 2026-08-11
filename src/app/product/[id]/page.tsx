import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
}

const allProducts: Product[] = [
  { id: "1", name: "David Jones Sunglasses (Model: 0025/105)", price: 6299, originalPrice: 8700, image: "/images/1.jpeg", category: "Sunglasses Men" },
  { id: "2", name: "Rayban (Model: 3025 001/58)", price: 9399, originalPrice: 10990, image: "/images/2.jpeg", category: "Sunglasses Men" },
  { id: "3", name: "Classic Men Frame 01", price: 3499, originalPrice: 4999, image: "/images/frame-men.PNG", category: "Frame Men" },
  { id: "4", name: "Classic Women Frame 01", price: 3499, originalPrice: 4999, image: "/images/frame-women.PNG", category: "Frame Women" },
  { id: "5", name: "Classic Women Sunglasses 01", price: 4499, originalPrice: 6999, image: "/images/sunglasses-women.PNG", category: "Sunglasses Women" }
];

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = allProducts.find((p) => p.id === params.id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link href="/" className="bg-black text-white px-6 py-2 rounded-md text-sm">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-50 p-4 rounded-xl flex items-center justify-center border border-gray-100">
          <img src={product.image} alt={product.name} className="max-h-[450px] object-contain" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-wider text-gray-500">{product.category}</span>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1 mb-4">{product.name}</h1>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl font-bold text-gray-950">₹{product.price.toLocaleString('en-IN')}</span>
            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex gap-4">
            <Link href="/cart" className="flex-1 bg-black text-white py-3 rounded-lg text-center font-semibold text-sm hover:bg-gray-800 transition-colors">
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
