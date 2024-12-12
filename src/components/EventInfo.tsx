import { Calendar, Clock, MapPin, Shirt } from 'lucide-react';

export const EventInfo = () => {
  return (
    <div className="bg-white/90 rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Detail Acara
      </h3>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Calendar className="w-6 h-6 text-pink-500" />
          <div>
            <p className="font-semibold">Tanggal</p>
            <p>15 Januari 2025</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Clock className="w-6 h-6 text-pink-500" />
          <div>
            <p className="font-semibold">Waktu</p>
            <p>18:45 WITA</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <MapPin className="w-6 h-6 text-pink-500" />
          <div>
            <p className="font-semibold">Lokasi</p>
            <p>Ampenan (rumah Syaddad)</p>
            {/* Google Map */}
            <iframe
              title="Lokasi"
              width="150"
              height="150"
              frameBorder="0"
              style={{ border: 0 }}
              
              src={`https://maps.googleapis.com/maps/api/staticmap?center=Ampenan&zoom=14&size=300x300&markers=-8.563155,%20116.076963&key=AIzaSyAaZRyEwPPHTVECeBKUuQH8DhnUpOvA9Ic`}
              
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Shirt className="w-6 h-6 text-pink-500" />
          <div>
            <p className="font-semibold">Dress Code</p>
            <p>Jersey F1</p>
          </div>
        </div>
      </div>
    </div>
  );
};
