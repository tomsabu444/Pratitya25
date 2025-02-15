import React, { useEffect, useState } from 'react';
import background from "../assets/home-section-one/home-bg.png";
import lanten from "../assets/home-section-one/lantengroup.png";

const HomeOne = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Background image - 2 viewport heights */}
      <div 
        className="min-h-[200vh] bg-cover bg-center bg-no-repeat w-full"
        style={{
          backgroundImage: `url(${background})`
        }}
      />
      
      {/* Overlay image - 1 viewport height */}
      <div
        className="absolute top-0 left-0 h-screen w-full flex items-center justify-center"
        style={{
          transform: `translateY(${scrollPosition * -0.75}px)` // Changed to negative value for upward movement
        }}
      >
        <img
          src={lanten}
          alt="Lanten Group"
          className="w-screen h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default HomeOne;