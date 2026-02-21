import React, { useState, useEffect } from 'react';
import { Navbar, Footer, CustomCursor, Cart } from './components/Layout';
import { Hero, Intro, Awards, BehindLens, Commissions, Instagram, Contact } from './components/Sections';
import { Gallery } from './components/Gallery';
import { Shop } from './components/Shop';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>(() => {
    const saved = localStorage.getItem('askari_cart');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem('askari_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  const addToCart = (item: any) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id && i.format === item.format && i.size === item.size);
      if (existing) {
        return prev.map(i => i === existing ? { ...i, quantity: i.quantity + item.quantity } : i);
      }
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-askari-black min-h-screen text-askari-white selection:bg-askari-gold selection:text-askari-black">
      <CustomCursor />
      <Navbar cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} onOpenCart={() => setIsCartOpen(true)} />
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} items={cartItems} onRemove={removeFromCart} />
      
      <main>
        <Hero />
        <Intro />
        <Awards />
        <Gallery onAddToCart={addToCart} />
        <Shop onAddToCart={addToCart} />
        <BehindLens />
        <Commissions />
        <Instagram />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
