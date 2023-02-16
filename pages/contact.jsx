import React from "react";
// import Contact from "../components/Contact";
import LibrabyMap from "../components/LibrabyMap";
import Hero from "../components/Hero";

const contact = () => {
  return (
    <div>
      <Hero
        heading="Contact"
        message="Submit the form below for more work and quotes."
      />
      <LibrabyMap />
      {/* <Contact /> */}
    </div>
  );
};

export default contact;
