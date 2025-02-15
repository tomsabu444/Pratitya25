import React from 'react';
import { useEffect, useState } from 'react';
import background from "../assets/home-section-one/home-bg.png";
import lanten from "../assets/home-section-one/lantengroup.png";

export const HomeOne = () => {
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