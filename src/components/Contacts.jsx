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
              <p className="text-beige-200">г. Ташкент, ул. Демонстрационная, 10</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-beige-100 mb-4">Телефон</h3>
              <p className="text-beige-200">
                <a href="tel:+998000000000" className="hover:text-orange-400 transition">+998 (XX) XXX-XX-XX</a>
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-beige-100 mb-4">Email</h3>
              <p className="text-beige-200">
                <a href="mailto:info@demo-restaurant.uz" className="hover:text-orange-400 transition">info@demo-restaurant.uz</a>
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
                <a href="#" className="text-beige-200 hover:text-orange-400 transition">
                  Instagram
                </a>
                <a href="#" className="text-beige-200 hover:text-orange-400 transition">
                  Facebook
                </a>
                <a href="#" className="text-beige-200 hover:text-orange-400 transition">
                  Telegram
                </a>
              </div>
            </div>
          </div>

          {/* Карта */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.726261058252!2d69.27787761542367!3d41.314981479271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b28f3316f73%3A0x1d47a3036e4f3a9a!2z0KHQutCy0LXRgNGBINCQ0LzQuNGAINCk0LXQvNC40YDQsA!5e0!3m2!1sru!2suz!4v1699884577123!5m2!1sru!2suz"
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Демо-локация: Сквер Амира Темура"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;