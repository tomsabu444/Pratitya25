import React from 'react';

const AnimatedBubbles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-black">
      <style jsx>{`
        .bubble {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          animation: float 20s infinite linear;
          opacity: 0.9;
        }

        .bubble:nth-child(1) {
          width: 300px;
          height: 300px;
          background: #c62e2e;
          animation-duration: 12.5s;
          animation-delay: -2s;
        }
        .bubble:nth-child(2) {
          width: 250px;
          height: 250px;
          background: #e75f36;
          animation-duration: 15s;
          animation-delay: -2.5s;
        }
        .bubble:nth-child(3) {
          width: 350px;
          height: 350px;
          background: #f7c124;
          animation-duration: 17.5s;
          animation-delay: -3.5s;
        }
        .bubble:nth-child(4) {
          width: 400px;
          height: 400px;
          background: #c62e2e;
          animation-duration: 20s;
          animation-delay: -5s;
        }
        .bubble:nth-child(5) {
          width: 220px;
          height: 220px;
          background: #e75f36;
          animation-duration: 14s;
          animation-delay: -1.5s;
        }
        .bubble:nth-child(6) {
          width: 320px;
          height: 320px;
          background: #f7c124;
          animation-duration: 16.5s;
          animation-delay: -3s;
        }
        .bubble:nth-child(7) {
          width: 280px;
          height: 280px;
          background: #c62e2e;
          animation-duration: 18.5s;
          animation-delay: -4s;
        }
        .bubble:nth-child(8) {
          width: 360px;
          height: 360px;
          background: #e75f36;
          animation-duration: 21s;
          animation-delay: -5.5s;
        }

        @keyframes float {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(var(--tx), var(--ty)) rotate(120deg);
          }
          66% {
            transform: translate(calc(var(--tx) * -1), calc(var(--ty) * -1)) rotate(240deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }
      `}</style>
      {Array.from({ length: 400 }).map((_, i) => {
      const left = Math.random() * 100;
      // 20% probability for bubble to be near the top (0-20%), otherwise full range (0-100%)
      const top = Math.random() < 0.2 ? Math.random() * 20 : Math.random() * 100;
  
      // Use numeric values for translation
      const dx = Math.random() * 400; 
      const dy = Math.random() * 400;
  
         return (
          <div
            key={i}
            className="bubble"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              '--tx': `${dx}px`,
              '--ty': `${dy}px`
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default AnimatedBubbles;