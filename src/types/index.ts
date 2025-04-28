export interface Product {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  description: string;
  reviews?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  image: string;
}