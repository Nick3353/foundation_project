import React, { useState } from 'react';

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : items.length - 3
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < items.length - 3 ? prevIndex + 1 : 0
    );
  };

  const visibleItems = items.slice(currentIndex, currentIndex + 3);

  return (
    <div className="slider-container">
      <div className="slider">
        {visibleItems.map((item, index) => (
          <div className="slider-item" key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className="slider-buttons">
        <button onClick={previousSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default Slider;
