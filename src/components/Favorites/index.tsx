import React from 'react';
import { Car, Flag, Trophy } from 'lucide-react';
import './styles.css';

export const Favorites = () => {
  const favorites = [
    {
      title: 'Nobar Lemans 24hr',
      icon: <Car className="w-8 h-8" />,
      image: 'src/assets/images/hobby/car1.png'
    },
    {
      title: 'Gibah F1',
      icon: <Flag className="w-8 h-8" />,
      image: 'https://i.pinimg.com/736x/40/8e/16/408e1678f224e1b04dd1dee1ec50947b.jpg'
    },
    {
      title: 'Ditabrak Flat 6 turbo',
      icon: <Trophy className="w-8 h-8" />,
      image: 'src/assets/images/hobby/car3.png'
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Main Event
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {favorites.map((item, index) => (
          <div
            key={index}
            className="favorite-card group relative overflow-hidden rounded-xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute inset-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
            </div>
            <div className="relative p-6 h-full flex flex-col items-center justify-end text-white">
              <div className="icon-wrapper mb-4 bg-white/10 p-4 rounded-full backdrop-blur-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-center text-white/80"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};