import React from 'react'
import ReviewCard from './ReviewCard'

function Reviews({ ratings }: any) {
    return <>
        <div>
            <h2 className='font-bold text-2xl text-white'>Reviews</h2>
            {ratings.map((rating: any) => (
                <ReviewCard key={rating._id} rating={rating} />
            ))}
        </div>
    </>
}

export default Reviews