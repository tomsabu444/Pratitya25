import { useParams, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import events from "../data/events.json"

const cn = (...inputs) => {
  return twMerge(clsx(inputs))
}

const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex h-[60vh] flex-col items-center justify-center overflow-hidden bg-slate-950 w-full z-0",
        className,
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
        ></motion.div>
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"></div>
      </div>
      <div className="relative z-50 flex -translate-y-32 flex-col items-center px-5">{children}</div>
    </div>
  )
}

const EventPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const event = events.find((e) => e.id === id)

  if (!event) {
    return (
      <div className="flex flex-col items-center mt-20">
        <h2 className="text-2xl font-bold text-gray-800">Event not found</h2>
      </div>
    )
  }

  return (
    <div className="bg-slate-950 font-inter min-h-screen flex flex-col">
      {/* Hero Section with Lamp */}
      <section className="w-full">
        <LampContainer>
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-center"
          >
            <h1 className="bg-gradient-to-br from-slate-200 to-slate-400 py-4 bg-clip-text text-center text-4xl md:text-7xl font-medium tracking-tight text-transparent">
              {event.name}
            </h1>
            <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">{event.description}</p>
          </motion.div>
        </LampContainer>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto p-6 md:p-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Left Section - Image and Registration */}
          <div className="flex flex-col items-center space-y-6">
            <div className="w-full aspect-[3/4] rounded-xl overflow-hidden">
              <img
                src={event.poster_url || "/placeholder.svg"}
                alt={`${event.name} Poster`}
                className="w-full h-full object-cover"
              />
            </div>
            <a
              href={event.form}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md px-8 py-4 bg-cyan-500 text-white text-center text-lg font-medium rounded-lg hover:bg-cyan-600 transition-colors"
            >
              Register Now
            </a>
          </div>

          {/* Right Section - Event Details */}
          <div className="text-white space-y-8">
            {/* Prizes Section */}
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Prizes</h3>
              <div className="space-y-2 text-slate-200">
                <p className="flex justify-between">
                  <span>First Prize:</span>
                  <span>{event.award.first}</span>
                </p>
                <p className="flex justify-between">
                  <span>Second Prize:</span>
                  <span>{event.award.second}</span>
                </p>
              </div>
            </div>

            {/* Rules Section */}
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Rules</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-200">
                {event.regulations.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {event.people.map((person, index) => (
                  <div key={index} className="bg-slate-900/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-300">{person.position}</h4>
                    <p className="text-slate-200">{person.contact_name}</p>
                    <p className="text-slate-400">{person.contact_phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default EventPage

