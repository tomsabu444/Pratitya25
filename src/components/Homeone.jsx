import React, { useEffect, useState } from 'react';
import background from "../assets/home-section-one/home-bg.png";
import lanten from "../assets/home-section-one/lantengroup.png";
import newImage from "../assets/home-section-one/castle-only.png";

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

  // Calculate scale and position based on scroll
  const calculateCastleEffects = () => {
    const maxScale = 1.15;
    const minScale = 1;
    const viewportHeight = window.innerHeight;
    const startPosition = 75; // Initial position moved higher
    
    // Calculate scale based on scroll position
    const scale = Math.max(
      minScale,
      maxScale - (scrollPosition / viewportHeight) * (maxScale - minScale)
    );

    // Calculate vertical position to stop at end of first viewport
    const topPosition = Math.min(
      98, // Maximum position (end of first viewport)
      startPosition + (scrollPosition / viewportHeight) * 23
    );

    return { scale, topPosition };
  };

  const { scale, topPosition } = calculateCastleEffects();

  return (
    <div className="relative">
      {/* Background image - 2 viewport heights */}
      <div 
        className="min-h-[200vh] bg-cover bg-center bg-no-repeat w-full"
        style={{
          backgroundImage: `url(${background})`,
          transition: 'transform 0.3s ease-out'
        }}
      />

      {/* Main lantern image with scroll effect - positioned higher */}
      <div
        className="absolute top-0 left-0 h-screen w-full flex items-center justify-center -mt-14"
        style={{
          transform: `translateY(${scrollPosition * -0.8}px)`
        }}
      >
        <img
          src={lanten}
          alt="Lanten Group"
          className="w-screen h-auto object-contain"
        />
      </div>

      {/* Dynamic castle image with adjusted position range */}
      <div
        className="absolute left-0 w-full flex items-end justify-start"
        style={{
          top: `${topPosition}vh`,
          transform: `scale(${scale})`,
          transformOrigin: 'bottom left',
          transition: 'transform 0.3s ease-out, top 0.3s ease-out'
        }}
      >
        <img
          src={newImage}
          alt="Castle"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default HomeOne;