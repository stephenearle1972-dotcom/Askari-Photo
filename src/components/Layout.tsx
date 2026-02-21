import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'img' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-askari-gold pointer-events-none z-[100] mix-blend-difference flex items-center justify-center"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: isHovering ? 2 : 1,
        backgroundColor: isHovering ? 'rgba(201, 168, 76, 0.2)' : 'transparent'
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
    >
      {isHovering && <div className="w-1 h-1 bg-askari-gold rounded-full" />}
    </motion.div>
  );
}

export function Navbar({ cartCount, onOpenCart }: { cartCount: number, onOpenCart: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Gallery', href: '#gallery' },
    { name: 'Shop', href: '#shop' },
    { name: 'Awards', href: '#awards' },
    { name: 'Commissions', href: '#commissions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-askari-black/90 backdrop-blur-md py-4 shadow-lg shadow-black/50' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="font-serif text-2xl tracking-[0.2em] text-askari-white uppercase">Askari</a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-sm uppercase tracking-widest hover:text-askari-gold transition-colors">
                {link.name}
              </a>
            ))}
            <button onClick={onOpenCart} className="relative p-2 hover:text-askari-gold transition-colors">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-askari-amber text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button onClick={onOpenCart} className="relative p-3">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-askari-amber text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2.5">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-askari-black flex flex-col items-center justify-center"
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-6 right-6 p-2 text-askari-white hover:text-askari-gold">
              <X size={32} />
            </button>
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl tracking-widest uppercase hover:text-askari-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Cart({ isOpen, onClose, items, onRemove }: any) {
  const total = items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-askari-black border-l border-white/10 z-[80] flex flex-col"
          >
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="font-serif text-2xl tracking-wider">Your Cart</h2>
              <button onClick={onClose} className="hover:text-askari-gold transition-colors"><X size={24} /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <p className="text-white/50 text-center mt-10">Your cart is empty.</p>
              ) : (
                items.map((item: any, index: number) => (
                  <div key={index} className="flex gap-4">
                    <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                    <div className="flex-1">
                      <h3 className="font-serif text-lg">{item.title}</h3>
                      <p className="text-xs text-white/50">{item.format} - {item.size}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm">Qty: {item.quantity}</span>
                        <span className="text-askari-gold">R{item.price.toLocaleString()}</span>
                      </div>
                    </div>
                    <button onClick={() => onRemove(index)} className="text-white/30 hover:text-red-400 transition-colors h-fit">
                      <X size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-white/10 bg-askari-black">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg uppercase tracking-wider">Total</span>
                  <span className="font-serif text-2xl text-askari-gold">R{total.toLocaleString()}</span>
                </div>
                <button className="w-full bg-askari-gold text-askari-black py-4 uppercase tracking-widest font-medium hover:bg-askari-white transition-colors">
                  Checkout with PayFast
                </button>
                <p className="text-center text-xs text-white/40 mt-4">Secure payments via PayFast — South Africa's trusted payment gateway</p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#050505] pt-20 pb-10 px-6 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div>
          <h2 className="font-serif text-3xl tracking-[0.2em] uppercase mb-6">Askari</h2>
          <p className="text-sm text-white/50 leading-relaxed max-w-xs">
            Capturing the untamed soul of Africa. Fine art wildlife and nature photography from the Waterberg, Limpopo.
          </p>
        </div>
        <div>
          <h3 className="uppercase tracking-widest text-xs font-semibold mb-6 text-askari-gold">Explore</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li><a href="#gallery" className="hover:text-askari-white transition-colors">The Gallery</a></li>
            <li><a href="#shop" className="hover:text-askari-white transition-colors">Fine Art Prints</a></li>
            <li><a href="#commissions" className="hover:text-askari-white transition-colors">Commissions</a></li>
            <li><a href="#contact" className="hover:text-askari-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="uppercase tracking-widest text-xs font-semibold mb-6 text-askari-gold">Connect</h3>
          <div className="flex space-x-4 mb-6">
            <a href="https://www.instagram.com/askariphotography/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-askari-white transition-colors"><Instagram size={20} /></a>
            <a href="https://www.facebook.com/AskariPhoto/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-askari-white transition-colors"><Facebook size={20} /></a>
          </div>
          <p className="text-xs text-white/50 mb-2">Prints shipped nationwide via secure courier.</p>
          <a href="https://wa.me/27714229928" target="_blank" rel="noopener noreferrer" className="text-xs text-askari-gold hover:text-askari-white transition-colors">WhatsApp: +27 071 422 9928</a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-white/40">
        <div>
          <p>&copy; 2025 Askari Photo. All rights reserved.</p>
          <p className="mt-1">All images &copy; Stephen Earle / Askari Photo</p>
        </div>
        <button onClick={scrollToTop} className="mt-4 md:mt-0 flex items-center gap-2 hover:text-askari-gold transition-colors">
          Back to top <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
