// components/ImageGallery.js
import Image from 'next/image';

export default function ImageGallery({ images }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
      {images.map((img, index) => (
        <div key={index} className="relative h-48 rounded-xl text-gray-500 overflow-hidden group">
          <Image
            src={`/images/gallery/${img}`}
            alt="School activity"
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-black text-sm text-center p-2">
              {img.replace(/\.[^/.]+$/, "").replace(/-/g, " ")}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}