import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Menu } from "lucide-react"
import { Link } from "react-router-dom"

import saintgits_mobile from "../assets/saintgits_mobile.png"
import saintgits_logo from "../assets/saintgits_logo.png"
import pratitya_logo from "../assets/pratitya_logo.png"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/teams" },
  // { name: "Contact", href: "#contact" },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMobileOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [mobileOpen])

  const NavigationLinks = ({ mobile = false, onClick = () => {} }) => (
    <div className={mobile ? "mt-24" : "hidden md:flex gap-8"}>
      <motion.ul
        className={mobile ? "space-y-8 text-center" : "flex gap-8"}
        initial={mobile ? "hidden" : false}
        animate={mobile ? "visible" : false}
        variants={mobile ? {
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        } : {}}
      >
        {navigation.map((item) => (
          <motion.li
            key={item.name}
            variants={mobile ? {
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            } : {}}
          >
            {item.href.startsWith('#') ? (
              <a
                href={item.href}
                className={`text-white hover:text-gray-300 transition-colors ${
                  mobile ? "text-3xl font-light block" : "text-xl"
                }`}
                onClick={onClick}
              >
                {item.name}
              </a>
            ) : (
              <Link
                to={item.href}
                className={`text-white hover:text-gray-300 transition-colors ${
                  mobile ? "text-3xl font-light block" : "text-xl"
                }`}
                onClick={onClick}
              >
                {item.name}
              </Link>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )

  return (
    <header className="fixed top-0 mt-2 w-full z-20">
      <nav className="relative">
        {/* Background */}
        <div className="fixed top-0 w-full h-20 bg-black/50 backdrop-blur-lg" />

        {/* Main Navbar Content */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative flex items-center justify-between h-16">
            {/* Left Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={isMobile ? saintgits_mobile : saintgits_logo}
                alt="Logo"
                className={`${isMobile ? "w-15 h-12" : "h-10"} mt-2 object-contain`}
              />
            </Link>

            {/* Center Logo */}
            <div className="absolute left-1/2  transform -translate-x-1/2">
              <img
                src={pratitya_logo}
                alt="Pratitya Logo"
                className="h-20 object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <NavigationLinks />

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                ref={buttonRef}
                className="p-2 rounded-full  text-white focus:outline-none z-[70]"
                onClick={(e) => {
                  e.stopPropagation()
                  setMobileOpen(!mobileOpen)
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={mobileOpen ? "close" : "menu"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                  >
                    {!mobileOpen && <Menu className="h-6 w-6" />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              ref={menuRef}
              initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
              animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
              exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-1/2 bg-black/50 backdrop-blur-lg z-50 md:hidden"
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-white focus:outline-none z-[70]"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="relative h-full flex flex-col px-8 py-12">
                <NavigationLinks mobile={true} onClick={() => setMobileOpen(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar