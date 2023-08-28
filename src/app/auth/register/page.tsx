import React from 'react'
import Link from 'next/link';
import RegisterForm from '@/components/Forms/RegisterForm';

function Register() {
    return (
        <div className="flex flex-col justify-center items-center h-[90vh] mx-5">
            <div className="mb-16">
                <h1 className="font-bold text-4xl">Sign Up for an Account</h1>
                <div className="flex items-center justify-center space-x-2">
                    <p className="text-center">Already a User?</p>
                    <Link passHref href={"/auth/login"}>
                        <p className="cursor-pointer text-cyan-500">
                            Log In
                        </p>
                    </Link>
                </div>
            </div>
            <div className="bg-white p-10 rounded-2xl w-full max-w-xl">
                <RegisterForm />
            </div>
        </div>
    )
}

export default Register