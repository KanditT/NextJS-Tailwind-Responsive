import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-cyan-50/60 z-[2]" />
      <div className="p-5  z-[2] mt-[-10rem]">
        <h2
          style={{ color: "#B30000" }}
          className="text-5xl font-bold text-center"
        >
          {heading}
        </h2>
        <p style={{ color: "#FF8080" }} className="py-5 text-xl text-center">
          {message}
        </p>

        <button
          className="px-8 py-2 border text-center"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "150px",
            border: "0",
            padding: "12px 10px",
            outline: "none",
            color: "#fff",
            background: "linear-gradient(to right, #b30000, #ff3527)",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "width 0.5s",
            fontSize: "1rem",
          }}
        >
          Booking here!
        </button>

        <style jsx>{`
          @media (max-width: 768px) {
            button {
              width: 120px;
              font-size: 0.8rem;
            }
          }

          @media (max-width: 480px) {
            button {
              width: 100px;
              font-size: 0.6rem;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Hero;
