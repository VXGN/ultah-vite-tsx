import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ProfilePhoto } from './components/ProfilePhoto';
import { Countdown } from './components/Countdown';
import { EventInfo } from './components/EventInfo';
import { RSVPForm } from './components/RSVPForm';
import { Gallery } from './components/Gallery';
import { ShareButtons } from './components/ShareButtons';
import { FloatingBalloons } from './components/Animations';
import { SplashScreen } from './components/SplashScreen';
import { Favorites } from './components/Favorites';

export const App = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SplashScreen />
      <div
        className={`min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-green-100 transition-opacity duration-1000 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <FloatingBalloons />
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
          <Header />
          
          <div className="space-y-12">
            <ProfilePhoto />
            
            <Countdown />

            <Favorites />
            
            <div className="grid md:grid-cols-2 gap-8">
              <EventInfo />
              <RSVPForm />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 text-center">
                Our Teams 🔥!!
              </h3>
              <Gallery />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 text-center">
                Bagikan Undangan  
              </h3>
              <ShareButtons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};