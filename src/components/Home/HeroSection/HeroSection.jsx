import React from "react";
import TypeWriter from "../TypeWriter/TypeWriter";
import HomeImage from "../Images/HomeImage.jpg";

function HeroSection() {
  return (
    <>
      <div className="flex justify-between">
        <TypeWriter />
        <img
          className=" hidden md:h-[48vh] object-cover    w-[48vw] md:block
     "
          src={HomeImage}
          alt=""
        />
      </div>
    </>
  );
}

export default HeroSection;
