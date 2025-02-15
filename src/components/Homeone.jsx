import React from 'react';
import background from "../assets/home-section-one/home-bg.png"
const Homeone = () => {
  return (
    <div className="relative w-full h-[200vh]">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src={background}
          alt="Background"
          className="w-full h-[170vh] object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 p-4" style={{ height: '100vh' }}>
          
      </div>
    </div>
  );
};

export default Homeone;