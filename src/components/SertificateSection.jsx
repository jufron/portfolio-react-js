import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { certificate } from "../data";

// Helper to determine issuer
const getIssuer = (title, image) => {
  const t = title.toLowerCase();
  const img = String(image).toLowerCase();
  if (t.includes('dicoding') || img.includes('dicoding')) return 'Dicoding Indonesia';
  if (t.includes('udemy') || img.includes('udemy')) return 'Udemy';
  return 'Penerbit Terverifikasi';
};

// 1. Komponen Kartu Sertifikat (Liquid Glass) dengan fitur perbesar gambar
export function SertificateCard({ data, onZoom }) {
  const issuer = getIssuer(data.title, data.image);
  return (
    <div className="group relative flex flex-col rounded-[2.5rem] bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.02)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.15)] p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10 dark:hover:shadow-green-400/5 text-left">
      
      {/* Wadah Gambar */}
      <div 
        onClick={() => onZoom(data.image)}
        className="relative w-full overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-800/50 aspect-[4/3] border border-black/5 dark:border-white/5 cursor-pointer"
      >
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onZoom(data.image);
            }}
            className="px-4 py-2 bg-white text-slate-900 text-xs font-extrabold rounded-full shadow-lg scale-90 group-hover:scale-100 transition-all duration-300 hover:bg-green-500 hover:text-slate-900 cursor-pointer"
          >
            🔎 Perbesar Gambar
          </button>
        </div>
      </div>

      {/* Area Teks */}
      <div className="pt-5 pb-2 px-2">
        <span className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-widest block mb-2">
          {issuer}
        </span>
        <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors line-clamp-2">
          {data.title}
        </h3>
      </div>
    </div>
  );
}

import { motion } from "motion/react";

// 2. Main Section
function SertificateSection() {
  const [activeModalImg, setActiveModalImg] = useState(null);
  const homeCertificates = certificate.slice(0, 6);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-slate-50 dark:bg-[#0B0F19] transition-colors duration-300" name="sertifikat">
      
      {/* Ambient Liquid Glow (Mesh Gradient - Warna Hijau/Emerald) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-teal-400/10 dark:bg-teal-500/5 blur-[120px]"></div>
      </div>

      <div className="container mx-auto w-full max-w-7xl px-6 relative z-10">
        
        {/* Judul Section (Desain Konsisten) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 md:mb-20"
        >
          <span className="text-xs font-bold tracking-widest text-green-600 dark:text-green-400 uppercase mb-3 block">
            Achievements
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Sertifikat <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400">Keahlian</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Bukti formal dari dedikasi dan pembelajaran berkelanjutan saya dalam mengikuti perkembangan teknologi terbaru.
          </p>
        </motion.div>

        {/* Grid Konten */}
        <div className="grid gap-8 sm:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {homeCertificates.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SertificateCard 
                data={data} 
                onZoom={setActiveModalImg}
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <Link
            to="/certificate-detail"
            viewTransition
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide text-white transition-all duration-300 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 focus:outline-none cursor-pointer"
          >
            Lihat Detail Kredensial & Sertifikat
          </Link>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      {activeModalImg && (
        <div 
          onClick={() => setActiveModalImg(null)}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          {/* Floating close button at the top-right of screen for mobile/desktop accessibility */}
          <button
            onClick={() => setActiveModalImg(null)}
            className="fixed top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-green-400 cursor-pointer transition-all duration-300 z-[110] border border-white/10 shadow-lg flex items-center justify-center scale-100 hover:scale-110 active:scale-95"
            title="Tutup"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="relative max-w-4xl w-full max-h-[85vh] flex items-center justify-center cursor-pointer"
          >
            <img
              onClick={(e) => e.stopPropagation()} // stop propagation only on image click
              src={activeModalImg}
              alt="Perbesaran Sertifikat"
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10 cursor-default"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default SertificateSection;