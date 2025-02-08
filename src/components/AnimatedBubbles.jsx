import React from 'react';

const AnimatedBubbles = () => {
  const circles = Array.from({ length: 12 }).map((_, index) => ({
    size: 850 + Math.random() * 100,
    color: ['#f7c124', '#c62e2e', '#e75f36', '#c62e2e', '#f7c124', '#f7c124'][Math.floor(Math.random() * 3)],
    delay: -(Math.random() * 2),
    duration: 15 + Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <style jsx>{`
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.8;
          animation: float 20s infinite linear;
        }

        ${circles.map((circle, i) => `
          .blob:nth-child(${i + 1}) {
            width: ${circle.size}px;
            height: ${circle.size}px;
            background: ${circle.color};
            animation-duration: ${circle.duration}s;
            animation-delay: ${circle.delay}s;
          }
        `).join('\n')}

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

      {Array.from({ length: 24 }).map((_, i) => {
        const left = Math.random() * 120 - 10; 
        const top = Math.random() * 120 - 10;
        const dx = Math.random() * 1000;
        const dy = Math.random() * 1000;

        return (
          <div
            key={i}
            className="blob"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              '--tx': `${dx}px`,
              '--ty': `${dy}px`
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedBubbles;
