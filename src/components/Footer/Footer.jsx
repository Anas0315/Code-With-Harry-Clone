import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
   <>
   <div className=' h-20 md:h-56 flex justify-between items-center flex-col md:flex-row '>
    <div className='flex justify-center items-center m-4 gap-2 flex-col md:flex-row'>
      <div className='flex justify-center items-center  gap-2 '>
        <img  className='object-cover h-14' src="https://www.codewithharry.com/img/logo-blue.png" alt="" />
        <h1 className='text-xl font-medium '>CodeWithHarry</h1>
        </div>
        <p className='text-sm opacity-75' >Copyright &copy; 2024 CodeWithHarry.com</p>    
    </div>
    <div className=' opacity-45 text-xl flex justify-center items-center  m-6 my-2 gap-4' >
    <RiFacebookFill />
    <FaTwitter />
    <FaInstagram />
    <FaGithub />
    </div>
   </div>
   </>
  )
}

export default Footer