import React from 'react';

const products = [
  {
    id: 1,
    name: 'Floral Summer Dress',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    name: 'Classic Blazer',
    price: '$129.99',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    name: 'Luxury Watch',
    price: '$299.99',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    name: 'Designer Perfume',
    price: '$159.99',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    name: 'Silk Blouse',
    price: '$79.99',
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    name: 'Casual Denim',
    price: '$69.99',
    image: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?auto=format&fit=crop&q=80'
  },
  {
    id: 7,
    name: 'Premium Watch',
    price: '$399.99',
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80'
  },
  {
    id: 8,
    name: 'Signature Scent',
    price: '$129.99',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94c5eb52?auto=format&fit=crop&q=80'
  }
];

const NewArrivals = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">New Arrivals</h2>
          <p className="mt-4 text-xl text-gray-600">Latest additions to our collection</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="relative w-full h-96 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-full bg-white text-gray-900 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors duration-200">
                    Quick View
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
              </div>
              <button className="mt-2 w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;