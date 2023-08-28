import Providers from '@/app/(Providers)/Providers';
import LoginForm from '@/components/Forms/LoginForm';
import Link from 'next/link';
import React from 'react'

function Login() {
    return (
        <div className="flex flex-col justify-center items-center h-[90vh] mx-5">
            <div className="mb-16">
                <h1 className="font-bold text-4xl">Sign In to Your Account</h1>
                <div className="flex items-center justify-center space-x-2">
                    <p className="text-center">Or</p>
                    <Link passHref href={"/auth/register"}>
                        <p className="cursor-pointer text-cyan-500">
                            Sign Up for an Account
                        </p>
                    </Link>
                </div>
            </div>
            <div className="bg-white p-10 rounded-2xl w-full max-w-xl">
                <Providers>
                    <LoginForm />
                </Providers>
            </div>
        </div>
    );
}

export default Login