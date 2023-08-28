/* eslint-disable react/display-name */
import React from 'react'
import Image from 'next/image'

const ContentCard = ({ content }: any) => {
    return (
        <div className='group cursor-pointer p-2 transition duration-200 ease-in-out transform sm:hover:scale-105 hover:z-50'>
            <Image
                layout='responsive'
                src={`https://image.tmdb.org/t/p/w500${content.bgimg}`}
                alt=''
                height={1080}
                width={1920}
                priority
            />
            <div className='p-2'>
                <h2 className='text-2xl transition-all duration-100 group-hover:font-bold group-hover:text-white'>{content.title}</h2>
                <p className='truncate max-w-md'>{content.summary}</p>
                <p className='opacity-0 flex items-center group-hover:opacity-100'>{content.releaseDate || content.AirDate}</p>
            </div>
        </div>
    )
}

export default ContentCard