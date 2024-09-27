import React from 'react'
import { PiQuotesDuotone } from "react-icons/pi";

function TestimonialData({testiContent,testiDevName}) {
  return (
  <>
   <div className='w-[90vw] lg:w-[46vw] lg:h-[46vh] h-auto mb-7 pb-6 lg:mb-0 bg-gray-100  dark:bg-[#374151]  rounded-md'>
       <PiQuotesDuotone className='mx-8 text-lg my-4 text-gray-400'/>
       <p className=' opacity-75 text-lg px-6  '>{testiContent}</p>
       <h2 className='pl-8 font-medium my-2'>{testiDevName}</h2>
       <span className=' text-sm pl-8 mt-4 opacity-75'>Web Develpor</span>
   </div>
  </>
  )
}

export default TestimonialData;