import { store } from '@/utils/redux/store';
import React from 'react'
import ReviewCard from './ReviewCard';
const hostname = process.env.NEXT_PUBLIC_API_IP_ADDRESS

async function Reviews() {
    const accessToken = store.getState().accessToken.token

    const res = await fetch(`${hostname}/api/fetchprofile/get-ratings`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
            "x-access-token": accessToken!
        },
    }).then(res => res.json());

    const movieReviews = res.movieRatings
    const showReviews = res.showRatings

    return (
        <section className='flex space-x-5 px-4 overflow-hidden h-[50vh]'>
            <div className='flex-1'>
            <h4 className='text-4xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 py-2 rounded-md px-4'>Movies</h4>
                <div className='h-full pb-20 overflow-y-scroll scrollbar-hide'>
                    {showReviews.map((review: any, id: any) => (
                        <ReviewCard contentType={"shows"} key={id} review={review} />
                    ))}
                </div>
            </div>
            <div className='flex-1'>
            <h4 className='text-4xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 py-2 rounded-md px-4'>Shows</h4>
                <div className='h-full pb-20 overflow-y-scroll scrollbar-hide'>
                    {movieReviews.map((review: any, id: any) => (
                        <ReviewCard contentType={"movies"} key={id} review={review} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Reviews