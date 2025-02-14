import React, { useEffect, useRef } from "react";
import intro from "../assets/intro-logo.mp4";

function IntroLogo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play();
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <video
        ref={videoRef}
        src={intro}
        className="w-[75%] h-[75%] object-cover"
        loop
        muted
        autoPlay
      />
    </div>
  );
}

export default IntroLogo;
