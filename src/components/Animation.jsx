import React from 'react';
import { motion } from "framer-motion";

const Animation = () => {
  const bubbles = Array.from({ length: 10 }).map((_, i) => {
    const left = Math.random() * 100;
    const top = Math.random() < 0.2 ? Math.random() * 20 : Math.random() * 100;
    const dx = Math.random() * 400;
    const dy = Math.random() * 400;

    return (
      <motion.div
        key={i}
        className="bubble"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9, translateX: `var(--tx)`, translateY: `var(--ty)` }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "loop", ease: "linear" }}
        style={{
          left: `${left}%`,
          top: `${top}%`,
          '--tx': `${dx}px`,
          '--ty': `${dy}px`
        }}
      ></motion.div>
    );
  });

  return (
    <div className="absolute inset-0 overflow-hidden -z-10 bg-customPurple">
      <style jsx>{`
        .bubble {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
        }

        .bubble:nth-child(1) {
          width: 300px;
          height: 300px;
          background: #9D44AD;
        }
        .bubble:nth-child(2) {
          width: 250px;
          height: 250px;
          background: #D94084;
        }
        .bubble:nth-child(3) {
          width: 350px;
          height: 350px;
          background: #0C83BD;
        }
        .bubble:nth-child(4) {
          width: 400px;
          height: 400px;
          background: #9D44AD;
        }
        .bubble:nth-child(5) {
          width: 220px;
          height: 220px;
          background: #D94084;
        }
        .bubble:nth-child(6) {
          width: 320px;
          height: 320px;
          background: #0C83BD;
        }
        .bubble:nth-child(7) {
          width: 280px;
          height: 280px;
          background: #9D44AD;
        }
        .bubble:nth-child(8) {
          width: 360px;
          height: 360px;
          background: #D94084;
        }

      `}</style>
      {bubbles}
    </div>
  );
};

export default Animation;
