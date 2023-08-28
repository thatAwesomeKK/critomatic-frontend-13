'use client'
import { useAppSelector } from '@/utils/redux/store';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
const hostname = process.env.NEXT_PUBLIC_API_IP_ADDRESS

interface ModalOptions {
    rating: string
    review: string
}

function ReviewForm({ setIsOpen, slug, contentID }: any) {
    const { register, handleSubmit } = useForm<ModalOptions>();

    const accessToken = useAppSelector((state) => state.accessToken.token)

    const onSubmit: SubmitHandler<ModalOptions> = async (data) => {
        const res = await fetch(`${hostname}/api/addrating/add?slug=${slug}`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "x-access-token": accessToken!
            },
            body: JSON.stringify({ contentID, rating: data.rating, review: data.review })
        }).then(res => res.json());
        console.log(res);
        // await addRating(user, data, movieID, showID)
        setIsOpen(false)
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col bg-white p-10 w-[50vh] rounded-2xl"
        >
            <button className='text-black text-end' onClick={() => setIsOpen(false)}>X</button>
            <div className="flex flex-col my-2">
                <label className="text-gray-700 text-lg" htmlFor="rating">
                    Rating
                </label>
                <input
                    {...register("rating", { required: true })}
                    className="p-2 outline-none border-2 focus:border-cyan-500 rounded-lg text-black"
                    type="number"
                    min="0"
                    max="10"
                    step="0.1"
                    name="rating"
                />
            </div>
            <div className="flex flex-col">
                <label className="text-gray-700 text-lg" htmlFor="review">
                    Review
                </label>
                <textarea
                    {...register("review", { required: true })}
                    className="p-2 outline-none border-2 focus:border-cyan-500 rounded-lg text-black"
                    name="review"
                    rows={4}
                />
            </div>
            <div className="w-full mt-6 flex justify-center">
                <button
                    type="submit"
                    className="w-[97%] justify-center rounded-md border border-transparent bg-blue-100 px-4 py-3 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none"
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default ReviewForm