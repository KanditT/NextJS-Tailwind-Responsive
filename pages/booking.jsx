import React from "react";
import Hero from "../components/Hero";

const book = () => {
  return (
    <div>
      <Hero
        heading="Booking"
        message="This is some of my recent work traveling the world."
        buttonMess="Let's Book"
        buttonLink="/booking"
      />
    </div>
  );
};

export default book;
