import { Share2, Instagram } from 'lucide-react';

export const ShareButtons = () => {
  const shareUrl = window.location.href;
  const message = `Ayo hadiri ulang tahun Syaddad Khairi! ${shareUrl}`;

  const shareToWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  const shareToInstagram = () => {
    window.open('https://www.instagram.com', '_blank');
  };

  return (
    <div className="flex justify-center gap-4">
      <button
        onClick={shareToWhatsApp}
        className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors duration-300"
      >
        <Share2 className="w-5 h-5" />
        Share to WhatsApp
      </button>
      <button
        onClick={shareToInstagram}
        className="flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition-colors duration-300"
      >
        <Instagram className="w-5 h-5" />
        Share to Instagram
      </button>
    </div>
  );
};