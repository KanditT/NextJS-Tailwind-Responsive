import Image from "next/image";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const LibrabyImg = ({ socialImg, caption }) => {
  return (
    <div className="relative">
      <Image
        src={socialImg}
        alt="/"
        className="w-full h-full"
        layout="responsive"
      />
      {/* Overlay */}
      <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0  hover:bg-black/50 group">
        {/* <p className="text-gray-300 opacity-100 transition-opacity duration-300 pointer-events-none">
          {caption}
        </p> */}
        <p className="text-gray-300 hidden group-hover:block">
          <FaLocationArrow size={30} className="z-10" />
        </p>
      </div>
    </div>
  );
};

export default LibrabyImg;
