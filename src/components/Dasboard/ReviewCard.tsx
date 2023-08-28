import React from 'react'
import { IoTrashBin } from 'react-icons/io5'
import { AiFillStar } from 'react-icons/ai'

// onClick={() => deleteReview(review._id, "movie")}

function ReviewCard({review}: any) {
    return (
        <div className='bg-[rgb(7,38,49)] my-3 py-3 px-4 rounded-lg relative' key={review._id}>
            <IoTrashBin className='h-6 w-6 absolute top-2 right-2 text-red-600 cursor-pointer' />
            <h3 className='font-semibold text-2xl'>{review.movieID?.title || review.showID?.title}</h3>
            <div className="flex items-center space-x-2">
                <AiFillStar className="h-8 w-8 text-yellow-300" />
                <p className="font-sm text-lg">
                    <span className="font-medium text-2xl text-white">
                        {review.userRating.rating}
                    </span>
                    /10
                </p>
            </div>
            <p className='text-lg font-normal my-2'>{review.userRating.review}</p>
        </div>
    )
}

export default ReviewCard