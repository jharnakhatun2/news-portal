import React from "react"
import ReuseNews from "../../util/ReuseNews/ReuseNews"

const artData = [
    {
        'id': '1',
        'topic': 'Arts',
        'image': 'arts1.webp',
        'posts': [
            {
                'id' : '1',
                'title' : 'Against All Odds, a Vegas Theater Scene With a ‘Sense of the Wild West’',
                'description': ''
            },
            {
                'id' : '2',
                'title' : 'In Minneapolis, a Layer of Hygge Warmth for a Top-Notch Orchestra',
                'description': ''
            },
            {
                'id' : '3',
                'title' : 'At 90, the Ghanaian Highlife Pioneer Ebo Taylor Finds a New Voice',
                'description': ''
            }
        ]
    },
    {
        'id': '2',
        'topic': 'Art and Design',
        'image': 'arts2.webp',
        'posts': [
            {
                'id' : '1',
                'title' : 'The Exile and Rebirth of the South’s Storied ‘Iron Horse’',
                'description': ''
            },
            {
                'id' : '2',
                'title' : 'In an Extravagant New Gallery, Nick Cave Goes Big in Bronze',
                'description': ''
            },
            {
                'id' : '3',
                'title' : 'With Their Lives Upended, They Practiced the Art of Resilience',
                'description': ''
            }
        ]
    },
    {
        'id': '3',
        'topic': 'Movies',
        'image': 'arts3.webp',
        'posts': [
            {
                'id' : '1',
                'title' : 'Sex Scenes in Movies Are Back, but They Aren’t Exactly Sexy',
                'description': ''
            },
            {
                'id' : '2',
                'title' : '‘Problemista,’ ‘Stress Positions’ and More Streaming Gems',
                'description': ''
            },
            {
                'id' : '3',
                'title' : '‘Nickel Boys’ Awakens Black Cinema’s Time Revolution',
                'description': ''
            }
        ]
    },
    {
        'id': '4',
        'topic': 'Television',
        'image': 'arts4.webp',
        'posts': [
            {
                'id' : '1',
                'title' : 'Trump Returns, and So Does His TV Spectacle',
                'description': ''
            },
            {
                'id' : '2',
                'title' : 'David Lynch, ‘Twin Peaks’ and the American Art of Television',
                'description': ''
            },
            {
                'id' : '3',
                'title' : 'The 13 Greatest ‘S.N.L.’ Commercial Parodies',
                'description': ''
            }
        ]
    },
    {
        'id': '5',
        'topic': 'Music',
        'image': 'arts5.webp',
        'posts': [
            {
                'id' : '1',
                'title' : 'Garth Hudson, Multifaceted Musician With the Band, Dies at 87',
                'description': ''
            },
            {
                'id' : '2',
                'title' : 'At 90, the Ghanaian Highlife Pioneer Ebo Taylor Finds a New Voice',
                'description': ''
            },
            {
                'id' : '3',
                'title' : 'In Minneapolis, a Layer of Hygge Warmth for a Top-Notch Orchestra',
                'description': ''
            }
        ]
    },
]

const Atr = () => {
    return <ReuseNews data={artData} />
};

export default Atr;
