import React from 'react';
import ProductCard from '../ui/ProductCard';
import { Product } from '../../types';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedProductsProps {
  title: string;
  products: Product[];
  linkText?: string;
  linkUrl?: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  title,
  products,
  linkText = 'View all',
  linkUrl = '/products',
}) => {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {title}
          </h2>
          {linkText && linkUrl && (
            <Link
              to={linkUrl}
              className="group inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
            >
              {linkText}
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;