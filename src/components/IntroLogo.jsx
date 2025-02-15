import React from "react";
import intro_gif from "../assets/intro-logo.gif";

function IntroLogo() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <img
        src={intro_gif}
        alt="Intro Logo"
        className="w-[1000px] md:w-[400px] object-cover"
      />
    </div>
  );
}

export default IntroLogo;
