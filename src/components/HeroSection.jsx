import React from 'react';
import imagePoster from './../assets/img/update-poster-11.png?format=webp&quality=70';
import LinkSocialMedia from './subComponents/LinkSocialMedia';
import { socialMediaLinks } from '../data';

const HeroSection = () => {
  return (
    <header className="bg-white dark:bg-slate-900" name='beranda'>
      <div className="container px-6 mx-auto">
        <div className="items-center flex flex-col lg:flex-row gap-5">
          <div data-aos="fade-up" className="w-full lg:w-1/2 pb-20 lg:pb-0 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold dark:text-slate-100">
              Halo, saya
            </h1>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold bg-text text-green-400">
              Jufron Tamo Ama!
            </h1>
            <p className="text-md md:text-lg lg:my-10 my-8 leading-normal dark:text-slate-100">
              Saya seorang Pengembang Full-Stack berpengalaman dengan keahlian lebih dari 2 tahun dalam membangun aplikasi web yang tangguh dan membuat desain yang menarik secara visual. Mahir dalam Laravel dan React JS, saya menggabungkan kekuatan kode dan kreativitas untuk menghadirkan pengalaman digital yang lancar.
            </p>
            <div className="flex gap-4">
              {socialMediaLinks.map((social, index) => (
                  <LinkSocialMedia key={index} href={social.href} iconName={social.iconName} className={social.className} />
              ))}
            </div>
          </div>
          <div data-aos="fade-up" className="flex items-center justify-center w-full lg:mt-0 lg:w-1/2 order-1 md:order-2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src={imagePoster}
              alt="poster-portfolio"
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;