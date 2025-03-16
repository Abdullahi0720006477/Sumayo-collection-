import React from 'react';

const categories = [
  {
    name: 'Luxury Watches',
    image: 'https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80',
    description: 'Elegant timepieces for every occasion'
  },
  {
    name: 'Designer Perfumes',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80',
    description: 'Signature scents for men and women'
  },
  {
    name: 'Formal Collection',
    image: 'https://images.unsplash.com/photo-1490725263030-1f0521cec8ec?auto=format&fit=crop&q=80',
    description: 'Elegant formal attire'
  },
  {
    name: 'Casual Wear',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80',
    description: 'Comfortable everyday styles'
  },
  {
    name: 'Traditional Wear',
    image: 'https://images.unsplash.com/photo-1583391733956-6c77a55f56e7?auto=format&fit=crop&q=80',
    description: 'Cultural and traditional designs'
  },
  {
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80',
    description: 'Complete your look with our accessories'
  }
];

const FeaturedCategories = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Featured Categories</h2>
          <p className="mt-4 text-xl text-gray-600">Explore our diverse collection of styles</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.name} className="group relative">
              <div className="relative w-full h-80 rounded-lg overflow-hidden group-hover:opacity-75 transition-all duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{category.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{category.description}</p>
              <a href="#" className="mt-2 inline-block text-sm text-indigo-600 hover:text-indigo-500">
                Shop Collection →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;