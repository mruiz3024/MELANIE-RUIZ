import React from 'react';
import StarryBackground from './components/StarryBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import MenuSection from './components/MenuSection';
import Testimonials from './components/Testimonials';
import Reservations from './components/Reservations';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-100 selection:bg-magic-purple selection:text-white">
      {/* Fixed Background */}
      <StarryBackground />
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <Gallery />
        <MenuSection />
        <Testimonials />
        <Reservations />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;