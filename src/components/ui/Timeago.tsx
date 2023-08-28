'use client'
import React from 'react'
import ReactTimeago from 'react-timeago'

function Timeago({ createdAt }: any) {
    return (
        <ReactTimeago
            className="font-light text-gray-400"
            date={createdAt}
        />
    )
}

export default Timeago