import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import ReservationModal from './ReservationModal';

const Footer = () => {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const { themeStyle } = useTheme();

  return (
    <>
      <footer id="contacts" className={`py-16 relative border-t ${themeStyle.border}`}>
        <div className={`absolute inset-0 ${themeStyle.bg}`}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Призыв к действию */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${themeStyle.accent}`}>
              Ждем вас в гости!
            </h2>
            <p className={`text-xl mb-8 ${themeStyle.text} max-w-2xl mx-auto`}>
              Забронируйте стол онлайн или позвоните нам
            </p>
            <motion.button
              onClick={() => setIsReservationModalOpen(true)}
              className={`${themeStyle.buttonPrimary} py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🍽️ Забронировать стол
            </motion.button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Левая колонка - Контакты */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-8 rounded-full ${themeStyle.accentBg}`}></div>
                <h2 className={`text-3xl font-bold ${themeStyle.accent}`}>Контакты</h2>
              </div>

              <div className="space-y-6">
                {/* Адрес */}
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${themeStyle.cardBg} flex items-center justify-center border ${themeStyle.cardBorder}`}>
                    📍
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-1 ${themeStyle.accent}`}>Адрес</h3>
                    <p className={themeStyle.text}>Улица Истикбол, 47</p>
                    <p className={`text-sm ${themeStyle.secondary}`}>Ташкент, Узбекистан</p>
                  </div>
                </div>

                {/* Режим работы */}
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${themeStyle.cardBg} flex items-center justify-center border ${themeStyle.cardBorder}`}>
                    🕒
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-1 ${themeStyle.accent}`}>Режим работы</h3>
                    <div className={themeStyle.text}>
                      <p>Пн - Чт: 12:00 - 01:00</p>
                      <p>Пт - Сб: 12:00 - 02:00</p>
                      <p>Вс: 12:00 - 00:00</p>
                    </div>
                  </div>
                </div>

                {/* Телефон */}
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl ${themeStyle.cardBg} flex items-center justify-center border ${themeStyle.cardBorder}`}>
                    📞
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold mb-1 ${themeStyle.accent}`}>Телефон</h3>
                    <a 
                      href="tel:+998700108866" 
                      className={`text-xl font-semibold ${themeStyle.text} hover:text-orange-400 transition-colors duration-300`}
                    >
                      +998 (70) 010-88-66
                    </a>
                    <p className={`text-sm ${themeStyle.secondary} mt-1`}>Звоните для бронирования</p>
                  </div>
                </div>
              </div>

              {/* Соцсети */}
              <div className="space-y-4">
                <h3 className={`text-lg font-semibold ${themeStyle.accent}`}>Мы в соцсетях</h3>
                <div className="flex space-x-4">
                  {[
                    { 
                      name: 'Instagram', 
                      url: 'https://www.instagram.com/ugolek.uz/', 
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      )
                    },
                    { 
                      name: 'YouTube', 
                      url: 'https://www.youtube.com/@ugolek.uz-25', 
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                        </svg>
                      )
                    },
                    { 
                      name: 'Telegram', 
                      url: 'https://t.me/ugolek_uz', 
                      icon: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                        </svg>
                      )
                    }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${themeStyle.cardBg} rounded-2xl flex items-center justify-center ${themeStyle.text} hover:text-orange-400 transition-all duration-300 border ${themeStyle.cardBorder} hover:border-orange-400`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Правая колонка - Карта */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* ОБНОВЛЕННАЯ КАРТА GOOGLE MAPS */}
              <div className={`rounded-2xl overflow-hidden h-80 ${themeStyle.shadow} border ${themeStyle.cardBorder}`}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d674.3943086895935!2d69.29041354324892!3d41.30272178200967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef500519d6113%3A0xfdad194719948aa7!2sUgolek!5e1!3m2!1sru!2s!4v1761911404115!5m2!1sru!2s"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ресторан Уголек - Улица Истикбол, 47"
                ></iframe>
              </div>

              {/* Информация под картой */}
              <div className={`${themeStyle.cardBg} rounded-2xl p-6 border ${themeStyle.cardBorder} ${themeStyle.shadow}`}>
                <h3 className={`text-xl font-bold mb-3 ${themeStyle.accent}`}>Ресторан Уголек</h3>
                <p className={themeStyle.text}>Улица Истикбол, 47, Ташкент</p>
                <p className={`text-sm mt-2 ${themeStyle.secondary}`}>
                  Приходите и насладитесь авторской кухней в уютной атмосфере
                </p>
              </div>
            </motion.div>
          </div>

          {/* Нижняя часть с логотипом */}
          <motion.div
            className="text-center pt-8 border-t border-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className={`text-2xl font-bold mb-2 ${themeStyle.accent}`}>
              UGOLEK
            </div>
            <p className={`${themeStyle.secondary} text-sm`}>
              © 2025 Ресторан авторской кухни
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Модальное окно бронирования */}
      <ReservationModal 
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </>
  );
};

export default Footer;