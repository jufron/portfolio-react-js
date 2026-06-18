import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import SertificateSection from '../components/SertificateSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import PageTransition from '../components/subComponents/PageTransition';

function Home() {
  useEffect(() => {
    // Jalankan scroll ke section jika tersimpan di localStorage
    const scrollTarget = localStorage.getItem("scrollTarget");
    if (scrollTarget) {
      localStorage.removeItem("scrollTarget");
      setTimeout(() => {
        const element = document.getElementsByName(scrollTarget)[0];
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, []);

  return (
    <PageTransition>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <SertificateSection />
      <ProjectSection />
      <ContactSection />
    </PageTransition>
  );
}

export default Home;
