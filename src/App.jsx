import { useEffect } from 'react';
import './App.css';
import AboutSection from './components/AboutSection';
import ExperientSection from './components/ExperientSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import ProjectSection from './components/ProjectSection';
import SertificateSection from './components/SertificateSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import ButtonToTop from './components/subComponents/ButtonToTop';

function App({theme}) {
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (  
    <div className=''>
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* <ExperientSection /> */}
      <SkillsSection />
      <SertificateSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
      <ButtonToTop />
    </div>
  );
}

export default App
