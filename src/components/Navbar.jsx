"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Menu } from 'lucide-react'

const navigation = [
  { name: "Home", href: "#" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]



export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 right-0 w-full z-50">
        <nav className="flex justify-end p-4 items-center max-w-7xl mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden sm:flex gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black hover:text-gray-700 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-white p-2 hover:bg-[#6366F1] rounded-full transition-colors"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6 text-black" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 90% 5%)" }}
            animate={{ clipPath: "circle(150% at 50% 50%)" }}
            exit={{ clipPath: "circle(0% at 90% 5%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#1A1A1A] z-50"
          >
            <div className="relative h-full flex flex-col px-8 py-12">
              <button
                className="absolute right-6 top-6 bg-[#6366F1] text-white p-2 rounded-full hover:bg-[#6366F1]/90 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>

              <div className="mb-12">
                <p className="text-gray-500 text-sm tracking-wider uppercase">Navigation</p>
                <div className="mt-2 h-[1px] w-full bg-gray-800" />
              </div>

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
                        className="text-white text-5xl font-light hover:text-gray-300 transition-colors block"
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
