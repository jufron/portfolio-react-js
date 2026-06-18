import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ButtonToTop from './components/subComponents/ButtonToTop';

// Pages
import Home from './pages/Home';
import AboutDetail from './pages/AboutDetail';
import CertificateDetail from './pages/CertificateDetail';
import ProjectDetail from './pages/ProjectDetail';

function App({theme}) {
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (  
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-detail" element={<AboutDetail />} />
        <Route path="/certificate-detail" element={<CertificateDetail />} />
        <Route path="/project-detail" element={<ProjectDetail />} />
      </Routes>
      <Footer />
      <ButtonToTop />
    </Router>
  );
}

export default App;

