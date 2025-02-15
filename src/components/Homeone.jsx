import React from 'react';
import { useEffect, useState } from 'react';
import background from "../assets/home-section-one/home-bg.png";

export const HomeOne = () => {
  return (
    <div 
      className="min-h-[200vh] bg-cover bg-center bg-no-repeat w-full"
      style={{
        backgroundImage: `url(${background})`
      }}
    />
  );
};

export default HomeOne;