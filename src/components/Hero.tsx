import React from 'react';

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80"
          alt="Fashion Collection"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Eid Special Collection
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Celebrate Eid in style with our exclusive collection. Enjoy up to 50% off on selected items.
            Limited time offer - Don't miss out!
          </p>
          <div className="mt-10 flex space-x-4">
            <a
              href="#"
              className="inline-block bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 rounded-md shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Shop Eid Collection
            </a>
            <a
              href="#"
              className="inline-block bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 rounded-md shadow-lg hover:shadow-xl transition-all duration-200"
            >
              View All Collections
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;