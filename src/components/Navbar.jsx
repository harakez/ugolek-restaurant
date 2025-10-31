import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = ({ onReserveClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { themeStyle, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'О нас', to: 'about' },
    { name: 'Меню', to: 'menu' },
    { name: 'Галерея', to: 'gallery' },
    { name: 'Контакты', to: 'contacts' }
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-md border-b ${
        isScrolled ? 'py-3' : 'py-6'
      } ${themeStyle.navBg} ${themeStyle.navBorder}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Логотип */}
        <motion.div
          className={`text-2xl font-bold ${themeStyle.accent} cursor-pointer tracking-wider`}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          UGOLEK
        </motion.div>

        {/* Десктопное меню */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={800}
              className={`${themeStyle.navText} hover:${themeStyle.accent} cursor-pointer transition-all duration-300 font-medium px-4 py-2 rounded-xl border border-transparent hover:border-orange-400/50`}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Переключатель темы */}
          <motion.button
            onClick={toggleTheme}
            className={`w-14 h-7 rounded-full ${isDark ? 'bg-gray-700' : 'bg-amber-200'} p-1 transition-colors relative`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={`w-5 h-5 rounded-full ${isDark ? 'bg-orange-400' : 'bg-amber-500'} shadow-lg flex items-center justify-center text-xs`}
              animate={{ x: isDark ? 28 : 0 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              {isDark ? '🌙' : '☀️'}
            </motion.div>
          </motion.button>

          {/* Кнопка бронирования */}
          <motion.button
            onClick={onReserveClick}
            className={`${themeStyle.buttonPrimary} px-6 py-3 rounded-full font-semibold transition-all duration-300 border border-transparent hover:border-orange-300`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Забронировать
          </motion.button>
        </div>

        {/* Мобильное меню */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${themeStyle.cardBg} ${themeStyle.navText} border ${themeStyle.navBorder}`}
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 ${themeStyle.navText}`}
          >
            <div className="w-6 flex flex-col gap-1">
              <span className={`w-full h-0.5 ${themeStyle.navText} bg-current transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-full h-0.5 ${themeStyle.navText} bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-full h-0.5 ${themeStyle.navText} bg-current transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Мобильное меню выпадающее */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={`lg:hidden absolute top-full left-0 w-full ${themeStyle.navBg} backdrop-blur-md border-b ${themeStyle.navBorder}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="py-6 px-6 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={800}
                  className={`block ${themeStyle.navText} hover:${themeStyle.accent} py-4 px-4 rounded-xl border border-transparent hover:border-orange-400/50 transition-all`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  onReserveClick();
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full ${themeStyle.buttonPrimary} py-4 rounded-xl font-semibold mt-4`}
              >
                Забронировать стол
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;