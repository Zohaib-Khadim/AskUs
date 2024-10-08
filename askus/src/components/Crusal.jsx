import React, { useState } from 'react';

const images = [
  'Audi.png',
  'Audi.png',
  'Audi.png',
  'Audi.png',
  
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 3));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 4 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto flex items-center mt-5"> 
      <button
        onClick={prevImage}
        className="absolute left-[-10px] border  transform -translate-y-1/2 bg-white text-black p-2 rounded-full mt-8 lg:ms-10 md:ms-7 sm:ms-5" 
      >
        &lt;
      </button>
      <div className="flex overflow-hidden justify-center space-x-5 mx-4 ">
        {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
          <div key={index} className="w-1/6 bg-white rounded-lg"> 
            <img src={image} alt={`Carousel Image ${index + 1}`} className="w-full h-auto rounded-lg border" />
          </div>
        ))}
      </div>
      <button
        onClick={nextImage}
        className="absolute right-[-10px] border transform -translate-y-1/2 bg-white text-black p-2 rounded-full mt-8 lg:me-10 md:me-7 sm:me-5" 
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
