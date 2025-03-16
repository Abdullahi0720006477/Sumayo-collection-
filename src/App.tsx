import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import NewArrivals from './components/NewArrivals';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-[132px]">
        <Hero />
        <FeaturedCategories />
        <NewArrivals />
        <Footer />
      </div>
    </div>
  );
}

export default App;