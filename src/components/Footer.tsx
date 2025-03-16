import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold">Sumayo Collection</h3>
            <p className="mt-4 text-gray-400 text-sm">
              Bringing you the finest in fashion since 2024. Quality clothing for every occasion.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-semibold">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Women</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Men</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold">Connect</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <h4 className="text-white text-sm font-semibold">Newsletter</h4>
              <div className="mt-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="mt-2 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm text-center">
            © 2024 Sumayo Collection. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;