import React, { useState } from "react";
import Data from "./Data";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

const ImageSlider = () => {
  const [current, setCount] = useState(0);
  // const length = slides.length;

  return (
    <>
      {Data.map((slide, index) => {
        return (
          <img src={slide} alt="travel" key={index} className="slider-image" />
        );
      })}
    </>
  );
};

export default ImageSlider;
