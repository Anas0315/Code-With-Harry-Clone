import React, { useState } from 'react'
import Hiring from './Hiring'

function WorkWithUs() {
  const submit = (e) => {
    e.preventDefault();
}
  return ( 
    <>
    <div className=' flex-wrap flex justify-evenly items-center'>
    <Hiring/>
      <div className=' h-auto pb-4  lg:h-auto md:w-[40vw] sm:w-[46vw] w-[90vw] lg:w-[27vw] bg-[#F3F4F6] rounded-lg my-4  dark:bg-[#1E293B] '>
        <div className=' mx-8 pt-8 ml-4  '>
           <h1 className='opacity-75 mb-[4px]'>India Only</h1>
           <h1 className='text-xl font-semibold'>Apply Now!</h1>
        </div>
        <form 
        onSubmit={submit}
        action="">   
      <div className='flex flex-col mx-8 pt-8 pb-4 ml-4 '>
       <label className='text-sm mb-[4px] opacity-75' htmlFor="name"> Full Name </label>
       <input
       className= 'outline-purple-700 w-[80vw] sm:w-[40vw] md:w-[36vw] lg:w-[23vw] h-11 rounded-sm  border-2 border-gray-200' type="text" name="Full Name" id="name" />
      </div>
      <div className='flex flex-col mx-8 pb-4 ml-4 '>
       <label className='text-sm mb-[4px] opacity-75' htmlFor="email"> Email </label>
       <input
       className=' outline-purple-700  w-[80vw] sm:w-[40vw] md:w-[36vw] lg:w-[23vw] h-11 rounded-sm  border-2 border-gray-200 ' type="text" name="email" id="email" />
      </div>
      <div className='flex flex-col mx-8 pb-4 ml-4  '>
       <label className='text-sm mb-[4px] opacity-75' htmlFor="phone num"> Phone Number </label>
       <input className=' outline-purple-700  w-[80vw] sm:w-[40vw] md:w-[36vw] lg:w-[23vw] h-11 rounded-sm  border-2 border-gray-200 ' type="text" name="Phone Number" id="phone num" />
      </div>
      <div className='flex flex-col mx-8 pb-4 ml-4  '>
       <label className='text-sm mb-[4px] opacity-75' htmlFor="name"> Link to your resume </label>
       <input className=' outline-purple-700  w-[80vw] md:w-[36vw] sm:w-[40vw] lg:w-[23vw] h-11 rounded-sm  border-2 border-gray-200 ' type="text" name="Link to your resume" id="link" />
      </div>
      <div className='mx-8 mt-4  '>
       <h1 className='font-medium '>Skill</h1>
      <div className='flex justify-between mt-4 lg:mt-0 text-xs lg:text-base ' >
        <div className='flex flex-col lg:ml-2 lg:mt-1  '>
          <label className='mb-1 opacity-85' htmlFor="Subtitle Writer">
            <input className='mr-1'type="radio" name="role"id="subtitleWriter" />
            Subtitle Writer
          </label>
          <label className='mb-1 opacity-85' htmlFor="Content Writer">
            <input className='mr-1'type="radio"name="role"id="contentWriter" />
            Content Writer
          </label>

          <label className='mb-1 opacity-85' htmlFor="Video Editor">
            <input className='mr-1'type="radio"name="role"id="videoEditor" />
            Video Editor
          </label>

          <label className='mb-1 opacity-85' htmlFor="MERN Dev">
            <input  className='mr-1'type="radio"name="role"id="mernDev" />
            MERN Dev
          </label>
        </div>

        <div className='flex flex-col lg:mr-7 lg:mt-1  ' >
        <label className='mb-1 opacity-85' htmlFor="Python Dev">
            <input 
            className='mr-1'type="radio"name="role"id="pythonDev" />
            Python Dev
          </label>
          <label className='mb-1 opacity-85' htmlFor="PHP Dev">
            <input className='mr-1' type="radio" name="role"id="phpDev" />
            PHP Dev
          </label>

          <label className='mb-1 opacity-85' htmlFor="JavaScript Dev">
            <input className='mr-1'type="radio"name="role"id="javaScriptDev" />
            JavaScript Dev
          </label>

          <label className='mb-1 opacity-85' htmlFor="Java Dev">
            <input  className='mr-1'type="radio"name="role"id="javaDev" />
            Java Dev
          </label>
        </div>
      </div>
      </div>
      <div className='mx-8 mt-8' >
       <button className='bg-purple-700 p-2 w-[122px] text-white  text-lg rounded-[6px] '>
         Submit
       </button>
       </div>
        </form>
      </div>
      </div>
    </>
  )
}

export default WorkWithUs