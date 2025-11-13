import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { themeStyle } = useTheme();

  const features = [
    { 
      icon: '🔥', 
      title: 'Живой огонь', 
      description: 'Готовим на углях для аутентичного вкуса' 
    },
    { 
      icon: '👨‍🍳', 
      title: 'Шеф-повар', 
      description: 'Опыт более 10 лет в авторской кухне' 
    },
    { 
      icon: '🌿', 
      title: 'Свежие продукты', 
      description: 'Ежедневно отбираем лучшие ингредиенты' 
    },
    { 
      icon: '💫', 
      title: 'Уникальная атмосфера', 
      description: 'Лофт-пространство с историей' 
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Фон с градиентом */}
      <div className={`absolute inset-0 bg-gradient-to-br ${themeStyle.gradient}`}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${themeStyle.accent}`}>
            Наша Философия
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${themeStyle.text}`}>
            Демо-ресторан — это не просто ресторан, это место, где традиции встречаются с инновациями, 
            а каждый прием пищи становится незабываемым событием
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* История и миссия */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className={`text-3xl font-bold mb-4 ${themeStyle.accent}`}>Наша История</h3>
              <p className={`leading-relaxed ${themeStyle.text}`}>
                Основанный в 2018 году, Демо-ресторан начал свой путь как небольшой гриль-бар. 
                Сегодня это премиальный ресторан авторской кухни, где мы сочетаем лучшие 
                традиции приготовления на огне с современными гастрономическими трендами.
              </p>
            </div>

            <div>
              <h3 className={`text-3xl font-bold mb-4 ${themeStyle.accent}`}>Наша Миссия</h3>
              <p className={`leading-relaxed ${themeStyle.text}`}>
                Создавать уникальные гастрономические впечатления, где каждое блюдо — 
                это история, а каждый вечер — незабываемое событие. Мы верим, что еда 
                должна не только утолять голод, но и дарить эмоции.
              </p>
            </div>
          </motion.div>

          {/* Фото ресторана */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className={`relative rounded-3xl overflow-hidden ${themeStyle.shadow}`}>
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Интерьер Демо-ресторана"
                className="w-full h-96 object-cover"
              />
              <div className={`absolute inset-0 ${themeStyle.overlay}`}></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">Демо-ресторан</h3>
                <p className="text-gray-200">Уникальное лофт-пространство в центре города</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Команда */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Шеф-повар */}
          <div className={`${themeStyle.cardBg} rounded-3xl p-8 border ${themeStyle.cardBorder} ${themeStyle.shadow} transition-all duration-300 hover:border-orange-400 hover:shadow-orange-400/20`}>
            <div className="flex items-start gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-transparent hover:border-orange-400 transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
                    alt="Шеф-повар DEMO RESTAURANT"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Свечение при ховере */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent hover:border-orange-400 hover:shadow-[0_0_20px_rgba(251,146,60,0.5)] transition-all duration-300 opacity-0 hover:opacity-100"></div>
              </div>
              <div>
                <h3 className={`text-2xl font-bold mb-2 ${themeStyle.accent}`}>Алексей Петров</h3>
                <p className={`font-semibold mb-3 ${themeStyle.secondary}`}>Главный шеф-повар</p>
                <p className={`text-sm leading-relaxed ${themeStyle.text}`}>
                  "Для меня кулинария — это искусство. Каждое блюдо должно рассказывать 
                  историю и дарить эмоции. В Демо-ресторане мы создаем не просто еду, а настоящие 
                  гастрономические впечатления."
                </p>
              </div>
            </div>
          </div>

          {/* Управляющий */}
          <div className={`${themeStyle.cardBg} rounded-3xl p-8 border ${themeStyle.cardBorder} ${themeStyle.shadow} transition-all duration-300 hover:border-orange-400 hover:shadow-orange-400/20`}>
            <div className="flex items-start gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-transparent hover:border-orange-400 transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80"
                    alt="Управляющий Уголька"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Свечение при ховере */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent hover:border-orange-400 hover:shadow-[0_0_20px_rgba(251,146,60,0.5)] transition-all duration-300 opacity-0 hover:opacity-100"></div>
              </div>
              <div>
                <h3 className={`text-2xl font-bold mb-2 ${themeStyle.accent}`}>Мария Иванова</h3>
                <p className={`font-semibold mb-3 ${themeStyle.secondary}`}>Управляющий директор</p>
                <p className={`text-sm leading-relaxed ${themeStyle.text}`}>
                  "Наша цель — создать пространство, где гости чувствуют себя как дома, 
                  но при этом получают обслуживание премиум-класса. Каждая деталь в Демо-ресторан 
                  продумана для вашего комфорта."
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Особенности */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${themeStyle.cardBg} rounded-2xl p-6 text-center border ${themeStyle.cardBorder} ${themeStyle.shadow} transition-all duration-300 hover:border-orange-400 hover:shadow-orange-400/20 group`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h4 className={`text-xl font-bold mb-2 ${themeStyle.accent}`}>{feature.title}</h4>
              <p className={`text-sm ${themeStyle.text}`}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;