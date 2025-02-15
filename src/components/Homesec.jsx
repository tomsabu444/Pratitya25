import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import mobileTheyyam from "../assets/featured-home/mobile-bg.jpg";
import FireParticles from './FireParticles';

const EventCarousel = ({ events }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const carouselRef = useRef(null);
  const itemsPerPage = isMobile ? 1 : 4;

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


const Homesec = () => {
  // Fixed events data
  const events = [
    {
      id: "PT-01",
      name: "Market Festival Event 1",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FMarketSelling-min.jpg?alt=media&token=551c30c3-6852-48b0-ab36-789246e821d9"
    },
    {
      id: "PT-02",
      name: "Market Festival Event 2",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FMarketSelling-min.jpg?alt=media&token=551c30c3-6852-48b0-ab36-789246e821d9"
    },
    {
      id: "PT-03",
      name: "Market Festival Event 3",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FMarketSelling-min.jpg?alt=media&token=551c30c3-6852-48b0-ab36-789246e821d9"
    },
    {
      id: "PT-04",
      name: "Market Festival Event 4",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FMarketSelling-min.jpg?alt=media&token=551c30c3-6852-48b0-ab36-789246e821d9"
    },
    {
      id: "PT-05",
      name: "Market Festival Event 5",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FMarketSelling-min.jpg?alt=media&token=551c30c3-6852-48b0-ab36-789246e821d9"
    },
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
        <div className="absolute top-10 left-0 w-full h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold tracking-wider text-center">
            Featured <br /> Events
          </h1>
          <div className="w-24 h-1 bg-white mt-4 rounded-full opacity-80"></div>
          <EventCarousel events={events} /> {/* Pass the events prop */}
        </div>
      </div>
    </div>
  );
};

export default Homesec;