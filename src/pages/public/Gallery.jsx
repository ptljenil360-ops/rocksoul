import { useState } from 'react';
import { X } from 'lucide-react';
import gallery1 from "../../assets/gallery-1.webp";
import gallery2 from "../../assets/gallery-2.webp";
import gallery3 from "../../assets/gallery-3.webp";
import gallery4 from "../../assets/gallery-4.webp";
import gallery5 from "../../assets/gallery-5.webp";
import gallery6 from "../../assets/gallery-6.webp";
import gallery7 from "../../assets/gallery-7.webp";
import gallery8 from "../../assets/gallery-8.webp";
import gallery9 from "../../assets/gallery-9.webp";

const galleryImages = [
  { id: 1, url: gallery1, alt: 'Cafe Interior' },
  { id: 2, url: gallery2, alt: 'Latte Art' },
  { id: 3, url: gallery3, alt: 'Pastries' },
  { id: 4, url: gallery4, alt: 'Restaurant Seating' },
  { id: 5, url: gallery5, alt: 'Espresso Machine' },
  { id: 6, url: gallery6, alt: 'Fine Dining Plate' },
  { id: 7, url: gallery7, alt: 'Signature Dish' },
  { id: 8, url: gallery8, alt: 'Barista Station' },
  { id: 9, url: gallery9, alt: 'Cozy Corner' },
];


const Gallery = () => {
  // This is React State! It remembers which image you clicked on.
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-brand-dark pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-vibes text-brand-accent mb-4">Our Gallery</h1>
          <p className="text-lg text-brand-light/80 font-modern">
            A glimpse into the Rocksoul experience.
          </p>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-6"></div>
        </div>

        {/* Photo Grid using Array.map() */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((img) => (
            <div 
              key={img.id} 
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-brand-accent font-bold tracking-widest uppercase">View</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal: Only renders if selectedImage is NOT null */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4">
          <button 
            className="absolute top-6 right-6 text-brand-light hover:text-brand-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={36} />
          </button>
          
          <img 
            src={selectedImage.url} 
            alt={selectedImage.alt} 
            className="max-w-full max-h-[85vh] object-contain rounded"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;

