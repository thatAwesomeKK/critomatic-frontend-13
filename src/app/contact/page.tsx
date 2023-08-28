'use client'
import React from 'react'

function Contact() {
  return (
    <main className="mx-auto max-w-7xl flex flex-col justify-center items-center h-[80vh] space-y-10">
      <h1 className="text-5xl font-extrabold">Contact Us</h1>
      <form className="bg-gray-300 w-1/2 py-5 px-10 rounded-lg shadow-xl shadow-black">
        <div className="flex flex-col space-y-2 my-2">
          <label
            className="text-gray-700 text-xl font-semibold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            className="shadow appearance-none border focus:outline-cyan-300 rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:shadow-outline"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col space-y-2 my-2">
          <label
            className="text-gray-700 text-xl font-semibold"
            htmlFor="textarea"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border border-black-500 rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-cyan-300 focus:shadow-outline"
            id="textarea"
            rows={10}
            placeholder="Write Here.."
          />
        </div>
        <div className="flex items-center justify-center ">
          <button
            className="bg-orange-400 hover:bg-white text-white hover:text-orange-400 font-medium py-3 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-100 ease-in-out hover:scale-105 hover:font-bold text-lg w-3/4 mt-3"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  )
}

export default Contact