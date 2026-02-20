import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, MapPin, Mail, Phone, ArrowRight, Heart, Instagram as InstagramIcon } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-askari-black">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/askarihero/1920/1080"
          alt="African Wildlife"
          className="w-full h-full object-cover animate-kenburns opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-askari-black" />
      </div>

      <div className="relative z-10 text-center px-6 mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="font-serif text-5xl md:text-8xl tracking-[0.3em] uppercase mb-6"
        >
          Askari
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="text-sm md:text-lg tracking-[0.2em] uppercase text-askari-gold mb-8"
        >
          Wildlife & Nature Photography
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 2.5 }}
          className="font-serif italic text-xl md:text-2xl text-white/80"
        >
          Capturing the untamed soul of Africa
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
        <div className="w-[1px] h-16 bg-white/20 overflow-hidden">
          <div className="w-full h-full bg-askari-gold animate-draw-line origin-top" />
        </div>
      </motion.div>
    </section>
  );
}

export function Intro() {
  return (
    <section className="py-32 px-6 bg-askari-black flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="font-serif text-3xl md:text-5xl leading-tight mb-12"
        >
          "Every photograph tells a story of patience, light, and the privilege of being in the right place at the right moment."
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-16 h-[1px] bg-askari-gold mx-auto mb-12 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white/60 leading-relaxed text-sm md:text-base"
        >
          Based in the Waterberg bushveld of Limpopo, Askari Photography documents the wildlife, landscapes, and raw beauty of southern Africa. With multiple photography awards and thousands of hours in the field, every image is a testament to the wild places we fight to protect.
        </motion.p>
      </div>
    </section>
  );
}

export function Awards() {
  const awards = [
    "Wildlife Photographer of the Year — Highly Commended",
    "Africa Geographic Photographer of the Year — Top 10",
    "Getaway Gallery Gold Award",
    "Waterberg Living — Featured Artist",
    "PSSA Salon Honours"
  ];

  return (
    <section id="awards" className="py-24 bg-[#0A0A0A] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="font-serif text-3xl tracking-widest uppercase text-center">Recognition</h2>
      </div>

      <div className="relative w-full flex overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 pl-6 pr-6 md:pl-12 md:pr-12 gap-6 scroll-pl-6 md:scroll-pl-12">
        {awards.map((award, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="min-w-[280px] md:min-w-[350px] snap-center bg-askari-black border border-askari-gold/20 p-8 flex items-center justify-center text-center h-40 touch-pan-x"
          >
            <p className="font-serif text-lg text-askari-white/90">{award}</p>
          </motion.div>
        ))}
        <div className="min-w-[1px] shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}

export function Featured() {
  const images = [
    "https://picsum.photos/seed/waterberg1/800/1000",
    "https://picsum.photos/seed/waterberg2/800/1000",
    "https://picsum.photos/seed/waterberg3/800/1000",
    "https://picsum.photos/seed/waterberg4/800/1000",
    "https://picsum.photos/seed/waterberg5/800/1000",
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img src="https://picsum.photos/seed/bgfeatured/1920/1080" alt="Background" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-askari-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl mb-6"
        >
          The Waterberg Collection
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 max-w-2xl leading-relaxed"
        >
          A curated series capturing the dramatic beauty of the Waterberg Biosphere — from misty mountain ridges to ancient rock formations, bushveld sunsets to the wildlife that calls this landscape home.
        </motion.p>
      </div>

      <div className="relative z-10 flex overflow-x-auto no-scrollbar snap-x snap-mandatory pl-6 pr-6 md:pl-[10vw] md:pr-[10vw] gap-8 pb-12 scroll-pl-6 md:scroll-pl-[10vw]">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="min-w-[300px] md:min-w-[400px] aspect-[3/4] snap-center relative group overflow-hidden touch-pan-x"
          >
            <img src={src} alt="Waterberg Collection" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="font-serif text-2xl tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Image</span>
            </div>
          </motion.div>
        ))}
        <div className="min-w-[1px] shrink-0" aria-hidden="true" />
      </div>

      <div className="relative z-10 flex justify-center mt-8">
        <button className="flex items-center gap-3 uppercase tracking-widest text-sm text-askari-gold hover:text-askari-white transition-colors group">
          View Full Collection
          <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
    </section>
  );
}

