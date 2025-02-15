import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import mobileTheyyam from "../assets/featured-home/mobile-bg.jpg";

const EventCarousel = ({ events }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const carouselRef = useRef(null);
  const itemsPerPage = isMobile ? 2 : 4;

  const handleEventClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  const updateMobileState = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    updateMobileState();
    window.addEventListener('resize', updateMobileState);
    return () => window.removeEventListener('resize', updateMobileState);
  }, [updateMobileState]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -(carouselRef.current.offsetWidth / itemsPerPage),
        behavior: 'smooth',
      });
      setScrollPosition(carouselRef.current.scrollLeft - (carouselRef.current.offsetWidth / itemsPerPage));
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth / itemsPerPage,
        behavior: 'smooth',
      });
      setScrollPosition(carouselRef.current.scrollLeft + (carouselRef.current.offsetWidth / itemsPerPage));
    }
  };

  return (
    <div className="w-full ">
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={scrollLeft}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-all"
          aria-label="Previous page"
        >
          <ArrowBackIos className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-all"
          aria-label="Next page"
        >
          <ArrowForwardIos className="w-6 h-6 text-white" />
        </button>

        <div
          ref={carouselRef}
          className="carousel-container" // Use CSS class for styling
          style={{
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingBottom: '10px',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '::-webkit-scrollbar': { display: 'none' },
          }}
        >
          <div
            className="carousel-items"
            style={{
              display: 'flex',
              width: 'fit-content',
              padding: 0,
            }}
          >
            {events.map((event) => (
              <div
                key={event.id}
                onClick={() => handleEventClick(event.id)}
                className={`carousel-item ${!isMobile ? 'hover:scale-105' : ''}`}
                style={{
                  flex: '0 0 auto',
                  width: isMobile ? 'calc(100% / 2)' : 'calc(100% / 4)',
                  scrollSnapAlign: 'start',
                  padding: '0 0.5rem',
                  boxSizing: 'border-box',
                  position: 'relative',
                  aspectRatio: '3 / 4',
                }}
              >
                <img
                  src={event.poster_url}
                  alt={event.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t  to-transparent opacity-100 group-hover:opacity-90 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg font-semibold">
                      {event.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FireParticles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="particles-container">
        {[...Array(100)].map((_, index) => (
          <div key={index} className={`particle particle-${index % 5}`} />
        ))}
      </div>

      <style jsx>{`
        .particles-container {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .particle {
          position: absolute;
          background: #ff6b00;
          border-radius: 50%;
          top: 15%;
          opacity: 0;
          mix-blend-mode: screen;
        }

        .particle-0 {
          width: 2px;
          height: 2px;
          left: 35%;
          animation: rise0 3s infinite;
        }

        .particle-1 {
          width: 1.5px;
          height: 1.5px;
          left: 45%;
          animation: rise1 4s infinite;
        }

        .particle-2 {
          width: 2.5px;
          height: 2.5px;
          left: 55%;
          animation: rise2 3.5s infinite;
        }

        .particle-3 {
          width: 1px;
          height: 1px;
          left: 65%;
          animation: rise3 3.2s infinite;
        }

        .particle-4 {
          width: 2px;
          height: 2px;
          left: 75%;
          animation: rise4 3.8s infinite;
        }

        @keyframes rise0 {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 0.8;
          }
          80% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-200px) translateX(-30px) rotate(45deg);
            opacity: 0;
          }
        }

        @keyframes rise1 {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 0.7;
          }
          80% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-180px) translateX(25px) rotate(-45deg);
            opacity: 0;
          }
        }

        @keyframes rise2 {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 0.6;
          }
          80% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-220px) translateX(-20px) rotate(30deg);
            opacity: 0;
          }
        }

        @keyframes rise3 {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 0.7;
          }
          80% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-190px) translateX(-25px) rotate(-30deg);
            opacity: 0;
          }
        }

        @keyframes rise4 {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          20% {
            opacity: 0.8;
          }
          80% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-210px) translateX(30px) rotate(60deg);
            opacity: 0;
          }
        }

        .particle:nth-child(5n) { animation-delay: 0s; }
        .particle:nth-child(5n+1) { animation-delay: 0.5s; }
        .particle:nth-child(5n+2) { animation-delay: 1s; }
        .particle:nth-child(5n+3) { animation-delay: 1.5s; }
        .particle:nth-child(5n+4) { animation-delay: 2s; }

        .particle:nth-child(3n) {
          left: calc(var(--left) + 10%);
          filter: blur(0.5px);
        }
        .particle:nth-child(4n) {
          left: calc(var(--left) - 5%);
          filter: blur(1px);
        }
        .particle:nth-child(7n) {
          animation-duration: 4.2s;
          background: #ff8533;
        }

        .particle:nth-child(6n) {
          left: 25%;
          top: 25%;
          animation-duration: 3.6s;
          background: #ff7711;
        }

        .particle:nth-child(8n) {
          left: 85%;
          animation-duration: 3.9s;
          background: #ff944d;
        }

        .particle:nth-child(17n) {
          left: 22%;
          top: 32%;
          width: 1.3px;
          height: 1.3px;
          animation-duration: 4.6s;
          background: #ffaa80;
        }

        .particle:nth-child(18n) {
          left: 78%;
          width: 1.8px;
          height: 1.8px;
          animation-duration: 3.5s;
          background: #ff944d;
        }

        .particle:nth-child(19n) {
          left: 33%;
          top: 27%;
          width: 2.1px;
          height: 2.1px;
          animation-duration: 4.4s;
          background: #ff7711;
        }

        .particle:nth-child(20n) {
          left: 67%;
          width: 1.5px;
          height: 1.5px;
          animation-duration: 3.7s;
          background: #ff8533;
        }

        .particle:nth-child(13n) { filter: blur(1.5px); }
        .particle:nth-child(14n) { filter: blur(0.7px); }
        .particle:nth-child(15n) { filter: blur(1.2px); }
        .particle:nth-child(16n) { filter: blur(0.9px); }
        .particle:nth-child(17n) { filter: blur(1.3px); }
        .particle:nth-child(18n) { filter: blur(0.8px); }
        .particle:nth-child(19n) { filter: blur(1.1px); }
        .particle:nth-child(20n) { filter: blur(1px); }

        .particle:nth-child(17n) {
          animation-timing-function: cubic-bezier(0.45, 0.05, 0.55, 0.95);
        }

        .particle:nth-child(18n) {
          animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .particle:nth-child(19n) {
          animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
        }

        .particle:nth-child(20n) {
          animation-timing-function: cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        .particle:nth-child(21n) { top: 20%; }
        .particle:nth-child(22n) { top: 22%; }
        .particle:nth-child(23n) { top: 18%; }
        .particle:nth-child(24n) { top: 24%; }
      `}</style>
    </div>
  );
};

const Homesec = () => {
  // Fixed events data
  const events = [
    {
      id: 1,
      name: "Market Festival Event 1",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FMarketSelling-min.jpg?alt=media&token=551c30c3-6852-48b0-ab36-789246e821d9"
    },
    {
      id: 2,
      name: "Market Festival Event 2",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FMarketSelling-min.jpg?alt=media&token=551c30c3-6852-48b0-ab36-789246e821d9"
    },
    {
      id: 3,
      name: "Market Festival Event 3",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FMarketSelling-min.jpg?alt=media&token=551c30c3-6852-48b0-ab36-789246e821d9"
    },
    {
      id: 4,
      name: "Market Festival Event 4",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FMarketSelling-min.jpg?alt=media&token=551c30c3-6852-48b0-ab36-789246e821d9"
    },
    {
      id: 5,
      name: "Market Festival Event 5",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FMarketSelling-min.jpg?alt=media&token=551c30c3-6852-48b0-ab36-789246e821d9"
    },
    {
      id: 6,
      name: "Market Festival Event 6",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FMarketSelling-min.jpg?alt=media&token=551c30c3-6852-48b0-ab36-789246e821d9"
    },
    {
      id: 7,
      name: "Market Festival Event 7",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FMarketSelling-min.jpg?alt=media&token=551c30c3-6852-48b0-ab36-789246e821d9"
    },
    {
      id: 8,
      name: "Market Festival Event 8",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FBest%20Choreo.jpg?alt=media&token=f6afc8d5-7b88-4f47-912d-ebb202211acc"
    }
  ];

  return (
    <div>
      <div className="relative h-auto">
        {/* Mobile Image */}
        <img
          src={mobileTheyyam}
          alt="Mobile Background"
          className="object-contain w-full h-full md:hidden"
        />

        {/* Desktop Image */}
        <img
          src={mobileTheyyam}
          alt="Desktop Background"
          className="hidden md:block object-cover w-full h-full"
        />

        <FireParticles />

        {/* Content Overlay with Featured Events Text */}
        <div className="absolute top-24 mt-24 left-0 w-full h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider text-center">
            Featured Events
          </h1>
          <div className="w-24 h-1 bg-white mt-4 rounded-full opacity-80"></div>
          <EventCarousel events={events} /> {/* Pass the events prop */}
        </div>
      </div>
    </div>
  );
};

export default Homesec;