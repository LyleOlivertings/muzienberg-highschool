// app/gallery/page.js
import ImageGallery from '@/components/ImageGallery';
import Navbar from '@/components/Navbar';


const categories = {
  sports: ['1.jpg', '5.jpg', '3.jpg'],
  events: ['4.jpg', '5.jpg'],
  academics: ['6.jpg', '2.jpg']
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-900 mb-12">School Life Gallery</h1>
        
        {Object.entries(categories).map(([category, images]) => (
          <section key={category} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-500 mb-8 capitalize">{category}</h2>
            <ImageGallery images={images} />
          </section>
        ))}
      </main>
    
    </>
  );
}