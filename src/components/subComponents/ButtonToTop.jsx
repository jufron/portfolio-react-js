import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';

// 1. Tombol WhatsApp (Liquid Glass - Emerald Accent)
function ButtonWhatsApp() {
  return (
    <a
      href="https://wa.me/6282147554549"
      target="_blank"
      rel="noopener noreferrer"
      title="Hubungi via WhatsApp"
      className="group relative flex shrink-0 aspect-square items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 shadow-[0_8px_32px_0_rgba(16,185,129,0.15)] dark:shadow-[0_8px_32px_0_rgba(16,185,129,0.2)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:border-emerald-300 dark:hover:border-emerald-500/50 overflow-hidden"
    >
      {/* Inner Glow Gradien Hijau saat di-hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-emerald-400/20 to-teal-400/20 pointer-events-none"></div>

      <FontAwesomeIcon
        icon={faWhatsapp}
        className="text-2xl md:text-3xl text-emerald-500 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors drop-shadow-sm relative z-10"
      />
    </a>
  );
}

// 2. Tombol Email (Liquid Glass - Red/Gmail Accent)
function ButtonEmail() {
  return (
    <a
      href="mailto:jufrontamoama@gmail.com"
      title="Hubungi via Email"
      className="group relative flex shrink-0 aspect-square items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/80 dark:border-white/10 shadow-[0_8px_32px_0_rgba(239,68,68,0.15)] dark:shadow-[0_8px_32px_0_rgba(239,68,68,0.2)] transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:border-red-350 dark:hover:border-red-500/50 overflow-hidden"
    >
      {/* Inner Glow Gradien Merah saat di-hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-red-400/20 to-orange-400/20 pointer-events-none"></div>

      <FontAwesomeIcon
        icon={faEnvelope}
        className="text-2xl md:text-3xl text-red-500 dark:text-red-400 group-hover:text-red-600 dark:group-hover:text-red-300 transition-colors drop-shadow-sm relative z-10"
      />
    </a>
  );
}

// 3. Main Component (Wadah & Tombol Scroll to Top)
function ButtonToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[90] flex flex-col gap-3 md:gap-4 items-center pointer-events-none">
      
      {/* Tombol Back to Top (Liquid Glass - Neutral Accent) */}
      <button
        onClick={backToTop}
        aria-label="Kembali ke atas"
        className={`group relative flex shrink-0 aspect-square items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-lg transition-all duration-500 overflow-hidden pointer-events-auto
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      >
        {/* Inner Glow Abu-abu lembut saat di-hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-slate-200/40 to-white/10 dark:from-slate-700/40 dark:to-white/5 pointer-events-none"></div>

        <FontAwesomeIcon 
          icon={faChevronUp} 
          className="text-lg md:text-xl text-slate-600 dark:text-slate-300 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 group-hover:-translate-y-0.5 transition-all duration-300 relative z-10" 
        />
      </button>

      {/* Membungkus ButtonEmail untuk mengembalikan fungsi klik */}
      <div className="pointer-events-auto">
        <ButtonEmail />
      </div>

      {/* Membungkus ButtonWhatsApp untuk mengembalikan fungsi klik */}
      <div className="pointer-events-auto">
        <ButtonWhatsApp />
      </div>
      
    </div>
  );
}

export default ButtonToTop;