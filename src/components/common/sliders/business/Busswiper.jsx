// import Swiper from 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper-bundle.min.js';

import React, { useEffect } from 'react';
import Swiper from 'swiper/swiper-bundle.min.css';
import 'swiper/swiper-bundle.min.js';

const MySwiper = () => {
  useEffect(() => {
    const mySwiper = new Swiper('.swiper-container', {
      // Swiper configuration options
      slidesPerView: 3,
      spaceBetween: 20,
    });
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
        {/* Add more slides here */}
      </div>
    </div>
  );
};

export default MySwiper;
