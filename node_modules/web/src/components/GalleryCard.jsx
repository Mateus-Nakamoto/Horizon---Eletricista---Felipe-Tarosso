import React from 'react';

const GalleryCard = ({ image, title, category }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-primary text-sm font-semibold mb-1">{category}</p>
          <h3 className="text-white text-xl font-bold">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;