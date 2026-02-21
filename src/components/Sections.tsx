import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, MapPin, Mail, Phone, ArrowRight, Heart, Instagram as InstagramIcon } from 'lucide-react';

const cld = (publicId: string, w: number) =>
  `https://res.cloudinary.com/dkn6tnxao/image/upload/c_scale,q_auto:good,w_${w}/v1/${publicId}`;

const srcSet = (publicId: string) =>
  `${cld(publicId, 400)} 400w, ${cld(publicId, 800)} 800w, ${cld(publicId, 1200)} 1200w, ${cld(publicId, 1920)} 1920w`;

const HERO_IMAGE = 'askari/awards/IMG_2967-Edit-Edit-Edit-3';

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-askari-black">
      <div className="absolute inset-0 z-0">
        <img
          src={cld(HERO_IMAGE, 1920)}
          srcSet={srcSet(HERO_IMAGE)}
          sizes="100vw"
          alt="Award-winning wildlife photography by Stephen Earle"
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
          Award-winning South African wildlife photographer with 17 years of field experience, including a decade photographing the Greater Kruger region and the last three years based in the Waterberg area near Vaalwater. Before dedicating myself full-time to wildlife photography, I practised as an attorney for more than 30 years — a background that shaped my approach: professional, calm, detail-oriented, and confident with international clients and high-expectation travellers. My work has earned multiple awards, has been widely published, and has been independently recognised for its artistic, commercial, and rarity value. I maintain a catalogue of more than 250,000 wildlife images, built across nearly two decades of dedicated fieldwork.
        </motion.p>
      </div>
    </section>
  );
}

export function Awards() {
  const awards = [
    "Fujifilm/Getaway Photographic Awards 2009 — Animal Behaviour — Certificate",
    "Fujifilm/Getaway Photographic Awards 2010 — Sasol Birds — Certificate",
    "Fujifilm/Getaway Photographic Awards 2010 — Sasol Birds — Winner",
    "Fujifilm/Getaway Photographic Awards 2011 — Birds — Certificate",
    "Fujifilm/Getaway Photographic Awards 2011 — Animal Behaviour — Certificate",
    "Published in South African & international wildlife platforms",
    "Work selected for fine-art prints and commercial collections"
  ];

  const CERTIFICATES_IMAGE = 'askari/awards/20101013_8889-Edit-3';

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

      <div className="max-w-4xl mx-auto px-6 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src={cld(CERTIFICATES_IMAGE, 1200)}
            srcSet={srcSet(CERTIFICATES_IMAGE)}
            sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
            alt="Framed Fujifilm/Getaway photographic award certificates"
            className="w-full h-auto object-cover border border-white/10"
            loading="lazy"
          />
          <p className="text-center text-xs text-white/40 mt-4 tracking-widest uppercase">Framed Award Certificates</p>
        </motion.div>
      </div>
    </section>
  );
}

export function Featured() {
  const images = [
    { id: 'askari/awards/IMG_7673-Edit', title: 'Crowned Eagle Portrait' },
    { id: 'askari/wildlife/GY8F8547-Edit', title: 'Sunset Silhouette' },
    { id: 'askari/awards/GY8F6108-Edit', title: 'Golden Light Encounter' },
    { id: 'askari/wildlife/EF8A0589', title: 'Elephant Close-up' },
    { id: 'askari/birdlife/GY8F9280-Edit', title: 'Fish Eagle' },
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src={cld('askari/wildlife/GY8F8784', 1920)}
          alt="Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
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
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="min-w-[300px] md:min-w-[400px] aspect-[3/4] snap-center relative group overflow-hidden touch-pan-x"
          >
            <img
              src={cld(img.id, 800)}
              srcSet={srcSet(img.id)}
              sizes="(max-width: 640px) 400px, 400px"
              alt={img.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
              <span className="font-serif text-2xl tracking-wider translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.title}</span>
            </div>
          </motion.div>
        ))}
        <div className="min-w-[1px] shrink-0" aria-hidden="true" />
      </div>

      <div className="relative z-10 flex justify-center mt-8">
        <a href="#gallery" className="flex items-center gap-3 uppercase tracking-widest text-sm text-askari-gold hover:text-askari-white transition-colors group">
          View Full Collection
          <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
    </section>
  );
}

