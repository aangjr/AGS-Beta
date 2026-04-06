/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logo, LogoTostem  } from "@/assets/images";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Instagram, 
  CheckCircle2, 
  Menu, 
  X, 
  ChevronRight,
  Globe,
  ShieldCheck,
  Zap,
  Maximize,
  Layers
} from 'lucide-react';

// --- Types ---
type Language = 'id' | 'en';

interface Content {
  nav: {
    home: string;
    about: string;
    products: string;
    contact: string;
    cta: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    highlight: string;
  };
  products: {
    title: string;
    items: {
      name: string;
      series: string;
      description: string;
      image: string;
    }[];
  };
  whyUs: {
    title: string;
    items: {
      title: string;
      desc: string;
      icon: any;
    }[];
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
    mapPlaceholder: string;
  };
  footer: {
    rights: string;
  };
}

// --- Content Data ---
const translations: Record<Language, Content> = {
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang Kami',
      products: 'Produk',
      contact: 'Kontak',
      cta: 'Konsultasi Gratis'
    },
    hero: {
      headline: 'Transformasi Ruang dengan Presisi Jepang',
      subheadline: 'Aplikator Resmi Tostem di Indonesia. Menghadirkan solusi jendela dan pintu aluminium berkualitas tinggi untuk hunian modern.',
      cta: 'Lihat Katalog'
    },
    about: {
      title: 'Tentang AGS',
      description: 'PT Alumindo Glass Solution (AGS) adalah mitra terpercaya Tostem yang berdedikasi untuk memberikan keunggulan dalam setiap instalasi. Kami fokus pada kualitas pengerjaan (workmanship) yang presisi dan layanan purna jual yang handal.',
      highlight: 'Kualitas Tanpa Kompromi, Estetika Abadi.'
    },
    products: {
      title: 'Koleksi Tostem',
      items: [
        {
          name: 'Grants Series',
          series: 'Flagship Luxury',
          description: 'Seri termewah dari TOSTEM dengan desain frame yang sangat tipis untuk memaksimalkan pandangan dan cahaya alami.',
          image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800'
        },
        {
          name: 'Atis Series',
          series: 'Minimalist Design',
          description: 'Menonjolkan keindahan dalam kesederhanaan. Desain minimalis yang menyatu sempurna dengan arsitektur modern.',
          image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800'
        },
        {
          name: 'Giesta',
          series: 'Entrance Doors',
          description: 'Pintu masuk berkualitas tinggi yang menggabungkan keamanan maksimal dengan desain kayu atau metal yang elegan.',
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
        },
        {
          name: 'P7 Series',
          series: 'Performance & Durability',
          description: 'Dirancang untuk ketahanan cuaca ekstrem dan performa jangka panjang tanpa mengabaikan estetika.',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
        }
      ]
    },
    whyUs: {
      title: 'Mengapa Memilih AGS?',
      items: [
        {
          title: 'Aplikator Resmi Bersertifikat',
          desc: 'Kami adalah mitra resmi yang diakui oleh Tostem Indonesia.',
          icon: ShieldCheck
        },
        {
          title: 'Instalasi Presisi',
          desc: 'Pemasangan dengan standar kualitas Jepang yang ketat.',
          icon: Zap
        },
        {
          title: 'Tahan Cuaca & Awet',
          desc: 'Material aluminium premium yang tahan terhadap korosi dan cuaca ekstrem.',
          icon: Maximize
        },
        {
          title: 'Solusi Kustom',
          desc: 'Desain yang dapat disesuaikan dengan kebutuhan arsitektur Anda.',
          icon: Layers
        }
      ]
    },
    contact: {
      title: 'Hubungi Kami',
      address: 'Jl. Menteng Niaga, RT.1/RW.8, Ujung Menteng, Kec. Cakung, Kota Jakarta Timur, Jakarta 13960',
      phone: '0811-8000-2535',
      email: 'info@alumindoglass.com',
      mapPlaceholder: 'Peta Lokasi AGS'
    },
    footer: {
      rights: 'Hak Cipta Terpelihara.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      products: 'Products',
      contact: 'Contact',
      cta: 'Free Consultation'
    },
    hero: {
      headline: 'Transforming Spaces with Japanese Precision',
      subheadline: 'Official Tostem Applicator in Indonesia. Delivering high-quality aluminum window and door solutions for modern living.',
      cta: 'View Catalog'
    },
    about: {
      title: 'About AGS',
      description: 'PT Alumindo Glass Solution (AGS) is a trusted Tostem partner dedicated to delivering excellence in every installation. We focus on precision workmanship and reliable after-sales service.',
      highlight: 'Uncompromising Quality, Timeless Aesthetics.'
    },
    products: {
      title: 'Tostem Collection',
      items: [
        {
          name: 'Grants Series',
          series: 'Flagship Luxury',
          description: 'TOSTEM\'s most luxurious series with ultra-slim frames to maximize views and natural light.',
          image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800'
        },
        {
          name: 'Atis Series',
          series: 'Minimalist Design',
          description: 'Emphasizing beauty in simplicity. Minimalist designs that blend perfectly with modern architecture.',
          image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800'
        },
        {
          name: 'Giesta',
          series: 'Entrance Doors',
          description: 'High-quality entrance doors combining maximum security with elegant wood or metal designs.',
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
        },
        {
          name: 'P7 Series',
          series: 'Performance & Durability',
          description: 'Designed for extreme weather resistance and long-term performance without sacrificing aesthetics.',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
        }
      ]
    },
    whyUs: {
      title: 'Why Choose AGS?',
      items: [
        {
          title: 'Official Certified Applicator',
          desc: 'We are an official partner recognized by Tostem Indonesia.',
          icon: ShieldCheck
        },
        {
          title: 'Precision Installation',
          desc: 'Installation following strict Japanese quality standards.',
          icon: Zap
        },
        {
          title: 'Weather Resistant & Durable',
          desc: 'Premium aluminum materials resistant to corrosion and extreme weather.',
          icon: Maximize
        },
        {
          title: 'Customized Solutions',
          desc: 'Designs tailorable to your specific architectural needs.',
          icon: Layers
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      address: 'Jl. Menteng Niaga, RT.1/RW.8, Ujung Menteng, Kec. Cakung, East Jakarta, Jakarta 13960',
      phone: '0811-8000-2535',
      email: 'info@alumindoglass.com',
      mapPlaceholder: 'AGS Location Map'
    },
    footer: {
      rights: 'All Rights Reserved.'
    }
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = translations[lang];
  const waLink = "https://wa.me/6281180002535";
  const gmapsLink = "https://share.google/YPKWShmcESH0yeqjz";
  const logoUrl = Logo

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => setLang(l => l === 'id' ? 'en' : 'id');

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.products, href: '#products' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* --- Navigation --- */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src={logoUrl} 
              alt="AGS Logo" 
              className="h-10 w-10 rounded-full border border-gray-200"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className={`font-bold text-base leading-none ${isScrolled ? 'text-charcoal' : 'text-white'}`}>Alumindo Glass Solution</span>
              <span className={`text-[10px] uppercase tracking-widest font-medium ${isScrolled ? 'text-gray-500' : 'text-gray-300'}`}>Official Tostem Applicator</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium hover:text-gold transition-colors ${isScrolled ? 'text-charcoal' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={toggleLang}
              className={`flex items-center gap-1 text-xs font-bold border px-2 py-1 rounded transition-colors ${isScrolled ? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-white' : 'border-white text-white hover:bg-white hover:text-charcoal'}`}
            >
              <Globe size={14} />
              {lang.toUpperCase()}
            </button>
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-gold/20"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleLang} className={`${isScrolled ? 'text-charcoal' : 'text-white'}`}>
              <Globe size={20} />
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={isScrolled ? 'text-charcoal' : 'text-white'}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white shadow-xl py-8 flex flex-col items-center gap-6 md:hidden"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-medium text-charcoal hover:text-gold"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-white px-8 py-3 rounded-full font-bold"
              >
                {t.nav.cta}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1920" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Official Tostem Applicator
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#products"
                className="bg-white text-charcoal px-8 py-4 rounded-full font-bold text-center hover:bg-gold hover:text-white transition-all flex items-center justify-center gap-2 group"
              >
                {t.hero.cta}
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-center hover:bg-white/10 transition-all"
              >
                {t.nav.cta}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800" 
                  alt="Workmanship" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-xl shadow-xl hidden lg:block max-w-xs">
                <p className="text-gold font-bold text-4xl mb-2">100%</p>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Precision Japanese Standard</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-gold font-bold uppercase tracking-widest text-sm mb-4">{t.about.title}</h2>
              <h3 className="text-4xl font-bold mb-8 text-charcoal">{t.about.highlight}</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t.about.description}
              </p>
              <div className="space-y-4">
                {['Certified Workmanship', 'Premium After-Sales', 'High-End Materials'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-gold" size={20} />
                    <span className="font-semibold text-charcoal">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Products Section --- */}
      <section id="products" className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-4">{t.products.title}</h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.products.items.map((product, idx) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-3/4 rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <p className="text-white text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-[10px] font-bold text-gold uppercase tracking-widest">{product.series}</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-charcoal group-hover:text-gold transition-colors">{product.name}</h4>
                <p className="text-gray-500 text-sm mt-1">{product.series}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="py-24 bg-charcoal text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.whyUs.title}</h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {t.whyUs.items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10 group hover:bg-gold transition-colors duration-500">
                  <item.icon className="text-gold group-hover:text-white transition-colors" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Contact & Location --- */}
      <section id="contact" className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-charcoal mb-8">{t.contact.title}</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-charcoal mb-1">Office Address</h5>
                    <p className="text-gray-500 text-sm leading-relaxed">{t.contact.address}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-gold" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-charcoal mb-1">WhatsApp</h5>
                    <p className="text-gray-500 text-sm">{t.contact.phone}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-gold" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-charcoal mb-1">Email</h5>
                    <p className="text-gray-500 text-sm">{t.contact.email}</p>
                  </div>
                </div>

                <div className="pt-8">
                  <a 
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-gold text-white px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-gold/30 transition-all"
                  >
                    <Phone size={20} />
                    {t.nav.cta}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] lg:h-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
            >
              {/* Placeholder for Gmaps */}
              <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center p-8 text-center">
                <MapPin size={48} className="text-gold mb-4" />
                <h4 className="text-xl font-bold text-charcoal mb-2">{t.contact.mapPlaceholder}</h4>
                <p className="text-gray-500 mb-6 max-w-xs">Jl. Menteng Niaga, Cakung, Jakarta Timur</p>
                <a 
                  href={gmapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-charcoal px-6 py-2 rounded-full text-sm font-bold shadow-md hover:bg-gold hover:text-white transition-all"
                >
                  Open in Google Maps
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img 
                src={logoUrl} 
                alt="AGS Logo" 
                className="h-8 w-8 rounded-full grayscale"
                referrerPolicy="no-referrer"
              />
              <span className="font-bold text-charcoal">PT Alumindo Glass Solution</span>
            </div>

            <div className="flex gap-6">
              <a 
                href="https://www.instagram.com/tostem.alumindoglass/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Globe size={24} />
              </a>
            </div>

            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} PT Alumindo Glass Solution. {t.footer.rights}
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-center items-center gap-8 opacity-50 grayscale">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">Official Partner of</span>
            <img 
              src={LogoTostem} 
              alt="Tostem Logo" 
              className="h-6"
              onError={(e) => (e.currentTarget.style.display = 'none')}
              referrerPolicy="no-referrer"
            />
            <span className="font-bold text-gray-400 text-xl tracking-tighter">TOSTEM</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
