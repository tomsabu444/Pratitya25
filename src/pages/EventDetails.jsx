import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ShareIcon from '@mui/icons-material/Share';
import events from "../data/events.json";

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

const LampContainer = ({ children, className }) => {
  return (
    <div className={cn("relative flex h-[35vh] sm:h-[40vh] md:h-[45vh] flex-col items-center justify-center overflow-hidden bg-slate-950 w-full z-0", className)}>
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0, width: "5rem" }}
          whileInView={{ opacity: 1, width: "25rem" }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          className="absolute inset-auto right-1/2 h-64 overflow-visible w-[28rem] bg-gradient-conic from-purple-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
          style={{
            filter: "blur(1px) brightness(1.2)",
            transform: "translateY(4rem) rotateX(60deg)",
          }}
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, width: "5rem" }}
          whileInView={{ opacity: 1, width: "25rem" }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          className="absolute inset-auto left-1/2 h-64 w-[25rem] bg-gradient-conic from-transparent via-transparent to-purple-500 text-white [--conic-position:from_290deg_at_center_top]"
          style={{
            filter: "blur(1px) brightness(1.2)",
            transform: "translateY(4rem) rotateX(60deg)",
          }}
        >
          <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute inset-auto z-30 h-32 w-[35rem] -translate-y-8 rounded-full bg-purple-500 blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, width: "5rem" }}
          whileInView={{ opacity: 1, width: "20rem" }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="absolute inset-auto z-30 h-24 -translate-y-16 rounded-full bg-purple-400 blur-2xl"
        ></motion.div>
      </div>
      <div className="relative z-50 flex -translate-y-20 flex-col items-center px-5">{children}</div>
    </div>
  );
};

const ImageContainer = ({ src, alt }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full w-auto h-auto object-contain"
      />
    </div>
  );
};

const PrizeCard = ({ place, amount, color }) => {
  return (
    <div className="flex items-center justify-between bg-slate-800/50 p-3 sm:p-4 rounded-lg hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50">
      <div className="flex items-center gap-2 sm:gap-3">
        <EmojiEventsIcon className={`h-6 w-6 sm:h-8 sm:w-8 ${color}`} />
        <div className="flex flex-col">
          <span className="text-slate-200 font-medium text-sm sm:text-base">{place}</span>
          <span className={`${color} font-bold text-base sm:text-lg`}>{amount}</span>
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
        "flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all shadow-lg text-sm sm:text-base w-full sm:w-auto",
        primary
          ? "bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700"
          : "bg-slate-800 text-slate-200 hover:bg-slate-700",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5" />}
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

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: event.name,
          text: event.description,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="bg-slate-950 font-inter min-h-screen flex flex-col">
      <section className="w-full">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="bg-gradient-to-br from-slate-200 to-slate-400 pt-64 pb-20 sm:py-20 md:py-24 bg-clip-text text-center text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-transparent px-4">
            {event.name}
          </motion.h1>
        </LampContainer>
      </section>

      <main className="flex-grow max-w-6xl mx-auto p-4 md:p-6 w-full -mt-24 sm:-mt-28 md:-mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="backdrop-blur-sm shadow-lg">
              <div className="h-[500px] rounded-lg">
                <ImageContainer
                  src={event.poster_url}
                  alt={`${event.name} Poster`}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <ActionButton
                primary
                className="flex-1"
                onClick={() => window.open(event.form, '_blank')}
              >
                Register Now
              </ActionButton>
              <ActionButton
                icon={ShareIcon}
                onClick={handleShare}
                className="sm:w-auto"
              >
                Share
              </ActionButton>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="bg-slate-900/80 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-3 sm:mb-4">About the Event</h3>
              <p className="text-slate-200 leading-relaxed text-sm sm:text-base">{event.description}</p>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-3 sm:mb-4">Prizes</h3>
              <div className="space-y-3">
                <PrizeCard place="First Prize" amount={event.award.first} color="text-yellow-400" />
                <PrizeCard place="Second Prize" amount={event.award.second} color="text-slate-300" />
              </div>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-3 sm:mb-4">Rules</h3>
              <ul className="space-y-2">
                {event.regulations.map((rule, index) => (
                  <li key={index} className="flex gap-2 sm:gap-3 text-slate-200 text-sm sm:text-base">
                    <span className="text-cyan-400 font-medium">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-4 sm:p-6 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-3 sm:mb-4 text-center">Contact</h3>
              <div className="flex flex-col items-center mb-6 bg-slate-800/50 p-3 sm:p-4 rounded-lg hover:bg-slate-800 transition-colors">
                <h4 className="text-xl font-bold text-slate-200 mb-2">{event.people[0].position}</h4>
                <p className="text-cyan-300 font-medium">{event.people[0].contact_name}</p>
                <p className="text-slate-400">{event.people[0].contact_phone}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {event.people.slice(1).map((person, index) => (
                  <div key={index} className="bg-slate-800/50 p-3 sm:p-4 rounded-lg hover:bg-slate-800 transition-colors">
                    <h4 className="font-semibold text-cyan-300 mb-1 text-sm sm:text-base">{person.position}</h4>
                    <p className="text-slate-200 text-xs sm:text-sm">{person.contact_name}</p>
                    <p className="text-slate-400 text-xs sm:text-sm">{person.contact_phone}</p>
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