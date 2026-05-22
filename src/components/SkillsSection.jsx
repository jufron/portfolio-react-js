import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skills } from "../data";

// 1. Komponen Ikon (Dibersihkan dan diselaraskan ukurannya)
function SkillCondition({ status, icon }) {
  if (status === 'icon') {
    return (
      <FontAwesomeIcon 
        icon={icon} 
        className="text-3xl text-slate-700 dark:text-slate-200 transition-colors group-hover:text-emerald-500 dark:group-hover:text-emerald-400" 
      />
    );
  } else if (status === 'svg' || status === 'img') {
    return (
      <img
        src={icon}
        alt="skill-icon"
        className="h-10 w-10 object-contain drop-shadow-sm transition-transform duration-500"
        loading="lazy"
      />
    );
  }
  return null;
}

// 2. Komponen Kartu Keahlian (Liquid Glass Card)
function SkillItemMenu({ name, icon, status }) {
  return (
    <div className="group relative flex flex-col items-center justify-center gap-5 p-8 rounded-[2rem] bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-2 hover:bg-white/60 dark:hover:bg-white/10 hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-400/10 cursor-pointer overflow-hidden">
      
      {/* Efek inner glow saat di-hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-transparent via-transparent to-emerald-500/5 dark:to-emerald-400/10 pointer-events-none"></div>
      
      {/* Wadah Ikon dengan efek kaca yang lebih tebal */}
      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/60 dark:bg-slate-800/50 shadow-inner border border-white/80 dark:border-white/5 group-hover:scale-110 transition-transform duration-500">
        <SkillCondition status={status} icon={icon} />
      </div>

      {/* Nama Keahlian */}
      <h3 className="relative z-10 text-lg font-bold tracking-wide text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
        {name}
      </h3>
    </div>
  );
}

// 3. Main Section
const SkillsSection = () => {
  return (
    <section name="keahlian" className="relative py-24 md:py-32 overflow-hidden bg-slate-50 dark:bg-[#0B0F19] transition-colors duration-300">
      
      {/* Ambient Liquid Glow (Mesh Gradient) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-[5%] w-[600px] h-[600px] rounded-full bg-teal-400/10 dark:bg-teal-500/5 blur-[120px]"></div>
      </div>

      <div className="container mx-auto w-full max-w-7xl px-6 relative z-10">
        
        {/* Judul Section (Disesuaikan dengan estetika sebelumnya) */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase mb-3 block">
            Tech Stack
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Keahlian & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400">Teknologi</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Berikut adalah teknologi, bahasa pemrograman, dan alat (tools) yang saya kuasai dan gunakan untuk membangun solusi digital.
          </p>
        </div>

        {/* Grid Konten */}
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {skills.map((item, index) => (
            <SkillItemMenu 
              key={index} 
              name={item.name} 
              icon={item.icon}
              status={item.status}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;