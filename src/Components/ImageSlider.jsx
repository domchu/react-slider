import React, { useState } from "react";
import Data from "./Data";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const ImageSlider = (slides) => {
  const [current, setCount] = useState(0);
  const length = slides.length;

  return (
    <section className="slider">
      <BsFillArrowLeftSquareFill className="left-arrow" />
      <BsFillArrowRightSquareFill className="right-arrow" />
      {Data.map((slide, index) => {
        return (
          <img src={slide} alt="travel" key={index} className="slider-image" />
        );
      })}
    </section>
  );
};

export default ImageSlider;
