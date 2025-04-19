'use client'

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50">
      <button
        className="p-2 text-gray-700 rounded-md focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            <a href="#home" onClick={toggleMenu} className="text-gray-800 hover:underline">Home</a>
            <a href="#about" onClick={toggleMenu} className="text-gray-800 hover:underline">About</a>
            <a href="#services" onClick={toggleMenu} className="text-gray-800 hover:underline">Services</a>
            <a href="#contact" onClick={toggleMenu} className="text-gray-800 hover:underline">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
