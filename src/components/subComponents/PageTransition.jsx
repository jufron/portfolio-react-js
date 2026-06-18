import React, { useState, useEffect } from 'react';

function PageTransition({ children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Micro-delay to ensure browser registers the change from opacity-0 to opacity-100
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-out transform ${
        isVisible 
          ? 'opacity-100 translate-y-0 filter blur-none' 
          : 'opacity-0 translate-y-6 filter blur-[2px]'
      }`}
    >
      {children}
    </div>
  );
}

export default PageTransition;
