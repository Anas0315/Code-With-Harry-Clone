import {useState} from 'react'
import { AiFillHome } from "react-icons/ai";
import { HiSearch } from "react-icons/hi";
import {Link} from 'react-router-dom'
function SecondNavbar() {
  const [click,setclick] = useState(false);
  const toggleClick = () => {
    setclick(!click);
  };
  return (
    <>
   <div className=" h-12 flex justify-between items-center  shadow-white-500/50  shadow-lg w-full dark:bg-[#1F2937]">

    <div className="home ml-8 text-purple-600  dark:text-[#D8B4FE] font-bold  text-xl cursor-pointer ">
      <Link
       to={'/'}  >
    <AiFillHome/>
    </Link>
    </div>
    <div className="hidden md:block">
      <ul className=' flex justify-center items-center  dark:text-[#D8B4FE] text-purple-700     font-bold  cursor-pointer' >
        <li  className='py-2 px-4 hover:border-b-2 hover:border-[#7E22CE]  hover:translate-y-[-2px]' >HTML</li>
        <li className='py-2  px-4 hover:border-b-2 hover:border-[#7E22CE]  hover:translate-y-[-2px]'>CSS</li>
        <li className='py-2 px-4 hover:border-b-2 hover:border-[#7E22CE]  hover:translate-y-[-2px]'>JAVA</li>
        <li className='py-2 px-4 hover:border-b-2 hover:border-[#7E22CE]  hover:translate-y-[-2px]'>C++</li>
        <li className='py-2 px-4 hover:border-b-2 hover:border-[#7E22CE]  hover:translate-y-[-2px]'>JS</li>
        <li className='py-2 px-4 hover:border-b-2 hover:border-[#7E22CE]  hover:translate-y-[-2px]'>C</li>
        <li className='py-2 px-4 hover:border-b-2 hover:border-[#7E22CE]  hover:translate-y-[-2px]'>REACT JS</li>
        <li className='py-2 px-4 hover:border-b-2 hover:border-[#7E22CE]  hover:translate-y-[-2px]'>PYTHON</li>
        <li className='py-2 px-4 hover:border-b-2 hover:border-[#7E22CE]  hover:translate-y-[-2px]'>PHP</li>
      </ul>
    </div>
    <div className=" flex  relative  text-xl  dark:text-[#D8B4FE] text-purple-700 mr-4 bg  items-center">
      {click &&(
         <div>
         <input className='w-[220px]   outline-none rounded-sm dark:bg-[#6B7280] outline-[#A855F7]  ' type="text" placeholder='Search...' />
       </div>
      )}
    <HiSearch 
    onClick={toggleClick}
    className='absolute right-2 cursor-pointer' />
    </div>
   </div>
    </>
  )
}

export default SecondNavbar;