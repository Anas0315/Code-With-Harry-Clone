import React from 'react'
import TestimonialData from '../TestimonialData/TestimonialData'
function TestimonialPage({testiData}) {
  return (
    <>
     <h1 className='text-center dark:text-[#7E22CE] text-3xl font-semibold m-6'>Testimonial</h1>
    <div className='flex justify-evenly items-center flex-wrap'>
     {testiData.map((data,index) => (<TestimonialData key={index} testiContent = {data.content}  testiDevName = {data.devName} />))}
     </div>
     
   
    </>
  )
}

export default TestimonialPage
