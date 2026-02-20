import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';

const categories = ["Big Five & Predators", "Birdlife", "Landscapes & Sunsets", "Macro & Detail", "Black & White", "Conservation"];

const generateImages = (category: string) => {
  return Array.from({ length: 12 }).map((_, i) => ({
    id: `${category.replace(/\s+/g, '-').toLowerCase()}-${i}`,
    src: `https://picsum.photos/seed/${category.replace(/\s+/g, '')}${i}/800/${Math.random() > 0.5 ? '1000' : '600'}`,
    title: `${category} Study ${i + 1}`,
    caption: "Captured in the Greater Kruger region during golden hour.",
    info: "Nikon Z8 | 400mm f/2.8 | 1/2000s | ISO 640",
    price: 1200
  }));
};

export function Gallery({ onAddToCart }: { onAddToCart: (item: any) => void }) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [images, setImages] = useState(generateImages(categories[0]));
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setImages(generateImages(cat));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const img = images[lightboxIndex];
      onAddToCart({
        id: img.id,
        title: img.title,
        image: img.src,
        format: 'Fine Art Paper',
        size: 'A3',
        price: img.price,
        quantity: 1
      });
    }
  };

  return (
    <section id="gallery" className="py-32 bg-askari-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
          <h2 className="font-serif text-4xl mb-6 md:mb-0">The Gallery</h2>
          <div className="flex overflow-x-auto no-scrollbar gap-6 w-full md:w-auto pb-2">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`whitespace-nowrap uppercase tracking-widest text-xs transition-colors ${activeCategory === cat ? 'text-askari-gold' : 'text-white/50 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {images.map((img, i) => (
            <motion.div 
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.1 }}
              className="break-inside-avoid cursor-pointer group relative"
              onClick={() => setLightboxIndex(i)}
            >
              <img src={img.src} alt={img.title} className="w-full h-auto object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="font-serif text-xl tracking-wider">View</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-askari-black/95 backdrop-blur flex items-center justify-center p-4 md:p-12"
            onClick={() => setLightboxIndex(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white z-10" onClick={() => setLightboxIndex(null)}>
              <X size={32} />
            </button>
            
            <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10 p-4" onClick={prevImage}>
              <ChevronLeft size={48} strokeWidth={1} />
            </button>
            
            <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-10 p-4" onClick={nextImage}>
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            <div className="flex flex-col md:flex-row max-w-6xl w-full max-h-full bg-black/50 border border-white/10" onClick={e => e.stopPropagation()}>
              <div className="w-full md:w-2/3 h-[50vh] md:h-[80vh] flex items-center justify-center p-4 bg-black">
                <img src={images[lightboxIndex].src} alt={images[lightboxIndex].title} className="max-w-full max-h-full object-contain" />
              </div>
              <div className="w-full md:w-1/3 p-8 flex flex-col justify-center">
                <h3 className="font-serif text-3xl mb-4">{images[lightboxIndex].title}</h3>
                <p className="text-white/70 mb-6 text-sm leading-relaxed">{images[lightboxIndex].caption}</p>
                <div className="text-xs text-white/40 tracking-widest uppercase mb-8 space-y-2">
                  <p>Camera Info:</p>
                  <p className="text-askari-gold">{images[lightboxIndex].info}</p>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="flex items-center justify-center gap-2 bg-askari-gold text-askari-black py-4 uppercase tracking-widest text-sm font-medium hover:bg-askari-white transition-colors"
                >
                  <ShoppingCart size={18} /> Add to Cart — R1,200
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
