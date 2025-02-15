"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

// Import local images correctly
import holiColorsBg from "../assets/holi colors bg.png"
import fireflyBg from "../assets/Firefly bg.png"
import lanternImg from "../assets/Lantern individual.png"
import houseImg from "../assets/Foreground castle.png"
import dragonImg from "../assets/chinesedragon 1 (1).png"
import bgImg from "../assets/templebackground.jpeg"

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 18,
    hours: 22,
    minutes: 1,
    seconds: 55,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeBlocks = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HOURS" },
    { value: timeLeft.minutes, label: "MINUTES" },
    { value: timeLeft.seconds, label: "SECONDS" },
  ]

  return (
    <div className="flex gap-4 justify-center items-center">
      {timeBlocks.map((block, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-[#2A2B3F] w-[180px] h-[180px] rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[#2A2B3F] opacity-50"></div>
            <div className="border-4 border-[#FF6B81] w-[160px] h-[160px] flex items-center justify-center">
              <span className="text-[100px] font-bold text-[#FF6B81] relative z-10">
                {String(block.value).padStart(2, "0")}
              </span>
            </div>
          </div>
          <span className="text-[#8A8F98] mt-4 text-lg tracking-widest">{block.label}</span>
        </div>
      ))}
    </div>
  )
}

const ParallaxPage = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Keep all existing transforms
  const y1 = useTransform(scrollYProgress, [0, 0.3], ["0%", "30%"])
  const y2 = useTransform(scrollYProgress, [0, 0.3], ["0%", "60%"])
  const y3 = useTransform(scrollYProgress, [0, 0.3], ["0%", "40%"])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])
  const opacity = useTransform(scrollYProgress, [0.25, 0.3], [1, 0])
  const houseScale = useTransform(scrollYProgress, [0.3, 0.6], [1.3, 1])
  const dragonMove = useTransform(scrollYProgress, [0.3, 0.6], [0, 100])
  const dragonY = useTransform(scrollYProgress, [0.3, 0.6], [0, -50])
  const aboutLeftX = useTransform(scrollYProgress, [0.4, 0.6], [-100, 0])
  const aboutRightX = useTransform(scrollYProgress, [0.4, 0.6], [100, 0])
  const finalOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0])

  const lanternYTransforms = Array.from({ length: 5 }, (_, i) =>
    useTransform(scrollYProgress, [0, 0.3], ["0%", `-${50 + i * 20}%`]),
  )

  // Updated lantern positions for better organization
  const lanternPositions = [
    { desktop: { left: "5%", top: "15%" }, mobile: { left: "10%", top: "15%" } },
    { desktop: { left: "15%", top: "70%" }, mobile: { left: "75%", top: "20%" } },
    { desktop: { left: "35%", top: "40%" }, mobile: { left: "40%", top: "25%" } },
    { desktop: { left: "65%", top: "20%" }, mobile: { left: "60%", top: "30%" } },
    { desktop: { left: "70%", top: "60%" }, mobile: { left: "25%", top: "35%" } },
  ]

  return (
    <div ref={containerRef} className="relative h-[300vh] overflow-hidden bg-[#1a1a1a]">
      {/*//! First Section */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div
          style={{ y: y1, backgroundImage: `url(${holiColorsBg})` }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        />
        <motion.div
          style={{ y: y2, backgroundImage: `url(${fireflyBg})` }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        />

        <div className="relative h-screen flex flex-col items-center justify-center text-white px-4">
          <motion.h1
            className="text-6xl font-agraham md:text-8xl z-50 font-bold mb-8 text-center tracking-wider"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Pratitya
          </motion.h1>

          {/* Updated countdown component */}
          <div className="w-full max-w-7xl mx-auto px-4 mb-12">
            {/* <Countdown /> */}
          </div>

          {/* Updated lantern section */}
          <motion.div className="absolute w-full h-full pointer-events-none" style={{ scale }}>
            {lanternPositions.map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-36 md:w-32 overflow-hidden"
                style={{
                  left: pos.desktop.left,
                  top: pos.desktop.top,
                  y: lanternYTransforms[i],
                  "@media (max-width: 768px)": {
                    left: pos.mobile.left,
                    top: pos.mobile.top,
                  },
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: i * 0.2,
                }}
              >
                <img
                  src={lanternImg || "/placeholder.svg"}
                  alt="Floating Lantern"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold 
                     hover:bg-opacity-90 transition-colors transform hover:scale-105
                     active:scale-95 shadow-xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Join The Celebration
          </motion.button>
        </div>
      </div>

      {/* //! House and Dragon Section */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }} />

        <motion.div className="relative h-screen w-full">
          <motion.img
            src={houseImg}
            alt="House"
            className="absolute left-1/8 top-1/6 -translate-x-1/2 -translate-y-1/2 w-[90vw]"
            style={{ scale: houseScale }}
          />

          <motion.img
            src={dragonImg}
            alt="Dragon"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw]"
            style={{
              x: dragonMove,
              y: dragonY,
            }}
          />

          <div className="absolute top-2/3 w-full flex justify-center gap-4">
            <motion.span className="text-6xl font-bold text-white" style={{ x: aboutLeftX }}>
              About
            </motion.span>
            <motion.span className="text-6xl font-bold text-white" style={{ x: aboutRightX }}>
              Us
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* //! Final About Section */}
      <motion.div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-20"
        style={{ opacity: finalOpacity }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-black/40 backdrop-blur-md rounded-xl p-8 text-white
                     shadow-2xl border border-white/10"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r 
                         from-orange-300 to-yellow-200 bg-clip-text text-transparent"
            >
              About Us
            </h2>
            <p className="text-lg mb-4 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="text-lg leading-relaxed">
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default ParallaxPage

