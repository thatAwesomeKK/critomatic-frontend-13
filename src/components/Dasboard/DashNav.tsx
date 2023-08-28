import React from "react";
import { BiBookOpen, BiPencil } from "react-icons/bi";
import { AiOutlineUserAdd } from "react-icons/ai";
import Link from "next/link";


const DashNav = () => {
    return (
        <div className='grid grid-rows-8 h-[40vh] mx-auto max-w-7xl'>
            <div className='grid grid-cols-7 my-7 row-start-1 row-span-3'>
                <Link href={'/dashboard/profile'} className='group col-start-2 col-span-2 relative flex flex-wrap justify-center items-center bg-white rounded-lg shadow-lg h-auto shadow-black transition-all duration-100 ease-in-out hover:scale-105 cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <AiOutlineUserAdd className='absolute h-14 w-14 text-white top-2 left-2' />
                    <h2 className='md:text-4xl text-2xl font-medium group-hover:font-bold text-black'>Profile</h2>
                </Link>
                <Link href={'/dashboard/reviews'} className='group col-start-5 col-span-2 relative flex justify-center items-center rounded-lg shadow-lg shadow-black transition-all duration-100 ease-in-out hover:scale-105 cursor-pointer bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                    <BiBookOpen className='absolute h-14 w-14 text-white top-2 left-2' />
                    <BiPencil className='absolute h-10 w-10 text-black top-1 left-7' />
                    <h2 className='md:text-4xl text-2xl font-medium group-hover:font-bold text-black'>Reviews</h2>
                </Link>
            </div>
        </div>
    )
}

export default DashNav