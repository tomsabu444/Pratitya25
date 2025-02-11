"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Menu } from "lucide-react"
import { IconButton } from "@mui/material"

const navigation = [
  { name: "Home", href: "#" },
  { name: "Events", href: "#work" },
  { name: "Team", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768) // Ensures 768px and below use mobile menu
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <img
          src="public/images/2413654.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top Left Logo - Adjusted for More Space Below in Mobile View */}
      <div className={`fixed ${isMobile ? "top-6" : "top-2"} left-4 z-50`}>
        <img
          src={isMobile ? "public/images/Saintgits (1).png" : "public/images/saintgits logo.png"}
          alt="Logo"
          className={`${isMobile ? "w-15 h-12" : "w-30 h-32"} object-contain`} 
        />
      </div>

      {/* Centered Pratitya Logo */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <img src="public/images/pratitya logo.png" alt="Pratitya Logo" className="w-14 h-14" />
      </div>

      {/* Navbar (Desktop) - Moved Elements to Right */}
      <header className="fixed top-6 right-0 w-full z-50">
        <nav className="flex justify-end p-4 items-center max-w-7xl mx-auto mr-8">
        <div className="hidden md:flex gap-8">  
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-xl text-white hover:text-gray-300 transition-colors">
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile Menu Button Container */}
      <div className="md:hidden fixed top-4 right-4 z-[60]">
        <AnimatePresence mode="wait">
          <motion.div
            key={mobileOpen ? "close" : "menu"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <IconButton
              ref={buttonRef}
              className="bg-indigo-500 text-white p-2 rounded-full"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </IconButton>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Menu (Hidden on Desktop) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef}
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-1/2 bg-black/50 backdrop-blur-lg z-50 sm:hidden"
          >
            <div className="relative h-full flex flex-col px-8 py-12">
              {/* Mobile Navigation Links */}
              <nav className="mt-24">
                <motion.ul
                  className="space-y-8 text-center"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {navigation.map((item) => (
                    <motion.li
                      key={item.name}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <a
                        href={item.href}
                        className="text-white text-3xl font-light hover:text-gray-300 transition-colors block"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}