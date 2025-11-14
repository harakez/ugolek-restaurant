
import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuPreview from './components/MenuPreview';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';
// import './styles/global-responsive.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Navbar onReserveClick={() => setIsModalOpen(true)} />
        <Hero onReserveClick={() => setIsModalOpen(true)} />
        <About />
        <MenuPreview />
        <Gallery />
        <Footer onReserveClick={() => setIsModalOpen(true)} />
        <ReservationModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </ThemeProvider>
  );
}

export default App;