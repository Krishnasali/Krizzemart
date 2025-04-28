import React from 'react';
import Button from '../ui/Button';
import { Clock, Truck, Package, RotateCcw } from 'lucide-react';

const PromoSection: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Shop With Us
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the Krizzemart difference with unbeatable prices, quality products, and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Fast Delivery */}
          <div className="group rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Truck className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-lg font-medium text-gray-900">Fast Delivery</h3>
            <p className="text-gray-600">
              Free, fast delivery on millions of items to your door.
            </p>
          </div>

          {/* Easy Returns */}
          <div className="group rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <RotateCcw className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-lg font-medium text-gray-900">Easy Returns</h3>
            <p className="text-gray-600">
              Simple returns within 30 days on eligible items.
            </p>
          </div>

          {/* Secure Payments */}
          <div className="group rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Package className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-lg font-medium text-gray-900">Secure Payments</h3>
            <p className="text-gray-600">
              Multiple secure payment options for your peace of mind.
            </p>
          </div>

          {/* 24/7 Support */}
          <div className="group rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="mb-3 text-lg font-medium text-gray-900">24/7 Support</h3>
            <p className="text-gray-600">
              Customer service available around the clock to assist you.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg">Shop Now</Button>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;