'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { alertCall } from '@/utils/toast/alertCall'
import PfpHolder from '../ui/PfpHolder'

const hostname = process.env.NEXT_PUBLIC_API_IP_ADDRESS

type User = {
    email: string
    pfp: string
    role: string
    username: string
    _id: string
}

interface Props {
    user: User
    accessToken: string
}

function ProfileUpdateForm({ user, accessToken }: Props) {
    const { register, handleSubmit, setValue } = useForm()
    const [profileImg, setProfileImg] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [initialPfp, setInitialPfp] = useState<string | null | undefined>('')

    useEffect(() => {
        if (user) {
            setInitialPfp(user.pfp)
            setValue('username', user.username)
        }
    }, [user])


    //Picking Up From system and adding to UploadRingImage State
    const addImageToUpload = (e: any) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            setProfileImg(readerEvent.target?.result! as string);
        };
    };


    const onSubmit = async (data: any) => {
        const id = toast.loading("Please wait...")
        setLoading(true)

        const payload = await fetch(`${hostname}/api/auth/update-user`, {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": accessToken!
            },
            body: JSON.stringify({
                pfp: profileImg,
                username: data.username,
            }),
        }).then((res) => res.json());

        setLoading(false)

        if (payload.success) {
            alertCall("update_success", payload.message, id);
        } else {
            alertCall("update_error", payload.error, id);
        }
    }

    return (
        <>
            <PfpHolder addImageToUpload={addImageToUpload} pfp={initialPfp} setInitialPfp={setInitialPfp} profileImg={profileImg} />
            <form className="flex flex-col justify-center items-center max-w-lg mx-auto py-4 px-8 bg-[rgb(7,38,49)] rounded-lg mt-3" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col w-full my-2">
                    <label className="text-xl font-medium" htmlFor="email">Email</label>
                    {user && <label className="text-lg">{user.email}</label>}
                </div>
                <div className="flex flex-col w-full my-2">
                    <label className="text-xl font-medium" htmlFor="username">Username</label>
                    <input {...register("username")} className="py-2 px-3 text-black placeholder:text-gray-400 rounded-lg" name="username" type="text" placeholder="Username" />
                </div>
                <button disabled={loading} type="submit" className="my-8 disabled:opacity-50 py-2 px-3 border-2 rounded-lg bg-white text-black w-full transition-all duration-100 ease-in-out hover:scale-105 text-xl font-bold">Update!</button>
            </form>
        </>
    )
}

export default ProfileUpdateForm