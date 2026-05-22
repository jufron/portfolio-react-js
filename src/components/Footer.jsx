import React from 'react';
import { Link } from "react-scroll";
import LinkSocialMedia from "./subComponents/LinkSocialMedia";
import { socialMediaLinks, menuList } from '../data';

// 1. Komponen Link Menu (Diperhalus dengan transisi warna)
function LinkItemMenu({ item }) {
  return (
    <Link
      to={item.name.toLowerCase()}
      smooth={true}
      duration={500}
      className="cursor-pointer px-4 py-2 text-sm font-semibold tracking-wide text-slate-600 dark:text-slate-400 transition-all duration-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:-translate-y-0.5"
    >
      {item.name}
    </Link>
  );
}

// 2. Main Footer Section
function Footer() {
  return (
    <footer className="relative pt-12 pb-12 md:pb-16 overflow-hidden bg-slate-50 dark:bg-[#0B0F19] transition-colors duration-300">
      
      {/* Ambient Light di bagian bawah tengah untuk kesan dramatis */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-[100%] bg-emerald-500/20 dark:bg-emerald-500/10 blur-[120px] pointer-events-none -z-10"></div>

      <div className="container mx-auto w-full max-w-7xl px-6 relative z-10">
        
        {/* Wadah Glassmorphism Utama */}
        <div className="flex flex-col items-center px-8 py-12 rounded-[3rem] bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/60 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.03)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
          
          {/* Logo / Teks Judul */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="mb-8 inline-block cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <span className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
              Portfolio.
            </span>
          </a>

          {/* Navigasi Menu */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-8">
            {menuList.map((item, index) => (
              <LinkItemMenu key={index} item={item} />
            ))}
          </div>

          {/* Divider Liquid (Garis Gradien) */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent mb-8"></div>

          {/* Sosial Media (Menggunakan Glass Circles) */}
          <div className="flex gap-5 mb-10">
            {socialMediaLinks.map((social, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/60 dark:bg-white/5 border border-white/80 dark:border-white/10 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:border-emerald-200 dark:hover:border-emerald-500/30 group cursor-pointer"
              >
                <LinkSocialMedia 
                  href={social.href} 
                  iconName={social.iconName} 
                  className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" 
                />
              </div>
            ))}
          </div>

          {/* Hak Cipta */}
          <div className="flex flex-col items-center text-center">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} <span className="text-slate-800 dark:text-slate-200 font-bold">Jufron Tamo Ama</span>.
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
              All rights reserved. Designed with precision & clean code.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;