
import { socialMediaLinks, languages } from "../data";
import imagePoster from "../assets/img/update-poster-11.png";
import LinkSocialMedia from "./subComponents/LinkSocialMedia";
import React from 'react';

const HeroSection = () => {
  // Asumsi: languages, imagePoster, socialMediaLinks, dan LinkSocialMedia 
  // sudah di-import dari file Anda sebelumnya.

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#0B0F19] transition-colors duration-300 -z-10">
      
      {/* 1. Latar Belakang Liquid / Mesh Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-cyan-400/20 dark:bg-cyan-500/10 blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-blue-500/20 dark:bg-blue-600/10 blur-[120px] animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute -bottom-[20%] right-[20%] w-[500px] h-[500px] rounded-full bg-purple-400/20 dark:bg-purple-500/10 blur-[120px] animate-[pulse_12s_ease-in-out_infinite]"></div>
      </div>

      <div className="container relative z-10 px-6 py-16 mx-auto">
        
        {/* 2. Main Glassmorphism Container */}
        <div className="p-8 lg:p-12 rounded-[2.5rem] bg-white/40 dark:bg-slate-900/40 backdrop-blur-2xl border border-white/60 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            {/* Bagian Teks */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              
              {/* Glass Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/50 dark:bg-black/30 border border-white/60 dark:border-white/10 shadow-sm backdrop-blur-md text-sm font-medium text-slate-700 dark:text-slate-300">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Halo, saya
              </div>

              {/* Tipografi Modern */}
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl mb-4">
                <span className="block">Jufron Tamo Ama</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 mt-2 pb-2">
                  Full-Stack Developer
                </span>
              </h1>

              <p className="max-w-lg text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Membangun aplikasi web modern dengan antarmuka yang bersih dan performa tinggi. Berfokus pada pengalaman pengguna dan arsitektur yang solid.
              </p>

              {/* Tombol Aksi */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 bg-slate-900 dark:bg-white dark:text-slate-900 rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-slate-900/20 dark:hover:shadow-white/20 focus:outline-none"
                >
                  Hubungi Saya
                </a>
                <a 
                  href="#projects" 
                  className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-slate-800 dark:text-white transition-all duration-300 bg-white/30 dark:bg-white/5 border border-white/60 dark:border-white/10 rounded-2xl hover:bg-white/50 dark:hover:bg-white/10 hover:scale-105 focus:outline-none backdrop-blur-md shadow-sm"
                >
                  Lihat Portofolio
                </a>
              </div>

              {/* Ikon Media Sosial dalam Glass Cards */}
              <div className="flex mt-10 gap-4">
                {socialMediaLinks.map((social, index) => (
                  <div key={index} className="p-3 bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 rounded-xl backdrop-blur-md transition-transform duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-white/60 dark:hover:bg-white/10 cursor-pointer shadow-sm">
                    <LinkSocialMedia 
                      href={social.href} 
                      iconName={social.iconName} 
                      className="w-5 h-5 text-slate-700 dark:text-slate-300" 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Area Gambar (Avatar Liquid Glass) */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
                
                {/* Cahaya di belakang gambar */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-[3rem] rotate-6 opacity-30 blur-2xl dark:opacity-20"></div>

                {/* Bingkai Kaca Gambar */}
                <div className="relative w-full h-full p-2.5 rounded-[3rem] bg-white/30 dark:bg-white/10 backdrop-blur-xl border border-white/60 dark:border-white/20 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 group">
                  <img
                    className="w-full h-full object-cover rounded-[2.5rem] transition-transform duration-700 group-hover:scale-105"
                    src={imagePoster}
                    alt="Jufron Tamo Ama - Portofolio"
                    loading="lazy"
                  />
                  {/* Overlay gradien tipis agar gambar menyatu */}
                  <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-inset ring-black/5 dark:ring-white/10"></div>
                </div>

                {/* Floating Glass Widget (Opsional untuk estetika kekinian) */}
                <div className="absolute -bottom-6 -left-4 lg:-left-10 px-6 py-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-white/60 dark:border-white/10 rounded-2xl shadow-xl animate-[bounce_4s_infinite]">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 text-white shadow-inner">
                      🚀
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Status</p>
                      <p className="text-sm text-slate-900 dark:text-white font-bold">Siap Bekerja</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;

