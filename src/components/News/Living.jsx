import React from "react"
import ReuseNews from "../../util/ReuseNews/ReuseNews"

const livingData = [
    {
        "id": "1",
        "topic": "Style",
        "image": "living1.webp",
        "posts": [
            {
                "id": "1",
                "image": "living1.webp",
                "title": "The Ball Gowns of Trump’s New ‘Golden Age’",
                "desc": "Explore how fashion trends are being reimagined in political and cultural spheres, with a particular focus on the resurgence of elaborate ball gowns symbolizing opulence and power.",
                "author": "Jane Doe",
                "published_date": "2023-11-01"
            },
            {
                "id": "2",
                "image": "living1.webp",
                "title": "Fresh Off ‘Severance,’ John Turturro Tries Modeling",
                "desc": "A fascinating look at actor John Turturro’s unexpected foray into the world of modeling, blending his theatrical presence with high-fashion aesthetics.",
                "author": "Alex Smith",
                "published_date": "2023-10-22"
            },
            {
                "id": "3",
                "image": "living1.webp",
                "title": "Piled On Prints and an ‘Upstate Vibe’",
                "desc": "Discover the vibrant world of layered prints and the ‘upstate vibe’ aesthetic that is capturing the hearts of designers and consumers alike.",
                "author": "Emily Johnson",
                "published_date": "2023-09-15"
            }
        ]
    },
    {
        "id": "2",
        "topic": "Food",
        "image": "living2.webp",
        "posts": [
            {
                "id": "1",
                "image": "living2.webp",
                "title": "Restaurant Workers Bring Unique Skills to the L.A. Fire Crisis",
                "desc": "An inspiring story of how restaurant workers in Los Angeles are stepping up during wildfire crises, utilizing their culinary skills to support first responders and displaced residents.",
                "author": "Michael Lee",
                "published_date": "2023-11-05"
            },
            {
                "id": "2",
                "image": "living2.webp",
                "title": "As the Power Shifts, D.C. Restaurateurs Are Nervous, and Diplomatic",
                "desc": "A deep dive into the evolving dynamics of Washington, D.C.’s restaurant scene as political and economic changes reshape the industry.",
                "author": "Sarah Green",
                "published_date": "2023-10-18"
            },
            {
                "id": "3",
                "image": "living2.webp",
                "title": "André Soltner, Famed Chef at New York’s Lutèce, Dies at 92",
                "desc": "Remembering the culinary legacy of André Soltner, a legendary chef whose influence on French cuisine in America is unparalleled.",
                "author": "Laura Brown",
                "published_date": "2023-09-10"
            }
        ]
    },
    {
        "id": "3",
        "topic": "Well",
        "image": "living3.webp",
        "posts": [
            {
                "id": "1",
                "image": "living3.webp",
                "title": "Are Americans Doing Fitness Wrong?",
                "desc": "An exploration of common fitness misconceptions in the United States and how adopting a holistic approach can lead to better health outcomes.",
                "author": "Chris Davis",
                "published_date": "2023-11-12"
            },
            {
                "id": "2",
                "image": "living3.webp",
                "title": "Are Dental X-Rays Safe?",
                "desc": "A detailed examination of the safety of dental X-rays, including expert opinions and advice on minimizing exposure risks.",
                "author": "Dr. Angela White",
                "published_date": "2023-10-25"
            },
            {
                "id": "3",
                "image": "living3.webp",
                "title": "Do LED Face Masks Work?",
                "desc": "An evidence-based analysis of the effectiveness of LED face masks for skincare, featuring insights from dermatologists.",
                "author": "Jessica Martin",
                "published_date": "2023-09-30"
            }
        ]
    },
    {
        "id": "4",
        "topic": "The New York Times Magazine",
        "image": "living4.webp",
        "posts": [
            {
                "id": "1",
                "image": "living4.webp",
                "title": "Curtis Yarvin Says Democracy Is Done. Powerful Conservatives Are Listening.",
                "desc": "A provocative discussion on Curtis Yarvin’s controversial ideas about democracy and their growing influence among conservative thinkers.",
                "author": "John Parker",
                "published_date": "2023-11-08"
            },
            {
                "id": "2",
                "image": "living4.webp",
                "title": "Can I Go to Church When I Don’t Believe?",
                "desc": "A personal reflection on attending religious services as a non-believer and the complexities of faith and community.",
                "author": "Rebecca Clark",
                "published_date": "2023-10-15"
            },
            {
                "id": "3",
                "image": "living4.webp",
                "title": "Syrians in Turkey Agonize Over a Return Home",
                "desc": "A compelling report on the challenges faced by Syrian refugees in Turkey as they contemplate returning to a war-torn homeland.",
                "author": "Ahmed Khan",
                "published_date": "2023-09-05"
            }
        ]
    },
    {
        "id": "5",
        "topic": "T Magazine",
        "image": "living5.webp",
        "posts": [
            {
                "id": "1",
                "image": "living5.webp",
                "title": "The Movies That Fashion Designers Watch Again and Again",
                "desc": "A curated list of films that have served as enduring sources of inspiration for some of the world’s top fashion designers.",
                "author": "Sophia Lee",
                "published_date": "2023-11-10"
            },
            {
                "id": "2",
                "image": "living5.webp",
                "title": "Mexico City’s New Wave of Nostalgic Small Hotels",
                "desc": "An exploration of the charm and appeal of boutique hotels in Mexico City that blend nostalgia with modern luxury.",
                "author": "Carlos Rivera",
                "published_date": "2023-10-20"
            },
            {
                "id": "3",
                "image": "living5.webp",
                "title": "The Painter Whose Canvases Have Hidden Messages",
                "desc": "A profile of an enigmatic artist whose works reveal hidden messages and invite viewers to look beyond the surface.",
                "author": "Emma Brown",
                "published_date": "2023-09-18"
            }
        ]
    },
    {
        "id": "6",
        "topic": "Travel",
        "image": "living6.webp",
        "posts": [
            {
                "id": "1",
                "image": "living6.webp",
                "title": "It’s Zinc Bar vs. Barista in a Paris Battle of the Buzz",
                "desc": "A captivating story about the rivalry between traditional zinc bars and modern coffee shops in Paris.",
                "author": "Paul Harris",
                "published_date": "2023-11-03"
            },
            {
                "id": "2",
                "image": "living6.webp",
                "title": "Never Heard of Yogyakarta? It Might Be the Center of the Universe.",
                "desc": "Discover the cultural and spiritual wonders of Yogyakarta, a hidden gem in Indonesia.",
                "author": "Linda Tan",
                "published_date": "2023-10-12"
            },
            {
                "id": "3",
                "image": "living6.webp",
                "title": "TikTok Fueled Travel Crazes, What Happens Now?",
                "desc": "An exploration of how viral TikTok trends are reshaping travel destinations and experiences.",
                "author": "Mark Thompson",
                "published_date": "2023-09-22"
            }
        ]
    },
    {
        "id": "7",
        "topic": "Love",
        "image": "living7.webp",
        "posts": [
            {
                "id": "1",
                "image": "living7.webp",
                "title": "A Workplace Crush Heats Up Thanks to Burned Cauliflower Pizza",
                "desc": "A heartwarming tale of unexpected romance sparked by a shared love for unconventional cuisine.",
                "author": "Olivia Scott",
                "published_date": "2023-11-14"
            },
            {
                "id": "2",
                "image": "living7.webp",
                "title": "Weddings That Are Out of This World (or at Least Way Out of the Chapel)",
                "desc": "A celebration of creative and unconventional wedding ceremonies that break traditional norms.",
                "author": "Daniel White",
                "published_date": "2023-10-30"
            },
            {
                "id": "3",
                "image": "living7.webp",
                "title": "You Are Cordially Invited to Our Wedding. But Not to Our Vows.",
                "desc": "An exploration of modern wedding trends where couples choose to keep certain moments private.",
                "author": "Megan Brown",
                "published_date": "2023-09-28"
            }
        ]
    },
    {
        'id': '8',
        'topic': 'Real Estate',
        'image': 'living8.webp',
        'posts': [
            {
                'id' : '1',
                'image': 'living8.webp',
                'title' : 'Rescuing Pongo, Pearl, Bandit, Tiger and Zipper',
                'desc': 'An inspiring story about rescuing five lovable pets and providing them with a forever home, highlighting the joys and challenges of pet adoption.',
                "author": "John Doe",
                "published_date": "2024-01-10"
            },
            {
                'id' : '2',
                'image': 'living8.webp',
                'title' : 'Loving an ‘Untouched’ Modernist House, and Then Getting Down to Work',
                'desc': 'A detailed journey through the restoration of a stunning modernist house, showcasing the owner’s love for design and the challenges faced during renovations.',
                "author": "Jane Smith",
                "published_date": "2024-01-15"
            },
            {
                'id' : '3',
                'image': 'living8.webp',
                'title' : 'Open Houses in Los Angeles Take on an Eerie Feeling',
                'desc': 'A fascinating exploration of the changing dynamics of open house events in Los Angeles, capturing the unusual atmosphere and evolving market trends.',
                "author": "Emily Johnson",
                "published_date": "2024-01-20"
            }
        ]
    },
]

const Living = () => {
    return <ReuseNews data={livingData} />
};

export default Living;
