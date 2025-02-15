import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mobileTheyyam from "../assets/featured-home/mobile-bg.jpg";
import FireParticles from "./FireParticles";

const RandomEvent = ({ events }) => {
  const [randomEvent, setRandomEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * events.length);
    setRandomEvent(events[randomIndex]);
  }, [events]);

  const handleEventClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  if (!randomEvent) return null;

  return (
    <div className="w-full max-w-lg">
      <div
        onClick={() => handleEventClick(randomEvent.id)}
        className="relative w-full cursor-pointer hover:scale-105 transition-transform duration-300 flex justify-end"
        style={{ aspectRatio: "3 / 4" }}
      >
        <img
          src={randomEvent.poster_url}
          alt={randomEvent.name}
          className="w-3/4 h-3/4 object-cover rounded-lg shadow-xl"
          loading="lazy"
        />
      </div>
    </div>
  );
};

const VerticalText = ({ text }) => {
  return (
    <div className="flex flex-col items-start space-y-2"> {/* Changed items-center to items-start */}
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className="text-5xl md:text-6xl font-poppins font-extrabold tracking-wider"
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
    },
  ];

  return (
    <div>
      <div className="relative ">
        {/* Mobile Image */}
        <img
          src={mobileTheyyam}
          alt="Mobile Background"
          className="object-contain w-full h-full md:hidden"
          loading="lazy"
        />

        {/* Desktop Image */}
        <img
          src={mobileTheyyam}
          alt="Desktop Background"
          className="hidden md:block object-cover w-full h-full"
        />

        {/* Fire Particles */}
        <FireParticles />

        {/* Content Overlay with new positioning */}
        <div className="absolute inset-0 p-8">
          {/* Top section with text */}
          <div className="pt-8 "> {/* Added pl-8 for additional left padding */}
            <VerticalText text="FEATURED" />
          </div>
          
          {/* Poster section with adjusted position */}
          <div className="absolute right-8 -bottom-8">
            <RandomEvent events={events} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homesec;