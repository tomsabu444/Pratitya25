import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mobileTheyyam from "../assets/featured-home/mobile-bg.jpg";
import desktopTheyyam from "../assets/home-section-one/theyyam-desktop.png";
import FireParticles from "./FireParticles";

const VerticalText = ({ text }) => {
  return (
    <div className="flex flex-col items-start space-y-2">
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className="text-5xl mt-16 md:text-6xl font-poppins font-extrabold tracking-wider"
          style={{
            color: "transparent",
            WebkitTextStroke: "1.5px white",
            textStroke: "2px white",
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

const StackedCards = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % events.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [events.length]);

  const handleClick = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  return (
    <div className="relative h-[500px] w-full">
      {events.map((event, index) => {
        const position = (index - currentIndex + events.length) % events.length;
        
        return (
          <motion.div
            key={event.id}
            className="absolute w-full cursor-pointer"
            style={{
              top: 0,
              zIndex: events.length - position,
            }}
            animate={{
              y: position * 8,
              scale: 1,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut"
            }}
            onClick={handleClick}
          >
            <div className={`
              w-full bg-black rounded-lg overflow-hidden
              ${position === 0 ? 'border-2 border-gray-700' : 'border border-gray-800'}
              shadow-[0_4px_12px_rgba(0,0,0,0.5)]
            `}>
              <div className="relative">
                <img
                  src={event.poster_url}
                  alt={event.name}
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
                {/* Title bar at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-90 p-4">
                  <h3 className="text-white text-sm font-medium">{event.name}</h3>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
      
      {/* Navigation dots */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {events.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 
              ${index === currentIndex ? 'bg-white' : 'bg-gray-600'}`}
          />
        ))}
      </div>
    </div>
  );
};

const Homesec = () => {
  const events = [
    {
      id: "PT-01",
      name: "Market Festival Event 1",
      poster_url:
        "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FMirage%20Maestro-min.jpg?alt=media&token=592e78a5-23bf-42ae-9cba-47f4d174d94b",
    },
    {
      id: "PT-02",
      name: "Market Festival Event 2",
      poster_url:
        "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FMarketSelling-min.jpg?alt=media&token=551c30c3-6852-48b0-ab36-789246e821d9",
    },
    {
      id: "PT-03",
      name: "Market Festival Event 3",
      poster_url:
        "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FBest%20Singer.jpg?alt=media&token=75cb3286-7811-4cd0-9593-2d9d1f3df59e",
    },
    {
      id: "PT-04",
      name: "Market Festival Event 4",
      poster_url:
        "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FFast%20Fingers%20Fiesta-min.jpg?alt=media&token=ab95c2b6-0731-49df-8b6c-2c80846a170e",
    },
    {
      id: "PT-05",
      name: "Market Festival Event 5",
      poster_url:
        "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FMarketSelling-min.jpg?alt=media&token=551c30c3-6852-48b0-ab36-789246e821d9",
    }
  ];

  return (
    <div>
      <div className="relative">
        {/* Mobile Image */}
        <img
          src={mobileTheyyam}
          alt="Mobile Background"
          className="object-contain w-full h-full md:hidden"
          loading="lazy"
        />

        {/* Desktop Image */}
        <img
          src={desktopTheyyam}
          alt="Desktop Background"
          className="hidden md:block object-cover w-full h-[110vh]"
        />

        {/* Fire Particles */}
        <FireParticles />

        {/* Content Overlay with new positioning */}
        <div className="absolute inset-0 p-8">
          {/* Top section with text */}
          <div className="pt-8">
            <VerticalText text="FEATURED" />
          </div>

          {/* Carousel section with adjusted position */}
          <div className="absolute right-8 bottom-10 w-full max-w-lg">
            <StackedCards events={events} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homesec;