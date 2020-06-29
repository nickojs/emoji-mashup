import React, { useState, useEffect } from 'react';

const Carousel = ({ children }) => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const contentLength = children.length;

  const nextSlide = () => {
    setSliderPosition((pState) => (pState + 1 >= contentLength
      ? pState
      : pState + 1));
  };

  const prevSlide = () => {
    setSliderPosition((pState) => (pState - 1 < 0
      ? pState
      : pState - 1));
  };

  // useEffect(() => {
  //   console.log(sliderPosition);
  //   console.log(children[sliderPosition]);
  // }, [sliderPosition, children]);

  return (
    <div>
      {children[sliderPosition]}
      <button
        type="button"
        disabled={contentLength === 0 && sliderPosition <= 0}
        onClick={prevSlide}
      >
        Previous
      </button>
      <button
        type="button"
        disabled={contentLength === 0 && sliderPosition > 0}
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
