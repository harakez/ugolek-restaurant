import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Hero = ({ onReserveClick }) => {
  const { themeStyle } = useTheme();

  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      {/* Демо фон */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Интерьер ресторана"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${themeStyle.overlay}`}></div>
      </div>

      {/* Контент */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="block">Авторская кухня</span>
          <motion.span 
            className="block text-orange-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            и живые эмоции
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-beige-200 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Место, где <span className="text-orange-400">огонь</span> превращает продукты 
          в <span className="text-orange-400">искусство</span>
        </motion.p>

        <motion.button
          onClick={onReserveClick}
          className="bg-orange-500 text-white px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          whileHover={{ 
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
        >
          🍽️ Забронировать стол
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;