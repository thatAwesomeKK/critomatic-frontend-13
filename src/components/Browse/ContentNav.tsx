'use client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

function ContentNav() {
    const router = useRouter()
    const pathname = usePathname()
    if (pathname.includes("movies/") || pathname.includes("shows/")) {
        return <></>
    }
    return (
        <div className='flex px-10 py-2 sm:px-20 text-xl space-x-10 sm:space-x-20 whitespace-nowrap overflow-x-scroll scrollbar-hide'>
            <h2 onClick={() => router.push(`/browse/movies`)} className='transition-transform duration-100 hover:scale-125 hover:text-white active:text-red-500 cursor-pointer'>Movies</h2>
            <h2 onClick={() => router.push(`/browse/shows`)} className='transition-transform duration-100 hover:scale-125 hover:text-white active:text-red-500 cursor-pointer'>Shows</h2>
        </div>
    )
}

export default ContentNav