export interface Product {
  id: string;
  name: string;
  category: "frame-men" | "frame-women" | "sunglasses-men" | "sunglasses-women";
  categoryName: string;
  price: number;
  salePrice?: number;
  image: string;
  description: string;
  shape: string;
  material: string;
  color: string;
  size: string;
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: "fm-1",
    name: "Aero Titanium Hexagon",
    category: "frame-men",
    categoryName: "Frame Men",
    price: 1499,
    salePrice: 1199,
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-lightweight titanium hexagon frames engineered for everyday durability and sleek professional styling.",
    shape: "Hexagon",
    material: "Titanium",
    color: "Gunmetal",
    size: "Medium",
    isNew: true,
  },
  {
    id: "fm-2",
    name: "Classic Bold Way",
    category: "frame-men",
    categoryName: "Frame Men",
    price: 1299,
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
    description: "A timeless acetate silhouette crafted for confidence and maximum comfort throughout your workday.",
    shape: "Wayfarer",
    material: "Acetate",
    color: "Black",
    size: "Large",
  },
  {
    id: "fw-1",
    name: "Aura Round Gold",
    category: "frame-women",
    categoryName: "Frame Women",
    price: 1599,
    salePrice: 1399,
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80",
    description: "Delicate round metal frames featuring subtle detailing that brings out effortless elegance.",
    shape: "Round",
    material: "Metal",
    color: "Gold",
    size: "Small",
    isNew: true,
  },
  {
    id: "fw-2",
    name: "Vogue Cat-Eye Tortoise",
    category: "frame-women",
    categoryName: "Frame Women",
    price: 1399,
    image: "https://images.unsplash.com/photo-1563903530966-addf4749f7e7?auto=format&fit=crop&w=800&q=80",
    description: "Statement cat-eye design in classic tortoise shell finish to elevate your daily style statement.",
    shape: "Cat-Eye",
    material: "Acetate",
    color: "Tortoise",
    size: "Medium",
  },
  {
    id: "sm-1",
    name: "Solstice Aviator Pro",
    category: "sunglasses-men",
    categoryName: "Sunglasses Men",
    price: 1999,
    salePrice: 1699,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
    description: "Polarized pilot sunglasses built with robust steel hinges and supreme UV protection.",
    shape: "Aviator",
    material: "Metal",
    color: "Black",
    size: "Large",
    isNew: true,
  },
  {
    id: "sm-2",
    name: "Urban Square Tint",
    category: "sunglasses-men",
    categoryName: "Sunglasses Men",
    price: 1799,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
    description: "Sharp square sunglasses offering absolute clarity and high-end street aesthetic.",
    shape: "Square",
    material: "Acetate",
    color: "Brown",
    size: "Medium",
  },
  {
    id: "sw-1",
    name: "Riviera Oversized Chic",
    category: "sunglasses-women",
    categoryName: "Sunglasses Women",
    price: 2199,
    salePrice: 1899,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
    description: "Luxurious oversized gradient sunglasses designed for ultimate sunshine shielding and glamour.",
    shape: "Oversized",
    material: "Acetate",
    color: "Brown",
    size: "Large",
    isNew: true,
  },
  {
    id: "sw-2",
    name: "Eclipse Round Sun",
    category: "sunglasses-women",
    categoryName: "Sunglasses Women",
    price: 1899,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    description: "Chic circular sunglasses with gradient lenses for an effortless retro look.",
    shape: "Round",
    material: "Metal",
    color: "Gold",
    size: "Medium",
  },
];
