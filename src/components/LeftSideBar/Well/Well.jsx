import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';

const wellData = [
    {
        id: '1',
        image: 'well1.webp',
        author: 'Getty Images',
        title: 'You Probably Aren’t Getting Enough Fiber',
        read: '4 min read'
    },
    {
        id: '2',
        image: 'well2.webp',
        author: 'Jackson Gibbs',
        title: 'How to Hit Peak Fitness After 40',
        read: '4 min read'
    },
    {
        id: '3',
        image: 'well3.webp',
        author: 'Levi Brown/Trunk Archive',
        title: 'How Healthy Is Citrus Fruit?',
        read: '4 min read'
    },
    {
        id: '4',
        image: 'well4.webp',
        author: 'Hilary Swift for The New York Times',
        title: 'How to Become a Morning Exercise Person',
        read: '5 min read'
    },
    {
        id: '5',
        image: 'well5.webp',
        author: 'Holly Stapleton',
        title: '8 Sex Myths That Experts Wish Would Go Away',
        read: '7 min read'
    }
];

const Well = () => {
    return (
        <><h2 className="font-sans text-black font-medium py-3">Well</h2>
            <Swiper
                navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                }}
                spaceBetween={20}
                modules={[Navigation]}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 5 },
                    768: { slidesPerView: 3, spaceBetween: 15 },
                    1024: { slidesPerView: 5, spaceBetween: 20 },
                }}
                className="mySwiper"
            >
                {wellData.map((item, index) => (
                    <SwiperSlide key={item.id} className={`${index !== wellData.length - 1 && 'border-r'} md:pr-4 lg:pr-5 mb-2 md:mb-5`}>
                        <div className="space-y-3 lg:space-y-2 ">
                            <div>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full object-cover rounded-md"
                                />
                                <small className="flex justify-end uppercase text-[10px] pt-1 text-gray-600">
                                    {item.author}
                                </small>
                            </div>
                            <div className="space-y-1">
                                <h2 className="text-md font-serif text-black">{item.title}</h2>
                                <small className="uppercase text-xs text-gray-600">
                                    {item.read}
                                </small>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="custom-prev cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10 shadow hover:bg-gray-300">
                    &#10094;
                </div>
                <div className="custom-next cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10 shadow hover:bg-gray-300">
                    &#10095;
                </div>
            </Swiper>
        </>
    );
};

export default Well;
