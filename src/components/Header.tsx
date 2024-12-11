import React from 'react';
import { Cake, Sparkles } from 'lucide-react';

export const Header = () => {
  return (
    <header className="text-center py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100 via-blue-100 to-green-100 opacity-50"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Cake className="w-8 h-8 text-pink-500" />
          <Sparkles className="w-8 h-8 text-yellow-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Undangan Ulang Tahun
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-pink-600 mb-2">
          Syaddad Khairi (163)
        </h2>
        <p className="text-xl text-gray-600">
          Ayo Rayakan Hari Spesial Ini Bersama Saya!
        </p>
      </div>
    </header>
  );
};