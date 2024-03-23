import React from 'react';
import { FaMapSigns, FaUserCircle } from 'react-icons/fa';
import { ImMenu } from 'react-icons/im';
import logo from "../assets/logo.png";
import { IoSearchCircle } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="border-b flex justify-between bg-black p-4">
            {/* Left (Empty placeholder) */}
            <div></div>
            {/* Middle */}
            <div className="flex items-center relative">
                <div className="absolute inset rounded-full mr-0.2 ">
                    <IoSearchCircle className="text-transparent-100 h-10 w-10" />
                </div>

                <input type="text" placeholder="Search (e.g., address, zip...)" className="bg-gray-200 text-gray-700 placeholder-opacity-50 rounded-full pl-10 pr-30 py-2 shadow-inner focus:outline-none focus:ring focus:border-yellow-300 w-full" />
                <button className=" absolute right-2 bg-yellow-400 hover:bg-yellow-600 text-black px-2 py-2 rounded-full shadow-md">Find Chargers Near Me</button>
            
            </div>
            {/* Right */}
            <div className="flex items-center pr-3">
                <button className="bg-yellow-400 hover:bg-yellow-600 text-black px-4 py-2 rounded-full shadow-md">Register My Charger</button>
                <div className="bg-black rounded-full p-5 mr-2" >
                    <FaMapSigns className="ml-4 text-white mr-2" />
                </div>
                <div className="ml-30 bg-black rounded-full p-1 border-white border">
                    <div className="flex items-center">
                        <ImMenu className="text-white h-50" />
                        <FaUserCircle className="ml-4 text-white h-50 " />
                    </div>
                </div>
                <div className="ml-4 flex items-center bg-black rounded-full p-2">
                    <img src={logo} className="object-cover h-16" alt="Logo" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
