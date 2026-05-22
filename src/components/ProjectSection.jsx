import React from 'react';
import { project } from './../data';

// 1. Komponen Kartu Proyek (Liquid Glass)
function Card({ image, projectName, kategory, techStack }) {
  return (
    <div className="group relative flex flex-col p-4 rounded-[2.5rem] bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/15 dark:hover:shadow-emerald-400/10">
      
      {/* Wadah Gambar (Aspek Rasio 16:9 agar rapi dan seragam) */}
      <div className="relative w-full overflow-hidden rounded-[2rem] aspect-video bg-slate-100 dark:bg-slate-800/50">
        <img
          src={image}
          alt={`Proyek ${projectName}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay gradien halus yang muncul saat di-hover untuk fokus ke gambar */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Konten Kartu */}
      <div className="flex flex-col flex-grow px-2 py-5 md:px-4">
        
        {/* Badge Kategori */}
        <div className="mb-4 self-start">
          <span className="inline-flex items-center px-3 py-1 text-xs font-bold tracking-wide rounded-full bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 dark:border-emerald-400/20">
            {kategory}
          </span>
        </div>

        {/* Nama Proyek */}
        <h3 className="mb-4 text-xl md:text-2xl font-extrabold text-slate-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
          {projectName}
        </h3>

        {/* Tech Stack (Diletakkan di bagian bawah secara otomatis dengan mt-auto) */}
        <div className="mt-auto pt-4 border-t border-slate-200/60 dark:border-white/10">
          <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-3">Teknologi yang digunakan</p>
          <div className="flex flex-wrap gap-2.5 items-center">
            {techStack && techStack.map((tech, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/60 dark:bg-white/5 border border-white/60 dark:border-white/10 shadow-sm backdrop-blur-sm group-hover:bg-white dark:group-hover:bg-white/10 transition-colors"
                title={tech.name}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-4 h-4 md:w-5 md:h-5 object-contain drop-shadow-sm"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// 2. Tombol View More (Disesuaikan dengan gaya Glassmorphism)
function ButtonLink() {
  return (
    <a
      href="#semua-proyek"
      className="inline-flex items-center justify-center px-8 py-3.5 mt-8 text-sm font-semibold tracking-wide text-white transition-all duration-300 bg-slate-900 dark:bg-emerald-500 dark:text-slate-900 rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 focus:outline-none"
      onClick={(e) => {
        e.preventDefault();
        console.log("View More diklik!");
      }}
    >
      Lihat Lebih Banyak Karya
    </a>
  );
}

// 3. Main Section
function ProjectSection() {
  return (
    <section name="proyek" className="relative py-24 md:py-32 overflow-hidden bg-slate-50 dark:bg-[#0B0F19] transition-colors duration-300">
      
      {/* Ambient Liquid Glow (Mesh Gradient - Hijau/Emerald) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[20%] right-[5%] w-[450px] h-[450px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[550px] h-[550px] rounded-full bg-teal-400/10 dark:bg-teal-500/5 blur-[120px]"></div>
      </div>

      <div className="container mx-auto w-full max-w-7xl px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase mb-3 block">
            Portfolio
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Proyek <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400">Terbaru</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Kumpulan studi kasus, eksplorasi, dan proyek aplikasi yang telah saya kembangkan dari ide hingga implementasi.
          </p>
        </div>

        {/* Grid Konten Proyek */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {project.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              projectName={item.projectName}
              kategory={item.kategory}
              techStack={item.techStack} // Perbaikan penulisan props
            />
          ))}
        </div>

        {/* Tombol Lihat Selengkapnya (Saya buka dari komentar agar bisa Anda gunakan jika daftar proyek sudah panjang) */}
        <div className="flex justify-center mt-12">
          <ButtonLink />
        </div>

      </div>
    </section>
  );
}

export default ProjectSection;