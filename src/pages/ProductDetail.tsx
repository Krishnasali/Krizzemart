import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, ArrowLeft, Heart, Share2, Truck, Package } from 'lucide-react';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-16 px-4">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Return to homepage
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to="/products" className="flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to products
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product image */}
          <div className="relative rounded-lg bg-gray-100 p-6">
            <img 
              src={product.image} 
              alt={product.title} 
              className="mx-auto h-96 w-full object-contain"
            />
            <div className="absolute top-4 right-4 flex space-x-2">
              <button className="rounded-full p-2 bg-white shadow hover:bg-gray-100">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
              <button className="rounded-full p-2 bg-white shadow hover:bg-gray-100">
                <Share2 className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Product details */}
          <div className="mt-10 lg:mt-0 lg:pl-8">
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            
            <div className="mt-3 flex items-center">
              <div className="flex items-center">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="ml-2 text-sm text-gray-600">
                {product.rating} out of 5 stars ({product.reviews} reviews)
              </p>
            </div>

            <div className="mt-6">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-base font-bold text-gray-900">Description</h3>
              <p className="mt-2 text-base text-gray-600">
                {product.description}
              </p>
            </div>

            <div className="mt-6">
              <div className="flex items-center">
                <h2 className="text-base font-bold text-gray-900 mr-3">Quantity:</h2>
                <div className="flex items-center border border-gray-300 rounded">
                  <button 
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-1">{quantity}</span>
                  <button 
                    className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button 
                variant="primary" 
                size="lg" 
                fullWidth 
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-gray-600 mr-2" />
                  <p className="text-sm text-gray-600">Free delivery on orders over $50</p>
                </div>
                <div className="flex items-center">
                  <Package className="h-5 w-5 text-gray-600 mr-2" />
                  <p className="text-sm text-gray-600">Free returns within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;