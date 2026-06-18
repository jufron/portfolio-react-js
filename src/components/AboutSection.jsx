import imageAbout from './../assets/img/about.jpg?format=webp&quality=70';
import React from 'react';
import { Link } from 'react-router-dom';

function AboutSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-slate-50 dark:bg-[#0B0F19] transition-colors duration-300" name="tentang">
      
      {/* 1. Ambient Liquid Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[30%] -right-[10%] w-[500px] h-[500px] rounded-full bg-green-500/10 dark:bg-green-500/5 blur-[130px]"></div>
        <div className="absolute bottom-[10%] -left-[5%] w-[450px] h-[450px] rounded-full bg-teal-400/15 dark:bg-teal-500/5 blur-[120px]"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Kolom Gambar */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              
              {/* Glow di belakang gambar */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-500 rounded-[2.5rem] opacity-20 blur-2xl dark:opacity-10"></div>
              
              {/* Bingkai Kaca */}
              <div className="relative w-full h-full p-3 rounded-[2.5rem] bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-xl -rotate-2 hover:rotate-0 transition-all duration-500 group overflow-hidden">
                <img 
                  src={imageAbout}
                  alt="Tentang Jufron Tamo Ama" 
                  className="w-full h-full object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-105" 
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none"></div>
              </div>

              {/* Floating Glass Badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border border-white/60 dark:border-white/10 shadow-lg text-xs font-bold text-green-600 dark:text-green-400">
                ✨ Kreatif & Solutif
              </div>
            </div>
          </div>

          {/* Kolom Konten */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            <span className="text-xs font-bold tracking-widest text-green-600 dark:text-green-400 uppercase mb-3 block">
              Get To Know Me
            </span>
            
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-6">
              Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500 dark:from-green-400 dark:to-teal-400">Saya</span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl">
              Lulusan S1 Komputer dengan pengetahuan mendalam di bidang Teknologi Informasi. Saya memiliki keahlian khusus dalam desain grafis dan pemrograman, dua bidang yang saling melengkapi untuk menciptakan solusi kreatif dan efektif. Dari menciptakan antarmuka pengguna yang intuitif hingga mengembangkan aplikasi yang kompleks dan efisien.
            </p>

            {/* Mini Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl text-left">
              
              {/* Card 1 */}
              <div className="p-5 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-sm transition-all duration-300 hover:bg-white/60 dark:hover:bg-white/10 group">
                <div className="w-10 h-10 mb-4 rounded-xl bg-green-500/10 dark:bg-green-400/10 flex items-center justify-center text-green-600 dark:text-green-400 text-xl group-hover:scale-110 transition-transform">
                  🎓
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Pendidikan S1</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">
                  Teknik Informatika dengan fondasi teori & praktis IT yang kuat.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-5 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-sm transition-all duration-300 hover:bg-white/60 dark:hover:bg-white/10 group">
                <div className="w-10 h-10 mb-4 rounded-xl bg-teal-500/10 dark:bg-teal-400/10 flex items-center justify-center text-teal-600 dark:text-teal-400 text-xl group-hover:scale-110 transition-transform">
                  🎨
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">Design & Tech Unity</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">
                  Menjembatani visual estetis dengan kode program yang efisien.
                </p>
              </div>

            </div>

            <div className="mt-10 self-center lg:self-start">
              <Link
                to="/about-detail"
                viewTransition
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide text-white transition-all duration-300 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 focus:outline-none cursor-pointer"
              >
                Baca Selengkapnya Tentang Saya
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
