'use client';

import Image from 'next/image';
import React from 'react';

type VerticalCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  alt?: string;
  width: number;
  height: number;
};

const VerticalCard: React.FC<VerticalCardProps> = ({
  title,
  description,
  imageUrl,
  alt,
  width,
  height,
}) => {
  return (
    <div className="w-full max-w-xs bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col items-center text-center space-y-4">
      <Image
        src={imageUrl}
        alt={alt || title}
        width={width}
        height={height}
        className="object-cover rounded-full w-[200px] h-[200px]"
      />
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default VerticalCard;
