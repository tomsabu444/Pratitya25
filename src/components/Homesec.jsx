import React, { useState, useEffect } from "react";
import mobileTheyyam from "../assets/featured-home/mobile-bg.jpg";
import desktopTheyyam from "../assets/home-section-one/theyyam-desktop.png";
import FireParticles from "./FireParticles";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';

const EventSlider = ({ events }) => {
  return (
    <Splide
      options={{
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        gap: '1rem',
        arrows: false,
        pagination: false,
        autoScroll: {
          speed: 1,
          pauseOnHover: true,
          pauseOnFocus: true,
          rewind: false,
        },
      }}
      extensions={{ AutoScroll }}
    >
      {events.map((event) => (
        <SplideSlide key={event.id}>
          <img
            src={event.poster_url}
            alt={event.name}
            className="w-full h-full object-cover shadow-xl"
            loading="lazy"
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

const RandomEvent = ({ events }) => {
  const [randomEvent, setRandomEvent] = useState(null);

  useEffect(() => {
    const updateImage = () => {
      const randomIndex = Math.floor(Math.random() * events.length);
      setRandomEvent(events[randomIndex]);
    };

    updateImage();
    const interval = setInterval(updateImage, 2000);
    return () => clearInterval(interval);
  }, [events]);

  if (!randomEvent) return null;

  return (
    <div className="w-full max-w-lg">
      <div className="relative w-full flex justify-end">
        <img
          src={randomEvent.poster_url}
          alt={randomEvent.name}
          className="w-3/4 h-3/4 object-cover shadow-xl"
          loading="lazy"
        />
      </div>
    </div>
  );
};

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

          {/* Poster section with adjusted position */}
          <div className="absolute right-8 bottom-10">
            <div className="md:hidden">
              <RandomEvent events={events} />
            </div>
            <div className="hidden md:block w-[800px]">
              <EventSlider events={events} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homesec;