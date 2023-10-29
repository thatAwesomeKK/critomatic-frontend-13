'use client'
import Image from 'next/image'
import React, { Dispatch, RefObject, SetStateAction, useRef } from 'react'

interface Props {
    addImageToUpload: (e: any) => void
    pfp?: string | null
    setInitialPfp: Dispatch<SetStateAction<string | null | undefined>>
    profileImg: string | null
}


const PfpHolder = ({ addImageToUpload, pfp, setInitialPfp, profileImg }: Props) => {
    const uploadProfileImgRef = useRef<HTMLInputElement>(null);
    const resetPfp = () => {
        setInitialPfp(null)
    }
    return (
        <div className="flex flex-col justify-end items-center relative rounded-full overflow-hidden">
            {!profileImg && !pfp && <div className='z-10 absolute text-sm font-light flex justify-center items-center h-full'><button className='cursor-pointer' onClick={() => uploadProfileImgRef.current?.click()} >Click me to Upload</button></div>}
            {pfp && <button onClick={() => resetPfp()} className='cursor-pointer absolute z-10 bg-white rounded-full w-6 h-6 flex justify-center items-center mb-2'>X</button>}
            <div className="relative h-32 w-32 group overflow-hidden rounded-full border-2">
                <Image
                    className="object-cover rounded-full"
                    src={pfp || profileImg || ""}
                    alt=""
                    fill={true}
                />
            </div>
            <input
                ref={uploadProfileImgRef}
                hidden
                type="file"
                accept="image/x-png,image/jpeg,image/png,image/jpg"
                onChange={(e: any) => addImageToUpload(e)}
            />
        </div>
    )
}

export default PfpHolder