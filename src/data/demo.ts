/**
 * Demo/example restaurant data used across mockups.
 * This is clearly fictional sample data for illustration only.
 */

export const demoRestaurant = {
  name: "Sardina Seafood",
  nameAr: "سردينه للمأكولات البحرية",
  tagline: "Fresh seafood, daily catch",
  currency: "EGP",
};

export interface DemoProduct {
  name: string;
  nameAr: string;
  category: string;
  price: number;
  status: "Available" | "Sold out";
  tags: string[];
  emoji: string;
}

export const demoProducts: DemoProduct[] = [
  { name: "Grilled Sea Bass", nameAr: "قاروص مشوي", category: "Main Dishes", price: 320, status: "Available", tags: ["Bestseller"], emoji: "🐟" },
  { name: "Shrimp Pasta", nameAr: "مكرونة بالجمبري", category: "Main Dishes", price: 240, status: "Available", tags: ["New"], emoji: "🍝" },
  { name: "Seafood Soup", nameAr: "شوربة سي فود", category: "Appetizers", price: 95, status: "Available", tags: ["Spicy"], emoji: "🍲" },
  { name: "Greek Salad", nameAr: "سلطة يونانية", category: "Appetizers", price: 80, status: "Available", tags: ["Vegetarian"], emoji: "🥗" },
  { name: "Fried Calamari", nameAr: "كاليماري مقلي", category: "Appetizers", price: 140, status: "Available", tags: [], emoji: "🦑" },
  { name: "Mixed Grill Platter", nameAr: "مشاوي مشكلة", category: "Main Dishes", price: 450, status: "Sold out", tags: ["Featured"], emoji: "🍽️" },
  { name: "Lemon Mint Juice", nameAr: "ليمون بالنعناع", category: "Drinks", price: 45, status: "Available", tags: [], emoji: "🥤" },
  { name: "Umm Ali", nameAr: "أم علي", category: "Desserts", price: 70, status: "Available", tags: ["Bestseller"], emoji: "🍮" },
];

export const demoCategories = ["Main Dishes", "Appetizers", "Drinks", "Desserts"];

export const demoStats = {
  totalProducts: 8,
  availableProducts: 7,
  categories: 4,
  menuViews: 1284,
};
