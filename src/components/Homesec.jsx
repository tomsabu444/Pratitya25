import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
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

const ThreeDStackSlider = ({ events }) => {
  const itemsRef = useRef([]);
  const animationRef = useRef(null);
  const containerRef = useRef(null);
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const items = itemsRef.current;
    const totalItems = items.length;
    const stackOffset = 40;
    
    function updatePositions() {
      for (let i = 0; i < totalItems; i++) {
        let itemIndex = (currentItem + i) % totalItems;
        let item = items[itemIndex];
        
        if (i === 0) {
          item.classList.add('front-card');
        } else {
          item.classList.remove('front-card');
        }
        
        gsap.to(item, {
          duration: 0.6,
          y: -stackOffset * i,
          rotationX: -10,
          rotationY: 2,
          z: -50 * i,
          zIndex: totalItems - i,
          scale: 1 - (i * 0.05),
          opacity: i === totalItems - 1 ? 0.5 : 1,
          ease: "power2.out"
        });
      }
    }

    function moveToNext() {
      setCurrentItem((prev) => (prev + 1) % totalItems);
    }

    gsap.set(items, (index) => ({
      y: -stackOffset * index,
      rotationX: -10,
      rotationY: 2,
      z: -50 * index,
      zIndex: totalItems - index,
      scale: 1 - (index * 0.05),
      transformOrigin: "50% 0%",
    }));

    if (containerRef.current) {
      containerRef.current.addEventListener('mousemove', (e) => {
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

        items.forEach((item) => {
          gsap.to(item, {
            duration: 0.3,
            rotationY: 2 + mouseX * 10,
            rotationX: -10 + mouseY * 5,
            ease: "power2.out"
          });
        });
      });

      containerRef.current.addEventListener('mouseleave', () => {
        items.forEach((item) => {
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
    animationRef.current = setInterval(moveToNext, 2000);

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
      gsap.killTweensOf(items);
    };
  }, [currentItem]);

  return (
    <div className="stack-container" ref={containerRef}>
      <div className="stack-slider">
        {events.map((event, index) => (
          <div
            key={event.id}
            ref={el => itemsRef.current[index] = el}
            className="slider-item"
          >
            <img 
              src={event.poster_url}
              alt={event.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        .stack-container {
          perspective: 1000px;
          perspective-origin: 50% 0%;
          width: 240px;
          height: 360px;
          margin: 120px 0 0;
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
      id: "PT-01",
      name: "Market Festival Event 1",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FMirage%20Maestro-min.jpg?alt=media&token=592e78a5-23bf-42ae-9cba-47f4d174d94b"
    },
    {
      id: "PT-02",
      name: "Market Festival Event 2",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FMarketSelling-min.jpg?alt=media&token=551c30c3-6852-48b0-ab36-789246e821d9"
    },
    {
      id: "PT-03", 
      name: "Market Festival Event 3",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FBest%20Singer.jpg?alt=media&token=75cb3286-7811-4cd0-9593-2d9d1f3df59e"
    },
    {
      id: "PT-04",
      name: "Market Festival Event 4", 
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FFast%20Fingers%20Fiesta-min.jpg?alt=media&token=ab95c2b6-0731-49df-8b6c-2c80846a170e"
    },
    {
      id: "PT-05",
      name: "Market Festival Event 5",
      poster_url: "https://firebasestorage.googleapis.com/v0/b/pratitya-6b78c.appspot.com/o/Event-posters%2FMarketSelling-min.jpg?alt=media&token=551c30c3-6852-48b0-ab36-789246e821d9"
    }
  ];

  return (
    <div className="overflow-x-hidden">
      <div className="relative">
        <img
          src={mobileTheyyam}
          alt="Mobile Background"
          className="object-contain w-full h-full md:hidden"
          loading="lazy"
        />
        
        <img
          src={desktopTheyyam}
          alt="Desktop Background"
          className="hidden md:block object-cover w-full h-[110vh]"
        />
        
        <FireParticles />
        
        <div className="absolute inset-0 p-4 md:p-8">
          <div className="absolute left-2 top-1/2 -translate-y-1/2">
            <VerticalText text="FEATURED" />
          </div>
          
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <VerticalText text="EVENTS" />
          </div>
          
          <div className="absolute bottom-2 w-full pl-20">
            <ThreeDStackSlider events={events} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homesec;