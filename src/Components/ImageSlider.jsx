import React from "react";
import { Data } from "./Data";

const ImageSlider = () => {
  return (
    <>
      {Data.map((slide, index) => {
        return <img src={slide.image} alt="travel" />;
      })}
    </>
  );
};

export default ImageSlider;
