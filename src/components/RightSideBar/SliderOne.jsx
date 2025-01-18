import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperReuse from "../../util/Swiper/SwiperReuse";

const posts = [
    {
        "id": "1",
        "image": "demo-card-thumbnail.png",
        "title": "The Frankenstein Filing Error That Created a Monster Mix-Up",
        "read": "2 min read"
    },
    {
        "id": "2",
        "image": "demo-card-thumbnail.png",
        "title": "You Are Cordially Invited to Our Wedding. But Not to Our Vows.",
        "read": "4 min read"
    },
    {
        "id": "3",
        "image": "demo-card-thumbnail.png",
        "title": "The Catholic Church Must Challenge Trump on Deportations",
        "read": "3 min read"
    },
    {
        "id": "4",
        "image": "demo-card-thumbnail.png",
        "title": "Zuckerberg’s Macho Posturing Looks a Lot Like Cowardice",
        "read": "5 min read"
    }
];

const SliderOne = () => {

    return (
        <SwiperReuse data={posts} slidesPerView={2}>
            {(item)=>(
                <div>
                    <img src={item.image} alt="Slide 1" />
                     <h3 className="font-serif text-black pt-3">{item.title}</h3>
                     <small className="uppercase text-xs text-gray-600">{item.read}</small>
                </div>
            )}
        </SwiperReuse>
    );
};

export default SliderOne;
