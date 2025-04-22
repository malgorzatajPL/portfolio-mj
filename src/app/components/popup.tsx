'use client';

import { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = {
  Burgers: [
    { name: 'Classic Beef Burger', price: '£8.99' },
    { name: 'Cheese & Bacon Burger', price: '£10.50' },
  ],
  Pizzas: [
    { name: 'Margherita', price: '£9.00' },
    { name: 'Pepperoni Feast', price: '£11.50' },
  ],
  Salads: [
    { name: 'Greek Salad', price: '£7.25' },
    { name: 'Chicken Caesar', price: '£8.75' },
  ],
};

export default function PopupMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
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
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition"
      >
        See Our Menu
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={menuRef}
              className="bg-white border-[12px] border-red-900 rounded-3xl shadow-2xl max-w-3xl w-full px-10 py-12 relative font-serif"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              >
                <X size={28} />
              </button>

              <h2 className="text-4xl font-bold text-center mb-6 text-red-800 tracking-wide border-b-2 border-red-500 pb-2">
                Our Menu
              </h2>

              <div className="space-y-10">
                {Object.entries(menuItems).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-2xl font-semibold text-red-700 mb-3 uppercase tracking-wide relative inline-block">
                      {category}
                      <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-600 rounded-full" />
                    </h3>
                    <ul className="space-y-2 pl-1">
                      {items.map(({ name, price }) => (
                        <li
                          key={name}
                          className="flex justify-between text-gray-800 border-b border-dashed border-red-400 pb-1"
                        >
                          <span>{name}</span>
                          <span className="font-medium">{price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center text-sm text-red-700 italic">
                * All meals are freshly prepared using locally sourced ingredients *
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
