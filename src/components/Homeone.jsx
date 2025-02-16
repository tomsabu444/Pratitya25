import React, { useEffect, useState } from "react";
import background from "../assets/home-section-one/home-bg.png";
import desktopBackground from "../assets/home-section-one/bg-desktop-h.png";
import lanten from "../assets/home-section-one/lantengroup.png";
import desktopLanten from "../assets/home-section-one/lanten-desktop.png";
import newImage from "../assets/home-section-one/castle-only.png";
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

    // Adjusted castle position for mobile-small screens
    let topPosition = Math.min(
      isDesktop ? 65 : 95,
      startPosition + (scrollPosition / viewportHeight) * 35
    );
    
    // Small adjustment for very small screens
    if (window.innerWidth < 360) {
      topPosition += 5; // Slight shift up for smallest screens
    }

    return { scale, topPosition };
  };

  const { scale, topPosition } = calculateCastleEffects();

  const calculateSideElementsVisibility = () => {
    const viewportHeight = window.innerHeight;
    
    const translateXLeft = Math.max(
      0,
      0 - ((scrollPosition - viewportHeight) / (viewportHeight / 2)) * 100
    );

    return { translateXLeft };
  };

  const { translateXLeft } = calculateSideElementsVisibility();

  return (
    <div className="relative overflow-x-hidden">
      <div
        className="min-h-[200vh] bg-cover bg-center bg-no-repeat w-full"
        style={{
          backgroundImage: `url(${window.innerWidth >= 768 ? desktopBackground : background})`,
          transition: "transform 0.2s ease-out",
        }}
      />

      {/* Lantern Container */}
      <div
        className="absolute top-0 left-0 h-screen w-full flex items-center justify-center -mt-14 md:-mt-8 overflow-hidden md:items-start"
        style={{
          transform: `translateY(${window.innerWidth >= 768 ? Math.min(scrollPosition * -0.7, 0) : scrollPosition * -0.8}px)`,
        }}
      >
        <img
          src={window.innerWidth >= 768 ? desktopLanten : lanten}
          alt="Lanten Group"
          className="w-screen h-auto object-contain md:w-full md:max-h-[90vh] mt-20"
        />
      </div>

      {/* Title and Countdown Container */}
      <div
        className="absolute top-0 left-0 h-screen w-full flex flex-col items-center justify-center z-10 pointer-events-none"
        style={{
          transform: `translateY(${scrollPosition * -0.8}px)`,
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

        <div className="pointer-events-auto scale-75 md:scale-110 md:pt-4 xl:scale-125 max-[360px]:scale-[0.65]">
          <FlipCountdown />
        </div>
      </div>

      {/* About Section */}
      <div
        className="absolute w-full flex flex-col items-center justify-center z-10"
        style={{
          top: "150vh",
          transform: `translateX(${translateXLeft}%)`,
          transition: "transform 0.2s ease-out",
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia perferendis excepturi ea quo ipsa quas commodi minima aperiam. Sed aliquam quam sequi distinctio dolores quas commodi omnis ipsam soluta.
        </p>
      </div>

      {/* Mobile Castle Container */}
      <div
        className="absolute left-0 w-full flex items-end justify-start overflow-x-hidden  md:hidden"
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
            src={newImage}
            alt="Castle"
            className="w-full h-auto object-contain absolute bottom-0"
          />
        </div>
      </div>

      {/* Desktop Castle Container */}
      <div
        className="absolute left-0 w-full flex items-end justify-start overflow-x-hidden md:block"
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
            src={newImage}
            alt="Castle"
            className="w-[65%] h-auto object-contain absolute bottom-0 -left-20 max-h-[150vh] md:max-h-[160vh] lg:w-[45%] lg:-left-28 lg:max-h-[130vh]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeOne;