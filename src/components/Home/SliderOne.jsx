import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const data = [
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
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    const handleSlideChange = (swiper) => {
        // Check if the swiper is at the start or end
        setIsAtStart(swiper.isBeginning);
        setIsAtEnd(swiper.isEnd);
    };

    return (
        <div className="pb-3">
            <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={2}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.update();
                }}
                onSlideChange={handleSlideChange}
            >
                {data?.map((item) => (
                    <SwiperSlide key={item.id} className="space-y-2">
                        <img src={item.image} alt="Slide 1" />
                        <h3 className="font-serif text-black">{item.title}</h3>
                        <small className="uppercase text-xs text-gray-600">{item.read}</small>
                    </SwiperSlide>
                ))}

                {/* Navigation Buttons */}
                <div className="flex gap-2 justify-end py-2">
                    {/* Prev Button */}
                    <div
                        ref={prevRef}

                        className={`w-8 h-8 border rounded-full p-1 cursor-pointer flex items-center justify-center transition-all border-gray-300 fill-gray-300  ${isAtStart && "cursor-not-allowed opacity-30"}`}
                        style={{ pointerEvents: isAtStart ? "none" : "auto" }}
                    >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#6b7280" />
                        </svg>
                    </div>

                    {/* Next Button */}
                    <div
                        ref={nextRef}

                        className={`w-8 h-8 border rounded-full p-1 cursor-pointer flex items-center justify-center transition-all border-gray-300 ${isAtEnd && "cursor-not-allowed opacity-30"}`}
                        style={{ pointerEvents: isAtEnd ? "none" : "auto" }}
                    >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#6b7280" />
                        </svg>
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default SliderOne;
