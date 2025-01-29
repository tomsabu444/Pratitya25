import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import events from '../data/events';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="flex flex-col items-center mt-20">
        <h2 className="text-2xl font-bold text-gray-800">Event not found</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back to Events List
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center">{event.name}</h1>
      <img
        src={event.poster_url}
        alt={`${event.name} Poster`}
        className="w-full max-w-lg mx-auto mt-4 rounded-lg shadow-lg"
      />
      <p className="mt-6 text-gray-700 text-lg">{event.description}</p>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800">Prizes</h3>
        <p className="text-gray-700">First Prize: {event.award.first}</p>
        <p className="text-gray-700">Second Prize: {event.award.second}</p>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800">Rules</h3>
        <ul className="list-disc pl-6 text-gray-700">
          {event.regulations.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800">Contact</h3>
        <ul className="text-gray-700">
          {event.people.map((person, index) => (
            <li key={index} className="mt-2">
              <strong>{person.position}:</strong> {person.contact_name} ({person.contact_phone})
            </li>
          ))}
        </ul>
      </div>

      <a
        href={event.form}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-8 px-6 py-3 bg-blue-600 text-white text-center rounded hover:bg-blue-700"
      >
        Register Now
      </a>

      <button
        onClick={() => navigate('/')}
        className="mt-6 px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100"
      >
        Back to Events List
      </button>
    </div>
  );
};

export default EventDetails;
