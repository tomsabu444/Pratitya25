import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from "react-router-dom"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/teams" },
]

export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
}

export const slide = {
  initial: { x: 80 },
  enter: i => ({ x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),
  exit: i => ({ x: 80, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } })
}

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } }
}

const Navbar = () => {
  const sdUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/navbar%2Fsaintgits_logo.webp?alt=media&token=0122bb68-9fda-4cf3-914a-ece282e8535b";
  const smUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/navbar%2Fsaintgits_mobile.webp?alt=media&token=65a7b160-7e80-458e-b78c-59b2cdc1f18f";
  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/favicon%2Ffavicon.webp?alt=media&token=9cedf97d-baa5-4f0e-a095-91cfeca08744";
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const NavigationLinks = ({ mobile = false, onClick = () => { } }) => (
    <div className={mobile ? "flex items-center justify-center h-full" : "hidden md:flex gap-8"}>
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
        {navigation.map((item, i) => (
          <motion.li
            key={item.name}
            variants={mobile ? slide : {}}
            custom={i}
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
        <div className={`fixed top-0 w-full h-24 ${scrolled ? "bg-black/50 backdrop-blur-lg" : ""}`} />

        {/* Main Navbar Content */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative flex items-center justify-between h-16">
            {/* Left Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={isMobile ? smUrl : sdUrl}
                alt="Logo"
                className={`${isMobile ? "w-15 h-12" : "h-10"} mt-2 object-contain`}
              />
            </Link>

            {/* Center Logo */}
            <div className="absolute left-1/2 transform mt-3 -translate-x-1/2">
              <img
                src={logoUrl}
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
                className="p-2 rounded-full text-white focus:outline-none z-[70]"
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
                    {!mobileOpen && <MenuIcon  fontSize="large" />}
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
              initial={{ clipPath: "circle(0% at 100% 0)" }}
              animate={{ clipPath: "circle(150% at 100% 0)" }}
              exit={{ clipPath: "circle(0% at 100% 0)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-full bg-black/50 backdrop-blur-lg z-50 md:hidden"
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-white focus:outline-none z-[70]"
                onClick={() => setMobileOpen(false)}
              >
                <ClearIcon fontSize="medium"/>
              </button>
              
              <NavigationLinks mobile={true} onClick={() => setMobileOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Navbar