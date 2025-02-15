import React, { useState, useEffect } from 'react';
import right from "../assets/contact-section/right.png";
import left from "../assets/contact-section/left.png";

const HomeEnd = () => {
  const [leftPosition, setLeftPosition] = useState(-192); // -192px is the full width of image (-48rem)
  const [rightPosition, setRightPosition] = useState(192); // 192px is the full width of image (48rem)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.min(scrollPosition / maxScroll, 1);
      
      // Calculate positions
      // Left image: starts at -192px (off-screen) and moves right to 0px (edge)
      // Right image: starts at 192px (off-screen) and moves left to 0px (edge)
      const leftImagePosition = -192 + (scrollPercentage * 192);
      const rightImagePosition = 192 - (scrollPercentage * 192);
      
      setLeftPosition(leftImagePosition);
      setRightPosition(rightImagePosition);
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial position calculation
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Left Image */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 opacity-100 transition-transform duration-500 ease-out"
        style={{ transform: `translate(${leftPosition}px, -50%)` }}
      >
        <img 
          src={left}
          alt="Left Edge"
          className="w-48 h-auto object-cover"
        />
      </div>
      
      {/* Right Image */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-100 transition-transform duration-500 ease-out"
        style={{ transform: `translate(${rightPosition}px, -50%)` }}
      >
        <img 
          src={right}
          alt="Right Edge"
          className="w-48 h-auto object-cover"
        />
      </div>
      
      {/* Glassmorphic overlay on top of everything else */}
      <div 
        className="absolute inset-0 backdrop-blur-sm bg-white/5 pointer-events-none"
        style={{
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          zIndex: 1  // Lower z-index so it doesn't block the images
        }}
      />
    </div>
  );
};

export default HomeEnd;