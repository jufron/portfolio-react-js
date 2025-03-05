import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function ButtonWhatsApp () {
  return (
    <button
      className="fixed bottom-5 right-5 transition duration-500 bg-green-400 hover:bg-green-500 text-white rounded-xl px-4 py-3 flex items-center justify-center"
    >
      <FontAwesomeIcon icon={faWhatsapp} size='lg' />
    </button>
  );
}

function ButtonToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <>
      <button
          className={`fixed bottom-15 right-5 transition-opacity duration-500 bg-gray-800 dark:border-1 dark:border-white text-white rounded-xl px-4 py-3 flex items-center justify-center mb-4 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={backToTop}
        >
          <FontAwesomeIcon icon={faChevronUp} size='lg' />
      </button>
      <ButtonWhatsApp />
    </>
  );
}

export default ButtonToTop;