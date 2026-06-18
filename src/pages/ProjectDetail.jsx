import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { project } from "../data";
import PageTransition from '../components/subComponents/PageTransition';


// Hasilkan data case study dinamis agar detailnya berkelas
const getCaseStudyData = (name) => {
  const n = name.toLowerCase();
  if (n.includes('profile campus') || n.includes('kampus')) {
    return {
      description: 'Website Profil Akademik interaktif yang dirancang untuk memudahkan calon mahasiswa mengakses informasi pendaftaran, program studi, profil dosen, serta berita terbaru kampus.',
      features: ['Sistem Informasi Akademik Terintegrasi', 'Panel CMS Admin untuk Manajemen Konten Berita', 'Pendaftaran Mahasiswa Baru Online & Cetak Dokumen', 'Desain UI Glassmorphism yang Responsif & Modern'],
      challenges: 'Mengoptimalkan beban gambar aset resolusi tinggi dan merancang relasi database relasional yang dinormalisasi untuk penanganan data ribuan calon pendaftar.',
      solutions: 'Menggunakan caching kueri SQL di Laravel, optimasi kompresi gambar otomatis (Vite ImagETools), dan menyusun relasi database Many-To-Many yang efisien.'
    };
  } else if (n.includes('retur')) {
    return {
      description: 'Sistem Logistik Internal untuk mengelola pengajuan, approval, dan lacak status retur barang rusak dari gudang ritel kembali ke pemasok pusat.',
      features: ['Pencatatan SKU & Barcode Scanner Otomatis', 'Alur Persetujuan Bertingkat (Supervisor & Manajer)', 'Notifikasi Email Real-time & Unduh Slip Retur PDF', 'Dashboard Statistik Retur Bulanan & Grafik Batang'],
      challenges: 'Mencegah terjadinya inkonsistensi stok saat pengajuan retur barang sedang diproses atau ditolak oleh pihak gudang pusat.',
      solutions: 'Mengimplementasikan transaksi database terisolasi (Database Transactions) untuk memastikan rollback data jika proses retur gagal diselesaikan.'
    };
  } else if (n.includes('pangkat')) {
    return {
      description: 'Sistem Informasi Manajemen Kepegawaian (SIMPEG) untuk otomatisasi pengajuan pangkat karyawan berdasarkan masa kerja dan poin kredit kompetensi.',
      features: ['Kalkulator Poin Kredit Jabatan & Portofolio', 'Pengingat Otomatis Masa Kenaikan Pangkat Karyawan', 'Sistem Arsip Digital SK Pangkat & Jabatan', 'Manajemen Hak Akses Role-based (Admin, HR, Karyawan)'],
      challenges: 'Menghitung rumus poin kredit yang rumit dan dinamis berdasarkan berbagai kriteria kompetensi instansi.',
      solutions: 'Membuat modul kalkulator khusus berbasis JavaScript OOP yang modular dan fleksibel untuk disesuaikan dengan regulasi terbaru.'
    };
  } else if (n.includes('arsip') || n.includes('archive')) {
    return {
      description: 'Aplikasi Dokumentasi Elektronik (EDMS) untuk digitalisasi arsip penting instansi, retensi dokumen, serta penegakan pembatasan akses data sensitif.',
      features: ['Pencarian Dokumen Berbasis OCR & Kata Kunci', 'Enkripsi Berkas Unggahan (AES-256)', 'Log Aktivitas Pengguna (Audit Trail Log)', 'Sistem Folder Virtual & Labeling Dinamis'],
      challenges: 'Keamanan data berkas PDF agar tidak dapat diunduh langsung via URL publik tanpa otentikasi token.',
      solutions: 'Menyimpan berkas di luar folder public Laravel dan menyajikannya menggunakan Stream response terotentikasi.'
    };
  } else if (n.includes('uyelindo') || n.includes('smk')) {
    return {
      description: 'Website Profil Sekolah SMK Uyelindo Kupang beserta sistem PPDB (Penerimaan Peserta Didik Baru) Online terintegrasi.',
      features: ['Landing Page Sekolah dengan Berita & Pengumuman', 'Formulir Pendaftaran PPDB Interaktif', 'Validasi Kelengkapan Berkas Siswa & Seleksi Otomatis', 'Integrasi Print Kartu Pendaftaran & Tanda Kelulusan'],
      challenges: 'Menghindari duplikasi data pendaftar dan memproses seleksi nilai rapor dengan kriteria bobot dinamis.',
      solutions: 'Menggunakan validasi NIK unik di database MySQL dan menyusun fungsi pendaftaran otomatis di backend PHP Laravel.'
    };
  } else if (n.includes('cascading') || n.includes('kinerja')) {
    return {
      description: 'Sistem Cascading Kinerja Organisasi untuk visualisasi target, sub-target, KPI, dan penugasan berjenjang dari manajemen puncak hingga staf.',
      features: ['Pohon Kinerja (Performance Tree) Interaktif', 'Pelacakan Target KPI Berjenjang', 'Matriks Pembagian Tugas & Tanggung Jawab', 'Dashboard Real-time Progres Pencapaian Sasaran'],
      challenges: 'Visualisasi pohon target kinerja secara dinamis dan hierarkis serta kalkulasi progres pencapaian target berjenjang.',
      solutions: 'Menggunakan manipulasi DOM interaktif dengan library JS/CSS khusus dan merancang query database relasional rekursif.'
    };
  }

  // Kasus umum
  return {
    description: 'Aplikasi web canggih yang memecahkan masalah alur kerja terotomatisasi dengan antarmuka dinamis dan database terintegrasi secara modular.',
    features: ['Otentikasi Pengguna & Manajemen Sesi Aman', 'Operasi CRUD Cepat dengan Validasi Data Ketat', 'Ekspor Laporan Data ke format Excel/PDF', 'Responsivitas Penuh di Semua Perangkat Mobile'],
    challenges: 'Mengintegrasikan antarmuka interaktif dengan validasi data real-time agar performa rendering tetap responsif.',
    solutions: 'Memisahkan state render menggunakan React hooks yang efisien dan meminimalkan kueri kotor pada backend framework.'
  };
};

