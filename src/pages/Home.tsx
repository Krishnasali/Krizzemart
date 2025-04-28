import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import Categories from '../components/sections/Categories';
import PromoSection from '../components/sections/PromoSection';
import { featuredProducts, topSellingProducts, categories } from '../data/products';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Categories categories={categories} />
      <FeaturedProducts 
        title="Featured Products"
        products={featuredProducts}
        linkText="View all products"
        linkUrl="/products"
      />
      <PromoSection />
      <FeaturedProducts 
        title="Top Selling Products"
        products={topSellingProducts}
        linkText="Browse bestsellers"
        linkUrl="/bestsellers"
      />
    </div>
  );
};

export default Home;