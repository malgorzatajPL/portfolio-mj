'use client';

import React from 'react';

const OpeningHours = () => {
  return (
    <section
      className="relative w-full py-20 px-6 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/spagetti.jpeg')" }}
    > 
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"/>
 
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Opening Hours</h2>
        <p className="mb-8 text-lg text-gray-300">
          We’re open all week to serve you delicious meals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-lg font-medium">
          <div>
            <h3 className="text-xl font-semibold mb-2">Monday - Friday</h3>
            <p>11:00 AM – 10:00 PM</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Saturday - Sunday</h3>
            <p>12:00 PM – 11:30 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
