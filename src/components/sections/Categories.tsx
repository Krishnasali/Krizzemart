import React from 'react';
import CategoryCard from '../ui/CategoryCard';
import { CategoryItem } from '../../types';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CategoriesProps {
  categories: CategoryItem[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Shop by Category
          </h2>
          <Link
            to="/categories"
            className="group inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            View all categories
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;