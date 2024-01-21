import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoSearchCircleOutline } from "react-icons/io5";
import UserDropdown from "./ui/UserDropdown";
import Providers from "@/app/(Providers)/Providers";
import { cookies } from "next/headers";
import { fetchUser } from "@/utils/apiCalls/profile";

async function Navbar() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken")?.value as string;
  const user = await fetchUser(accessToken!);
  return (
    <header className="text-gray-600 body-font shadow-lg sticky top-0 z-20 bg-[#06202A]">
      <div className="container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center">
        <Link passHref href={"/"}>
          <div className="relative h-16 w-24 cursor-pointer hover:opacity-90">
            <Image
              className="object-cover"
              priority
              src={"/logo2.png"}
              alt=""
              fill
            />
          </div>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <ul className="flex items-center space-x-5 font-semibold text-lg">
            <Link href={"/about"}>
              <li className="hover:text-slate-400">About</li>
            </Link>
            <Link href={"/contact"}>
              <li className="hover:text-slate-400">Contact</li>
            </Link>
            <Link href={"/browse/movies"}>
              <li className="hover:text-slate-400">Browse</li>
            </Link>
          </ul>
        </nav>
        <div className="absolute right-0 mx-5">
          <div className="flex items-center space-x-4">
            <div className="items-center bg-white lg:flex hidden rounded-lg overflow-hidden px-2 active:text-gray-400">
              <input
                className="text-base px-3 bg-white py-2 outline-none placeholder:text-sm"
                type="text"
                placeholder="What's on Mind..?"
              />
              <IoSearchCircleOutline className="h-7 cursor-pointer" />
            </div>
            <UserDropdown user={user} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
