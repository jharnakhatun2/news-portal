import React from "react"
import ReuseNews from "../../util/ReuseNews/ReuseNews"

const livingData = [
    {
        'id': '1',
        'topic': 'Style',
        'image': 'living1.webp',
        'post1': 'The Ball Gowns of Trump’s New ‘Golden Age’',
        'post2': 'Fresh Off ‘Severance,’ John Turturro Tries Modeling',
        'post3': 'Piled On Prints and an ‘Upstate Vibe’'
    },
    {
        'id': '2',
        'topic': 'Food',
        'image': 'living2.webp',
        'post1': 'Restaurant Workers Bring Unique Skills to the L.A. Fire Crisis',
        'post2': 'As the Power Shifts, D.C. Restaurateurs Are Nervous, and Diplomatic',
        'post3': 'André Soltner, Famed Chef at New York’s Lutèce, Dies at 92'
    },
    {
        'id': '3',
        'topic': 'Well',
        'image': 'living3.webp',
        'post1': 'Are Americans Doing Fitness Wrong?',
        'post2': 'Are Dental X-Rays Safe?',
        'post3': 'Do LED Face Masks Work?'
    },
    {
        'id': '4',
        'topic': 'The New York Times Magazine',
        'image': 'living4.webp',
        'post1': 'Curtis Yarvin Says Democracy Is Done. Powerful Conservatives Are Listening.',
        'post2': 'Can I Go to Church When I Don’t Believe?',
        'post3': 'Syrians in Turkey Agonize Over a Return Home'
    },
    {
        'id': '5',
        'topic': 'T Magazine',
        'image': 'living5.webp',
        'post1': 'The Movies That Fashion Designers Watch Again and Again',
        'post2': 'Mexico City’s New Wave of Nostalgic Small Hotels',
        'post3': 'The Painter Whose Canvases Have Hidden Messages'
    },
    {
        'id': '6',
        'topic': 'Travel',
        'image': 'living6.webp',
        'post1': 'It’s Zinc Bar vs. Barista in a Paris Battle of the Buzz',
        'post2': 'Never Heard of Yogyakarta? It Might Be the Center of the Universe.',
        'post3': 'TikTok Fueled Travel Crazes, What Happens Now?'
    },
    {
        'id': '7',
        'topic': 'Love',
        'image': 'living7.webp',
        'post1': 'A Workplace Crush Heats Up Thanks to Burned Cauliflower Pizza',
        'post2': 'Weddings That Are Out of This World (or at Least Way Out of the Chapel)',
        'post3': 'You Are Cordially Invited to Our Wedding. But Not to Our Vows.'
    },
    {
        'id': '8',
        'topic': 'Real Estate',
        'image': 'living8.webp',
        'post1': 'Rescuing Pongo, Pearl, Bandit, Tiger and Zipper',
        'post2': 'Loving an ‘Untouched’ Modernist House, and Then Getting Down to Work',
        'post3': 'Open Houses in Los Angeles Take on an Eerie Feeling'
    },
]

const Living = () => {
    return <ReuseNews data={livingData}/>
};

export default Living;
