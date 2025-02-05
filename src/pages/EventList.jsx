import React from "react";
import { useNavigate } from "react-router-dom";
import events from "../data/events.json";
import "./GradientBackground.css";

const EventList = () => {
  const navigate = useNavigate();

  const handleEventClick = (id) => {
    navigate(`/event/${id}`);
  };

  return (
    <div className=" relative p-6 flex flex-col items-center bg-customPurple  w-full min-h-screen overflow-hidden mesh-gradient  ">
<div className="">
      <h1 className="text-white text-5xl md:text-9xl font-camodirt mb-10">
        EVENTS
      </h1>
      <div className=" grid grid-cols-1 gap-y-7 md:gap-x-56 md:gap-y-20 md:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => handleEventClick(event.id)}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform w-80"
          >
            

            <img
              src={event.poster_url}
              alt={`${event.name} Poster`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
      </div>
    </div>
    
  );
};

export default EventList;
