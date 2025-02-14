import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Trophy, Calendar, Clock, MapPin, Share2 } from "lucide-react";
import events from "../data/events.json";

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

const LampContainer = ({ children, className }) => {
  return (
    <div className={cn("relative flex h-[40vh] flex-col items-center justify-center overflow-hidden mt-5 bg-slate-950 w-full z-0", className)}>
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.4, width: "10rem" }}
          whileInView={{ opacity: 1, width: "25rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[28rem] bg-gradient-conic from-purple-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[25rem] bg-gradient-conic from-transparent via-transparent to-purple-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-purple-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-purple-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
        ></motion.div>
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"></div>
      </div>
      <div className="relative z-50 flex -translate-y-20 flex-col items-center px-5">{children}</div>
    </div>
  );
};

const PrizeCard = ({ place, amount, color }) => {
  return (
    <div className={`flex items-center justify-between bg-slate-800/50 p-4 rounded-lg hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50`}>
      <div className="flex items-center gap-3">
        <Trophy className={`h-8 w-8 ${color}`} />
        <div className="flex flex-col">
          <span className="text-slate-200 font-medium">{place}</span>
          <span className={`${color} font-bold text-lg`}>{amount}</span>
        </div>
      </div>
    </div>
  );
};

const ActionButton = ({ icon: Icon, children, onClick, primary, className }) => {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all shadow-lg",
        primary
          ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700"
          : "bg-slate-800 text-slate-200 hover:bg-slate-700",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </motion.button>
  );
};

const EventPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="flex flex-col items-center mt-20">
        <h2 className="text-2xl font-bold text-gray-800">Event not found</h2>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.name,
        text: event.description,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="bg-slate-950 font-inter min-h-screen flex flex-col pt-16">
      <section className="w-full">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="bg-gradient-to-br from-slate-200 to-slate-400 py-16 bg-clip-text text-center text-3xl md:text-6xl font-bold tracking-tight text-transparent"
          >
            {event.name}
          </motion.h1>
        </LampContainer>
      </section>

      <main className="flex-grow max-w-6xl mx-auto p-4 md:p-6 w-full -mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Poster and Quick Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/80 rounded-xl p-4 shadow-lg backdrop-blur-sm">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src={event.poster_url || "/placeholder.svg"}
                  alt={`${event.name} Poster`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Event Details Card */}
            <div className="bg-slate-900/80 rounded-xl p-6 backdrop-blur-sm space-y-4">
              <div className="flex items-center gap-3 text-slate-200">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span>Event Date: {event.date || "TBA"}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-200">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span>Duration: {event.duration || "TBA"}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-200">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Venue: {event.venue || "TBA"}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <ActionButton
                primary
                className="flex-1"
                onClick={() => window.open(event.form, '_blank')}
              >
                Register Now
              </ActionButton>
              <ActionButton
                icon={Share2}
                onClick={handleShare}
                className="sm:w-auto"
              >
                Share
              </ActionButton>
            </div>
          </div>

          {/* Right Column - Description and Details */}
          <div className="lg:col-span-7 space-y-6">
            {/* Description Card */}
            <div className="bg-slate-900/80 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">About the Event</h3>
              <p className="text-slate-200 leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Prizes Card */}
            <div className="bg-slate-900/80 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Prizes</h3>
              <div className="space-y-3">
                <PrizeCard place="First Prize" amount={event.award.first} color="text-yellow-400" />
                <PrizeCard place="Second Prize" amount={event.award.second} color="text-slate-300" />
              </div>
            </div>

            {/* Rules Card */}
            <div className="bg-slate-900/80 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Rules</h3>
              <ul className="space-y-2">
                {event.regulations.map((rule, index) => (
                  <li key={index} className="flex gap-3 text-slate-200">
                    <span className="text-cyan-400 font-medium">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Card */}
            <div className="bg-slate-900/80 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Contact</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {event.people.map((person, index) => (
                  <div key={index} className="bg-slate-800/50 p-4 rounded-lg hover:bg-slate-800 transition-colors">
                    <h4 className="font-semibold text-cyan-300 mb-1">{person.position}</h4>
                    <p className="text-slate-200 text-sm">{person.contact_name}</p>
                    <p className="text-slate-400 text-sm">{person.contact_phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventPage;