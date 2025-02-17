import React from "react";

function IntroLogo() {
  const gifUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/intro-logo.gif?alt=media&token=8e7646e8-3144-4ced-939b-cf1c217bee1c";
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <img
        src={gifUrl}
        alt="Intro Logo"
        className="w-[1000px] md:w-[400px] object-cover"
      />
    </div>
  );
}

export default IntroLogo;
