import { useState, useEffect } from "react";
import "@/App.css";
import { Heart, Leaf, Trash2, Recycle, Users, Instagram, Menu, X, ChevronDown, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Marquee Component
const Marquee = () => {
  const text = "MANUSIA BISA PUNAH TAPI STYROFOAM TIDAK • STOP NYAMPAH! • AYO #PILAHSAMPAH! • JADILAH BAGIAN DARI #GOODFESTIVAL • ";
  
  return (
    <div className="bg-[#D32F2F] text-white py-3 overflow-hidden" data-testid="marquee">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="font-bold uppercase tracking-widest text-sm md:text-base mx-4">{text}{text}{text}{text}</span>
      </div>
    </div>
  );
};

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#beranda", label: "Beranda" },
    { href: "#tentang", label: "Tentang Kami" },
    { href: "#program", label: "Program" },
    { href: "#kontak", label: "Kontak" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav border-b border-gray-200' : 'bg-transparent'}`} data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-2 group" data-testid="logo">
            <div className="w-12 h-12 bg-white rounded-full p-2 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
              <img 
                src="https://customer-assets.emergentagent.com/job_green-initiative-3/artifacts/jwxf1ta8_image.png" 
                alt="Cleanaction Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-xl md:text-2xl uppercase tracking-tight" style={{ fontFamily: 'Unbounded' }}>
              Clean<span className="text-[#D32F2F]">action</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link font-semibold uppercase tracking-wider text-sm hover:text-[#D32F2F] transition-colors duration-300"
                style={{ fontFamily: 'Unbounded' }}
                data-testid={`nav-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://instagram.com/cleanaction"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-2 flex items-center gap-2"
              data-testid="nav-instagram-btn"
            >
              <Instagram className="w-4 h-4" />
              Follow
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-btn"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mobile-menu-enter bg-white border-t border-gray-200 py-4" data-testid="mobile-menu">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 px-4 font-semibold uppercase tracking-wider text-sm hover:bg-gray-100 hover:text-[#D32F2F]"
                style={{ fontFamily: 'Unbounded' }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-4">
              <a
                href="https://instagram.com/cleanaction"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3 flex items-center justify-center gap-2 w-full"
              >
                <Instagram className="w-4 h-4" />
                Follow Instagram
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center pt-20" data-testid="hero-section">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 hero-bg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1639374550500-e45ebd7167f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwYWN0aXZpc3QlMjBncm91cCUyMGNsZWFuaW5nJTIwdHJhc2glMjBpbmRvbmVzaWF8ZW58MHx8fHwxNzcwMzg5ODE5fDA&ixlib=rb-4.1.0&q=85')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl stagger-children">
          <p 
            className="text-[#D32F2F] font-bold uppercase tracking-widest text-sm md:text-base mb-4 fade-in-up opacity-0"
            style={{ fontFamily: 'Unbounded' }}
            data-testid="hero-tagline"
          >
            Gerakan Lingkungan Indonesia
          </p>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight leading-[1.1] text-white mb-6 fade-in-up opacity-0"
            style={{ fontFamily: 'Unbounded' }}
            data-testid="hero-title"
          >
            Aku, Kamu,<br />
            <span className="text-[#D32F2F]">Indonesia</span><br />
            Planet Kita
          </h1>
          
          <p 
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed fade-in-up opacity-0"
            data-testid="hero-description"
          >
            Kurangi potensi sampah yang berakhir merusak darat, air, udara. 
            Bersama kita wujudkan Indonesia bebas sampah plastik.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 fade-in-up opacity-0">
            <a
              href="#program"
              className="btn-primary px-8 py-4 text-lg flex items-center justify-center gap-2"
              data-testid="hero-cta-program"
            >
              Lihat Program
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#tentang"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 text-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-white/30 hover:bg-white/20 transition-colors duration-300"
              style={{ fontFamily: 'Unbounded' }}
              data-testid="hero-cta-about"
            >
              Tentang Kami
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

// Stats Section
const Stats = () => {
  const stats = [
    { number: "500K+", label: "Kg Sampah Terkelola", icon: Trash2 },
    { number: "50K+", label: "Relawan Aktif", icon: Users },
    { number: "100+", label: "Event Kolaborasi", icon: Heart },
    { number: "17", label: "Tahun Berjuang", icon: Leaf },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#111827]" data-testid="stats-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center"
              data-testid={`stat-${index}`}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#D32F2F] rounded-full flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <p 
                className="text-3xl md:text-4xl font-bold text-white mb-2 stat-number"
                style={{ fontFamily: 'Unbounded' }}
              >
                {stat.number}
              </p>
              <p className="text-gray-400 text-sm md:text-base uppercase tracking-wider" style={{ fontFamily: 'Unbounded' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  const values = [
    { 
      icon: Users, 
      title: "Gotong Royong", 
      desc: "Kerja sama lintas profesi, komunitas, dan sektor untuk dampak nyata." 
    },
    { 
      icon: Recycle, 
      title: "Keberlanjutan", 
      desc: "Solusi jangka panjang untuk masalah lingkungan yang sistematis." 
    },
    { 
      icon: Heart, 
      title: "Pemberdayaan", 
      desc: "Membangun kapasitas masyarakat untuk aksi mandiri." 
    },
  ];

  return (
    <section id="tentang" className="py-16 md:py-24 bg-white" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Origin Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <p 
              className="text-[#D32F2F] font-bold uppercase tracking-widest text-sm mb-4"
              style={{ fontFamily: 'Unbounded' }}
            >
              Asal Mula
            </p>
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-6"
              style={{ fontFamily: 'Unbounded' }}
              data-testid="about-title"
            >
              Dari Tragedi<br />
              <span className="text-[#D32F2F]">Leuwigajah</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p data-testid="about-story">
                Cleanaction lahir dari tragedi longsor TPA Leuwigajah, Bandung pada 21 Februari 2005 
                yang merenggut 157 jiwa. Tragedi ini menjadi titik balik kesadaran akan pentingnya 
                pengelolaan sampah yang bertanggung jawab.
              </p>
              <p>
                Sejak saat itu, kami bergerak bersama masyarakat, pemerintah, dan sektor swasta 
                untuk mewujudkan Indonesia yang lebih bersih dan lestari.
              </p>
              <blockquote className="border-l-4 border-[#D32F2F] pl-4 italic text-lg text-gray-800">
                "Bumi ini dipinjam dari masa depan. Musti diperbaiki cara pikir untuk menjaga 
                ekosistem dari mulai lingkar terkecil, termudah, dan segera!"
              </blockquote>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#D32F2F] -z-10 translate-x-4 translate-y-4"></div>
              <img
                src="https://images.unsplash.com/photo-1757356892992-d8e5ceb4429d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHw0fHxwbGFzdGljJTIwd2FzdGUlMjBtb3VudGFpbiUyMHBvbGx1dGlvbnxlbnwwfHx8fDE3NzAzODk4MjZ8MA&ixlib=rb-4.1.0&q=85"
                alt="Masalah sampah plastik"
                className="w-full h-80 md:h-[450px] object-cover"
                data-testid="about-image"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <p 
              className="text-[#2E7D32] font-bold uppercase tracking-widest text-sm mb-4"
              style={{ fontFamily: 'Unbounded' }}
            >
              Nilai-Nilai Kami
            </p>
            <h3 
              className="text-2xl md:text-3xl font-bold uppercase tracking-tight"
              style={{ fontFamily: 'Unbounded' }}
            >
              Segitiga Perubahan
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 p-8 brutalist-shadow program-card"
                data-testid={`value-${index}`}
              >
                <div className="w-14 h-14 bg-[#D32F2F] flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h4 
                  className="text-xl font-bold uppercase mb-4"
                  style={{ fontFamily: 'Unbounded' }}
                >
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Programs Section
const Programs = () => {
  const programs = [
    {
      title: "Gerakan Pungut Sampah",
      subtitle: "#GPS",
      desc: "Aksi langsung bersih-bersih lingkungan yang melibatkan ribuan relawan di seluruh Indonesia.",
      image: "https://images.unsplash.com/photo-1639374694382-67e79f6bee9a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MDV8MHwxfHNlYXJjaHw0fHxlbnZpcm9ubWVudGFsJTIwYWN0aXZpc3QlMjBncm91cCUyMGNsZWFuaW5nJTIwdHJhc2glMjBpbmRvbmVzaWF8ZW58MHx8fHwxNzcwMzg5ODE5fDA&ixlib=rb-4.1.0&q=85",
      color: "#D32F2F",
      size: "large"
    },
    {
      title: "Good Festival",
      subtitle: "#GOODFESTIVAL",
      desc: "Panduan dan kolaborasi untuk festival ramah lingkungan tanpa sampah plastik sekali pakai.",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      color: "#2E7D32",
      size: "medium"
    },
    {
      title: "Gerakan 1000 Tumbler",
      subtitle: "#GERAKAN1000TUMBLER",
      desc: "Kampanye pengurangan botol plastik dengan mengajak masyarakat beralih ke tumbler.",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800",
      color: "#0288D1",
      size: "medium"
    },
    {
      title: "GPS Pelajar",
      subtitle: "#GPSPELAJAR",
      desc: "Program edukasi dan aksi lingkungan khusus untuk pelajar di sekolah-sekolah.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800",
      color: "#D32F2F",
      size: "small"
    },
    {
      title: "Pilah Sampah",
      subtitle: "#PILAHSAMPAH",
      desc: "Kampanye pemilahan sampah organik dan anorganik dari rumah tangga.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800",
      color: "#2E7D32",
      size: "small"
    },
    {
      title: "Event Kolaborasi",
      subtitle: "FORMULA E • FIBA • WWF",
      desc: "Pengelolaan sampah profesional untuk event besar nasional dan internasional.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      color: "#0288D1",
      size: "small"
    },
  ];

  return (
    <section id="program" className="py-16 md:py-24 bg-[#F3F4F6]" data-testid="programs-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p 
            className="text-[#D32F2F] font-bold uppercase tracking-widest text-sm mb-4"
            style={{ fontFamily: 'Unbounded' }}
          >
            Program Kami
          </p>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-4"
            style={{ fontFamily: 'Unbounded' }}
            data-testid="programs-title"
          >
            Aksi Nyata untuk<br />
            <span className="text-[#D32F2F]">Lingkungan</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berbagai program dan inisiatif yang kami jalankan bersama masyarakat, 
            pemerintah, dan sektor swasta.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Card */}
          <div 
            className="md:col-span-2 md:row-span-2 relative overflow-hidden bg-white brutalist-shadow program-card group img-zoom"
            data-testid="program-card-0"
          >
            <img 
              src={programs[0].image} 
              alt={programs[0].title}
              className="w-full h-full min-h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span 
                className="inline-block px-3 py-1 text-white text-xs font-bold uppercase tracking-wider mb-4"
                style={{ backgroundColor: programs[0].color, fontFamily: 'Barlow Condensed' }}
              >
                {programs[0].subtitle}
              </span>
              <h3 
                className="text-3xl md:text-4xl font-bold uppercase text-white mb-3"
                style={{ fontFamily: 'Unbounded' }}
              >
                {programs[0].title}
              </h3>
              <p className="text-gray-300 max-w-lg">{programs[0].desc}</p>
            </div>
          </div>

          {/* Medium Cards */}
          {programs.slice(1, 3).map((program, index) => (
            <div 
              key={index}
              className="relative overflow-hidden bg-white brutalist-shadow program-card group img-zoom"
              data-testid={`program-card-${index + 1}`}
            >
              <img 
                src={program.image} 
                alt={program.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span 
                  className="inline-block px-2 py-1 text-white text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ backgroundColor: program.color, fontFamily: 'Barlow Condensed' }}
                >
                  {program.subtitle}
                </span>
                <h3 
                  className="text-xl font-bold uppercase text-white mb-2"
                  style={{ fontFamily: 'Unbounded' }}
                >
                  {program.title}
                </h3>
                <p className="text-gray-300 text-sm">{program.desc}</p>
              </div>
            </div>
          ))}

          {/* Small Cards */}
          {programs.slice(3).map((program, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 p-6 brutalist-shadow program-card"
              data-testid={`program-card-${index + 3}`}
            >
              <span 
                className="inline-block px-2 py-1 text-white text-xs font-bold uppercase tracking-wider mb-4"
                style={{ backgroundColor: program.color, fontFamily: 'Barlow Condensed' }}
              >
                {program.subtitle}
              </span>
              <h3 
                className="text-xl font-bold uppercase mb-3"
                style={{ fontFamily: 'Unbounded' }}
              >
                {program.title}
              </h3>
              <p className="text-gray-600 text-sm">{program.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section id="kontak" className="py-16 md:py-24 bg-white" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p 
            className="text-[#D32F2F] font-bold uppercase tracking-widest text-sm mb-4"
            style={{ fontFamily: 'Unbounded' }}
          >
            Hubungi Kami
          </p>
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight mb-4"
            style={{ fontFamily: 'Unbounded' }}
            data-testid="contact-title"
          >
            Bergabung <span className="text-[#D32F2F]">Bersama Kami</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ingin berkontribusi untuk lingkungan yang lebih baik? Follow Instagram kami 
            dan ikuti aksi-aksi di lapangan. Bersama kita bisa!
          </p>
        </div>

        {/* Instagram Feed - Seamless */}
        <div 
          className="flex justify-center"
          data-testid="instagram-embed-container"
        >
          <iframe 
            src="https://www.instagram.com/cleanaction/embed" 
            width="100%" 
            height="700" 
            frameBorder="0" 
            scrolling="yes" 
            allowTransparency="true"
            style={{ 
              background: 'transparent',
              maxWidth: '800px',
              minWidth: '326px',
              border: 'none'
            }}
            title="Instagram @cleanaction"
          ></iframe>
        </div>

        {/* CTA Card */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="p-8 bg-[#111827] text-white text-center brutalist-shadow">
            <h3 
              className="text-xl md:text-2xl font-bold uppercase mb-3"
              style={{ fontFamily: 'Unbounded' }}
            >
              Sudah Lakukan Apa Untuk Planetmu?
            </h3>
            <p className="text-gray-400 mb-6">
              Mulai dari hal kecil: bawa tumbler, pilah sampah, ikut aksi bersih-bersih!
            </p>
            <a
              href="https://instagram.com/cleanaction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-8 py-4 font-bold hover:opacity-90 transition-opacity rounded-full"
              style={{ fontFamily: 'Unbounded' }}
              data-testid="cta-join"
            >
              <Instagram className="w-5 h-5" />
              Gabung Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-white rounded-full p-2 flex items-center justify-center shadow-lg">
              <img 
                src="https://customer-assets.emergentagent.com/job_green-initiative-3/artifacts/jwxf1ta8_image.png" 
                alt="Cleanaction Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span 
                className="font-bold text-2xl uppercase tracking-tight block"
                style={{ fontFamily: 'Unbounded' }}
              >
                Clean<span className="text-[#D32F2F]">action</span>
              </span>
              <span className="text-gray-400 text-sm">cleanaction.id</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 md:gap-8 flex-wrap justify-center">
            <a href="#beranda" className="text-gray-400 hover:text-white transition-colors duration-300 uppercase text-sm tracking-wider" style={{ fontFamily: 'Unbounded' }}>Beranda</a>
            <a href="#tentang" className="text-gray-400 hover:text-white transition-colors duration-300 uppercase text-sm tracking-wider" style={{ fontFamily: 'Unbounded' }}>Tentang</a>
            <a href="#program" className="text-gray-400 hover:text-white transition-colors duration-300 uppercase text-sm tracking-wider" style={{ fontFamily: 'Unbounded' }}>Program</a>
            <a href="#kontak" className="text-gray-400 hover:text-white transition-colors duration-300 uppercase text-sm tracking-wider" style={{ fontFamily: 'Unbounded' }}>Kontak</a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Cleanaction Network. Semua hak dilindungi.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            "Dimana bumi dipijak di situ bersih dijaga"
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App
function App() {
  return (
    <div className="App">
      {/* Noise Overlay */}
      <div className="noise-overlay"></div>
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <Programs />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
