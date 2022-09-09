import React, { useState } from "react";
import Data from "./Data";

const ImageSlider = () => {
  const [current, setCount] = useState(0);

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
