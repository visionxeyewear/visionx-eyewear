export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: "frame-men" | "frame-women" | "sunglasses-men" | "sunglasses-women";
  tag?: string;
}

export const allProducts: Product[] = [
  // --- Frame Men (15 items) ---
  { id: "fm-1", name: "Classic Black Square Frame Men", price: 1399, originalPrice: 2499, image: "/images/frame-men.PNG", category: "frame-men", tag: "BESTSELLER" },
  { id: "fm-2", name: "Modern Metal Rectangle Frame Men", price: 899, originalPrice: 1599, image: "/images/1.jpeg", category: "frame-men" },
  { id: "fm-3", name: "Executive Half-Rim Frame Men", price: 999, originalPrice: 1999, image: "/images/2.jpeg", category: "frame-men", tag: "NEW" },
  { id: "fm-4", name: "Bold Wayfarer Frame Men", price: 1199, originalPrice: 2199, image: "/images/frame-men.PNG", category: "frame-men" },
  { id: "fm-5", name: "Lightweight Titanium Frame Men", price: 1499, originalPrice: 2999, image: "/images/1.jpeg", category: "frame-men" },
  { id: "fm-6", name: "Vintage Round Frame Men", price: 899, originalPrice: 1499, image: "/images/2.jpeg", category: "frame-men" },
  { id: "fm-7", name: "Matte Finish Clubmaster Frame Men", price: 1299, originalPrice: 2299, image: "/images/frame-men.PNG", category: "frame-men" },
  { id: "fm-8", name: "Slim Gunmetal Frame Men", price: 999, originalPrice: 1799, image: "/images/1.jpeg", category: "frame-men" },
  { id: "fm-9", name: "Flexible TR90 Frame Men", price: 1399, originalPrice: 2599, image: "/images/2.jpeg", category: "frame-men" },
  { id: "fm-10", name: "Classic Tortoiseshell Frame Men", price: 899, originalPrice: 1699, image: "/images/frame-men.PNG", category: "frame-men" },
  { id: "fm-11", name: "Geometric Aviator Frame Men", price: 1499, originalPrice: 2799, image: "/images/1.jpeg", category: "frame-men" },
  { id: "fm-12", name: "Minimalist Wire Frame Men", price: 799, originalPrice: 1299, image: "/images/2.jpeg", category: "frame-men" },
  { id: "fm-13", name: "Urban Streetwear Frame Men", price: 1199, originalPrice: 2099, image: "/images/frame-men.PNG", category: "frame-men" },
  { id: "fm-14", name: "Pro Series Office Frame Men", price: 1399, originalPrice: 2499, image: "/images/1.jpeg", category: "frame-men" },
  { id: "fm-15", name: "Signature Black Frame Men", price: 999, originalPrice: 1899, image: "/images/2.jpeg", category: "frame-men" },

  // --- Frame Women (15 items) ---
  { id: "fw-1", name: "Chic Cat-Eye Frame Women", price: 1399, originalPrice: 2499, image: "/images/frame-women.PNG", category: "frame-women", tag: "TRENDING" },
  { id: "fw-2", name: "Rose Gold Oval Frame Women", price: 899, originalPrice: 1599, image: "/images/2.jpeg", category: "frame-women" },
  { id: "fw-3", name: "Delicate Clear Frame Women", price: 999, originalPrice: 1999, image: "/images/1.jpeg", category: "frame-women", tag: "NEW" },
  { id: "fw-4", name: "Classic Round Metal Frame Women", price: 1199, originalPrice: 2199, image: "/images/frame-women.PNG", category: "frame-women" },
  { id: "fw-5", name: "Oversized Vintage Frame Women", price: 1499, originalPrice: 2999, image: "/images/2.jpeg", category: "frame-women" },
  { id: "fw-6", name: "Tortoiseshell Butterfly Frame Women", price: 899, originalPrice: 1499, image: "/images/1.jpeg", category: "frame-women" },
  { id: "fw-7", name: "Pastel Pink Stylish Frame Women", price: 1299, originalPrice: 2299, image: "/images/frame-women.PNG", category: "frame-women" },
  { id: "fw-8", name: "Minimalist Gold Square Frame Women", price: 999, originalPrice: 1799, image: "/images/2.jpeg", category: "frame-women" },
  { id: "fw-9", name: "Lightweight Flex Frame Women", price: 1399, originalPrice: 2599, image: "/images/1.jpeg", category: "frame-women" },
  { id: "fw-10", name: "Two-Tone Gradient Frame Women", price: 899, originalPrice: 1699, image: "/images/frame-women.PNG", category: "frame-women" },
  { id: "fw-11", name: "Sophisticated Hexagon Frame Women", price: 1499, originalPrice: 2799, image: "/images/2.jpeg", category: "frame-women" },
  { id: "fw-12", name: "Slim Metallic Frame Women", price: 799, originalPrice: 1299, image: "/images/1.jpeg", category: "frame-women" },
  { id: "fw-13", name: "Boho Chic Round Frame Women", price: 1199, originalPrice: 2099, image: "/images/frame-women.PNG", category: "frame-women" },
  { id: "fw-14", name: "Executive Fashion Frame Women", price: 1399, originalPrice: 2499, image: "/images/2.jpeg", category: "frame-women" },
  { id: "fw-15", name: "Pearl White Designer Frame Women", price: 999, originalPrice: 1899, image: "/images/1.jpeg", category: "frame-women" },

  // --- Sunglasses Men (15 items) ---
  { id: "sm-1", name: "Classic Aviator Sunglasses Men", price: 1399, originalPrice: 2499, image: "/images/sunglasses-men.PNG", category: "sunglasses-men", tag: "BESTSELLER" },
  { id: "sm-2", name: "Polarized Sport Sunglasses Men", price: 899, originalPrice: 1599, image: "/images/1.jpeg", category: "sunglasses-men" },
  { id: "sm-3", name: "Wayfarer UV Protected Sunglasses", price: 999, originalPrice: 1999, image: "/images/2.jpeg", category: "sunglasses-men", tag: "NEW" },
  { id: "sm-4", name: "Gradient Driving Sunglasses Men", price: 1199, originalPrice: 2199, image: "/images/sunglasses-men.PNG", category: "sunglasses-men" },
  { id: "sm-5", name: "Bold Black Square Sunglasses", price: 1499, originalPrice: 2999, image: "/images/1.jpeg", category: "sunglasses-men" },
  { id: "sm-6", name: "Mirrored Silver Aviators", price: 899, originalPrice: 1499, image: "/images/2.jpeg", category: "sunglasses-men" },
  { id: "sm-7", name: "Retro Round Sunglasses Men", price: 1299, originalPrice: 2299, image: "/images/sunglasses-men.PNG", category: "sunglasses-men" },
  { id: "sm-8", name: "Matte Finish Clubmaster Sunglasses", price: 999, originalPrice: 1799, image: "/images/1.jpeg", category: "sunglasses-men" },
  { id: "sm-9", name: "Outdoor Adventure Sunglasses", price: 1399, originalPrice: 2599, image: "/images/2.jpeg", category: "sunglasses-men" },
  { id: "sm-10", name: "Durable Polycarbonate Sunglasses", price: 899, originalPrice: 1699, image: "/images/sunglasses-men.PNG", category: "sunglasses-men" },
  { id: "sm-11", name: "Steampunk Shield Sunglasses Men", price: 1499, originalPrice: 2799, image: "/images/1.jpeg", category: "sunglasses-men" },
  { id: "sm-12", name: "Classic Brown Lens Sunglasses", price: 799, originalPrice: 1299, image: "/images/2.jpeg", category: "sunglasses-men" },
  { id: "sm-13", name: "Urban Street Style Sunglasses", price: 1199, originalPrice: 2099, image: "/images/sunglasses-men.PNG", category: "sunglasses-men" },
  { id: "sm-14", name: "Luxury Gold-Trim Sunglasses Men", price: 1399, originalPrice: 2499, image: "/images/1.jpeg", category: "sunglasses-men" },
  { id: "sm-15", name: "Active Lightweight Sunglasses", price: 999, originalPrice: 1899, image: "/images/2.jpeg", category: "sunglasses-men" },

  // --- Sunglasses Women (15 items) ---
  { id: "sw-1", name: "Glamorous Oversized Sunglasses Women", price: 1399, originalPrice: 2499, image: "/images/sunglasses-women.PNG", category: "sunglasses-women", tag: "HOT" },
  { id: "sw-2", name: "Chic Cat-Eye Sunglasses Women", price: 899, originalPrice: 1599, image: "/images/2.jpeg", category: "sunglasses-women" },
  { id: "sw-3", name: "Gradient Butterfly Sunglasses", price: 999, originalPrice: 1999, image: "/images/1.jpeg", category: "sunglasses-women", tag: "NEW" },
  { id: "sw-4", name: "Pink Tinted Summer Sunglasses", price: 1199, originalPrice: 2199, image: "/images/sunglasses-women.PNG", category: "sunglasses-women" },
  { id: "sw-5", name: "Gold Frame Vintage Sunglasses", price: 1499, originalPrice: 2999, image: "/images/2.jpeg", category: "sunglasses-women" },
  { id: "sw-6", name: "Tortoiseshell Round Sunglasses", price: 899, originalPrice: 1499, image: "/images/1.jpeg", category: "sunglasses-women" },
  { id: "sw-7", name: "Luxury Diamond-Cut Sunglasses", price: 1299, originalPrice: 2299, image: "/images/sunglasses-women.PNG", category: "sunglasses-women" },
  { id: "sw-8", name: "Classic Square UV Shield Women", price: 999, originalPrice: 1799, image: "/images/2.jpeg", category: "sunglasses-women" },
  { id: "sw-9", name: "Gradient Blue Beach Sunglasses", price: 1399, originalPrice: 2599, image: "/images/1.jpeg", category: "sunglasses-women" },
  { id: "sw-10", name: "Modern Hexagon Sunglasses Women", price: 899, originalPrice: 1699, image: "/images/sunglasses-women.PNG", category: "sunglasses-women" },
  { id: "sw-11", name: "Elegant Browline Sunglasses", price: 1499, originalPrice: 2799, image: "/images/2.jpeg", category: "sunglasses-women" },
  { id: "sw-12", name: "Minimalist Wire Sunglasses", price: 799, originalPrice: 1299, image: "/images/1.jpeg", category: "sunglasses-women" },
  { id: "sw-13", name: "Fashion Statement Shield", price: 1199, originalPrice: 2099, image: "/images/sunglasses-women.PNG", category: "sunglasses-women" },
  { id: "sw-14", name: "Retro 90s Small Frame Sunglasses", price: 1399, originalPrice: 2499, image: "/images/2.jpeg", category: "sunglasses-women" },
  { id: "sw-15", name: "Classic Black Chic Sunglasses", price: 999, originalPrice: 1899, image: "/images/1.jpeg", category: "sunglasses-women" },
];
