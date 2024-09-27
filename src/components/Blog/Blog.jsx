import React from "react";
import { Link } from "react-router-dom";
function Blog({blogHeading,blogDate,blogPara}) {
  return( <>
    <div className=" w-[80vw] lg:w-[60vw] h-auto rounded-xl shadow-lg shadow-white-500/50 bg-white  dark:bg-[#1E293B] ">
          <h1 className=" text-xl lg:text-3xl font-[500] my-6  mx-6 pt-2 ">{blogHeading}</h1>
          <div  className="flex items-center my-3   mx-6  ">
            <Link
            to={'/'}
            >
            <img className=" w-[10vw] lg:w-[2vw]"  src="https://www.codewithharry.com/img/logo-blue.png" alt="" />
            </Link>
             <span className=" ml-1 text-xs lg:text-sm opacity-85">
Haris Ali Khan .{blogDate}</span>
          </div>
          <p className="my-3  mx-6 text-base md:text-lg ">
          {blogPara}
          </p>
          <button className='bg-purple-700 text-white h-10  p-2  rounded-lg  font-medium m-1  mb-6 mx-6  '  >Read more</button>
       </div>      
 </>)
 
}

export default Blog;
