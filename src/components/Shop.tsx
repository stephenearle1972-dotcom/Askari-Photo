import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart } from 'lucide-react';

const products = Array.from({ length: 8 }).map((_, i) => ({
  id: `print-${i}`,
  src: `https://picsum.photos/seed/shop${i}/800/800`,
  title: `Waterberg Series ${i + 1}`,
  basePrice: 1200,
  description: "A stunning fine art print capturing the essence of the African bushveld. Printed on archival museum-quality paper."
}));

export function Shop({ onAddToCart }: { onAddToCart: (item: any) => void }) {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [format, setFormat] = useState('Fine Art Paper');
  const [size, setSize] = useState('A3');
  const [quantity, setQuantity] = useState(1);

  const pricing: Record<string, Record<string, number>> = {
    'Fine Art Paper': { 'A3': 1200, 'A2': 2200, 'A1': 3500, 'A0': 5500 },
    'Canvas': { 'A3': 1500, 'A2': 2800, 'A1': 4200, 'A0': 6800 },
    'Metal Print': { 'A3': 2500, 'A2': 4500, 'A1': 7500, 'A0': 12000 },
    'Digital Download': { 'High-Res': 450 }
  };

  const currentPrice = format === 'Digital Download' ? pricing[format]['High-Res'] : pricing[format][size];

  const handleAddToCart = () => {
    onAddToCart({
      id: selectedProduct.id,
      title: selectedProduct.title,
      image: selectedProduct.src,
      format,
      size: format === 'Digital Download' ? 'High-Res' : size,
      price: currentPrice,
      quantity
    });
    setSelectedProduct(null);
    // Reset selections
    setFormat('Fine Art Paper');
    setSize('A3');
    setQuantity(1);
  };

  return (
    <section id="shop" className="py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl mb-4">Fine Art Prints</h2>
          <p className="text-white/60 tracking-widest uppercase text-sm">Museum-quality prints for your home, lodge, or office</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="aspect-square overflow-hidden mb-4 bg-white/5 relative">
                <img src={product.src} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-askari-black/80 text-white px-6 py-2 uppercase tracking-widest text-xs border border-white/20">View Options</span>
                </div>
              </div>
              <h3 className="font-serif text-xl mb-1">{product.title}</h3>
              <p className="text-askari-gold text-sm">From R{product.basePrice.toLocaleString()}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-askari-black/95 backdrop-blur flex items-center justify-center p-4 md:p-12 overflow-y-auto"
            onClick={() => setSelectedProduct(null)}
          >
            <div className="max-w-5xl w-full bg-[#0D0D0D] border border-white/10 flex flex-col md:flex-row relative my-auto" onClick={e => e.stopPropagation()}>
              <button className="absolute top-4 right-4 text-white/50 hover:text-white z-10" onClick={() => setSelectedProduct(null)}>
                <X size={24} />
              </button>
              
              <div className="w-full md:w-1/2 bg-black p-8 flex items-center justify-center min-h-[40vh]">
                <img src={selectedProduct.src} alt={selectedProduct.title} className="max-w-full max-h-[70vh] object-contain shadow-2xl" />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                <h3 className="font-serif text-3xl mb-2">{selectedProduct.title}</h3>
                <p className="text-askari-gold text-xl mb-6">R{currentPrice.toLocaleString()}</p>
                <p className="text-white/60 text-sm leading-relaxed mb-8">{selectedProduct.description}</p>
                
                <div className="space-y-6 flex-1">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-white/50 mb-3">Format</label>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.keys(pricing).map(f => (
                        <button 
                          key={f}
                          onClick={() => setFormat(f)}
                          className={`py-2 text-sm border transition-colors ${format === f ? 'border-askari-gold text-askari-gold bg-askari-gold/10' : 'border-white/20 text-white/70 hover:border-white/50'}`}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </div>

                  {format !== 'Digital Download' && (
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-white/50 mb-3">Size</label>
                      <div className="grid grid-cols-4 gap-2">
                        {['A3', 'A2', 'A1', 'A0'].map(s => (
                          <button 
                            key={s}
                            onClick={() => setSize(s)}
                            className={`py-2 text-sm border transition-colors ${size === s ? 'border-askari-gold text-askari-gold bg-askari-gold/10' : 'border-white/20 text-white/70 hover:border-white/50'}`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-white/50 mb-3">Quantity</label>
                    <div className="flex items-center border border-white/20 w-32">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 text-white/50 hover:text-white">-</button>
                      <span className="flex-1 text-center">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 text-white/50 hover:text-white">+</button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <button 
                    onClick={handleAddToCart}
                    className="w-full flex items-center justify-center gap-2 bg-askari-gold text-askari-black py-4 uppercase tracking-widest text-sm font-medium hover:bg-askari-white transition-colors mb-4"
                  >
                    <ShoppingCart size={18} /> Add to Cart — R{(currentPrice * quantity).toLocaleString()}
                  </button>
                  <p className="text-center text-xs text-white/40">All prints are produced on archival-quality materials. Delivery 7-14 business days.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
