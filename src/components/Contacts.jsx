import React from 'react';

const Contacts = () => {
  return (
    <section id="contacts" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-orange-400">Контакты</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Информация о контактах */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-beige-100 mb-4">Адрес</h3>
              <p className="text-beige-200">г. Ташкент, Улица Примерная, 123</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-beige-100 mb-4">Телефон</h3>
              <p className="text-beige-200">
                <a href="tel:+998901234567" className="hover:text-orange-400 transition">+998 (90) 123-45-67</a>
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-beige-100 mb-4">Время работы</h3>
              <p className="text-beige-200">Ежедневно: 12:00 - 23:00</p>
              <p className="text-beige-200">Пятница-Суббота: 12:00 - 00:00</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-beige-100 mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <a href="https://instagram.com/ugolek.uz" className="text-beige-200 hover:text-orange-400 transition">
                  Instagram
                </a>
                <a href="https://facebook.com" className="text-beige-200 hover:text-orange-400 transition">
                  Facebook
                </a>
                <a href="https://telegram.org" className="text-beige-200 hover:text-orange-400 transition">
                  Telegram
                </a>
              </div>
            </div>
          </div>

          {/* Карта */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden h-96">
            <iframe 
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a8d8e8e8e8e8e8e8e8e8e8e8e8e8e8e&amp;source=constructor"
              width="100%" 
              height="100%" 
              frameBorder="0"
              title="Карта расположения ресторана Уголек"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;