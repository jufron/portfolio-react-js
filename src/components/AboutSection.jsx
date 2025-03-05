import imageAbout from './../assets/img/about.jpg?format=webp&quality=70';

function AboutSection() {
  return (
    <section className="bg-slate-50 dark:bg-slate-800" id="about">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20 xl:py-48">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 items-center gap-4 sm:gap-10">

                <div className="order-0 md:order-1 md:col-span-1 lg:col-span-2 xl:col-span-2">
                    <img 
                        src={imageAbout}
                        alt="about-image" 
                        className="mx-auto inline-block h-full w-full max-w-2xl object-cover rounded-xl" 
                        loading='lazy'
                    />
                </div>
                <div className="order-1 md:order-2 md:col-span-1 lg:col-span-2 xl:col-span-3">
                    <h1 className="mb-6 text-4xl font-semibold md:text-5xl dark:text-slate-100">About</h1>
                    <p className="mb-6 max-w-xl md:w-full text-md text-gray-500 md:mb-10 lg:mb-12 dark:text-slate-100 leading-7">
                        Lulusan S1 Komputer dengan pengetahuan mendalam di bidang Teknologi Informasi. Saya memiliki keahlian khusus dalam desain grafis dan pemrograman, dua bidang yang saling melengkapi untuk menciptakan solusi kreatif dan efektif. Selama studi dan pengalaman profesional saya, saya telah mengasah kemampuan saya dalam berbagai aspek desain dan pengembangan, dari menciptakan antarmuka pengguna yang intuitif hingga mengembangkan aplikasi yang kompleks dan efisien.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default AboutSection;
