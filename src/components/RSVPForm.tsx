import React, { useState } from 'react';

export const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Terima kasih atas konfirmasi kehadiran Anda!');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/90 rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Konfirmasi Kehadiran
      </h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Nama
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        {/* <div> */}
          {/* <label htmlFor="guests" className="block text-gray-700 mb-2">
            Jumlah Tamu
          </label> */}
          {/* <select
            id="guests"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={formData.guests}
            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} orang
              </option>
            ))}
          </select> */}
        {/* </div> */}
        <div>
          <label htmlFor="contact" className="block text-gray-700 mb-2">
            Kontak (WhatsApp/Telepon)
          </label>
          <input
            type="text"
            id="contact"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors duration-300"
        >
          Konfirmasi Kehadiran
        </button>
      </div>
    </form>
  );
};