import React from "react"
import ReuseNews from "../../util/ReuseNews/ReuseNews"

const artData = [
    {
        "id": "1",
        "topic": "Arts",
        "image": "arts1.webp",
        "posts": [
            {
                "id": "1",
                "image": "arts1.webp",
                "title": "Against All Odds, a Vegas Theater Scene With a ‘Sense of the Wild West’",
                "desc": "The thriving theater scene in Las Vegas defies expectations, embracing a creative spirit reminiscent of the Wild West. From boundary-pushing performances to community-driven productions, the city's artistic landscape offers a diverse array of cultural experiences.",
                "author": "Jane Doe",
                "published_date": "2024-01-15"
            },
            {
                "id": "2",
                "image": "arts1.webp",
                "title": "In Minneapolis, a Layer of Hygge Warmth for a Top-Notch Orchestra",
                "desc": "The renowned Minneapolis Symphony Orchestra blends traditional symphonic excellence with an intimate, hygge-inspired ambiance. This approach creates a unique experience for music lovers and showcases the city's creative adaptability.",
                "author": "John Smith",
                "published_date": "2024-02-03"
            },
            {
                "id": "3",
                "image": "arts1.webp",
                "title": "At 90, the Ghanaian Highlife Pioneer Ebo Taylor Finds a New Voice",
                "desc": "Ebo Taylor, the legendary Highlife musician, continues to captivate audiences with innovative compositions even at the age of 90. His latest work reflects a fusion of traditional Ghanaian rhythms and contemporary influences.",
                "author": "Alex Johnson",
                "published_date": "2024-03-10"
            }
        ]
    },
    {
        "id": "2",
        "topic": "Art and Design",
        "image": "arts2.webp",
        "posts": [
            {
                "id": "1",
                "image": "arts2.webp",
                "title": "The Exile and Rebirth of the South’s Storied ‘Iron Horse’",
                "desc": "This article delves into the history and cultural significance of the South’s iconic ‘Iron Horse’ statue. Following its removal, efforts to revive and reinterpret its legacy have sparked important discussions about heritage and modern art.",
                "author": "Emily Davis",
                "published_date": "2024-04-08"
            },
            {
                "id": "2",
                "image": "arts2.webp",
                "title": "In an Extravagant New Gallery, Nick Cave Goes Big in Bronze",
                "desc": "Nick Cave's latest exhibition showcases monumental bronze sculptures that challenge conventional artistic norms. The gallery space amplifies the scale and impact of Cave’s visionary work.",
                "author": "Michael Lee",
                "published_date": "2024-05-12"
            },
            {
                "id": "3",
                "image": "arts2.webp",
                "title": "With Their Lives Upended, They Practiced the Art of Resilience",
                "desc": "Through interviews and narratives, this piece highlights artists who have turned personal adversity into sources of inspiration, fostering resilience and creativity in challenging times.",
                "author": "Sophia Brown",
                "published_date": "2024-06-20"
            }
        ]
    },
    {
        "id": "3",
        "topic": "Movies",
        "image": "arts3.webp",
        "posts": [
            {
                "id": "1",
                "image": "arts3.webp",
                "title": "Sex Scenes in Movies Are Back, but They Aren’t Exactly Sexy",
                "desc": "This analysis explores the evolving portrayal of intimacy in contemporary cinema, where filmmakers prioritize authenticity and narrative depth over traditional notions of sex appeal.",
                "author": "Olivia Martinez",
                "published_date": "2024-07-05"
            },
            {
                "id": "2",
                "image": "arts3.webp",
                "title": "‘Problemista,’ ‘Stress Positions’ and More Streaming Gems",
                "desc": "Discover a curated list of hidden gems available on streaming platforms, including indie masterpieces and critically acclaimed documentaries.",
                "author": "Daniel Harris",
                "published_date": "2024-08-14"
            },
            {
                "id": "3",
                "image": "arts3.webp",
                "title": "‘Nickel Boys’ Awakens Black Cinema’s Time Revolution",
                "desc": "The adaptation of Colson Whitehead’s ‘Nickel Boys’ has sparked a revolution in Black cinema, blending historical storytelling with a contemporary cinematic approach.",
                "author": "Liam Clark",
                "published_date": "2024-09-03"
            }
        ]
    },
    {
        "id": "4",
        "topic": "Television",
        "image": "arts4.webp",
        "posts": [
            {
                "id": "1",
                "image": "arts4.webp",
                "title": "Trump Returns, and So Does His TV Spectacle",
                "desc": "An exploration of Donald Trump's reemergence on television and the renewed media spectacle surrounding his political journey.",
                "author": "Ella Thompson",
                "published_date": "2024-10-11"
            },
            {
                "id": "2",
                "image": "arts4.webp",
                "title": "David Lynch, ‘Twin Peaks’ and the American Art of Television",
                "desc": "This piece examines the enduring influence of David Lynch's cult classic ‘Twin Peaks’ and its impact on the evolution of American television storytelling.",
                "author": "Noah Wright",
                "published_date": "2024-11-06"
            },
            {
                "id": "3",
                "image": "arts4.webp",
                "title": "The 13 Greatest ‘S.N.L.’ Commercial Parodies",
                "desc": "A nostalgic look at the most iconic commercial parodies from ‘Saturday Night Live,’ showcasing the show’s comedic genius.",
                "author": "Ava King",
                "published_date": "2024-12-02"
            }
        ]
    },
    {
        "id": "5",
        "topic": "Music",
        "image": "arts5.webp",
        "posts": [
            {
                "id": "1",
                "title": "Garth Hudson, Multifaceted Musician With the Band, Dies at 87",
                "desc": "A tribute to Garth Hudson, the legendary musician whose innovative keyboard and saxophone performances defined the sound of The Band.",
                "author": "Mia Evans",
                "published_date": "2024-12-10"
            },
            {
                "id": "2",
                "title": "At 90, the Ghanaian Highlife Pioneer Ebo Taylor Finds a New Voice",
                "desc": "A celebration of Ebo Taylor’s enduring contribution to music as he continues to innovate and inspire at the age of 90.",
                "author": "Ethan Garcia",
                "published_date": "2024-12-15"
            },
            {
                "id": "3",
                "title": "In Minneapolis, a Layer of Hygge Warmth for a Top-Notch Orchestra",
                "desc": "The Minneapolis Symphony Orchestra captivates audiences by combining traditional symphonic performances with a warm, inviting atmosphere.",
                "author": "Isabella Hall",
                "published_date": "2024-12-18"
            }
        ]
    }
]


const Atr = () => {
    return <ReuseNews data={artData} />
};

export default Atr;
