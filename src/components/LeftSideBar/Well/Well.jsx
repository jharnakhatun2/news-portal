import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";

const wellData = [
    {
      "id": "1",
      "title": "You Probably Aren’t Getting Enough Fiber",
      "long_desc": "Fiber is an essential nutrient for a healthy diet, but most people aren't consuming enough of it. In this article, experts explain the importance of fiber for digestive health, weight management, and even heart health. From fiber-rich fruits and vegetables to whole grains, this guide helps you understand the different sources of fiber and offers practical tips on how to increase your intake. It also covers the long-term benefits of fiber, including its role in preventing chronic diseases like diabetes and colon cancer, and provides insights into the recommended daily intake based on age and gender.",
      "read": "4 min read",
      "image": "well1.webp",
      "author": "Getty Images"
    },
    {
      "id": "2",
      "title": "How to Hit Peak Fitness After 40",
      "long_desc": "Turning 40 doesn’t mean the end of peak fitness—it’s actually the perfect time to re-evaluate your fitness routine and set new health goals. In this article, experts break down the changes our bodies go through after 40 and how you can still achieve peak physical fitness. From strength training and flexibility exercises to incorporating aerobic activities, this guide offers actionable advice for building a sustainable fitness plan that adapts to your changing body. Learn about the best practices for injury prevention, recovery, and maintaining mental focus as you age, along with nutrition tips to support your fitness journey.",
      "read": "4 min read",
      "image": "well2.webp",
      "author": "Jackson Gibbs"
    },
    {
      "id": "3",
      "title": "How Healthy Is Citrus Fruit?",
      "long_desc": "Citrus fruits, including oranges, lemons, limes, and grapefruits, are often hailed as health powerhouses due to their high vitamin C content. But how healthy are they really? This article explores the many health benefits of citrus fruits, from boosting immunity to improving skin health and digestion. It delves into their rich antioxidants, fiber content, and their role in disease prevention. However, it also highlights certain considerations, such as the effects of citrus fruits on dental health and the potential risks for people with certain medical conditions. Find out how to incorporate citrus into your diet for optimal health benefits.",
      "read": "4 min read",
      "image": "well3.webp",
      "author": "Levi Brown/Trunk Archive"
    },
    {
      "id": "4",
      "title": "How to Become a Morning Exercise Person",
      "long_desc": "If you're not a morning person but want to start exercising early in the day, this article provides the strategies you need to make the transition. It discusses the science behind morning workouts and their benefits, including boosting metabolism, improving mood, and setting a positive tone for the rest of the day. Experts share tips on how to gradually adjust your routine, such as starting with shorter workouts and setting clear goals. The article also covers how to optimize your morning environment, manage time effectively, and make exercise a lasting part of your morning ritual. Whether you're looking to wake up earlier or simply get more active, these tips can help you become a successful morning exerciser.",
      "read": "5 min read",
      "image": "well4.webp",
      "author": "Hilary Swift for The New York Times"
    },
    {
      "id": "5",
      "title": "8 Sex Myths That Experts Wish Would Go Away",
      "long_desc": "There are countless myths and misconceptions about sex that continue to circulate. This article debunks some of the most common and harmful myths that experts wish would disappear. From myths about sexual performance and orgasms to misunderstandings about attraction and relationships, the article offers evidence-based insights that challenge long-held beliefs. Health professionals weigh in on topics like sexual health, communication between partners, and the importance of consent and mutual respect. By busting these myths, the article aims to foster more informed and open conversations about sex, encouraging healthier relationships and better sexual well-being.",
      "read": "7 min read",
      "image": "well5.webp",
      "author": "Holly Stapleton"
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
                        <Link to={`/${item.id}`} className="space-y-3 lg:space-y-2 ">
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
                        </Link>
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
