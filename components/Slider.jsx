import Image from "next/image";
import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="aboutLibrary" className="max-w-[1240px] max-h-[1200px] mx-auto">
      <h1
        style={{ color: "#7d0000" }}
        className="text-2xl font-bold text-center p-4"
      >
        About Library
      </h1>
      <div className="relative flex justify-center p-4">
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className="absolute top-[50%] left-[20px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt="/"
                  width="1440"
                  height="600"
                  objectFit="cover"
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className="absolute top-[50%] right-[20px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
