'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed top-4 right-4 z-50" ref={menuRef}>
      <button
        className="p-2 text-white rounded-md focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <Menu size={40} />
      </button> 
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 text-xl shadow-lg"
          >
            {/* Zamykający X wewnątrz menu */}
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 p-2 text-gray-600 hover:text-black"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <a href="#home" onClick={closeMenu} className="text-gray-800 hover:underline">Home</a>
            <a href="#about" onClick={closeMenu} className="text-gray-800 hover:underline">About</a>
            <a href="#services" onClick={closeMenu} className="text-gray-800 hover:underline">Services</a>
            <a href="#contact" onClick={closeMenu} className="text-gray-800 hover:underline">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
