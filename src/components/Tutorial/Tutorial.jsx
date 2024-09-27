import React from 'react'

function Tutorial({tutImage,tutName}) {
  return (
    <>
    <div className=' rounded-xl w-[70vw] sm:w-[30vw] lg:w-[24vw]  h-[44vh] bg-white shadow-lg shadow-white-700/50 flex flex-col justify-center items-center mb-10 dark:bg-[#1E293B] md:mx-1 sm:mx-1'>
        <div className=''>
             <img className='object-cover lg:w-[10vw] sm:w-[12vw] w-[25vw]' src={tutImage} alt="" />
        </div>
        <h1 className='mt-4  font-medium text-xl text-center'>{tutName}</h1>
        <button className='bg-purple-700 mt-4  text-white h-10  p-2  rounded-3xl font-medium m-1  ' >Start Learning</button>
    </div>
    </>
  )
}

export default Tutorial;