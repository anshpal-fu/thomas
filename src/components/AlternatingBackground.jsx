import React, { useEffect, useRef } from 'react';

const AlternatingBackground = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const sections = containerRef.current.querySelectorAll('[data-bg-section]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          // Update background based on section
          const bgColor = section.getAttribute('data-bg-color');
          if (bgColor) {
            document.body.style.backgroundColor = bgColor;
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set background
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Reset background when component unmounts
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};

export default AlternatingBackground;