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
      
      {/* Contact information */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white z-10">
        <h2 className="text-4xl font-bold mb-10">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Pratitya Chairman</h3>
            <p className="mb-1">Name</p>
            <p>Phone Number</p>
          </div>
          
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Pratitya Vice-Chairman</h3>
            <p className="mb-1">Name</p>
            <p>Phone Number</p>
          </div>
          
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Pratitya Faculty Head</h3>
            <p className="mb-1">Name</p>
            <p>Phone Number</p>
          </div>
        </div>
      </div>
      
      {/* Glassmorphic overlay */}
      <div 
        className="absolute inset-0 backdrop-blur-sm bg-black/30 pointer-events-none"
        style={{
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          zIndex: 5  // Between the background and the content
        }}
      />
    </div>
  );
};

export default HomeEnd;