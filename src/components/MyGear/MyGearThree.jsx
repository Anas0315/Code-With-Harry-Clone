import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function MyGearThree({threeHeading,threeImage,threePara}) {
  return (
    <div className=" lg:h-[58vh] h-auto w-[100vw] lg:w-[30vw]  lg:m-4 lg:mb-20  mx-1 my-20 md:w-[40vw] md:h-[60vh] ">
    <div>
    <div>
      <img className=" w-[100vw]lg:w-[30vw] h-[34vh] object-cover rounded-lg " src={threeImage} alt="" />
    </div>
    <div className="h-[20vh]">
     <h1 className="my-2 font-medium text-2xl ">{threeHeading}</h1>
     <p className="h-auto text-sm lg:text-base md:text-base">{threePara}</p>
     <button className= 'bg-purple-700  my-3 flex items-center justify-center  text-white h-10  p-2  rounded-3xl font-medium ' >View on Amazon <FaArrowRight className="ml-[4px]" />
     </button>
    </div>
    </div>
   </div>
  )
}

export default MyGearThree