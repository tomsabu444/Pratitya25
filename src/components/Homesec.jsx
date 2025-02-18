import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import mobileTheyyam from "../assets/featured-home/mobile-bg.jpg";
import desktopTheyyam from "../assets/home-section-one/theyyam-desktop.png";
import FireParticles from "./FireParticles";

const VerticalText = ({ text, className }) => {
  return (
    <div className={`flex flex-col items-start space-y-2 ${className}`}>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className="text-4xl mt-8 md:text-6xl md:mt-16 font-poppins font-extrabold tracking-wider"
          style={{
            color: "transparent",
            WebkitTextStroke: window.innerWidth >= 768 ? "2.5px white" : "1.5px white",
            textStroke: window.innerWidth >= 768 ? "3px white" : "2px white",
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

const ThreeDStackSlider = ({ events, isReversed = false }) => {
  const navigate = useNavigate();
  const itemsRef = useRef([]);
  const animationRef = useRef(null);
  const containerRef = useRef(null);
  const [currentItem, setCurrentItem] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const displayCount = 5;

  const orderedEvents = isReversed ? [...events].reverse() : events;
  const totalItems = orderedEvents.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  const handlePrevClick = useCallback((e) => {
    e.stopPropagation();
    if (!isMobile && animationRef.current) {
      clearInterval(animationRef.current);
      // Restart auto-rotation for desktop only
      animationRef.current = setInterval(() => {
        setCurrentItem((prev) => (prev + 1) % totalItems);
      }, 2000);
    }
    setCurrentItem((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems, isMobile]);

  const handleNextClick = useCallback((e) => {
    e.stopPropagation();
    if (!isMobile && animationRef.current) {
      clearInterval(animationRef.current);
      // Restart auto-rotation for desktop only
      animationRef.current = setInterval(() => {
        setCurrentItem((prev) => (prev + 1) % totalItems);
      }, 2000);
    }
    setCurrentItem((prev) => (prev + 1) % totalItems);
  }, [totalItems, isMobile]);

  const updatePositions = useCallback(() => {
    const items = itemsRef.current;
    if (!items || !items.length) return;

    const stackOffset = 40;

    for (let i = 0; i < totalItems; i++) {
      let itemIndex = (currentItem + i) % totalItems;
      let item = items[itemIndex];

      if (!item) continue;

      if (i === 0) {
        item.classList?.add('front-card');
      } else {
        item.classList?.remove('front-card');
      }

      const isInStack = i < displayCount;

      gsap.to(item, {
        duration: 0.6,
        y: isInStack ? -stackOffset * i : -stackOffset * (displayCount - 1) + 100,
        rotationX: isInStack ? -10 : -10,
        rotationY: isInStack ? 2 : 2,
        z: isInStack ? -50 * i : -50 * (displayCount - 1),
        zIndex: isInStack ? totalItems - i : 0,
        scale: isInStack ? 1 - (i * 0.05) : 1 - ((displayCount - 1) * 0.05),
        opacity: isInStack ? (i === displayCount - 1 ? 0.5 : 1) : 0,
        ease: "power2.out"
      });
    }
  }, [currentItem, totalItems]);

  useEffect(() => {
    const items = itemsRef.current;
    if (!items || !items.length) return;

    const stackOffset = 40;

    function moveToNext() {
      setCurrentItem((prev) => (prev + 1) % totalItems);
    }

    items.forEach((item, index) => {
      if (!item) return;

      const isInStack = index < displayCount;

      gsap.set(item, {
        y: isInStack ? -stackOffset * index : -stackOffset * (displayCount - 1) + 100,
        rotationX: -10,
        rotationY: 2,
        z: isInStack ? -50 * index : -50 * (displayCount - 1),
        zIndex: isInStack ? totalItems - index : 0,
        scale: isInStack ? 1 - (index * 0.05) : 1 - ((displayCount - 1) * 0.05),
        transformOrigin: "50% 0%",
        opacity: isInStack ? (index === displayCount - 1 ? 0.5 : 1) : 0,
      });
    });

    if (containerRef.current) {
      const handleMouseMove = (e) => {
        if (!items || !items.length) return;

        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

        items.forEach((item, index) => {
          if (!item || index >= displayCount) return;

          gsap.to(item, {
            duration: 0.3,
            rotationY: 2 + mouseX * 10,
            rotationX: -10 + mouseY * 5,
            ease: "power2.out"
          });
        });
      };

      containerRef.current.addEventListener('mousemove', handleMouseMove);

      containerRef.current.addEventListener('mouseleave', () => {
        items.forEach((item, index) => {
          if (!item || index >= displayCount) return;

          gsap.to(item, {
            duration: 0.3,
            rotationY: 2,
            rotationX: -10,
            ease: "power2.out"
          });
        });
      });
    }

    updatePositions();
    
    // Only start auto-rotation for desktop
    if (!isMobile) {
      animationRef.current = setInterval(moveToNext, 2000);
    }

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
      gsap.killTweensOf(items);
    };
  }, [currentItem, updatePositions, totalItems, isMobile]);

  return (
    <div className="stack-container" ref={containerRef}>
      <div className="stack-slider">
        {orderedEvents.map((event, index) => (
          <div
            key={event.id}
            ref={el => itemsRef.current[index] = el}
            className="slider-item"
            onClick={() => handleCardClick(event.id)}
          >
            <img
              src={event.poster_url}
              alt={event.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
        
        {/* Navigation Buttons - Mobile Only */}
        <button 
          className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 z-50"
          onClick={handlePrevClick}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </button>
        
        <button 
          className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 z-50"
          onClick={handleNextClick}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
      </div>
      <style jsx>{`
        .stack-container {
          perspective: 1000px;
          perspective-origin: 50% 0%;
          width: 240px;
          height: 360px;
          margin: 120px auto 0;
          position: relative;
        }

        .stack-slider {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
        }

        @media (min-width: 768px) {
          .stack-container {
            width: 300px;
            height: 440px;
            margin: 120px 0 0;
          }
        }

        .slider-item {
          position: absolute;
          width: 100%;
          height: 320px;
          will-change: transform;
          transform-style: preserve-3d;
          cursor: pointer;
          overflow: hidden;
          border: 2px solid #FFFDD0;
          border-radius: 12px;
          transition: all 0.6s ease;
        }

        .front-card {
          box-shadow: 0 0 10px #FFFDD0,
                     0 0 20px rgba(255, 253, 208, 0.3),
                     inset 0 0 10px rgba(255, 253, 208, 0.1);
        }

        .front-card:hover {
          box-shadow: 0 15px 40px -5px rgba(0, 0, 0, 0.3),
                     0 0 15px #FFFDD0,
                     0 0 30px rgba(255, 253, 208, 0.4),
                     inset 0 0 15px rgba(255, 253, 208, 0.2);
        }

        @media (min-width: 768px) {
          .slider-item {
            height: 400px;
          }
        }

        .slider-item img {
          pointer-events: none;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

const Homesec = () => {
  const events = [
    {
      id: "dramatique",
      name: "Dramatique - Best Actor",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/event-posters%2FBest%20Actor.webp?alt=media&token=0b6bee36-52e2-4af7-b2dc-11ab2e4cc49e"
    },
    {
      id: "Retro_Revival",
      name: "Retro Revival",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/event-posters%2FRecreation.webp?alt=media&token=bd425ac1-30bf-4cd1-8365-ef4616018303"
    },
    {
      id: "Tango_Double",
      name: "Tango Double",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/event-posters%2FDuo%20Dance.webp?alt=media&token=a7ba41f1-84ab-45fb-85a8-b28f1a977a25"
    },
    {
      id: "Canvas_Carnival",
      name: "Canvas Carnival",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/event-posters%2FDrawing%20Competition.webp?alt=media&token=4e6b2121-94cd-4821-990b-8547ab52d321"
    },
    {
      id: "Celista_Star",
      name: "Celista Star",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/event-posters%2FCelista%20Star.webp?alt=media&token=a0713f07-8862-4548-8a1e-a0c9dee3c51c"
    },
    {
      id: "Arte_Henna",
      name: "Arte Henna",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/event-posters%2Fart%20henna.webp?alt=media&token=14d4141f-0ae3-4a8f-9f8d-94a48383b8c6"
    },
    {
      id: "Voz_de_singing",
      name: "Voz de Fiesta",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/event-posters%2FVoz%20de%20Fiesta.webp?alt=media&token=007f8c25-f760-4179-9f4c-8429a79d8cf8"
    },
    {
      id: "Best_manager",
      name: "Maestro Mind – Best Manager",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/event-posters%2FBest%20Manager.webp?alt=media&token=ace4a109-f6c7-42d9-b199-d2b21fb76c11"
    },
    {
      id: "Palette_Parade_Face_Painting",
      name: "Palette Parade",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/event-posters%2FFace%20painting.webp?alt=media&token=8eb53cd3-7639-450a-b29a-9d69da84edbd"
    },
    {
      id: "Tale_Weavers",
      name: "Tale Weavers",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/event-posters%2Fstorywriting.webp?alt=media&token=93217096-918f-4db4-81c1-c26ca1a72e6e"
    },
    {
      id: "Memory_Fiesta",
      name: "Memory Fiesta",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/event-posters%2FMemory%20Fiesta.webp?alt=media&token=e72ed6d5-3eb7-4565-b10f-a69da575eedd"
    },
    {
      id: "Mystic_Quest",
      name: "Mystic Quest - Treasure Hunt",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/event-posters%2FMystic%20Quest.webp?alt=media&token=8d63894c-46c8-4ac4-a83d-eb8b365b1180"
    },
    {
      id: "PlayStation",
      name: "Play Station Competition",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/event-posters%2FPlaystation%20Competition.webp?alt=media&token=d96a942d-8ac6-45d1-8b0b-5d1836c40fa3"
    },
    {
      id: "Lente_Magic",
      name: "Lente Magiq– Click It",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/event-posters%2FClick%20It.webp?alt=media&token=6e2c05f8-18e7-4dba-8d8e-ba0da1837568"
    },
    {
      id: "Malayali_Manka",
      name: "MALAYALI MANKA AND KERALA SREEMAN",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/event-posters%2FMalayali%20Manka.webp?alt=media&token=89d33a71-7921-4a9d-b070-1afe46476e97"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      <div className="relative">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/featured-home%2Fmobile-bg.webp?alt=media&token=4afdd9ff-43fe-4a40-8c80-d8493c3e90a4"
          alt="Mobile Background"
          className="object-contain w-full h-full md:hidden"
          loading="lazy"
        />

        <img
          src="https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/featured-home%2Ftheyyam-desktop.webp?alt=media&token=4652255a-0519-4975-8a0b-75cfed4c05dd"
          alt="Desktop Background"
          className="hidden md:block object-cover w-full h-[110vh]"
        />

        <FireParticles />

        <div className="absolute inset-0 flex flex-col">
          <div className="flex-1 relative">
            <div className="absolute left-2 top-1/2 -translate-y-1/2">
              <VerticalText text="FEATURED" />
            </div>

            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <VerticalText text="EVENTS" />
            </div>

            {/* Desktop stacks */}
            <div className="hidden md:flex justify-between md:max-w-6xl md:mx-auto absolute bottom-0 left-1/2 -translate-x-1/2 w-full px-4">
              <ThreeDStackSlider events={events} isReversed={false} />
              <ThreeDStackSlider events={events} isReversed={true} />
            </div>

            {/* Mobile Stack */}
            <div className="md:hidden absolute left-1/2 -translate-x-1/2 bottom-0 w-full">
              <ThreeDStackSlider events={events} isReversed={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homesec;