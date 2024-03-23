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
                <div className="absolute inset-3 right-1 inset-y-0 left-0.5 flex items-center text-gray-400">
                    <IoSearchCircle className="text-black hover:text-gray-800 h-10 w-10" />
                    <span className="ml-2">Search (e.g., address, zip...)</span>
                </div>

                <input type="text" placeholder="" className="bg-gray-200 text-gray-700 placeholder-opacity-100 rounded-full pl-12 pr-20 py-2 shadow-inner focus:outline-none focus:ring focus:border-yellow-300 w-96" />
                <button className="absolute right-0.5 bg-yellow-400 hover:bg-yellow-600 text-black px-2 py-2 rounded-full shadow-md">Find Charger Near Me</button>
            
            </div>
            {/* Right */}
            <div className="flex items-center pr-3">
                <button className="bg-yellow-400 hover:bg-yellow-600 text-black px-4 py-2 rounded-full shadow-md">Register My Charger</button>
                <div className="bg-black rounded-full p-5 mr-2" >
                    <FaMapSigns className="ml-4 text-white mr-2 hover:text-slate-700" />
                </div>
                <div className="ml-30 bg-black rounded-full p-1 border-white border">
                    <div className="flex items-center">
                        <ImMenu className="text-white h-50 hover:text-gray-700" />
                        <FaUserCircle className="ml-4 text-white h-50 hover:text-slate-600 " />
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
