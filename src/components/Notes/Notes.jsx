import React from 'react'

function Notes({tutImage,tutName}) {
  return (
    <>
   <div className=' rounded-xl w-[80vw] md:w-[28vw] lg:w-[24vw] sm:w-[50vw] h-[55vh] lg:h-[44vh] bg-white shadow-lg shadow-white-700/50 flex flex-col justify-center items-center mb-10  dark:bg-[#1E293B]'>
             <img className='object-cover w-[25vw] sm:w-[18vw] lg:w-[6vw]' src={tutImage} alt="" />
        <h1 className='mt-4  font-medium text-xl text-center'>{tutName}</h1>
        <span className='text-base opacity-80 text-center'> Download Notes Here</span> 
        <div  className='flex flex-col justify-center items-center mt-2'>
        <button className='bg-purple-700   text-white h-10    rounded-3xl font-medium w-[46vw] lg:w-[11vw] md:w-[22vw] sm:w-[30vw] text-base ' >PDF Notes</button>
        <button className='bg-purple-700 my-2  text-white h-10   rounded-3xl font-medium w-[46vw] md:w-[22vw] lg:w-[12vw] sm:w-[30vw]  text-base ' >Chapterwise Notes</button>
        </div>
    </div>
    </>
  )
}

export default Notes;