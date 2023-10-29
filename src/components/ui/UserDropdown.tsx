'use client'
import { useAppSelector } from '@/utils/redux/store'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiLogOut, BiLogIn } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi'
const hostname = process.env.NEXT_PUBLIC_API_IP_ADDRESS

type User = {
  email: string
  pfp: string
  role: string
  username: string
  _id: string
}

function UserDropdown() {
  const accessToken = useAppSelector((state) => state.accessToken.token)
  const [user, setUser] = useState<User | null>(null)

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
      setUser(res.user)
    }
    fetchUser()
  }, [])

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div onClick={() => setIsOpen(!isOpen)} className="relative h-12 w-12 cursor-pointer">
      <Image
        src={user?.pfp || "https://links.papareact.com/gll"}
        alt=""
        className='absolute object-cover rounded-full bg-yellow'
        fill
      />
      <menu className='absolute top-14 right-3'>
        {isOpen && <div className="animate-fadeIn"><DropDown user={user!} /></div>}
      </menu>
    </div>
  )
}

const DropDown = ({ user }: { user: User }) => {
  const logout = async () => {
    const res = await fetch(`${hostname}/api/auth/logout`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
    console.log(res)
    window.location.reload()
  }
  return (
    <div className='shadow-xl bg-white rounded-lg space-y-2 py-2'>
      {user ? <div onClick={() => logout()}> <DropdownItem Icon={BiLogOut} menuName={"Sign Out"} /></div> :
        <Link href={"/auth/register"}>
          <DropdownItem Icon={BiLogIn} menuName={"Sign In"} />
        </Link>}
      {user && <Link href={"/dashboard/profile"}>
        <DropdownItem Icon={BiUser} menuName={"Dashboard"} />
      </Link>}
    </div>)
}

const DropdownItem = ({ Icon, menuName }: any) => (
  <div className='bg-white px-3 py-2 flex items-center space-x-2 group hover:bg-gray-100 w-72 rounded-lg h-12'>
    <Icon className="h-7 w-7 group-hover:animate-bounce" />
    <p className='text-lg font-semibold group-hover:font-bold'>{menuName}</p>
  </div>
)

export default UserDropdown