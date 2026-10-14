export interface FlavorVariant {
  id: string;
  name: string;
  tagline: string;
  color1: string; // Primary neon / vibrant color
  color2: string; // Secondary metallic / contrast color
  textColor?: string;
  description: string;
  badge?: string;
  nutritional: {
    caffeine: string;
    taurine: string;
    sugars: string;
    calories: string;
  };
  volume: string;
  image?: string; // Caminho da imagem/foto da lata (ex: '/images/cans/voltage.png')
}

export interface Product {
  id: string;
  name: string;
  category: 'energy' | 'combos' | 'lab' | 'snacks';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  description: string;
  shortDescription: string;
  flavors: FlavorVariant[];
  featured?: boolean;
  isNew?: boolean;
  isLimited?: boolean;
  bundleIncludes?: string[];
  stockStatus?: 'in_stock' | 'low_stock' | 'sold_out';
  image?: string;
}

export interface Story {
  id: string;
  title: string;
  category: string;
  athlete: string;
  sport: string;
  readTime: string;
  image: string;
  excerpt: string;
  date: string;
}

export interface CartItem {
  productId: string;
  flavorId: string;
  name: string;
  flavorName: string;
  flavorColor1: string;
  flavorColor2: string;
  price: number;
  quantity: number;
  category: string;
  image?: string;
  volume?: string;
}

