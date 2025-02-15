import React from 'react'

export default function FireParticles()  {
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
