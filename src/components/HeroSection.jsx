import React from 'react';
import { socialMediaLinks, languages } from "../data";
import imagePoster from "../assets/img/hero.png";
import LinkSocialMedia from "./subComponents/LinkSocialMedia";

const HeroSection = () => {
  return (
    <header className="relative -z-10 min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#0B0F19] transition-colors duration-300">
      
      {/* 1. Latar Belakang Liquid / Mesh Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[5%] -left-[5%] w-[400px] h-[400px] rounded-full bg-emerald-400/20 dark:bg-emerald-500/10 blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/20 dark:bg-teal-600/10 blur-[140px] animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute bottom-[5%] -right-[5%] w-[500px] h-[500px] rounded-full bg-green-400/20 dark:bg-green-500/10 blur-[130px] animate-[pulse_12s_ease-in-out_infinite]"></div>
      </div>

      <div className="container relative z-10 px-6 py-24 lg:py-0 mx-auto max-w-7xl">
        
        {/* PERUBAHAN UTAMA: Menggunakan Grid 12 Kolom agar porsi gambar bisa lebih besar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 xl:gap-10 items-center">
          
          {/* --- KOLOM KIRI (Teks): Mengambil 4 Kolom --- */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1 lg:col-span-4">
            
            <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 shadow-sm backdrop-blur-md text-sm font-semibold text-slate-700 dark:text-slate-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Halo, saya
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white xl:text-7xl mb-4 leading-tight">
              <span className="block drop-shadow-sm">Jufron</span>
              <span className="block drop-shadow-sm">Tamo Ama</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 mb-6 drop-shadow-sm">
              Full-Stack Developer
            </h2>

            <p className="max-w-sm text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Membangun aplikasi web modern dengan antarmuka yang bersih dan performa tinggi. Berfokus pada pengalaman pengguna.
            </p>
          </div>

          {/* --- KOLOM TENGAH (Gambar): Mengambil 5 Kolom (Paling Besar) --- */}
          <div className="flex justify-center relative order-1 lg:order-2 w-full lg:col-span-5">
            
            {/* Ukuran gambar diperbesar drastis (max-w-[460px]) dengan aspect ratio 4:5 */}
            <div className="relative w-72 sm:w-96 lg:w-full max-w-[460px] aspect-[4/5]">
              
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-teal-500 rounded-[3.5rem] rotate-3 opacity-30 blur-2xl dark:opacity-20 animate-[pulse_6s_ease-in-out_infinite]"></div>

              {/* Bingkai kaca dipertebal (p-4) dan lengkungan disesuaikan (rounded-[3.5rem]) */}
              <div className="relative w-full h-full p-4 rounded-[3.5rem] bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-2xl hover:-translate-y-2 transition-transform duration-500 group overflow-hidden">
                <img
                  className="w-full h-full object-cover rounded-[3rem] transition-transform duration-700 group-hover:scale-105"
                  src={imagePoster}
                  alt="Jufron Tamo Ama"
                  loading="eager"
                />
                <div className="absolute inset-0 rounded-[3rem] ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none"></div>
              </div>

              {/* Floating Widget */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-8 py-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/80 dark:border-white/10 rounded-full shadow-2xl animate-[bounce_4s_infinite]">
                <div className="flex items-center gap-3">
                  <span className="flex h-3 w-3 rounded-full bg-emerald-500"></span>
                  <p className="text-sm text-slate-900 dark:text-white font-extrabold tracking-wide">Jufron</p>
                </div>
              </div>

            </div>
          </div>

          {/* --- KOLOM KANAN (Tombol & Sosmed): Mengambil 3 Kolom --- */}
          <div className="flex flex-col items-center lg:items-end justify-center order-3 lg:col-span-3 w-full mt-12 lg:mt-0">
            
            <div className="flex flex-col gap-4 w-full sm:w-auto lg:w-full max-w-[220px] xl:max-w-[240px]">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center w-full px-8 py-4 text-sm font-bold tracking-wide text-white transition-all duration-300 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 focus:outline-none"
              >
                Hubungi Saya
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center w-full px-8 py-4 text-sm font-bold tracking-wide text-slate-800 dark:text-white transition-all duration-300 bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 rounded-full hover:bg-white/60 dark:hover:bg-white/10 hover:scale-105 focus:outline-none backdrop-blur-md shadow-sm"
              >
                Lihat Portofolio
              </a>
            </div>

            <div className="hidden lg:block w-full max-w-[220px] xl:max-w-[240px] h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent my-10"></div>

            <p className="hidden lg:block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-5 text-right w-full max-w-[220px] xl:max-w-[240px]">
              Temukan Saya Di
            </p>

            <div className="flex justify-center lg:justify-end flex-wrap gap-4 mt-8 lg:mt-0 w-full max-w-[220px] xl:max-w-[240px]">
              {socialMediaLinks.map((social, index) => (
                <div 
                  key={index} 
                  className="flex shrink-0 aspect-square items-center justify-center w-12 h-12 bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:border-emerald-200 dark:hover:border-emerald-500/30 group cursor-pointer shadow-sm"
                >
                  <LinkSocialMedia 
                    href={social.href} 
                    iconName={social.iconName} 
                    className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" 
                  />
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};

export default HeroSection;