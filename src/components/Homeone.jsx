import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FlipCountdown from "./FlipCountdown";

const HomeOne = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateCastleEffects = () => {
    const isDesktop = window.innerWidth >= 768;
    const maxScale = isDesktop ? 1.2 : 1.4;
    const minScale = isDesktop ? 0.9 : 1;
    const viewportHeight = window.innerHeight;
    const startPosition = isDesktop ? 55 : 80;

    // Smooth out the scale calculation using easeOutCubic
    const progress = Math.min(1, scrollPosition / viewportHeight);
    const easeOutCubic = 1 - Math.pow(1 - progress, 3);
    const scale = maxScale - easeOutCubic * (maxScale - minScale);

    let topPosition = Math.min(
      isDesktop ? 65 : 95,
      startPosition + (scrollPosition / viewportHeight) * 35
    );
    
    if (window.innerWidth < 360) {
      topPosition += 5;
    }

    return { scale, topPosition };
  };

  const { scale, topPosition } = calculateCastleEffects();

  const calculateSideElementsVisibility = () => {
    const viewportHeight = window.innerHeight;
    const translateXLeft = Math.max(
      0,
      0 - ((scrollPosition + 200 - viewportHeight) / (viewportHeight / 2)) * 100
    );
    return { translateXLeft };
  };

  const { translateXLeft } = calculateSideElementsVisibility();

  const castleImageUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/home-section-one%2Fcastle-only.webp?alt=media&token=d6a23bfe-6998-473f-aba0-84f4dd2b98de";
  const lantenMobUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/home-section-one%2Flantengroup.webp?alt=media&token=5bdbf9c7-06c5-477d-b3c1-67d393d10532";
  const mobBg = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/home-section-one%2Fhome-bg.webp?alt=media&token=3c29cbb1-56a3-4992-b160-636871f64c97";
  const dbgUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/home-section-one%2Fbg-desktop-h.webp?alt=media&token=a319ab68-8971-4650-8a6e-4ca3a303f3e3";
  const lantendUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/home-section-one%2Flanten-desktop.webp?alt=media&token=7761e184-9396-4e32-a0b2-e3e8924ff846";
  const castledUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/home-section-one%2Fcastle-desktop.webp?alt=media&token=01c29b7a-c6d3-4bc5-9beb-9823d6767bb5";
  const mUrl ="https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/home-section-one%2Fmountain.webp?alt=media&token=50eac2ea-356f-41cc-9f00-0ba3c024f668";
  const mfUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/home-section-one%2Fmountain-front.webp?alt=media&token=69e2490f-9c13-4002-b7a0-1ce6e69fdf09"

  // Common castle container styles
  const castleContainerStyles = {
    top: `${topPosition}vh`,
    transform: `scale(${scale})`,
    transformOrigin: "bottom left",
    transition: "transform 0.3s cubic-bezier(0.33, 1, 0.68, 1), top 0.3s cubic-bezier(0.33, 1, 0.68, 1)",
    bottom: 0,
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* Background Image */}
      <div
        className="min-h-[200vh] bg-cover bg-center bg-no-repeat w-full"
        style={{
          backgroundImage: `url(${window.innerWidth >= 768 ? dbgUrl : mobBg})`,
          transition: "transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      />

      {/* Lantern Container */}
      <div
        className="absolute top-0 left-0 h-screen w-full flex items-center justify-center -mt-14 md:-mt-8 overflow-hidden z-10 md:items-start"
        style={{
          transform: `translateY(${window.innerWidth >= 768 ? Math.min(scrollPosition * -0.7, 0) : scrollPosition * -0.8}px)`,
          transition: "transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      >
        <img
          src={window.innerWidth >= 768 ? lantendUrl : lantenMobUrl}
          alt="Lanten Group"
          className="w-screen h-auto object-contain md:w-full md:max-h-[90vh] mt-20"
        />
      </div>

      {/* Title and Countdown Container */}
      <div
        className="absolute top-0 left-0 h-screen w-full flex flex-col items-center justify-center z-10 pointer-events-none"
        style={{
          transform: `translateY(${scrollPosition * -0.8}px)`,
          transition: "transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      >
        <motion.h1
          className="text-6xl font-agraham md:text-7xl xl:text-8xl mb-6 -mt-16 md:mt-8 text-center text-white drop-shadow-2xl relative max-[360px]:text-5xl max-[360px]:-mt-12"
          style={{
            textShadow:
              "2px 2px 4px rgba(255, 20, 20, 0.8), 4px 4px 8px rgba(0, 0, 0, 0.6), 0 0 10px rgba(197, 69, 19, 0.8), 0 0 20px rgba(255, 174, 0, 0.87)",
          }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Pratitya
          <span className="text-white px-3 font-poppins text-2xl font-semibold md:text-3xl absolute top-[-20px] -ml-3 max-[360px]:text-xl">
            25
          </span>
        </motion.h1>

        {/* <div className="pointer-events-auto scale-75 md:scale-110 md:pt-4 xl:scale-125 max-[360px]:scale-[0.65]">
          <FlipCountdown />
        </div> */}
      </div>

      {/* About Section */}
      <div
        className="absolute w-full flex flex-col items-center justify-center z-10"
        style={{
          top: "135vh",
          transform: `translateX(${translateXLeft}%)`,
          transition: "transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)",
        }}
      >
        <h2 
          className="text-5xl font-agraham text-white mb-6 drop-shadow-2xl"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          About
        </h2>
        <p 
          className="text-white text-center max-w-lg px-4 font-poppins"
          style={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
          }}
        >
          Saintgits College of Engineering presents Pratitya 25, a vibrant celebration of culture, music, and festivities on February 27, 2025! Festa Feasta is the heart of the event, bringing people together through lively performances, exciting activities, and a spirit of celebration. Experience the joy of togetherness, creativity, and unforgettable moments. Stay tuned for updates!
        </p>
      </div>

      {/* Mobile Castle Container */}
      <div
        className="absolute left-0 w-full flex items-end justify-start overflow-x-hidden md:hidden"
        style={castleContainerStyles}
      >
        <div className="w-full h-full overflow-x-hidden">
          <img
            src={castleImageUrl}
            alt="Castle"
            className="w-full h-auto object-contain absolute bottom-0"
          />
        </div>
      </div>

      {/* Desktop Castle Container */}
      <div
        className="absolute left-0 w-full items-end justify-start overflow-x-hidden hidden md:block"
        style={castleContainerStyles}
      >
        <div className="w-full h-full overflow-x-hidden relative">
          <img
            src={castledUrl}
            alt="Castle"
            className="w-[65%] h-auto object-contain absolute bottom-0 -left-20 max-h-[150vh] md:max-h-[160vh] lg:w-[45%] lg:-left-28 lg:max-h-[130vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeOne;