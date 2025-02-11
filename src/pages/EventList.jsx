import React from "react";
import { useNavigate } from "react-router-dom";
import events from "../data/events.json";
import Animation from "../components/Animation";

const EventList = () => {
  const navigate = useNavigate();

  const handleEventClick = (id) => {
    navigate(`/event/${id}`);
  };

  return (
    <div className="relative p-6 pt-28 flex flex-col items-center justify-start w-full min-h-screen overflow-hidden mesh-gradient">
      <Animation />
      <h1 className="text-white text-center text-5xl md:text-9xl font-camodirt mb-10 relative z-10">
        EVENTS
      </h1>
      <div className="grid grid-cols-1 gap-y-7 md:gap-x-24 md:gap-y-12 lg:gap-x-50 lg:gap-y-20  xl:gap-x-56 xl:gap-y-20 lg:grid-cols-3 md:grid-cols-2">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => handleEventClick(event.id)}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          >
            <img
              src={event.poster_url}
              alt={`${event.name} Poster`}
              className="w-full h-auto max-h-[400px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;

