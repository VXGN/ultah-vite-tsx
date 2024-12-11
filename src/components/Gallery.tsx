import Image1 from '../assets/images/teams/mamiqgacor.jpg';
import Image2 from '../assets/images/teams/yosa.jpg';
import Image3 from '../assets/images/teams/mplehrizzler.jpg';

const images = [
  { src: Image3, description: "Mpleh Rizzler (164)" },
  { src: Image1, description: "MamiqGacor (167)" },
  { src: Image2, description: "Yosagawkgawk 3000 (184)" },
];

export const Gallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-lg aspect-square hover:scale-110 transition-transform duration-300"
        >
          <img
            src={image.src}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-0 text-white p-2 text-center">
            {image.description}
          </div>
        </div>
      ))}
    </div>
  );
};