function ProjectDetail() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

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
        <div className="mb-10">
          <Link
            to="/"
            viewTransition
            onClick={() => localStorage.setItem("scrollTarget", "proyek")}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/70 dark:bg-slate-900/70 border border-slate-200/50 dark:border-slate-800/50 text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:text-green-500 dark:hover:text-green-400 group cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Beranda
          </Link>
        </div>

        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-green-600 dark:text-green-400 uppercase mb-3 block">
            Work Portfolio
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Detail Portofolio & <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500 dark:from-green-400 dark:to-teal-400">Proyek</span>
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-400 text-lg">
            Berikut adalah daftar seluruh proyek perangkat lunak dan studi kasus sistem yang telah saya bangun.
          </p>
        </div>

        {/* Projects List (Daftar List Ke Bawah) */}
        <div className="flex flex-col gap-10 w-full">
          {project.map((data, index) => {
            const details = getCaseStudyData(data.projectName);
            return (
              <div 
                key={index} 
                className="group grid grid-cols-1 md:grid-cols-12 gap-8 p-6 md:p-8 rounded-[2.5rem] bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 shadow-md hover:shadow-xl hover:shadow-green-500/5 transition-all duration-500 items-center text-left"
              >
                {/* Kiri: Gambar Project (md:col-span-5) */}
                <div className="md:col-span-5 w-full overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-slate-850 aspect-video border border-black/5 dark:border-white/5">
                  <img 
                    src={data.image} 
                    alt={data.projectName} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
                    loading="lazy"
                  />
                </div>

                {/* Kanan: Judul dan Tools (md:col-span-7) */}
                <div className="md:col-span-7 flex flex-col justify-center">
                  <div className="mb-3">
                    <span className="inline-flex items-center px-3 py-1 text-[10px] font-bold tracking-wide rounded-full bg-green-500/10 dark:bg-green-400/10 text-green-600 dark:text-green-400 border border-green-500/20 dark:border-green-400/20 uppercase">
                      {data.kategory}
                    </span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors mb-3">
                    {data.projectName}
                  </h2>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {details.description}
                  </p>

                  {/* Di bawah: Tools */}
                  <div className="border-t border-slate-200/50 dark:border-white/5 pt-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Teknologi yang digunakan</p>
                    <div className="flex flex-wrap gap-2">
                      {data.techStack && data.techStack.map((tech, tIdx) => (
                        <div 
                          key={tIdx} 
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 dark:bg-white/5 border border-slate-200/40 dark:border-white/10 shadow-sm"
                        >
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-3.5 h-3.5 object-contain"
                          />
                          <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tombol Baca Studi Kasus */}
                  <button
                    onClick={() => setActiveCaseStudy(data)}
                    className="self-start mt-6 px-6 py-2.5 bg-slate-900 text-white dark:bg-green-500 dark:text-slate-900 text-xs font-bold rounded-xl hover:scale-[1.02] shadow-md hover:shadow-green-500/10 transition-all duration-300 cursor-pointer"
                  >
                    Studi Kasus Lengkap
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Sidebar / Drawer */}
      {activeCaseStudy && (() => {
        const details = getCaseStudyData(activeCaseStudy.projectName);
        return (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end transition-all duration-300">
            <div className="absolute inset-0" onClick={() => setActiveCaseStudy(null)}></div>
            <div className="relative w-full max-w-2xl bg-white dark:bg-[#0B0F19] h-full shadow-2xl border-l border-slate-200 dark:border-slate-800/80 p-6 overflow-y-auto z-10 animate-in slide-in-from-right duration-300 text-left flex flex-col">
              
              <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800/50 pb-5 mb-6">
                <span className="px-3 py-1 text-[10px] font-bold rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 uppercase">
                  Studi Kasus
                </span>
                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="p-2 text-xs font-bold rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-300 cursor-pointer focus:outline-none"
                >
                  Tutup [x]
                </button>
              </div>

              <div className="relative w-full overflow-hidden rounded-2xl aspect-video bg-slate-100 dark:bg-slate-900/60 mb-6 border border-black/5 dark:border-white/5">
                <img
                  src={activeCaseStudy.image}
                  alt={activeCaseStudy.projectName}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-extrabold mb-4 text-slate-800 dark:text-white">
                {activeCaseStudy.projectName}
              </h2>

              <div className="space-y-6 flex-grow pb-10">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Ringkasan Proyek</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {details.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Fitur Utama</h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {details.features.map((feature, fIdx) => (
                      <li key={fIdx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Tantangan Pengembangan</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {details.challenges}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Solusi Rekayasa</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {details.solutions}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Teknologi yang Digunakan</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeCaseStudy.techStack && activeCaseStudy.techStack.map((tech, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5">
                        <img src={tech.icon} alt={tech.name} className="w-3.5 h-3.5 object-contain" />
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
      </div>
    </PageTransition>
  );
}

export default ProjectDetail;