export function BehindLens() {
  const blocks = [
    {
      img: "https://picsum.photos/seed/behind1/800/600",
      text: "The Waterberg is home. Every sunrise offers something the day before didn't."
    },
    {
      img: "https://picsum.photos/seed/behind2/800/600",
      text: "Patience is the most important piece of equipment. The bush rewards those who wait."
    },
    {
      img: "https://picsum.photos/seed/behind3/800/600",
      text: "Conservation isn't just a cause — it's the reason every image matters."
    }
  ];

  return (
    <section className="py-32 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-4xl text-center mb-24">Behind the Lens</h2>

        <div className="space-y-32">
          {blocks.map((block, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={block.img} alt="Behind the lens" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w-full md:w-1/2 flex justify-center"
              >
                <p className="font-serif text-2xl md:text-3xl leading-relaxed max-w-md text-center md:text-left">
                  "{block.text}"
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Commissions() {
  const services = [
    "Lodge & Property Photography",
    "Wildlife Safari Photography Experiences",
    "Commercial & Editorial Assignments",
    "Conservation & Research Documentation",
    "Aerial/Drone Photography"
  ];

  return (
    <section id="commissions" className="py-32 bg-askari-black border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl mb-8"
        >
          Commission Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 mb-16 leading-relaxed"
        >
          Available for private wildlife photography safaris, lodge and property shoots, commercial assignments, and conservation documentation projects.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="bg-white/5 p-6 border border-white/10 flex items-center gap-4"
            >
              <Camera className="text-askari-gold shrink-0" size={24} />
              <span className="font-serif text-lg">{service}</span>
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="border border-askari-gold text-askari-gold px-8 py-4 uppercase tracking-widest text-sm hover:bg-askari-gold hover:text-askari-black transition-colors"
        >
          Enquire About a Commission
        </motion.button>
      </div>
    </section>
  );
}

export function Instagram() {
  const posts = Array.from({ length: 8 }).map((_, i) => `https://picsum.photos/seed/insta${i}/400/400`);

  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="font-serif text-3xl mb-2">Follow the Journey</h2>
        <p className="text-askari-gold tracking-widest uppercase text-sm">@askariphotography</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2 max-w-7xl mx-auto px-1 md:px-6">
        {posts.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="aspect-square relative group overflow-hidden bg-white/5"
          >
            <img src={src} alt="Instagram post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex items-center gap-2 text-white">
                <Heart size={20} className="fill-white" />
                <span className="font-medium">{Math.floor(Math.random() * 500) + 100}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="flex items-center gap-2 mx-auto uppercase tracking-widest text-sm hover:text-askari-gold transition-colors">
          <InstagramIcon size={16} /> Follow on Instagram
        </button>
      </div>
    </section>
  );
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      console.error('Form submission error:', err);
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-askari-black overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <img src="https://picsum.photos/seed/contactbg/1920/1080" alt="Background" className="w-full h-full object-cover" loading="lazy" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-serif text-4xl mb-8">Get in Touch</h2>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-askari-gold/10 border border-askari-gold/30 p-8 text-center"
            >
              <h3 className="font-serif text-2xl mb-3 text-askari-gold">Thank You!</h3>
              <p className="text-white/70">Your message has been sent successfully. I'll get back to you soon.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm uppercase tracking-widest text-askari-gold hover:text-askari-white transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" name="name" placeholder="Name" required className="w-full bg-transparent border-b border-white/20 pb-3 focus:outline-none focus:border-askari-gold transition-colors" />
                <input type="email" name="email" placeholder="Email" required className="w-full bg-transparent border-b border-white/20 pb-3 focus:outline-none focus:border-askari-gold transition-colors" />
              </div>
              <input type="tel" name="phone" placeholder="Phone" className="w-full bg-transparent border-b border-white/20 pb-3 focus:outline-none focus:border-askari-gold transition-colors" />
              <select name="enquiry-type" className="w-full bg-transparent border-b border-white/20 pb-3 focus:outline-none focus:border-askari-gold transition-colors text-white/70 appearance-none">
                <option value="" disabled selected>Enquiry Type</option>
                <option value="print" className="bg-askari-black text-white">Print Order Query</option>
                <option value="commission" className="bg-askari-black text-white">Commission Request</option>
                <option value="collab" className="bg-askari-black text-white">Collaboration</option>
                <option value="general" className="bg-askari-black text-white">General</option>
              </select>
              <textarea name="message" placeholder="Message" rows={4} required className="w-full bg-transparent border-b border-white/20 pb-3 focus:outline-none focus:border-askari-gold transition-colors resize-none"></textarea>
              <button type="submit" className="bg-askari-gold text-askari-black px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-askari-white transition-colors w-full md:w-auto">
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="flex flex-col justify-center space-y-8 md:pl-12 md:border-l border-white/10">
          <div className="flex items-start gap-4">
            <MapPin className="text-askari-gold shrink-0 mt-1" size={24} />
            <div>
              <h3 className="uppercase tracking-widest text-sm font-semibold mb-1">Location</h3>
              <p className="text-white/60">Waterberg, Limpopo<br/>South Africa</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="text-askari-gold shrink-0 mt-1" size={24} />
            <div>
              <h3 className="uppercase tracking-widest text-sm font-semibold mb-1">Email</h3>
              <p className="text-white/60">info@askariphotography.co.za</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="text-askari-gold shrink-0 mt-1" size={24} />
            <div>
              <h3 className="uppercase tracking-widest text-sm font-semibold mb-1">WhatsApp</h3>
              <p className="text-white/60">+27 (0) 82 123 4567</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
