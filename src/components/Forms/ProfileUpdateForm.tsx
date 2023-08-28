'use client'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Filepond from '../ui/Filepond'
import { useAppSelector } from '@/utils/redux/store'
const hostname = process.env.NEXT_PUBLIC_API_IP_ADDRESS

type User = {
    email: string
    pfp: string
    role: string
    username: string
    _id: string
}

function ProfileUpdateForm() {
    const { register, handleSubmit, setValue } = useForm()
    const [base64, setBase64] = useState('')
    const [profile, setProfile] = useState<User | null>()
    const [loading, setLoading] = useState(false)

    const accessToken = useAppSelector((state) => state.accessToken.token)

    useEffect(() => {
        const fetchUser = async () => {
            const user = await fetch(`${hostname}/api/fetchprofile/get-profile`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": accessToken!
                }
            })
            const res = await user.json()
            setProfile(res.user)
        }
        fetchUser()
    }, [])

    const onSubmit = async (data: any) => {
        setLoading(true)
        const res = await fetch(`${hostname}/api/auth/update-user`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "x-access-token": accessToken!
            },
            body: JSON.stringify({ pfpBase64: base64, username: data.username })
        })
        console.log(res);
        setLoading(false)
        // router.reload(window.location.pathname)
    }

    return (
        <>
            <Filepond setBase64={setBase64} profile={profile} />
            <form className="flex flex-col justify-center items-center max-w-lg mx-auto py-4 px-8 bg-[rgb(7,38,49)] rounded-lg" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col w-full my-2">
                    <label className="text-xl font-medium" htmlFor="email">Email</label>
                    {profile && <label className="text-lg">{profile?.email}</label>}
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