'use client'
import { useAppSelector } from '@/utils/redux/store'
import React from 'react'
import { IoTrashBin } from 'react-icons/io5'
const hostname = process.env.NEXT_PUBLIC_API_IP_ADDRESS

function DelButton({ contentType, ratingID }: any) {
    const accessToken = useAppSelector((state) => state.accessToken.token)

    const delRating = async () => {
        const res = await fetch(`${hostname}/api/addrating/del-rating`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', "x-access-token": accessToken! },
            credentials: 'include',
            body: JSON.stringify({ contentType, ratingID })
        }).then(res => res.json());
        console.log(res);
    }

    return (
        <IoTrashBin onClick={() => delRating()} className='h-6 w-6 absolute top-2 right-2 text-red-600 cursor-pointer' />
    )
}

export default DelButton