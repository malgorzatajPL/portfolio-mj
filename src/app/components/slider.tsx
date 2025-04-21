'use client';

import React from 'react';
import Slider from 'react-slick'; 
import VerticalCard from './shared/verticalCard';

const dishes = [
  {
    title: 'Cheeseburger',
    description: 'Juicy grilled beef with melted cheese.',
    imageUrl: '/burger.jpeg',
  },
  {
    title: 'Margherita Pizza',
    description: 'Classic pizza with tomato & mozzarella.',
    imageUrl: '/pasta.jpg',
  },
  {
    title: 'Caesar Salad',
    description: 'Fresh romaine, croutons, and parmesan.',
    imageUrl: '/chicken.jpeg',
  },
  {
    title: 'Pasta Carbonara',
    description: 'Creamy sauce with pancetta and cheese.',
    imageUrl: '/soup.jpg',
  },
  {
    title: 'Grilled Chicken',
    description: 'Perfectly seasoned grilled chicken breast.',
    imageUrl: '/pasta2.jpg',
  },
];

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center space-x-2 mt-12">{dots}</ul> 
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-gray-400 rounded-full hover:bg-red-500 transition-colors duration-300" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-2">Popular Dishes</h2>
      <p className="text-center text-gray-600 mb-10">
        Discover what everyone is loving this week
      </p>

      <Slider {...settings}>
        {dishes.map((dish, index) => (
          <div key={index} className="px-3">
            <VerticalCard
              title={dish.title}
              description={dish.description}
              imageUrl={dish.imageUrl}
              width={200}
              height={200}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderSection;
