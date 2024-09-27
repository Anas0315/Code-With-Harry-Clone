import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
function MyGearPc({ pcImage,pcHeading,pcPara}) {
  return (
   <>
         <div className=" lg:h-[54vh] h-auto w-[100vw] lg:w-[30vw]  lg:m-4 lg:mb-20 md:w-[40vw] md:h-[60vh] mx-1 my-16">
          <div>
          <div>
            <img className=" w-[100vw]lg:w-[30vw] h-[32vh] object-cover rounded-lg " src={pcImage} alt="" />
          </div>
          <div className="h-[20vh]">
           <h1 className="my-2 font-medium text-2xl ">{pcHeading}</h1>
           <p className="h-auto text-sm lg:text-base  md:text-base">{pcPara}</p>
           <button className= 'bg-purple-700  my-3 flex items-center justify-center  text-white h-10  p-2  rounded-3xl font-medium m ' >View on Amazon <FaArrowRight className="ml-[4px]" />
           </button>
          </div>
          </div>
         </div>
   </>
  )
}

export default MyGearPc