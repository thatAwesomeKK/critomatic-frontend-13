"use client";
import { signIn } from "@/utils/apiCalls/auth";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface userData {
  email: string;
  password: string;
}

function LoginForm() {
  const { register, handleSubmit } = useForm<userData>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<userData> = async (data) => {
    setLoading(true);
    await signIn(data);
    setLoading(false);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="flex flex-col space-y-1 mt-3">
        <label className="text-black font-semibold text-lg" htmlFor="email">
          Email
        </label>
        <input
          {...register("email", { required: true })}
          className="rounded-lg text-black outline-none py-2 px-2 border-2 border-gray-300"
          type="email"
          name="email"
        />
      </div>
      <div className="flex flex-col space-y-1 mt-3">
        <label className="text-black font-semibold text-lg" htmlFor="password">
          Password
        </label>
        <input
          {...register("password", { required: true })}
          className="rounded-lg text-black outline-none py-2 px-2 border-2 border-gray-300"
          type="password"
          name="password"
        />
      </div>
      <div className="mt-10">
        <button
          disabled={loading}
          type="submit"
          className="disabled:opacity-40 w-full bg-orange-400 py-3 rounded-lg text-lg text-black font-semibold hover:bg-orange-300 active:bg-orange-100"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
