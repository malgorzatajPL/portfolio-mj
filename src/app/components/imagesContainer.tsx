'use client';

import React from 'react';
import Image from 'next/image';

const ImagesContainer = () => {
  const images = [
    {
      src: '/welcome.jpg',
      alt: 'Elegant Dining Area',
      title: 'Elegant Dining',
      description: 'Experience fine dining with a view.',
    },
    {
      src: '/welcome2.jpg',
      alt: 'Modern Bar',
      title: 'Modern Bar',
      description: 'Enjoy our selection of premium drinks.',
    },
    {
      src: '/welcome3.jpg',
      alt: 'Scenic Terrace',
      title: 'Scenic Terrace',
      description: 'Relax on our terrace overlooking the marina.',
    },
  ];

  return (
    <section className="w-full py-12 px-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group h-[400px] w-full overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-semibold">{image.title}</h3>
              <p className="mt-2 text-base">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImagesContainer;
