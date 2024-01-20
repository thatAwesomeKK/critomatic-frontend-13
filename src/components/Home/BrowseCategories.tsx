import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const hostname = process.env.NEXT_PUBLIC_API_IP_ADDRESS

async function BrowseCategories() {
    const categories = await fetch(`${hostname}/api/getcontent/get-category-image`).then(res => res.json())
    const getAnImageMovie = () => {
        let image: string = categories.movie[Math.floor(Math.random() * categories.movie.length)];
        return image
    }

    const getAnImageShow = () => {
        let image: string = categories.show[Math.floor(Math.random() * categories.show.length)];
        return image
    }

    return (
        <section className='text-center'>
            <div className='container mx-auto px-5 py-10'>
                {/* Heading for the Component */}
                <h1 className='font-bold text-5xl mb-5 underline'>Browse Categories</h1>
                {/* making the div flexbox and putting everything in center */}
                <div className='flex flex-wrap justify-center items-center'>
                    <Link href={"/browse/movies"} className="p-4 relative flex justify-center items-center transition-transform duration-150 ease-in-out hover:scale-105 cursor-pointer group">
                        {/* This is the Actual Card being shown */}
                        <p className='absolute text-center z-10 font-bold text-5xl transition-transform duration-100 ease-in-out group-hover:scale-0'>Movies</p>
                        <Image className='rounded-2xl opacity-60 group-hover:opacity-100' src={getAnImageMovie()} alt="" height={550} width={390} />
                    </Link>
                    <Link href={"/browse/shows"} className="p-4 relative flex justify-center items-center transition-transform duration-150 ease-in-out hover:scale-105 group cursor-pointer">
                        {/* This is the Actual Card being shown */}
                        <p className='absolute text-center z-10 font-bold text-5xl transition-transform duration-100 ease-in-out group-hover:scale-0'>Tv Shows</p>
                        <Image className='rounded-2xl opacity-60 group-hover:opacity-100' src={getAnImageShow()} alt="" height={550} width={390} />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BrowseCategories