import React from 'react'

function Card({ cardImage,cardCourseName ,cardCourseData}) {
  return (
    <>
       <div className=' relative shadow-lg shadow-white-500/50 lg:h-[84vh] lg:w-[24vw] h-[82vh] w-[84vw] md:h-[80vh] md:w-[50vw] sm:h-[80vh] sm:w-[60vw] rounded-xl my-4 mx-2 dark:bg-[#1E293B] '>
           <img  className='  h-[26vh] w-full rounded-t-xl relative' src={cardImage} alt="card-img" />
           <p className='font-semibold mx-4 my-1  opacity-75'>FREE COURCES</p>
           <h1 className='text-[20px] font-[450] tracking-tight mx-4 my-2'>{cardCourseName}</h1>
           <p className='mx-4 my-1 text-[16px] sm:text-[18.5px]'>
            {cardCourseData}
           </p>
           <button className='bg-[#9333EA]  py-2 px-3 text-white rounded-xl font-semibold  absolute bottom-4 mx-5 '>Start Watching</button>
       </div>
    </>
  )
}

export default Card