import React from 'react';
import { ArrowLeft, Trash, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-16 px-4">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/products">
          <Button>Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Shopping Cart</h1>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-8">
            <div className="border-t border-gray-200 pt-4">
              {cart.items.map(item => (
                <div key={item.id} className="flex py-6 border-b border-gray-200">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <Link to={`/product/${item.id}`}>{item.title}</Link>
                        </h3>
                        <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center">
                        <p className="text-gray-500 mr-3">Qty</p>
                        <div className="flex items-center border border-gray-300 rounded">
                          <button 
                            className="p-1 text-gray-600 hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-3 py-1">{item.quantity}</span>
                          <button 
                            className="p-1 text-gray-600 hover:bg-gray-100"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="font-medium text-red-600 hover:text-red-500"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-6">
              <Link to="/products" className="flex items-center text-blue-600 hover:text-blue-800">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Continue Shopping
              </Link>
              <button
                onClick={clearCart}
                className="text-sm font-medium text-red-600 hover:text-red-500"
              >
                Clear Cart
              </button>
            </div>
          </div>

          <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-4 lg:mt-0 lg:p-8">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Subtotal</p>
                <p className="text-base font-medium text-gray-900">${cart.totalPrice.toFixed(2)}</p>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Shipping estimate</p>
                <p className="text-base font-medium text-gray-900">$5.00</p>
              </div>
              
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Tax estimate</p>
                <p className="text-base font-medium text-gray-900">${(cart.totalPrice * 0.1).toFixed(2)}</p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <p className="text-base font-medium text-gray-900">Order total</p>
                  <p className="text-xl font-bold text-gray-900">
                    ${(cart.totalPrice + 5 + cart.totalPrice * 0.1).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button fullWidth size="lg">
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;