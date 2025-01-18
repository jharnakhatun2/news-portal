import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperReuse from "../../../util/Swiper/SwiperReuse";

const ImageSliderData = [
    {
        "id": "1",
        "image": "avgh.webp",
        "alter" : "Avishag Shaar-Yashuv for The New York Times"
    },
    {
        "id": "2",
        "image": "netanyahu.webp",
        "alter" : "Amir Cohen/Reuters"
    }
];

const ImageSlider = () => {
    

    return (
        <div className="max-w-xl">
        <SwiperReuse data={ImageSliderData} slidesPerView={1}>
            {(item) => (
                <div>
                    <img src={item.image} alt="Slide 1" className="w-full"/>
                     <small className="flex justify-end uppercase text-xs text-gray-600">{item.alter}</small>
                </div>
            )}
        </SwiperReuse>
        </div>
    );
};

export default ImageSlider;
