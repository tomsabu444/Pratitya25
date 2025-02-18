import React, { useState, useEffect } from "react";
import FireParticles from "./FireParticles";

const RandomEvent = ({ events }) => {
  const [randomEvent, setRandomEvent] = useState(null);

  useEffect(() => {
    const updateImage = () => {
      const randomIndex = Math.floor(Math.random() * events.length);
      setRandomEvent(events[randomIndex]);
    };

    updateImage();
    const interval = setInterval(updateImage, 2000);
    return () => clearInterval(interval);
  }, [events]);

  if (!randomEvent) return null;

  return (
    <div className="w-full max-w-lg">
      <div className="relative w-full flex justify-end">
        <img
          src={randomEvent.poster_url}
          alt={randomEvent.name}
          className="w-3/4 h-3/4 object-cover shadow-xl"
          loading="lazy"
        />
      </div>
    </div>
  );
};

const VerticalText = ({ text }) => {
  return (
    <div className="flex flex-col items-start space-y-2">
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className="text-5xl mt-16 md:text-6xl font-poppins font-extrabold tracking-wider"
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

const Homesec = () => {
  const theyyamMobUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/featured-home%2Fmobile-bg.webp?alt=media&token=4afdd9ff-43fe-4a40-8c80-d8493c3e90a4";
  const theyyamDesktopUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/featured-home%2Ftheyyam-desktop.webp?alt=media&token=4652255a-0519-4975-8a0b-75cfed4c05dd";

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
    <div>
      <div className="relative">
        {/* Mobile Image */}
        <img
          src={theyyamMobUrl}
          alt="Mobile Background"
          className="object-contain w-full h-full md:hidden"
          loading="lazy"
        />

        {/* Desktop Image */}
        <img
          src={theyyamDesktopUrl}
          alt="Desktop Background"
          className="hidden md:block object-cover w-full h-[110vh]"
        />

        {/* Fire Particles */}
        <FireParticles />

        {/* Content Overlay with new positioning */}
        <div className="absolute inset-0 p-8">
          {/* Top section with text */}
          <div className="pt-8">
            <VerticalText text="FEATURED" />
          </div>

          {/* Poster section with adjusted position */}
          <div className="absolute right-8 bottom-10">
            <RandomEvent events={events} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homesec;