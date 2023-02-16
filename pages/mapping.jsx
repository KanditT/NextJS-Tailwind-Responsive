import React from "react";
// import Contact from "../components/Contact";
import LibrabyMap from "../components/LibrabyMap";
import Hero from "../components/Hero";

const mapping = () => {
  return (
    <div>
      <Hero
        heading="Contact"
        message="Submit the form below for more work and quotes."
        buttonMess="???"
        buttonLink="/booking"
      />
      <LibrabyMap />
      {/* <Contact /> */}
    </div>
  );
};

export default mapping;
