import React, { useState } from "react";
import SecondNavbar from "../2ndNavbar/SecondNavbar";
import { Link, } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsMoonStarsFill } from "react-icons/bs";
import useTheme from "../../Contexts/Theme";
function Navbar() {
  const [click, setClick] = useState(false);
  const {toggleTheme} = useTheme();
  const toggleMenu = () => {
    setClick(!click);
  };
  return (
    <>
      <div className=" flex items-center justify-between  h-24 dark:bg-[#1F2937] ">
        <div>
          <Link to={"/"}>
            <h1 className="p-1 lg:ml-2 lg:text-[22px]  text-lg dark:text-[#D8B4FE]  text-[#7E22CE]  font-[600]">
              &lt;/&gt; CodeWithHarry
            </h1>
          </Link>
        </div>

        <div
          onClick={toggleMenu}
          className="flex items-center font-[600]  text-lg text-[#7E22CE] lg:hidden "
        >
          <span>Menu</span>
          <TiArrowSortedDown />
        </div>

        <div className=" lg:flex justify-center item-center m-2">
          <ul className="  hidden lg:flex justify-center item-center">
            <Link to={"/"}>
              <li className="font-normal text-lg cursor-pointer p-2 hover:border-b-2 hover:border-[#7E22CE]  hover:translate-y-[-2px]  ">Home</li>
            </Link>
            <Link to={"Courses"}>
              <li className="font-normal text-lg cursor-pointer hover:border-b-2 hover:border-[#7E22CE]  hover:translate-y-[-2px]  p-2">
                Cources
              </li>
            </Link>
            <Link to={"Tutorials"}>
              <li className="font-normal  text-lg cursor-pointer hover:border-b-2 hover:border-[#7E22CE]  hover:translate-y-[-2px]  p-2 ">
                Tutorial
              </li>
            </Link>
            <Link to={"blogs"}>
              <li className="font-normal text-lg cursor-pointer hover:border-b-2 hover:border-[#7E22CE] hover:translate-y-[-2px] p-2 ">Blog</li>
            </Link>
            <Link to={"notes"}>
              <li className="font-normal text-lg cursor-pointer hover:border-b-2 hover:border-[#7E22CE] hover:translate-y-[-2px] p-2 ">Notes</li>
            </Link>
            <Link to={"contact"}>
              <li className="font-normal text-lg cursor-pointer hover:border-b-2 hover:border-[#7E22CE] hover:translate-y-[-2px] p-2 ">
                Contact
              </li>
            </Link>
            <Link to={"myGear"}>
              <li className="font-normal text-lg cursor-pointer hover:border-b-2 hover:border-[#7E22CE] hover:translate-y-[-2px] p-2 ">
                My Gear
              </li>
            </Link>
            <Link to={"workWithUs"}>
              <li className="font-normal text-lg cursor-pointer hover:border-b-2 hover:border-[#7E22CE] hover:translate-y-[-2px]  p-2">
                Work With us
              </li>
            </Link>
          </ul>
          <button
          onClick={toggleTheme}
          className="mx-2 text-purple-700 hidden lg:block dark:text-white">
          <BsMoonStarsFill size={30}  />
          </button>
          
            <button className="bg-purple-700 hover:bg-purple-600 text-white h-10  p-1 lg:p-2 rounded-lg  font-medium lg:m-1 ">LogIn</button>
            <button className="bg-purple-700 hover:bg-purple-600 text-white h-10  p-2  rounded-lg  font-medium m-1  hidden lg:block ">SignIn</button>
          <br />
        </div>
      </div>
      <hr className="opacity-40" />
      <SecondNavbar />
      {click && (
        <div className="bg-[#F1ECF8] dark:bg-[#1F2937] dark:text-white text-[#7E22CE] flex flex-col items-center justify-center text-center ">
           <button
          onClick={toggleTheme}
          className="mx-2 text-purple-700 mt-2 block lg:hidden dark:text-white ">
          <BsMoonStarsFill size={30}  />
          </button>
          <ul className="  flex flex-col justify-center item-center lg:hidden ">
            <Link to={"/"}>
              <li className="font-normal text-lg cursor-pointer p-2 ">Home</li>
            </Link>
            <Link to={"Courses"}>
              <li className="font-normal text-lg cursor-pointer  p-2">
                Cources
              </li>
            </Link>
            <Link to={"Tutorials"}>
              <li className="font-normal  text-lg cursor-pointer  p-2 ">
                Tutorial
              </li>
            </Link>
            <Link to={"blogs"}>
              <li className="font-normal text-lg cursor-pointer p-2 ">Blog</li>
            </Link>
            <Link to={"notes"}>
              <li className="font-normal text-lg cursor-pointer p-2 ">Notes</li>
            </Link>
            <Link to={"contact"}>
              <li className="font-normal text-lg cursor-pointer p-2 ">
                Contact
              </li>
            </Link>
            <Link to={"myGear"}>
              <li className="font-normal text-lg cursor-pointer p-2 ">
                My Gear
              </li>
            </Link>
            <Link to={"workWithUs"}>
              <li className="font-normal text-lg cursor-pointer  p-2">
                Work With us
              </li>
            </Link>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
