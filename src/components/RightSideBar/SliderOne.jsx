import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperReuse from "../../util/Swiper/SwiperReuse";
import { Link } from "react-router-dom";

const posts = [
    {
        "id": "1",
        "image": "slider1.webp",
        "title": "Paris Olympics Medals Are Tarnishing, Putting LVMH in the Spotlight",
        "desc": "In a bizarre case of administrative chaos, a minor clerical error spiraled into a full-blown legal and logistical nightmare. What began as a harmless misstep in filing turned into a cascade of complications that left businesses, legal experts, and government officials scrambling to untangle the mess. This story explores how even the smallest mistakes can have monstrous consequences, offering lessons in vigilance, accountability, and the importance of meticulous record-keeping in an increasingly interconnected world.",
        "readTime": "2 min read",
        "author": "Amir Cohen/Reuters",
        "published_date": "2025-01-29"
    },
    {
        "id": "2",
        "image": "slider2.webp",
        "title": "Never Heard of Yogyakarta? It Might Be the Center of the Universe.",
        "desc": "Modern weddings have seen a growing trend: splitting the ceremony and reception into separate guest lists. This practice has sparked conversations about intimacy, tradition, and social etiquette. For many couples, sharing their vows in a private setting allows for a deeply personal moment unburdened by social pressures, while still celebrating with friends and family afterward. This article delves into the motivations behind this emerging tradition, the challenges it presents, and how couples are navigating this delicate balance of personal and communal celebration.",
        "readTime": "4 min read",
        "author": "Amir Cohen/Reuters",
        "published_date": "2025-01-29"
    },
    {
        "id": "3",
        "image": "slider3.webp",
        "title": "At a Deluxe Dining Room on the 100th Floor, a Chef Toils in Obscurity",
        "desc": "The Catholic Church has long been a voice for the marginalized, standing as a moral compass in times of political upheaval. With the increasing intensity of deportation policies during Trump's administration, the Church faces a critical moment to reaffirm its stance on compassion, human dignity, and social justice. This piece examines the historical role of the Church in advocating for immigrants, the ethical challenges posed by current policies, and why its voice is needed now more than ever to influence a polarized nation.",
        "readTime": "3 min read",
        "author": "Amir Cohen/Reuters",
        "published_date": "2025-01-29"
    },
    {
        "id": "4",
        "image": "slider4.webp",
        "title": "The Mediterranean Diet Really Is Good for You. Here’s Why.",
        "desc": "Mark Zuckerberg's recent public displays of bravado—whether it's engaging in combat sports or issuing challenges to rivals—might appear as acts of confidence. However, a closer look suggests a different narrative. This article analyzes the thin line between strength and insecurity, exploring how Zuckerberg's actions could be interpreted as attempts to deflect criticism, project control, or distract from deeper issues facing Meta. With expert opinions and contextual analysis, we break down the psychology behind these moves and their implications for leadership in the tech industry.",
        "readTime": "5 min read",
        "author": "Amir Cohen/Reuters",
        "published_date": "2025-01-29"
    }
];



const SliderOne = () => {

    return (
        <SwiperReuse data={posts} slidesPerView={2}>
            {(item)=>(
                <Link to={`/${item.id}`} state={{post:item}}>
                    <img src={item.image} alt="Slide 1" />
                     <h3 className="font-serif text-black pt-3">{item.title}</h3>
                     <small className="uppercase text-xs text-gray-600">{item.readTime}</small>
                </Link>
            )}
        </SwiperReuse>
    );
};

export default SliderOne;
