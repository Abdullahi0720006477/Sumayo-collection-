import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, Shirt, Phone, Mail, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed w-full z-50 top-0">
      <div className="bg-indigo-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span>+254 723136223</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-1" />
                <span>sumayo@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Mandera, Kenya</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-medium animate-pulse">
            🌙 Eid Special: Up to 50% off on selected items! Limited time offer
          </p>
        </div>
      </div>

      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <Shirt className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-serif font-bold text-gray-900">Sumayo Collection</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">Women</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">Men</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">Watches</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">Perfumes</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">Collections</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 rounded-full hover:bg-indigo-50 transition-colors duration-200">
                <Search className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-indigo-50 transition-colors duration-200">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-indigo-50 transition-colors duration-200 relative">
                <ShoppingBag className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200">Women</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200">Men</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200">Watches</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200">Perfumes</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors duration-200">Collections</a>
            </div>
            <div className="px-4 py-3 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full hover:bg-indigo-50 transition-colors duration-200">
                  <Search className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 rounded-full hover:bg-indigo-50 transition-colors duration-200">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 rounded-full hover:bg-indigo-50 transition-colors duration-200 relative">
                  <ShoppingBag className="h-5 w-5 text-gray-600" />
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;