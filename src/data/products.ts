import { Product, CategoryItem } from '../types';

export const products: Product[] = [
  {
    id: '1',
    title: 'Wireless Bluetooth Headphones',
    price: 129.99,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
    description: 'Premium wireless headphones with noise cancellation, crystal-clear sound, and 24-hour battery life. Perfect for music lovers and professionals on the go.',
    reviews: 432
  },
  {
    id: '2',
    title: 'Smart Home Speaker',
    price: 89.99,
    rating: 4.3,
    image: 'https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
    description: 'Voice-controlled smart speaker with premium sound and built-in virtual assistant. Control your smart home and enjoy your favorite music with simple voice commands.',
    reviews: 256
  },
  {
    id: '3',
    title: 'Ultra HD 4K Smart TV - 55"',
    price: 499.99,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/6976103/pexels-photo-6976103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
    description: 'Stunning 4K resolution with HDR support, smart features, and slim design. Transform your living room with immersive entertainment.',
    reviews: 189
  },
  {
    id: '4',
    title: 'Premium Coffee Maker',
    price: 149.99,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/4350206/pexels-photo-4350206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Home & Kitchen',
    description: 'Programmable coffee maker with built-in grinder and thermal carafe. Enjoy barista-quality coffee from the comfort of your home.',
    reviews: 378
  },
  {
    id: '5',
    title: 'Ergonomic Office Chair',
    price: 199.99,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Furniture',
    description: 'Adjustable office chair with lumbar support and breathable mesh back. Stay comfortable during long work hours with this ergonomic design.',
    reviews: 215
  },
  {
    id: '6',
    title: 'Fitness Smartwatch',
    price: 179.99,
    rating: 4.4,
    image: 'https://images.pexels.com/photos/4465816/pexels-photo-4465816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, and water resistance. Track your workouts and health metrics with precision.',
    reviews: 321
  },
  {
    id: '7',
    title: 'Portable Bluetooth Speaker',
    price: 69.99,
    rating: 4.2,
    image: 'https://images.pexels.com/photos/9969225/pexels-photo-9969225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
    description: 'Waterproof portable speaker with 20-hour battery life and rich, immersive sound. Take your music anywhere with this durable, compact speaker.',
    reviews: 287
  },
  {
    id: '8',
    title: 'Professional DSLR Camera',
    price: 899.99,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Electronics',
    description: 'Professional-grade DSLR with 24.2MP sensor, 4K video, and advanced autofocus. Capture stunning photos and videos with exceptional detail and clarity.',
    reviews: 164
  }
];

export const categories: CategoryItem[] = [
  {
    id: '1',
    name: 'Electronics',
    image: 'https://images.pexels.com/photos/1776452/pexels-photo-1776452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    name: 'Home & Kitchen',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    name: 'Furniture',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '4',
    name: 'Fashion',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '5',
    name: 'Books',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const featuredProducts = products.slice(0, 4);
export const topSellingProducts = products.slice(4, 8);