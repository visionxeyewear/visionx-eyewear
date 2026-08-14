export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: "frame-men" | "frame-women" | "sunglasses-men" | "sunglasses-women";
  tag?: string;
}
