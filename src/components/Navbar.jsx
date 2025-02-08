"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Events", href: "#work" },
  { name: "Meet the Team", href: "#about" },
  { name: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 right-0 w-full z-50 bg-transparent">
        <nav className="flex justify-end p-4 items-center max-w-7xl mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden sm:flex gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Button for opening and closing the menu */}
      <div className="fixed top-4 right-4 z-[60]">
        <button
          ref={buttonRef}
          className="sm:hidden text-white p-2 bg-[#6366F1] rounded-full transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef}
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-1/2 bg-black/50 backdrop-blur-lg z-50"
          >
            <div className="relative h-full flex flex-col px-8 py-12">
              {/* Menu Items */}
              <nav className="flex-1">
                <motion.ul
                  className="space-y-8"
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
  );
}
