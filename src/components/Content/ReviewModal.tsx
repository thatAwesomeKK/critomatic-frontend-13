'use client'
import React, { useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import ReviewForm from '../Forms/ReviewForm'
import Providers from '@/app/(Providers)/Providers'

function ReviewModal({ contentID, slug }: any) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="text-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <h2 className="text-sm font-semibold text-gray-400">
                    Give RATING
                </h2>
                <div className="flex justify-center items-center">
                    <AiOutlineStar className="h-8 w-8" />
                </div>
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} slug={slug} contentID={contentID} />
        </>
    )

}

const Modal = ({ isOpen, setIsOpen, slug, contentID }: any) => {

    return (
        <dialog id="my_modal_1" className={`modal ${isOpen ? "modal-open" : ""}`}>
            <Providers>
                <ReviewForm setIsOpen={setIsOpen} slug={slug} contentID={contentID} />
            </Providers>
        </dialog>
    )
}

export default ReviewModal