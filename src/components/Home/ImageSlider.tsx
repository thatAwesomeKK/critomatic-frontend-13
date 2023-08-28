'use client'
import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
const hostname = process.env.NEXT_PUBLIC_API_IP_ADDRESS

async function ImageSlider() {
    const images = await fetch(`${hostname}/api/getcontent/get-slider-image`).then(response => response.json())

    return (
        <SimpleImageSlider
            width={"100vw"}
            height={"60vh"}
            images={images}
            showBullets={true}
            showNavs={true}
            autoPlay={true}
            slideDuration={2}
        />
    )
}

export default ImageSlider