export function BehindLens() {
  const blocks = [
    {
      id: 'askari/wildlife/20100910_2400-Edit-5',
      text: "The Waterberg is home. Every sunrise offers something the day before didn't."
    },
    {
      id: 'askari/wildlife/EF8A8300',
      text: "Patience is the most important piece of equipment. The bush rewards those who wait."
    },
    {
      id: 'askari/wildlife/GY8F7836',
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
                  <img
                    src={cld(block.id, 800)}
                    srcSet={srcSet(block.id)}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    alt="Behind the lens"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
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
    { name: "Freelance Photographic Hosting on Game Drives", desc: "Calm, expert, in-vehicle photographic coaching on scheduled drives. All skill levels supported." },
    { name: "Private Guest Photographic Guiding", desc: "Exclusive one-on-one or family photographic safaris for VIP and high-expectation clients." },
    { name: "Guide & Staff Photography Enrichment", desc: "Short, high-impact training for lodge guiding teams on light, positioning, and guest support." },
    { name: "Lightroom & Photoshop Teaching", desc: "Private or small-group editing sessions for guests or staff, between drives or as evening activities." },
    { name: "Lodge Wildlife Content Creation", desc: "High-quality imagery for marketing, websites, social media, and guest welcome packs." },
    { name: "Guest Photoshoots & Lodge Lifestyle Photography", desc: "Professional portrait sessions for families, couples, honeymooners. 20–45 edited images, same-day delivery available." },
    { name: "Safari Story Packages", desc: "Complete visual narratives delivered over 2–5 days." },
    { name: "On-drive Guest Portraits & Candid Coverage", desc: "Natural, candid storytelling during game drives." }
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
          Available for private wildlife photography safaris, lodge and property shoots, photographic hosting, and bespoke safari experiences across the Waterberg and Greater Kruger.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="bg-white/5 p-6 border border-white/10"
            >
              <div className="flex items-start gap-4">
                <Camera className="text-askari-gold shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-serif text-lg mb-2">{service.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h3 className="uppercase tracking-widest text-xs font-semibold mb-4 text-askari-gold">Regions Covered</h3>
          <p className="text-white/50 text-sm leading-relaxed max-w-2xl mx-auto">
            Welgevonden Game Reserve &bull; Marakele National Park &bull; Lapalala Wilderness &bull; Mabula & Mabalingwe &bull; Klaserie, Manyeleti, Balule, Karongwe (Greater Kruger corridor) &bull; Greater Kruger & Mpumalanga &bull; East Africa & Botswana
          </p>
        </motion.div>

        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="inline-block border border-askari-gold text-askari-gold px-8 py-4 uppercase tracking-widest text-sm hover:bg-askari-gold hover:text-askari-black transition-colors"
        >
          Enquire About a Commission
        </motion.a>
      </div>
    </section>
  );
}

export function Instagram() {
  const posts = [
    { id: 'askari/awards/IMG_2967-Edit-Edit-Edit-3', title: 'Award-winning study' },
    { id: 'askari/birdlife/GY8F9931-Edit', title: 'Waterberg raptor' },
    { id: 'askari/wildlife/zebduel', title: 'Zebra duel' },
    { id: 'askari/wildlife/EF8A0589', title: 'Elephant close-up' },
    { id: 'askari/wildlife/GY8F0979', title: 'White rhino' },
    { id: 'askari/birdlife/GY8F8687', title: 'Yellow-billed hornbill' },
    { id: 'askari/wildlife/GY8F0535-Edit', title: 'Elephant crossing' },
    { id: 'askari/awards/53240470-468404837', title: 'Leopard at dusk' },
  ];

  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="font-serif text-3xl mb-2">Follow the Journey</h2>
        <a href="https://www.instagram.com/askariphotography/" target="_blank" rel="noopener noreferrer" className="text-askari-gold tracking-widest uppercase text-sm hover:text-askari-white transition-colors">@askariphotography</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2 max-w-7xl mx-auto px-1 md:px-6">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="aspect-square relative group overflow-hidden bg-white/5"
          >
            <img
              src={cld(post.id, 400)}
              srcSet={`${cld(post.id, 400)} 400w, ${cld(post.id, 800)} 800w`}
              sizes="(max-width: 640px) 50vw, 25vw"
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="flex items-center gap-2 text-white">
                <Heart size={20} className="fill-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="https://www.instagram.com/askariphotography/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mx-auto justify-center uppercase tracking-widest text-sm hover:text-askari-gold transition-colors">
          <InstagramIcon size={16} /> Follow on Instagram
        </a>
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
        <img
          src={cld('askari/wildlife/GY8F5890', 1920)}
          alt="Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
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
                <option value="hosting" className="bg-askari-black text-white">Photographic Hosting</option>
                <option value="guiding" className="bg-askari-black text-white">Private Guiding</option>
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
              <p className="text-white/60">Waterberg, Vaalwater, Limpopo<br/>South Africa</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="text-askari-gold shrink-0 mt-1" size={24} />
            <div>
              <h3 className="uppercase tracking-widest text-sm font-semibold mb-1">Email</h3>
              <a href="mailto:spe@heatt.co.za" className="text-white/60 hover:text-askari-gold transition-colors">spe@heatt.co.za</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="text-askari-gold shrink-0 mt-1" size={24} />
            <div>
              <h3 className="uppercase tracking-widest text-sm font-semibold mb-1">WhatsApp</h3>
              <a href="https://wa.me/27714229928" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-askari-gold transition-colors">+27 071 422 9928</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
