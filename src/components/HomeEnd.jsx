import React, { useEffect, useState, useRef } from 'react';
import ImageL from "../assets/featured-home/mobile-bg.jpg";

const HomeEnd = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const element = sectionRef.current;
      const rect = element.getBoundingClientRect();
      
      // Calculate when element is in view
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const windowHeight = window.innerHeight;
      
      // Start effect when element enters viewport
      if (elementTop < windowHeight && elementBottom > 0) {
        const progress = (windowHeight - elementTop) / (windowHeight + rect.height);
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate movement - once images meet, they stay together
  const getTransform = (isLeft) => {
    const meetingPoint = 25; // Distance to move to meet in middle
    const moveDistance = Math.min(scrollProgress * meetingPoint, meetingPoint);
    
    return isLeft 
      ? `translateX(${moveDistance}vw)` 
      : `translateX(-${moveDistance}vw)`;
  };

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">
          Where Images Meet
        </h2>

        <div className="relative h-[400px] md:h-[600px] w-full flex justify-center items-center">
          {/* Left Image Container */}
          <div 
            className="absolute left-0 top-0 w-1/2 h-full overflow-hidden"
            style={{
              transform: getTransform(true),
              transition: 'transform 0.1s ease-out'
            }}
          >
            <img
              src={ImageL}
              alt="Left ceremony"
              className="absolute right-0 h-full w-auto max-w-none object-cover"
              style={{ clipPath: 'inset(0 0 0 0)' }}
            />
          </div>

          {/* Right Image Container */}
          <div 
            className="absolute right-0 top-0 w-1/2 h-full overflow-hidden"
            style={{
              transform: getTransform(false),
              transition: 'transform 0.1s ease-out'
            }}
          >
            <img
              src={ImageL}
              alt="Right ceremony"
              className="absolute left-0 h-full w-auto max-w-none object-cover"
              style={{ clipPath: 'inset(0 0 0 0)' }}
            />
          </div>
        </div>

        <p className="text-white text-lg md:text-xl text-center mt-16 max-w-2xl mx-auto">
          Witness the perfect union of ceremonial imagery
        </p>
      </div>
    </div>
  );
};

export default HomeEnd;