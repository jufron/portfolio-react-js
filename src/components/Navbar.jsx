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
      className={`block top-0 left-0 right-0 z-50 bg-slate-50 opacity-95 backdrop-blur-md transition-all duration-300 ease-in-out ${
        isScrolled
          ? "top-2 sm:top-0 left-3 sm:left-0 right-3 sm:right-0 rounded-xl sm:rounded-none xl:top-4 xl:left-5 xl:right-5 xl:rounded-xl fixed shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          : ""
      } dark:bg-slate-950`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="/" className="text-green-400 font-bold text-2xl dark:text-green-300">
              Portfolio
            </a>
          </div>
          <div className="hidden md:block">
            <div className="sm:ml-0 md:ml-4 lg:ml-8 xl:ml-10 flex items-baseline lg:space-x-4">
              {menuList.map((item, index) => (
                <NavbarMenuItem key={index} menuName={item.name} />
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-2 flex items-center md:ml-6">
              {/* dropdown language */}
            
              {/* <Dropdown
                items={LANGUAGES}
                selectedItem={selectedLanguage}
                onItemSelected={handleLanguageSelect}
                renderItem={renderItem}
              /> */}
              
              {/* dropdown theme */}
              <Dropdown
                items={THEMES}
                selectedItem={selectedTheme}
                onItemSelected={handleThemeSelect}
                renderItem={renderItem}
              />
          </div>
          </div>
          <div className="flex items-center gap-x-3 md:hidden">
            <Dropdown
                items={THEMES}
                selectedItem={selectedTheme}
                onItemSelected={handleThemeSelect}
                renderItem={renderItem}
            />
            <HamburgerMenuMobile 
              toggleMenu={toggleMenu} 
              isMenuOpen={isMenuOpen} 
            />
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <MobileMenuContent />
      )}
    </nav>
  );
}

function MobileMenuContent () {
  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {menuList.map((item, index) => (
          <Link
            key={index}
            to={`${item.name.toLowerCase()}`}
            smooth={true}
            duration={500}
            className="text-gray-900 hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium dark:text-slate-100 cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

function HamburgerMenuMobile ({ toggleMenu, isMenuOpen }) {
  return (
    <div className="md:hidden">
      <button 
        onClick={toggleMenu} 
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white dark:text-slate-100 dark:hover:text-white dark:focus:ring-slate-100"
        >
        <span className="sr-only">Open main menu</span>
        {isMenuOpen ? (
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12h18M3 6h18M3 18h18"></path>
          </svg>
        )}
      </button>
    </div>
  );
}

export default Navbar;
