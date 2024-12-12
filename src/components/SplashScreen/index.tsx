import { useEffect, useState } from 'react';
import { Cake, Heart, Music, Star, Gift } from 'lucide-react';
import { Fireworks } from './Fireworks';
import './animations.css';

const IconRing = () => {
  const icons = [Cake, Heart, Music, Star, Gift];
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-5 h-32">
        {icons.map((Icon, index) => (
          <div
            key={index}
            className="absolute"
            style={{
              transform: `rotate(${(360 / icons.length) * index}deg) translateY(-40px)`,
              transformOrigin: 'center center',
            }}
          >
            <Icon className="w-8 h-8 text-pink-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`splash-screen ${!isVisible ? 'fade-out' : ''} flex justify-center items-center min-h-screen`}>
      <Fireworks />
      <div className="text-center">
        <div className="splash-icon">
          <IconRing />
        </div>
        <h1 className="splash-text text-4xl font-bold text-pink-600 mt-8 mb-2">
          Syaddad Khairi
        </h1>
        <p className="splash-subtext text-xl text-gray-600">
          Special Birthday Celebration
        </p>
      </div>
    </div>
  );
};
