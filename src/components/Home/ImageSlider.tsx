import React from 'react'
import ImageSliderComp from '../ui/ImageSliderComp';
const hostname = process.env.NEXT_PUBLIC_API_IP_ADDRESS

async function ImageSlider() {
    const images = await fetch(`${hostname}/api/getcontent/get-slider-image`).then(response => response.json())

    return (
        <section>
            {images && <ImageSliderComp images={images} />}</section>
    )
}

export default ImageSlider