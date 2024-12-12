import { Camera } from 'lucide-react';


const pp = 'src/assets/images/profile/pp-min.JPG';
export const ProfilePhoto = () => {
  return (
    <div className="relative mx-auto w-48 h-48 md:w-56 md:h-56">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-blue-200 rounded-full animate-pulse"></div>
      <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-white shadow-lg transform hover:scale-105 transition-transform duration-300">
        <img
          src = {pp}
          alt="Syaddad Khairi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex items-center gap-2 text-white">
            <Camera className="w-5 h-5" />
            <span className="text-sm font-medium">Birthday Boy</span>
          </div>
        </div>
      </div>
    </div>
  );
};