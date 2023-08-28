'use client'
import React from 'react'
import ReactPlayer from 'react-player/lazy'

interface PageProps {
    url: Array<string>
}

function TrailerPlayer({ url }: PageProps) {
    return (
        <div className='relative pt-[56.25%]'>
            <ReactPlayer
                className='absolute top-0 right-0'
                url={url.map((vid) => (vid))}
                width='100%'
                height='100%'
                controls
            />
        </div>
    )
}

export default TrailerPlayer