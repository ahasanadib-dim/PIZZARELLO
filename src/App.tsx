/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Pizza, 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  ChevronRight, 
  Bike, 
  ShoppingBag, 
  Utensils, 
  Instagram, 
  Facebook, 
  Twitter,
  Menu as MenuIcon,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
}

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
}

// --- Data ---
const PIZZA_MENU: MenuItem[] = [
  {
    id: 1,
    name: "Classic Chicken Pizza",
    description: "Tender chicken, mozzarella cheese, and our secret herb-infused tomato sauce.",
    price: "290 BDT",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Margherita Dream",
    description: "Simple yet perfect: Fresh basil, creamy mozzarella, and extra virgin olive oil.",
    price: "220 BDT",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Smokey Sausage Pizza",
    description: "Double smokey sausage, bell peppers, onions, and spicy jalapenos for a bold kick.",
    price: "360 BDT",
    image: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=800&auto=format&fit=crop",
    popular: true
  }
];

const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Adnan Sami",
    rating: 5,
    comment: "The best local pizza spot in Uttara! The cheese blend is actually smooth and stretches perfectly."
  },
  {
    id: 2,
    author: "Nabila Tabassum",
    rating: 3,
    comment: "Great toppings, but sometimes the delivery is a bit late. Still my favorite for the price."
  },
  {
    id: 3,
    author: "Rayhan Ahmed",
    rating: 4,
    comment: "Smokey Sausage is a must-try. Affordable and way better than some big chains."
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/90 backdrop-blur-md py-4 shadow-xl border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <Pizza className="text-brand-red w-8 h-8 group-hover:rotate-12 transition-transform" />
          <span className="text-2xl font-display font-black tracking-tighter text-white">PIZZARELLO</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#menu" className="text-sm font-semibold uppercase tracking-widest hover:text-brand-red transition-colors">Menu</a>
          <a href="#about" className="text-sm font-semibold uppercase tracking-widest hover:text-brand-red transition-colors">About</a>
          <a href="#location" className="text-sm font-semibold uppercase tracking-widest hover:text-brand-red transition-colors">Contact</a>
          <button className="bg-brand-red hover:bg-brand-orange text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-brand-red/20 active:scale-95">
            ORDER NOW
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-black border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            <a href="#menu" onClick={() => setIsOpen(false)} className="text-lg font-bold hover:text-brand-red">Menu</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-bold hover:text-brand-red">About</a>
            <a href="#location" onClick={() => setIsOpen(false)} className="text-lg font-bold hover:text-brand-red">Contact</a>
            <button className="bg-brand-red text-white py-3 rounded-lg font-bold">ORDER ONLINE</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black selection:bg-brand-red selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=1920&auto=format&fit=crop" 
            alt="Delicious Pizza Background"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 bg-brand-red/20 border border-brand-red text-brand-red text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
              Now Open in Dhaka
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter text-balance uppercase">
              Fresh, Hot <br />
              <span className="text-brand-red">& Delicious</span> <br />
              Pizza in Dhaka
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-md">
              Dine-in, Takeaway & Fast Delivery. Experience the best road-side pizza café vibes today.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-red hover:bg-brand-orange text-white px-10 py-4 rounded-full font-black flex items-center gap-2 transition-all shadow-xl hover:shadow-brand-red/30 active:scale-95">
                ORDER NOW <ChevronRight size={18} />
              </button>
              <a href="#menu" className="border-2 border-white hover:bg-white hover:text-brand-black text-white px-10 py-4 rounded-full font-black transition-all active:scale-95 text-center">
                VIEW MENU
              </a>
            </div>
          </motion.div>
        </div>

        {/* Animated Badge */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute -right-20 bottom-20 hidden lg:block"
        >
          <div className="w-48 h-48 border-2 border-white/20 rounded-full flex items-center justify-center p-4">
            <div className="text-center text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
              Hand Made • Fresh Toppings • Oven Baked • High Quality •
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-brand-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: <Utensils className="text-brand-red" />, title: "Dine-in Available", desc: "Cozy road-side café environment." },
              { icon: <ShoppingBag className="text-brand-orange" />, title: "Kerbside Pickup", desc: "Quick & easy pickup on the go." },
              { icon: <Bike className="text-brand-red" />, title: "Home Delivery", desc: "Fast delivery within our radius." },
              { icon: <Pizza className="text-brand-orange" />, title: "Affordability", desc: "Premium taste at local prices." },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-red/10 group-hover:scale-110 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 bg-brand-black relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl text-left">
              <span className="text-brand-red font-black uppercase text-sm tracking-widest mb-4 inline-block italic">Crafted with Love</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                Our Popular <br />
                <span className="text-brand-orange">Creations</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-xs text-sm uppercase tracking-wider mb-2">
              Prices range from 200–400 BDT. The best value pizza in the city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PIZZA_MENU.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="group bg-neutral-900 rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-brand-red/30 transition-all hover:bg-neutral-800 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  {item.popular && (
                    <div className="absolute top-6 right-6 bg-brand-red text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-lg">
                      Popular Pick
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-black uppercase tracking-tight leading-tight group-hover:text-brand-red transition-colors">{item.name}</h3>
                    <span className="text-brand-red font-black text-xl">{item.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                    {item.description}
                  </p>
                  <button className="mt-auto w-full py-4 rounded-2xl border border-white/10 hover:bg-white hover:text-brand-black font-bold uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2">
                    ADD TO CART <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-brand-black overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?q=80&w=800&auto=format&fit=crop" 
                  alt="Roadside Pizza Cafe" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-red p-10 rounded-[2rem] shadow-2xl hidden md:block">
                <span className="text-5xl font-black block">10k+</span>
                <span className="text-xs font-bold uppercase tracking-widest opacity-80">Pizzas Served</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="text-brand-orange font-black uppercase text-sm tracking-widest mb-4 inline-block">The Pizzarello Story</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8 leading-[0.9]">
                Authentic <br />
                <span className="text-white">Roadside</span> <br />
                Cafe Vibes
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Pizzarello started as a humble local roadside cafe with a single goal: to make premium quality pizza accessible to everyone in Dhaka. We believe in the magic of a crunchy crust, fresh ingredients, and honest pricing.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Double Proofed Dough (24 Hours)",
                  "Signature Local Cheese Blend",
                  "Farmer-Sourced Vegetables",
                  "Chef-Crafted Secret Sauces"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wide">
                    <div className="w-2 h-2 rounded-full bg-brand-red" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="bg-white text-brand-black px-10 py-4 rounded-full font-black uppercase tracking-wider hover:bg-brand-red hover:text-white transition-all">
                LEARN MORE
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-32 bg-neutral-900 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1, 2, 3, 4].map(s => <Star key={s} size={24} className="fill-brand-orange text-brand-orange" />)}
              <Star size={24} className="fill-brand-orange/40 text-brand-orange/40" />
              <span className="ml-4 text-3xl font-black tracking-tighter">3.9/5</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">What Locals Say</h2>
            <p className="text-gray-500 max-w-md mx-auto">Real feedback from our regular customers in Dhaka.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((rev, idx) => (
              <motion.div 
                key={rev.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-brand-black p-10 rounded-[2.5rem] border border-white/5 flex flex-col"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-brand-red text-brand-red" />
                  ))}
                </div>
                <p className="text-lg italic text-gray-300 mb-10 flex-grow leading-relaxed">
                  "{rev.comment}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center font-bold">
                    {rev.author[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider">{rev.author}</h4>
                    <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Verified Customer</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="location" className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-brand-red font-black uppercase text-sm tracking-widest mb-4 inline-block">Visit Us</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-12 leading-[0.9]">
                Find Us <br />
                <span className="text-white">In Dhaka</span>
              </h2>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider mb-2">Address</h4>
                    <p className="text-gray-400">Rajuk Commercial Market, Road-05, Dhaka 1230, Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider mb-2">Phone</h4>
                    <p className="text-gray-400">01308-334490</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider mb-2">Hours</h4>
                    <p className="text-gray-400 italic">Open Daily: 1:00 PM – 11:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 flex gap-6">
                <a href="#" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-brand-red hover:border-brand-red transition-all">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="h-[500px] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4239843644084!2d90.40059347585093!3d23.87458148419615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c43777576f3d%3A0xe96280ced828308!2sRajuk%20Commercial%20Market!5e0!3m2!1sen!2sbd!4v1713506123456!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 pt-32 pb-10 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <Pizza className="text-brand-red w-8 h-8" />
                <span className="text-3xl font-display font-black tracking-tighter">PIZZARELLO</span>
              </div>
              <p className="text-gray-500 max-w-sm text-lg leading-relaxed">
                Dhaka's premier road-side pizza destination. We bring the heat, the stretch, and the crunch in every box.
              </p>
            </div>
            
            <div>
              <h4 className="font-black uppercase tracking-widest text-sm mb-8 text-white">Navigation</h4>
              <ul className="space-y-4 text-gray-500 font-bold uppercase text-xs tracking-wider">
                <li><a href="#" className="hover:text-brand-red transition-colors">Home</a></li>
                <li><a href="#menu" className="hover:text-brand-red transition-colors">Menu</a></li>
                <li><a href="#about" className="hover:text-brand-red transition-colors">About Us</a></li>
                <li><a href="#location" className="hover:text-brand-red transition-colors">Location</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-black uppercase tracking-widest text-sm mb-8 text-white">Socials</h4>
              <ul className="space-y-4 text-gray-500 font-bold uppercase text-xs tracking-wider">
                <li><a href="#" className="hover:text-brand-red transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">TikTok</a></li>
                <li><a href="#" className="hover:text-brand-red transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600 text-xs font-bold uppercase tracking-[0.2em]">
              © 2026 PIZZARELLO DHAKA. ALL RIGHTS RESERVED.
            </p>
            <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-gray-700">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
