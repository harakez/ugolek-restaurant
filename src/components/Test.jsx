import React from 'react';

const Test = () => {
  return (
    <div className="p-8">
      <div className="bg-red-500 p-4 text-white mb-4">Red box - если видишь, цвета работают</div>
      <div className="bg-orange-500 p-4 text-white mb-4">Orange box - наши кастомные цвета</div>
      <div className="bg-gray-900 p-4 text-beige-100 mb-4">Dark gray with beige text</div>
      <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-4 text-white">
        Gradient test
      </div>
    </div>
  );
};

export default Test;