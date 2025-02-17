import React, { useEffect, useState } from "react";
import rightImage from "../assets/home-section-one/mountain.png";
import bottomRightImage from "../assets/home-section-one/mountain-front.png";
import { motion, useScroll, useTransform } from "framer-motion";
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

    const scale = Math.max(
      minScale,
      maxScale - (scrollPosition / viewportHeight) * (maxScale - minScale)
    );

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
    const isLargeScreen = window.innerWidth >= 1024;
    const speedMultiplier = isLargeScreen ? 1.5 : 1;
    
    const translateXLeft = Math.max(
      0,
      0 - ((scrollPosition - viewportHeight) / (viewportHeight / 2)) * 100 * speedMultiplier
    );

    return { translateXLeft };
  };

  const castleImageUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/home-section-one%2Fcastle-only.webp?alt=media&token=d6a23bfe-6998-473f-aba0-84f4dd2b98de";
  const lantenMobUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/home-section-one%2Flantengroup.webp?alt=media&token=5bdbf9c7-06c5-477d-b3c1-67d393d10532";
  const mobBg = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/home-section-one%2Fhome-bg.webp?alt=media&token=3c29cbb1-56a3-4992-b160-636871f64c97";
  const dbgUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/home-section-one%2Fbg-desktop-h.webp?alt=media&token=a319ab68-8971-4650-8a6e-4ca3a303f3e3";
  const lantendUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/home-section-one%2Flanten-desktop.webp?alt=media&token=7761e184-9396-4e32-a0b2-e3e8924ff846";
  const castledUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/home-section-one%2Fcastle-desktop.webp?alt=media&token=01c29b7a-c6d3-4bc5-9beb-9823d6767bb5";
  const mUrl ="https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/home-section-one%2Fmountain.webp?alt=media&token=50eac2ea-356f-41cc-9f00-0ba3c024f668";
  const mfUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/home-section-one%2Fmountain-front.webp?alt=media&token=69e2490f-9c13-4002-b7a0-1ce6e69fdf09";


  const { translateXLeft } = calculateSideElementsVisibility();

  return (
    <div className="relative overflow-x-hidden">
      {/* Original background */}
      <div
        className="min-h-[200vh] bg-cover bg-center bg-no-repeat w-full"
        style={{
          backgroundImage: `url(${window.innerWidth >= 768 ? dbgUrl : mobBg})`,
          transition: "transform 0.2s ease-out",
        }}
      />

      {/* Mountain Image - Moved behind blur */}
      <div className="hidden md:block absolute bottom-0 right-0 z-[1]">
        <img
          src={mUrl}
          alt="Right Decoration"
          className="w-[340px] h-auto object-contain lg:w-[440px]"
          style={{
            filter: "contrast(110%) saturate(110%)"
          }}
        />
      </div>

      {/* Blur overlay for desktop */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full min-h-[200vh] backdrop-blur-sm bg-white/5 z-[2]" />
      
      {/* Glassmorphic Effect for Second Viewport - Desktop Only */}
      <div className="hidden md:block absolute w-full h-screen z-[5]" style={{ top: "100vh" }}>
      </div>

      {/* Lantern Container - Lower z-index */}
      <div
        className="absolute top-0 left-0 h-screen w-full flex items-center justify-center -mt-14 md:-mt-8 overflow-hidden z-[13] md:items-start"
        style={{
          transform: `translateY(${window.innerWidth >= 768 ? Math.min(scrollPosition * -0.7, 0) : scrollPosition * -0.8}px)`,
        }}
      >
        <img
          src={window.innerWidth >= 768 ? lantendUrl : lantenMobUrl}
          alt="Lanten Group"
          className="w-screen h-auto object-contain md:w-[120%] md:max-h-[90vh] mt-20"
        />
      </div>

      {/* Title and Countdown Container */}
      <div
        className="absolute top-0 left-0 h-screen w-full flex flex-col items-center justify-center z-[15] pointer-events-none"
        style={{
          transform: `translateY(${scrollPosition * -0.8}px)`,
        }}
      >
        <motion.h1
          className="text-6xl font-agraham md:text-7xl md:text-7xl xl:text-8xl mb-6 -mt-16 md:mt-8 text-center text-white drop-shadow-2xl relative max-[360px]:text-5xl max-[360px]:-mt-12"
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

        <div className="hidden md:block pointer-events-auto scale-75 md:scale-110 md:pt-4 xl:scale-125">
          <FlipCountdown />
        </div>
      </div>

      {/* About Section */}
      <div
        className="absolute w-full flex flex-col items-center justify-center z-[15]"
        style={{
          top: window.innerWidth >= 1280 ? "125vh" : "135vh",
          transform: `translateX(${translateXLeft}%)`,
          transition: "transform 0.1s ease-out",
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
          Saintgits College of Engineering presents Pratitya 2025, a vibrant celebration of culture, music, and festivities on February 27, 2025! Festa Feasta is the heart of the event, bringing people together through lively performances, exciting activities, and a spirit of celebration. Experience the joy of togetherness, creativity, and unforgettable moments. Stay tuned for updates!
        </p>
      </div>

      {/* Mobile Castle Container */}
      <div
        className="absolute left-0 w-full flex items-end justify-start overflow-x-hidden block md:hidden"
        style={{
          top: `${topPosition}vh`,
          transform: `scale(${scale})`,
          transformOrigin: "bottom left",
          transition: "transform 0.1s ease-out, top 0.1s ease-out",
          bottom: 0,
        }}
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
        className="absolute left-0 w-full flex items-end justify-start overflow-x-hidden hidden md:block z-[19]"
        style={{
          top: `${topPosition}vh`,
          transform: `scale(${scale})`,
          transformOrigin: "bottom left",
          transition: "transform 0.1s ease-out, top 0.1s ease-out",
          bottom: 0,
        }}
      >
        <div className="w-full h-full overflow-x-hidden relative">
          <img
            src={castledUrl}
            alt="Castle"
            className="w-[65%] h-auto object-contain absolute bottom-0 
              -left-28 
              max-h-[150vh] 
              md:max-h-[160vh] 
              lg:w-[45%] 
              lg:-left-24
              xl:-left-28 
              2xl:-left-40 
              lg:max-h-[120vh]"
          />
        </div>
      </div>

      {/* New Bottom Right Image - Desktop Only */}
      <div className="hidden md:block absolute bottom-0 right-0 z-[16]">
        <img
          src={mfUrl}
          alt="Bottom Right Decoration"
          className="w-[390px] h-auto object-contain lg:w-[490px]"
        />
      </div>
    </div>
  );
};

export default HomeOne;