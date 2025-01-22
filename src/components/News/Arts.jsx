import React from "react"
import ReuseNews from "../../util/ReuseNews/ReuseNews"

const artData = [
    {
        'id': '1',
        'topic': 'Arts',
        'image': 'arts1.webp',
        'post1': 'Against All Odds, a Vegas Theater Scene With a ‘Sense of the Wild West’',
        'post2': 'In Minneapolis, a Layer of Hygge Warmth for a Top-Notch Orchestra',
        'post3': 'At 90, the Ghanaian Highlife Pioneer Ebo Taylor Finds a New Voice'
    },
    {
        'id': '2',
        'topic': 'Art and Design',
        'image': 'arts2.webp',
        'post1': 'The Exile and Rebirth of the South’s Storied ‘Iron Horse’',
        'post2': 'In an Extravagant New Gallery, Nick Cave Goes Big in Bronze',
        'post3': 'With Their Lives Upended, They Practiced the Art of Resilience'
    },
    {
        'id': '3',
        'topic': 'Movies',
        'image': 'arts3.webp',
        'post1': 'Sex Scenes in Movies Are Back, but They Aren’t Exactly Sexy',
        'post2': '‘Problemista,’ ‘Stress Positions’ and More Streaming Gems',
        'post3': '‘Nickel Boys’ Awakens Black Cinema’s Time Revolution'
    },
    {
        'id': '4',
        'topic': 'Television',
        'image': 'arts4.webp',
        'post1': 'Trump Returns, and So Does His TV Spectacle',
        'post2': 'David Lynch, ‘Twin Peaks’ and the American Art of Television',
        'post3': 'The 13 Greatest ‘S.N.L.’ Commercial Parodies'
    },
    {
        'id': '5',
        'topic': 'Music',
        'image': 'arts5.webp',
        'post1': 'Garth Hudson, Multifaceted Musician With the Band, Dies at 87',
        'post2': 'At 90, the Ghanaian Highlife Pioneer Ebo Taylor Finds a New Voice',
        'post3': 'In Minneapolis, a Layer of Hygge Warmth for a Top-Notch Orchestra'
    },
]

const Atr = () => {
  return <ReuseNews data={artData}/>
};

export default Atr;
