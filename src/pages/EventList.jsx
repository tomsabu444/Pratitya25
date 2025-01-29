import React from 'react';
import { useNavigate } from 'react-router-dom';
import events from '../data/events';
const EventList = () => {
  const navigate = useNavigate();

  const handleEventClick = (id) => {
    navigate(`/event/${id}`);
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {events.map((event) => (
        <div
          key={event.id}
          onClick={() => handleEventClick(event.id)}
          className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform w-64"
        >
          <img
            src={event.poster_url}
            alt={`${event.name} Poster`}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default EventList;
