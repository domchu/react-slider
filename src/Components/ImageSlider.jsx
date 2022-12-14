import React, { useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import Data from "./Data";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <BsFillArrowLeftSquareFill className="left-arrow" onClick={prevSlide} />
      <BsFillArrowRightSquareFill className="right-arrow" onClick={nextSlide} />
      {Data.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="travel"
                key={index}
                className="slider-image"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
