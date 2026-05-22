import React from 'react';
import { certificate } from "../data";

// 1. Komponen Kartu Sertifikat (Liquid Glass)
function SertificateCard({ data }) {
  return (
    <div className="group relative flex flex-col rounded-[2.5rem] bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] p-3 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/15 dark:hover:shadow-emerald-400/10">
      
      {/* Wadah Gambar (Aspek Rasio 4:3 agar proporsional untuk sertifikat) */}
      <div className="relative w-full overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-800/50 aspect-[4/3] border border-black/5 dark:border-white/5">
        
        {/* Glow di belakang gambar */}
        <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-500/10 blur-xl scale-150 group-hover:scale-100 transition-transform duration-700"></div>

        <img 
          src={data.image} 
          alt={data.title} 
          className="relative z-10 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
          loading="lazy"
        />

        {/* Overlay tipis elegan saat di-hover */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
      </div>

      {/* Area Teks */}
      <div className="relative p-6 text-center">
        {/* Dekorasi titik hijau */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-50"></div>
        
        <p className="text-lg font-bold tracking-wide text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
          {data.title}
        </p>
      </div>
    </div>
  );
}

// 2. Main Section
function SertificateSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-slate-50 dark:bg-[#0B0F19] transition-colors duration-300" name="sertifikat">
      
      {/* Ambient Liquid Glow (Mesh Gradient - Warna Hijau/Emerald) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-teal-400/10 dark:bg-teal-500/5 blur-[120px]"></div>
      </div>

      <div className="container mx-auto w-full max-w-7xl px-6 relative z-10">
        
        {/* Judul Section (Desain Konsisten) */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase mb-3 block">
            Achievements
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Sertifikat <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400">Keahlian</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Bukti formal dari dedikasi dan pembelajaran berkelanjutan saya dalam mengikuti perkembangan teknologi terbaru.
          </p>
        </div>

        {/* Grid Konten */}
        <div className="grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {certificate.map((data, index) => (
            <SertificateCard key={index} data={data} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default SertificateSection;