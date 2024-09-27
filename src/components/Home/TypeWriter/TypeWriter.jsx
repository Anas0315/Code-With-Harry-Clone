import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import { Link } from 'react-router-dom';
export default function TypeWriter() {
  const [text] = useTypewriter({
    words:[ 'Web Development','C Programing','Python','C++','Java','DSA','Machine Lerning','Data Science'],
    loop:{},
    typeSpeed:120, 
    deleteSpeed:80
  });
    return (
   <> 
   <div className=' w-full h-[30vh] text-center lg:text-start lg:h-[35vh] my-7  mx-2 lg:mx-14 lg:w-[40vw]'  >
   <h1 className='text-3xl lg:text-4xl lg:mb-1  font-semibold' >
     Welcome To <span className='text-purple-700'>CodeWithHarry</span>
   </h1>
   <h1 className='  text-xl lg:text-3xl font-semibold'>
    Learn
     <span className=' text-purple-700 mx-2'>
     {text}
    </span>
    <span className='text-black'>
        <Cursor cursorStyle = "|" />
    </span>
   </h1>
    <p className='mt-2 opacity-75 text-sm lg:text-base '>Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.</p>
    <div className='my-3'>
      <Link
      to={'courses'}>
    <button className='bg-black  dark:bg-gray-300 dark:text-black text-white py-2 lg:py-3 lg:px-5  px-4   text-xs font-semibold  rounded-md' >Free Courses</button>
    </Link>
    <Link
    to={'blogs'}>
    <button className='bg-gray-300  text-black py-2 lg:py-3 lg:px-5 px-4  text-xs font-semibold rounded-md ml-4 ' >Explore Blogs</button>
    </Link>
    </div> 
   </div>
   </>
  )
}

