import React, { useState } from "react";
import Data from "./Data";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const ImageSlider = (slides) => {
  const [current, setCount] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCount(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCount(current === 0 ? length - 1 : current - 1);
  };
  // console.log(current);

  // if (!Array.isArray(slides) || length <= 0) {
  //   return null;
  // }

  return (
    <section className="slider">
      <BsFillArrowLeftSquareFill className="left-arrow" onClick={prevSlide} />
      <BsFillArrowRightSquareFill className="right-arrow" onClick={nextSlide} />
      {Data.map((slide, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"}>
            <img
              src={slide}
              alt="travel"
              key={index}
              className="slider-image"
            />
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
