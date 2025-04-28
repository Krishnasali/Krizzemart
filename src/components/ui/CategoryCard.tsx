import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryItem } from '../../types';

interface CategoryCardProps {
  category: CategoryItem;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      to={`/category/${category.id}`}
      className="group relative flex h-40 overflow-hidden rounded-lg shadow-md"
    >
      <img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-semibold text-white">{category.name}</h3>
        <p className="mt-1 text-sm text-white/90 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          Shop now
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;