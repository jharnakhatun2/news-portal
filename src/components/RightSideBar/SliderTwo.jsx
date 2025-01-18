import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperReuse from "../../util/Swiper/SwiperReuse";

const sliderData = [
    {
        'id': '1',
        'author': 'David French',
        'title': 'MAGA Is Misreading Its Mandate',
        'read': '9 min read'
    },
    {
        'id': '2',
        'author': 'Jordan Thomas',
        'title': 'Megafires Are a Choice',
        'read': '4 min read'
    },
    {
        'id': '3',
        'author': 'Bret Stephens',
        'title': 'The Israeli Right May Soon Be Disenchanted With Trump',
        'read': '6 min read'
    },
    {
        'id': '4',
        'author': 'Elie Honig',
        'title': 'The Perplexing Case of Pam Bondi',
        'read': '4 min read'
    },
]

const SliderTwo = () => {
   

    return (
        <SwiperReuse data={sliderData} slidesPerView={2}>
            {(item) => (
                <div>
                 <p className="uppercase text-gray-600 text-xs">{item.author}</p>
                 <h2 className="font-oswald text-black text-md hover:text-gray-600">{item.title}</h2>                     
                 <small className="uppercase text-xs text-gray-600">{item.read}</small>   
                </div>
            )}
        </SwiperReuse>
    );
};

export default SliderTwo;
