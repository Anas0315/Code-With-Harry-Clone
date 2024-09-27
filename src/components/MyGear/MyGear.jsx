import React from "react";
import { FaArrowRight } from "react-icons/fa6";
function MyGear({recordingImage,recodingHeading,recordingPara,}) {
  return (
    <>
         <div className="lg:h-[54vh] h-auto w-[100vw] lg:w-[30vw]   lg:mb-20 mx-1 my-16  md:w-[40vw] md:h-[60vh] md:my-20 ">
          <div>
          <div>
            <img className="w-[100vw] lg:w-[30vw]  h-[34vh] object-cover rounded-lg " src={recordingImage} alt="" />
          </div>
          <div className="h-[20vh]">
           <h1 className="my-2 font-medium text-2xl ">{recodingHeading}</h1>
           <p className=" lg:h-[25vh] h-auto text-sm md:text-base lg:text-base">{recordingPara}</p>
           <button className= 'bg-purple-700 lg:my-6 my-1 flex items-center justify-center  text-white h-10  p-2  rounded-3xl font-medium ' >View on Amazon <FaArrowRight className="ml-[4px]" />
           </button>
          </div>
          </div>
         </div>
    </>
  );
}

export default MyGear;
