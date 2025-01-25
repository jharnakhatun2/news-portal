import React from "react"
import ReuseNews from "../../util/ReuseNews/ReuseNews"

const livingData = [
    {
        'id': '1',
        'topic': 'Style',
        'image': 'living1.webp',
        'posts': [
            {
                'id' : '1',
                'title' : 'The Ball Gowns of Trump’s New ‘Golden Age’',
                'description': ''
            },
            {
                'id' : '2',
                'title' : 'Fresh Off ‘Severance,’ John Turturro Tries Modeling',
                'description': ''
            },
            {
                'id' : '3',
                'title' : 'Piled On Prints and an ‘Upstate Vibe’',
                'description': ''
            }
        ]
    },
    {
        'id': '2',
        'topic': 'Food',
        'image': 'living2.webp',
        'posts': [
            {
                'id' : '1',
                'title' : 'Restaurant Workers Bring Unique Skills to the L.A. Fire Crisis',
                'description': ''
            },
            {
                'id' : '2',
                'title' : 'As the Power Shifts, D.C. Restaurateurs Are Nervous, and Diplomatic',
                'description': ''
            },
            {
                'id' : '3',
                'title' : 'André Soltner, Famed Chef at New York’s Lutèce, Dies at 92',
                'description': ''
            }
        ]
    },
    {
        'id': '3',
        'topic': 'Well',
        'image': 'living3.webp',
        'posts': [
            {
                'id' : '1',
                'title' : 'Are Americans Doing Fitness Wrong?',
                'description': ''
            },
            {
                'id' : '2',
                'title' : 'Are Dental X-Rays Safe?',
                'description': ''
            },
            {
                'id' : '3',
                'title' : 'Do LED Face Masks Work?',
                'description': ''
            }
        ]
    },
    {
        'id': '4',
        'topic': 'The New York Times Magazine',
        'image': 'living4.webp',
        'posts': [
            {
                'id' : '1',
                'title' : 'Curtis Yarvin Says Democracy Is Done. Powerful Conservatives Are Listening.',
                'description': ''
            },
            {
                'id' : '2',
                'title' : 'Can I Go to Church When I Don’t Believe?',
                'description': ''
            },
            {
                'id' : '3',
                'title' : 'Syrians in Turkey Agonize Over a Return Home',
                'description': ''
            }
        ]
    },
    {
        'id': '5',
        'topic': 'T Magazine',
        'image': 'living5.webp',
        'posts': [
            {
                'id' : '1',
                'title' : 'The Movies That Fashion Designers Watch Again and Again',
                'description': ''
            },
            {
                'id' : '2',
                'title' : 'Mexico City’s New Wave of Nostalgic Small Hotels',
                'description': ''
            },
            {
                'id' : '3',
                'title' : 'The Painter Whose Canvases Have Hidden Messages',
                'description': ''
            }
        ]
    },
    {
        'id': '6',
        'topic': 'Travel',
        'image': 'living6.webp',
        'posts': [
            {
                'id' : '1',
                'title' : 'It’s Zinc Bar vs. Barista in a Paris Battle of the Buzz',
                'description': ''
            },
            {
                'id' : '2',
                'title' : 'Never Heard of Yogyakarta? It Might Be the Center of the Universe.',
                'description': ''
            },
            {
                'id' : '3',
                'title' : 'TikTok Fueled Travel Crazes, What Happens Now?',
                'description': ''
            }
        ]
    },
    {
        'id': '7',
        'topic': 'Love',
        'image': 'living7.webp',
        'posts': [
            {
                'id' : '1',
                'title' : 'A Workplace Crush Heats Up Thanks to Burned Cauliflower Pizza',
                'description': ''
            },
            {
                'id' : '2',
                'title' : 'Weddings That Are Out of This World (or at Least Way Out of the Chapel)',
                'description': ''
            },
            {
                'id' : '3',
                'title' : 'You Are Cordially Invited to Our Wedding. But Not to Our Vows.',
                'description': ''
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
                'title' : 'Rescuing Pongo, Pearl, Bandit, Tiger and Zipper',
                'description': ''
            },
            {
                'id' : '2',
                'title' : 'Loving an ‘Untouched’ Modernist House, and Then Getting Down to Work',
                'description': ''
            },
            {
                'id' : '3',
                'title' : 'Open Houses in Los Angeles Take on an Eerie Feeling',
                'description': ''
            }
        ]
    },
]

const Living = () => {
    return <ReuseNews data={livingData} />
};

export default Living;
