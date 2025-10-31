import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { menuData, barData } from '../data/menuData';

const MenuPreview = () => {
  const [activeCategory, setActiveCategory] = useState('starters');
  const [menuType, setMenuType] = useState('food');
  const { themeStyle } = useTheme();

  const foodCategories = {
    starters: menuData.starters,
    sets: menuData.sets,
    diet: menuData.diet,
    fast: menuData.fast,
    grill: menuData.grill
  };

  const drinkCategories = {
    cocktails: barData.cocktails,
    wine: barData.wine,
    spirits: barData.spirits
  };

  const currentCategories = menuType === 'food' ? foodCategories : drinkCategories;
  const currentData = currentCategories[activeCategory];

  return (
    <section id="menu" className="py-20 relative">
      <div className={`absolute inset-0 bg-gradient-to-br ${themeStyle.gradient}`}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className={`text-4xl md:text-5xl font-bold text-center mb-4 ${themeStyle.accent}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Наше Меню
        </motion.h2>

        {/* Переключатель Еда/Напитки */}
        <div className="flex justify-center mb-8">
          <div className={`inline-flex rounded-2xl p-1 ${themeStyle.cardBg} border ${themeStyle.cardBorder}`}>
            {[
              { key: 'food', label: '🍽️ Еда' },
              { key: 'drinks', label: '🍷 Напитки' }
            ].map((type) => (
              <button
                key={type.key}
                onClick={() => {
                  setMenuType(type.key);
                  setActiveCategory(type.key === 'food' ? 'starters' : 'cocktails');
                }}
                className={`px-6 py-3 rounded-xl transition-all ${
                  menuType === type.key
                    ? `${themeStyle.buttonPrimary} shadow-lg`
                    : `${themeStyle.text} hover:${themeStyle.accent}`
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Описание текущей категории */}
        {currentData?.description && (
          <motion.p 
            className={`text-center mb-8 max-w-2xl mx-auto ${themeStyle.text}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {currentData.description}
          </motion.p>
        )}

        {/* Категории меню */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(currentCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-2xl transition-all font-semibold ${
                activeCategory === key 
                  ? `${themeStyle.buttonPrimary} shadow-lg` 
                  : `${themeStyle.cardBg} ${themeStyle.text} ${themeStyle.cardBorder} border hover:scale-105`
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Карточки меню */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            {currentData?.items.map((item, index) => (
              <motion.div
                key={index}
                className={`${themeStyle.cardBg} rounded-2xl overflow-hidden ${themeStyle.cardBorder} border hover:border-orange-400 transition-all duration-300 backdrop-blur-sm`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  
                  <div className="md:w-3/5 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className={`font-bold text-lg mb-1 ${themeStyle.cardText}`}>
                          {item.name}
                        </h3>
                        <p className={`text-sm mb-2 ${themeStyle.secondary}`}>
                          {item.nameEn}
                        </p>
                        <p className={`text-sm ${themeStyle.text}`}>
                          {item.description}
                        </p>
                      </div>
                      <span className={`text-xl font-bold ml-4 ${themeStyle.accent}`}>
                        {item.price} сум
                      </span>
                    </div>
                    {item.volume && (
                      <p className={`text-sm ${themeStyle.secondary}`}>
                        {item.volume} л
                      </p>
                    )}
                    <button className={`text-orange-400 hover:text-orange-300 font-semibold text-sm mt-4`}>
                      Добавить в заказ →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuPreview;