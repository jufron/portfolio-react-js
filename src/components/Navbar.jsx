import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { menuList } from './../data';
import useTheme from './../hooks/useTheme';
import useScroll from './../hooks/useScroll';
import Dropdown from './../components/navbar/Dropdown';
import NavbarMenuItem from './../components/navbar/NavbarMenuItem';
import { LANGUAGES, THEMES } from "../utils";

function Navbar () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useTheme();
  const isScrolled = useScroll();
  // Default to first language
  const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0]); 
  // Default to first theme
  const [selectedTheme, setSelectedTheme] = useState(THEMES[0]); 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLanguageSelect = language => {
    setSelectedLanguage(language)
  };

  const handleThemeSelect = (theme) => { 
    setSelectedTheme(theme);
    if (theme.value === "system") {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
      setTheme(systemTheme);
    } else {
      setTheme(theme.value)
    }
  };

  const renderItem = (item) => (
    <>
      {item.value === "dark" && <FontAwesomeIcon icon={faMoon} className="mr-1" />}
      {item.value === "light" && <FontAwesomeIcon icon={faSun} className="mr-1" />}
      {item.value === "system" && <FontAwesomeIcon icon={faDesktop} className="mr-1" />}
      <span>{item.label}</span>
    </>
  );

  useEffect(() => {
    const html = document.querySelector("html");
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    if(theme !== "system"){
      setSelectedTheme(THEMES.find(item => item.value === theme))
    }
  }, [theme]);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 pointer-events-none transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-8 ${
        isScrolled ? "top-3" : "top-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Island 1: Brand */}
        <div className="pointer-events-auto flex items-center justify-center bg-white/45 dark:bg-slate-900/75 backdrop-blur-lg border border-white/30 dark:border-slate-800/50 shadow-md hover:shadow-lg rounded-full transition-all duration-500 hover:scale-[1.03] hover:shadow-green-500/5 h-16 px-8">
          <a href="/" className="text-green-500 font-extrabold text-xl tracking-wider dark:text-green-400 select-none">
            Portfolio
          </a>
        </div>

        {/* Island 2: Links (Desktop) */}
        <div className="hidden lg:flex pointer-events-auto items-center justify-center bg-white/45 dark:bg-slate-900/75 backdrop-blur-lg border border-white/30 dark:border-slate-800/50 shadow-md hover:shadow-lg rounded-full transition-all duration-500 h-16 px-6">
          <div className="flex items-center gap-1.5">
            {menuList.map((item, index) => (
              <NavbarMenuItem key={index} menuName={item.name} />
            ))}
          </div>
        </div>

        {/* Island 3: Actions (Theme Toggle & Mobile Menu) */}
        <div className="pointer-events-auto flex items-center bg-white/45 dark:bg-slate-900/75 backdrop-blur-lg border border-white/30 dark:border-slate-800/50 shadow-md hover:shadow-lg rounded-full transition-all duration-500 h-16 px-5">
          <Dropdown
            items={THEMES}
            selectedItem={selectedTheme}
            onItemSelected={handleThemeSelect}
            renderItem={renderItem}
          />
          
          <div className="lg:hidden flex items-center pl-1 border-l border-slate-200/50 dark:border-slate-800/50 ml-1">
            <HamburgerMenuMobile 
              toggleMenu={toggleMenu} 
              isMenuOpen={isMenuOpen} 
            />
          </div>
        </div>

      </div>

      {/* Floating Island Mobile Dropdown */}
      {isMenuOpen && (
        <div className="pointer-events-auto mt-4 mx-auto max-w-sm lg:hidden bg-white/85 dark:bg-slate-950/90 backdrop-blur-lg border border-white/30 dark:border-slate-800/50 shadow-xl rounded-3xl p-4 transition-all duration-300 animate-in fade-in slide-in-from-top-4">
          <MobileMenuContent setIsMenuOpen={setIsMenuOpen} />
        </div>
      )}
    </nav>
  );
}

function MobileMenuContent ({ setIsMenuOpen }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {menuList.map((item, index) => (
        <Link
          key={index}
          to={item.name.toLowerCase()}
          smooth={true}
          duration={500}
          spy={true}
          activeClass="bg-green-500/10 text-green-600! dark:bg-green-400/10 dark:text-green-400! font-semibold"
          className="text-center w-full text-slate-700 hover:text-green-500 hover:bg-slate-100/80 dark:text-slate-200 dark:hover:bg-slate-900/85 px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-200 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

function HamburgerMenuMobile ({ toggleMenu, isMenuOpen }) {
  return (
    <div className="lg:hidden">
      <button 
        onClick={toggleMenu} 
        className="inline-flex items-center justify-center p-1.5 rounded-full text-slate-700 hover:text-green-500 hover:bg-slate-100/85 focus:outline-none dark:text-slate-200 dark:hover:text-green-400 dark:hover:bg-slate-800/85 transition-all duration-200 cursor-pointer"
        aria-label="Toggle Menu"
        >
        <span className="sr-only">Open main menu</span>
        {isMenuOpen ? (
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
        ) : (
          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h18"></path>
          </svg>
        )}
      </button>
    </div>
  );
}

export default Navbar;

