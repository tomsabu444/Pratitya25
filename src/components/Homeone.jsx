import React, { useEffect, useState } from "react";
import background from "../assets/home-section-one/home-bg.png";
import lanten from "../assets/home-section-one/lantengroup.png";
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

  // Calculate scale and position based on scroll
  const calculateCastleEffects = () => {
    const maxScale = 1.4;
    const minScale = 1;
    const viewportHeight = window.innerHeight;
    const startPosition = 80;

    const scale = Math.max(
      minScale,
      maxScale - (scrollPosition / viewportHeight) * (maxScale - minScale)
    );

    const topPosition = Math.min(
      95,
      startPosition + (scrollPosition / viewportHeight) * 35
    );

    return { scale, topPosition };
  };

  const { scale, topPosition } = calculateCastleEffects();

  // Calculate visibility for about section
  const calculateAboutVisibility = () => {
    const viewportHeight = window.innerHeight;
    const triggerPoint = viewportHeight * 1; // Start animation halfway through second viewport
    
    const translateX = Math.max(
      0,
      0 - ((scrollPosition - viewportHeight) / (viewportHeight / 2)) * 100
    );

    return translateX;
  };

  const translateX = calculateAboutVisibility();

  return (
    <div className="relative overflow-x-hidden">
      {/* Background image - 2 viewport heights */}
      <div
        className="min-h-[200vh] bg-cover bg-center bg-no-repeat w-full"
        style={{
          backgroundImage: `url(${background})`,
          transition: "transform 0.2s ease-out",
        }}
      />

      {/* Main lantern image with scroll effect - positioned higher */}
      <div
        className="absolute top-0 left-0 h-screen w-full flex items-center justify-center -mt-14 overflow-x-hidden z-10"
        style={{
          transform: `translateY(${scrollPosition * -0.8}px)`,
        }}
      >
        <img
          src={lanten}
          alt="Lanten Group"
          className="w-screen h-auto object-contain"
        />
      </div>

      {/* Text overlay - with same scroll effect as lantern but higher z-index */}
      <div
        className="absolute top-0 left-0 h-screen w-full flex flex-col items-center justify-center z-20 pointer-events-none"
        style={{
          transform: `translateY(${scrollPosition * -0.8}px)`,
        }}
      >
        <motion.h1
          className="text-6xl font-agraham md:text-7xl mb-6 -mt-16 text-center text-white drop-shadow-2xl relative"
          style={{
            textShadow:
              "2px 2px 4px rgba(255, 20, 20, 0.8), 4px 4px 8px rgba(0, 0, 0, 0.6), 0 0 10px rgba(197, 69, 19, 0.8), 0 0 20px rgba(255, 174, 0, 0.87)",
          }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Pratitya
          <span className="text-white px-3 font-poppins text-2xl font-semibold absolute top-[-20px] -ml-3">
            25
          </span>
        </motion.h1>

        <div className="pointer-events-auto scale-75">
          <FlipCountdown />
        </div>
      </div>

      {/* About Section - positioned in second viewport */}
      <div
        className="absolute w-full flex flex-col items-center justify-center z-10"
        style={{
          top: "150vh",
          transform: `translateX(${translateX}%)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <h2 className="text-5xl font-agraham text-white mb-6 drop-shadow-2xl"
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          About
        </h2>
        <p className="text-white text-center max-w-lg px-4 font-poppins"
          style={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia perferendis excepturi ea quo ipsa quas commodi minima aperiam. Sed aliquam quam sequi distinctio dolores quas commodi omnis ipsam soluta.
        </p>
      </div>

      {/* Dynamic castle image with fixed positioning to bottom */}
      <div
        className="absolute left-0 w-full flex items-end justify-start overflow-x-hidden"
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
    </div>
  );
};

export default HomeOne;