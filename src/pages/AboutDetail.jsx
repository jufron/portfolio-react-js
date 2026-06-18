import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import imageAbout from './../assets/img/about.jpg?format=webp&quality=70';
import PageTransition from '../components/subComponents/PageTransition';
import LinkSocialMedia from '../components/subComponents/LinkSocialMedia';
import { socialMediaLinks } from '../data';

import { motion } from "motion/react";

function AboutDetail() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] text-slate-800 dark:text-slate-100 transition-colors duration-300 pt-32 pb-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] -left-[10%] w-[600px] h-[600px] rounded-full bg-green-500/10 dark:bg-green-500/5 blur-[130px]"></div>
        <div className="absolute bottom-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-teal-500/10 dark:bg-teal-500/5 blur-[120px]"></div>
      </div>

      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link
            to="/"
            viewTransition
            onClick={() => localStorage.setItem("scrollTarget", "tentang")}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-800/50 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:text-green-500 dark:hover:text-green-400 group cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Beranda
          </Link>
        </motion.div>

        {/* Hero Section of Detail */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-xs md:max-w-none aspect-[4/5] p-3 rounded-[2.5rem] bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 shadow-2xl">
              <img
                src={imageAbout}
                alt="Jufron Tamo Ama Profile"
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7 flex flex-col justify-center text-left"
          >
            <span className="text-xs font-bold tracking-widest text-green-600 dark:text-green-400 uppercase mb-3 block">
              Curriculum Vitae
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
              Detail Profil <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500 dark:from-green-400 dark:to-teal-400">Jufron</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
              Saya adalah seorang lulusan S1 Teknik Informatika yang mendedikasikan karir dalam menyelaraskan estetika visual desain grafis dengan ketangguhan kode pemrograman.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-4 mt-2 mb-6 justify-center md:justify-start">
              {socialMediaLinks.map((social, index) => (
                <div
                  key={index}
                  className="flex shrink-0 aspect-square items-center justify-center w-11 h-11 bg-white/50 dark:bg-white/5 border border-slate-200/50 dark:border-white/10 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-green-50 dark:hover:bg-green-500/10 hover:border-green-200 dark:hover:border-green-500/30 group cursor-pointer shadow-sm"
                >
                  <LinkSocialMedia
                    href={social.href}
                    iconName={social.iconName}
                    className="w-4.5 h-4.5 text-slate-700 dark:text-slate-300 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Detail Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-[2.5rem] bg-white/40 dark:bg-white/5 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-md"
          >
            <div className="w-12 h-12 rounded-2xl bg-green-500/10 dark:bg-green-400/10 flex items-center justify-center text-green-600 dark:text-green-400 text-2xl mb-6">
              🎓
            </div>
            <h3 className="text-xl font-bold mb-3">Pendidikan Formal</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Meraih gelar Sarjana S1 Teknik Informatika. Selama kuliah, berfokus pada analisis algoritma, arsitektur perangkat lunak, dan interaksi manusia-komputer.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-[2.5rem] bg-white/40 dark:bg-white/5 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-md"
          >
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 dark:bg-teal-400/10 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl mb-6">
              ⚡
            </div>
            <h3 className="text-xl font-bold mb-3">Visi Pemrograman</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Membangun aplikasi yang tidak hanya andal di sisi backend (kecepatan & skalabilitas), tetapi juga memikat, intuitif, dan responsif dari segi desain frontend.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-[2.5rem] bg-white/40 dark:bg-white/5 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-md"
          >
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-400/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-2xl mb-6">
              🎨
            </div>
            <h3 className="text-xl font-bold mb-3">Design & Logic</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Mempunyai antusiasme tinggi pada seni grafis, teori warna, layout grid, dan animasi mikro, yang kemudian diimplementasikan ke dalam kode antarmuka.
            </p>
          </motion.div>
        </div>

        {/* Riwayat Pendidikan Timeline Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 rounded-[2.5rem] bg-white/45 dark:bg-slate-900/60 backdrop-blur-lg border border-slate-200/50 dark:border-slate-800/50 shadow-lg mb-12 text-left"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="text-green-500">■</span> Riwayat Pendidikan
          </h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-[15px] before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800/80">

            {/* Pendidikan S1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-10"
            >
              <div className="absolute left-[8px] top-[6px] w-[16px] h-[16px] rounded-full bg-teal-500 ring-4 ring-teal-500/20 dark:ring-teal-400/10 z-10"></div>
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400">2017 - 2021 | Kampus Swasta</span>
              <h4 className="text-lg font-bold text-slate-850 dark:text-white mt-1">S1 Teknik Informatika</h4>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">STIKOM Artha Buana Kupang</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Menyelesaikan studi Sarjana (S1) di kampus swasta dengan fokus pada analisis algoritma, rekayasa perangkat lunak, sistem basis data, dan kecerdasan buatan.
              </p>
            </motion.div>

            {/* Pendidikan SMK */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative pl-10"
            >
              <div className="absolute left-[8px] top-[6px] w-[16px] h-[16px] rounded-full bg-emerald-400 ring-4 ring-emerald-400/20 dark:ring-emerald-400/10 z-10"></div>
              <span className="text-xs font-bold text-emerald-500 dark:text-emerald-400">2015 - 2017 | Sekolah Negeri</span>
              <h4 className="text-lg font-bold text-slate-850 dark:text-white mt-1">Multimedia</h4>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">SMK Negeri 5 Kupang</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Menempuh pendidikan menengah kejuruan negeri di bidang Multimedia. Mempelajari dasar-dasar desain grafis, produksi video, animasi 2D/3D, fotografi, dan dasar desain halaman web.
              </p>
            </motion.div>

            {/* Pendidikan SMP */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative pl-10"
            >
              <div className="absolute left-[8px] top-[6px] w-[16px] h-[16px] rounded-full bg-green-500 ring-4 ring-green-500/20 dark:ring-green-400/10 z-10"></div>
              <span className="text-xs font-bold text-green-600 dark:text-green-400">2011 - 2014 | Sekolah Negeri</span>
              <h4 className="text-lg font-bold text-slate-850 dark:text-white mt-1">Sekolah Menengah Pertama</h4>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">SMP Negeri 12 Kupang</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Menyelesaikan pendidikan tingkat menengah pertama negeri dengan fokus pembelajaran akademik dasar dan ekstrakurikuler teknologi informasi dasar.
              </p>
            </motion.div>

            {/* Pendidikan SD */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative pl-10"
            >
              <div className="absolute left-[8px] top-[6px] w-[16px] h-[16px] rounded-full bg-green-400 ring-4 ring-green-400/20 dark:ring-green-400/10 z-10"></div>
              <span className="text-xs font-bold text-green-500 dark:text-green-400">2005 - 2011 | Sekolah Swasta</span>
              <h4 className="text-lg font-bold text-slate-850 dark:text-white mt-1">Sekolah Dasar</h4>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">SD Kristen Tunas Bangsa Kupang</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Menempuh pendidikan sekolah dasar swasta yang berorientasi pada pembentukan karakter, nilai-nilai moral/keagamaan, kedisiplinan, serta fondasi dasar ilmu pengetahuan alam dan matematika dasar.
              </p>
            </motion.div>

          </div>
        </motion.div>

        {/* Detailed Timeline Biography Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 rounded-[2.5rem] bg-white/45 dark:bg-slate-900/60 backdrop-blur-lg border border-slate-200/50 dark:border-slate-800/50 shadow-lg mb-12 text-left"
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="text-green-500">■</span> Biografi & Metodologi Kerja
          </h2>
          <div className="space-y-8 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Perjalanan profesional saya dimulai dengan hasrat yang mendalam terhadap teknologi informasi. Sejak menempuh bangku perkuliahan S1 Teknik Informatika, saya menyadari bahwa aplikasi terbaik dilahirkan dari kolaborasi yang erat antara logika rekayasa perangkat lunak dan keindahan desain visual. Hal ini mendorong saya untuk konsisten mengasah keahlian di kedua disiplin tersebut.
            </p>
            <p>
              Dalam proses pengembangan, saya memprioritaskan metodologi clean code and best practices. Untuk backend, saya berpengalaman merancang database relasional yang dinormalisasi dengan baik menggunakan SQL (MySQL/PostgreSQL) serta membangun API terstruktur di atas framework Laravel. Untuk frontend, saya memanfaatkan ekosistem React.js dipadukan dengan Tailwind CSS untuk menghasilkan antarmuka komponen yang modular, dinamis, dan berperforma tinggi.
            </p>
            <p>
              Dengan ditetapkannya tujuan ke depan sebagai <strong>AI Fullstack Engineer</strong>, saya sedang memperluas spektrum kompetensi dengan mengintegrasikan kecerdasan buatan (Machine Learning, Natural Language Processing, dan API AI) langsung ke dalam alur kerja pengembangan web guna menghadirkan aplikasi yang lebih pintar, terpersonalisasi, dan siap menghadapi kebutuhan masa depan.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </PageTransition>
  );
}

export default AboutDetail;
