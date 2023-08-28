'use client'
import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

function ImageSliderComp({ images }: any) {
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

export default ImageSliderComp