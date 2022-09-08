import React from "react";

const ImageSlider = () => {
  return (
    <>
      {Data.map((slide, index) => {
        return <img src={slide.image} alt={travel} />;
      })}
    </>
  );
};

export default ImageSlider;
