import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Contact() {
  return (
  <div className=' w-[100vw] lg:w-[80vw] lg:h-[54vh] h-[60vh]  m-auto rounded-xl  my-20 bg-[#F3F4F6]  dark:bg-[#1E293B]'>
     <div className='flex flex-col justify-center items-center'>
        <h1 className='text-3xl text-center lg:text-start opacity-90 font-[600] mt-10 mb-8 ' >Feel free to contact me!</h1>
        <img src="https://www.codewithharry.com/img/logo-blue.png" alt="" />
        <div className=' text-4xl mt-6 flex justify-center items-center  gap-10' >
    <RiFacebookFill />
    <FaTwitter />
    <FaInstagram />
    <FaGithub />
    </div>
     </div>
  </div>
  )
}

export default Contact;