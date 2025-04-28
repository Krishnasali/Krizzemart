import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative flex overflow-hidden bg-gray-100">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Background"
          className="h-full w-full object-cover opacity-20"
        />
      </div>
      
      <div className="container relative z-10 mx-auto flex min-h-[70vh] items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Shop smarter,</span>
              <span className="block text-blue-600">not harder.</span>
            </h1>
            <p className="mt-6 max-w-lg text-xl text-gray-600">
              Explore millions of products at unbeatable prices with fast, free shipping on qualified orders.
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg">
                Shop Now
              </Button>
              <Button variant="outline" size="lg">
                Today's Deals
              </Button>
            </div>
            <div className="mt-8">
              <Link
                to="/offers"
                className="group inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-700"
              >
                View today's top offers
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-72 w-72 rounded-lg bg-blue-200 transform rotate-3"></div>
              <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-lg bg-coral-200 transform -rotate-3"></div>
              <div className="relative h-80 w-80 overflow-hidden rounded-lg shadow-xl">
                <img
                  src="https://images.pexels.com/photos/8311366/pexels-photo-8311366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Featured product"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;