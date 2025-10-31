import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const { themeStyle } = useTheme();

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: 'Главный зал',
      category: 'interior'
    },
    {
      url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: 'Барная стойка', 
      category: 'interior'
    },
    {
      url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: 'Шеф-повар за работой',
      category: 'team'
    },
    {
      url: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: 'Авторские блюда',
      category: 'food'
    },
    {
      url: 'https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: 'Бар',
      category: 'interior'
    },
    {
      url: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: 'Десерты',
      category: 'food'
    },
    {
      url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: 'Летняя терраса',
      category: 'interior'
    },
    {
      url: 'https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      title: 'Винная карта',
      category: 'bar'
    }
  ];

  const filters = [
    { key: 'all', label: 'Все' },
    { key: 'interior', label: 'Интерьер' },
    { key: 'food', label: 'Блюда' },
    { key: 'bar', label: 'Бар' },
    { key: 'team', label: 'Команда' }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="py-20 relative">
      <div className={`absolute inset-0 bg-gradient-to-br ${themeStyle.gradient}`}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className={`text-4xl md:text-5xl font-bold text-center mb-4 ${themeStyle.accent}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Галерея
        </motion.h2>

        <motion.p 
          className={`text-center mb-12 text-lg max-w-2xl mx-auto ${themeStyle.text}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Погрузитесь в атмосферу Уголька через наши фотографии
        </motion.p>

        {/* Фильтры */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-2xl transition-all font-semibold ${
                activeFilter === filter.key
                  ? `${themeStyle.buttonPrimary} shadow-lg`
                  : `${themeStyle.cardBg} ${themeStyle.text} ${themeStyle.cardBorder} border hover:scale-105`
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Галерея */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square relative overflow-hidden rounded-2xl bg-gray-800">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg mb-2">{image.title}</h3>
                  <span className="text-orange-400 text-sm">
                    {filters.find(f => f.key === image.category)?.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Модальное окно */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-2xl p-4">
                <h3 className="text-white font-bold text-lg">{selectedImage.title}</h3>
                <p className="text-orange-400">
                  {filters.find(f => f.key === selectedImage.category)?.label}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;