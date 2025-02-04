import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperReuse from "../../util/Swiper/SwiperReuse";
import { Link } from "react-router-dom";

const sliderData = [
    {
        "id": "1",
        "image" : "sliderTwo.webp",
        "author": "David French",
        "title": "MAGA Is Misreading Its Mandate",
        "readTime": "9 min read",
        "desc": "David French analyzes how the MAGA movement may be misinterpreting the public's expectations and political climate. The article delves into the ideological challenges, strategic missteps, and the potential consequences of failing to align with broader voter sentiments.",
        "published_date": "2025-01-24"
    },
    {
        "id": "2",
        "image" : "sliderTwo.webp",
        "author": "Jordan Thomas",
        "title": "Megafires Are a Choice",
        "readTime": "4 min read",
        "desc": "Jordan Thomas explores the growing frequency and intensity of megafires, arguing that they are largely a consequence of policy decisions and human negligence. The article discusses ways to mitigate wildfire risks through responsible land management and climate-conscious policies.",
        "published_date": "2025-01-24"
    },
    {
        "id": "3",
        "image" : "sliderTwo.webp",
        "author": "Bret Stephens",
        "title": "The Israeli Right May Soon Be Disenchanted With Trump",
        "readTime": "6 min read",
        "desc": "Bret Stephens examines the complex relationship between the Israeli right and former President Trump, highlighting potential areas of friction. The article explores how evolving geopolitical realities may lead to shifting alliances and recalibrated expectations within Israeli politics.",
        "published_date": "2025-01-24"
    },
    {
        "id": "4",
        "image" : "sliderTwo.webp",
        "author": "Elie Honig",
        "title": "The Perplexing Case of Pam Bondi",
        "readTime": "4 min read",
        "desc": "Elie Honig delves into the legal and political intricacies surrounding Pam Bondi, offering insights into her career, controversies, and the broader implications of her actions. The article provides a nuanced look at how her decisions have shaped public perception and legal precedent.",
        "published_date": "2025-01-24"
    }
]


const SliderTwo = () => {
   

    return (
        <SwiperReuse data={sliderData} slidesPerView={2}>
            {(item) => (
                <Link to={`/content/${item.id}`} state={{post:item}}>
                 <p className="uppercase text-gray-600 text-xs">{item.author}</p>
                 <h2 className="font-oswald text-black text-md hover:text-gray-600">{item.title}</h2>                     
                 <small className="uppercase text-xs text-gray-600">{item.readTime}</small>   
                </Link>
            )}
        </SwiperReuse>
    );
};

export default SliderTwo;
