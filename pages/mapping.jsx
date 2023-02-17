import React from "react";
// import Contact from "../components/Contact";
import LibrabyMap from "../components/LibrabyMap";
import Hero from "../components/Hero";

const mapping = () => {
  return (
    <div>
      <Hero
        heading="Other Library"
        message="KKU has many more libraries that you can use."
        buttonMess="???"
        buttonLink="/mapping#kud"
      />
      <LibrabyMap />
      {/* <Contact /> */}
    </div>
  );
};

export default mapping;
