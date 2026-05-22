import React from 'react';

function ContactSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-slate-50 dark:bg-[#0B0F19] transition-colors duration-300" name="kontak">
      
      {/* 1. Ambient Liquid Glow (Mesh Gradient - Emerald/Teal) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-teal-400/10 dark:bg-teal-500/5 blur-[120px]"></div>
      </div>

      <div className="container mx-auto w-full max-w-5xl px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <span className="text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Hubungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400">Saya</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Punya pertanyaan, ide kolaborasi, atau tawaran pekerjaan? Jangan ragu untuk mengirimkan pesan melalui form di bawah ini.
          </p>
        </div>

        {/* 2. Glass Form Container */}
        <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-[2.5rem] bg-white/40 dark:bg-white/5 backdrop-blur-2xl border border-white/60 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]">
          
          <form name="wf-form-name" method="get" className="space-y-6">
            
            {/* Grid untuk Nama Depan & Belakang */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="first-name" className="ml-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Nama Depan
                </label>
                <input 
                  type="text" 
                  id="first-name"
                  className="w-full px-5 py-4 bg-white/60 dark:bg-slate-900/40 border border-white/80 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 dark:focus:ring-emerald-400/50 focus:border-transparent transition-all backdrop-blur-sm shadow-inner" 
                  placeholder="John" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="ml-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Nama Belakang
                </label>
                <input 
                  type="text" 
                  id="last-name"
                  className="w-full px-5 py-4 bg-white/60 dark:bg-slate-900/40 border border-white/80 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 dark:focus:ring-emerald-400/50 focus:border-transparent transition-all backdrop-blur-sm shadow-inner" 
                  placeholder="Doe" 
                  required 
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="ml-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                Alamat Email
              </label>
              <input 
                type="email" 
                id="email"
                className="w-full px-5 py-4 bg-white/60 dark:bg-slate-900/40 border border-white/80 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 dark:focus:ring-emerald-400/50 focus:border-transparent transition-all backdrop-blur-sm shadow-inner" 
                placeholder="john.doe@example.com"
                required
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="ml-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                Pesan
              </label>
              <textarea 
                id="message"
                name="message" 
                rows="5"
                className="w-full px-5 py-4 bg-white/60 dark:bg-slate-900/40 border border-white/80 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 dark:focus:ring-emerald-400/50 focus:border-transparent transition-all backdrop-blur-sm shadow-inner resize-none"
                placeholder="Tulis pesan atau tawaran Anda di sini..."
                maxLength="5000"
                required
              ></textarea>
            </div>
    
            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                className="w-full py-4 text-base font-bold tracking-wide text-white transition-all duration-300 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 dark:focus:ring-offset-slate-900"
              >
                Kirim Pesan
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}

export default ContactSection;