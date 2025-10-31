import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ReservationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2'
  });
  const [isLoading, setIsLoading] = useState(false);
  const { themeStyle } = useTheme();

  // Функция отправки в Telegram
  const sendToTelegram = async (data) => {
    // ЗАМЕНИ ЭТИ ДАННЫЕ НА СВОИ!
    const botToken = '8228092959:AAGX7VPNpVvM5xowEyKSuIi-mDN-GCeo7Cw'; // Токен от @BotFather
    const chatId = '5649512852'; // ID чата менеджера
    
    const message = `
🎯 НОВАЯ БРОНЬ С САЙТА:

👤 Имя: ${data.name}
📞 Телефон: ${data.phone}
📅 Дата: ${data.date}
⏰ Время: ${data.time}
👥 Гостей: ${data.guests}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
      });
      
      return response.ok;
    } catch (error) {
      console.error('Ошибка отправки:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const success = await sendToTelegram(formData);

    setIsLoading(false);

    if (success) {
      alert('✅ Заявка отправлена! Менеджер свяжется с вами в ближайшее время.');
      onClose();
      // Очищаем форму
      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '2'
      });
    } else {
      alert('❌ Ошибка отправки. Позвоните нам по телефону +998 (70) 010-88-66');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`${themeStyle.cardBg} rounded-2xl p-6 w-full max-w-md relative ${themeStyle.border} border`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h2 className={`text-2xl font-bold mb-6 ${themeStyle.accent}`}>Забронировать стол</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={`block mb-2 ${themeStyle.text}`}>Имя *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-orange-400"
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className={`block mb-2 ${themeStyle.text}`}>Телефон *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-orange-400"
                  disabled={isLoading}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block mb-2 ${themeStyle.text}`}>Дата *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-orange-400"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className={`block mb-2 ${themeStyle.text}`}>Время *</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-orange-400"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div>
                <label className={`block mb-2 ${themeStyle.text}`}>Количество гостей</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:border-orange-400"
                  disabled={isLoading}
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'гость' : 'гостей'}</option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all disabled:bg-orange-300 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Отправка...' : 'Забронировать'}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReservationModal;