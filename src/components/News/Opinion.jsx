import React from "react"
import ReuseNews from "../../util/ReuseNews/ReuseNews";

const opinionData = [
    {
        'id': '1',
        'topic': 'Opinion',
        'image': 'opinion1.webp',
        'posts': [
            {
                'id' : '1',
                'title' : 'Three Opinion Writers on Trump Day 1: He Is Exploiting ‘Civic Ignorance’',
                'description': ''
            },
            {
                'id' : '2',
                'title' : 'I Spent Trump’s Inauguration in Ukraine. This Is What I Saw.',
                'description': ''
            },
            {
                'id' : '3',
                'title' : 'Trump Just Pardoned Himself.',
                'description': ''
            }
        ]
    },
    {
        'id': '2',
        'topic': 'Opinion Columnists',
        'image': 'opinion2.webp',
        'posts': [
            {
                'id' : '1',
                'title' : 'I Spent Trump’s Inauguration in Ukraine. This Is What I Saw.',
                'description': ''
            },
            {
                'id' : '2',
                'title' : 'Three Opinion Writers on Trump Day 1: He Is Exploiting ‘Civic Ignorance’p',
                'description': ''
            },
            {
                'id' : '3',
                'title' : 'The Right Is Winning the Battle for Hearts and Minds',
                'description': ''
            }
        ]
    },
    {
        'id': '3',
        'topic': 'Editorials',
        'image': 'opinion3.webp',
        'posts': [
            {
                'id' : '1',
                'title' : 'Standing Up to Donald Trump’s Fear Tactics',
                'description': ''
            },
            {
                'id' : '2',
                'title' : 'Democracy is Not Facing a Global Extinction Event',
                'description': ''
            },
            {
                'id' : '3',
                'title' : 'New York Needs a Turnaround to Show That Big Cities Still Work',
                'description': ''
            }
        ]
    },
    {
        'id': '4',
        'topic': 'Guest Essays',
        'image': 'opinion4.webp',
        'posts': [
            {
                'id' : '1',
                'title' : 'Trump Just Pardoned Himself',
                'description': ''
            },
            {
                'id' : '2',
                'title' : 'The Right Is Winning the Battle for Hearts and Minds',
                'description': ''
            },
            {
                'id' : '3',
                'title' : 'How My Mother-in-Law Lost Her Mind and Found Herself',
                'description': ''
            }
        ]
    },
    {
        'id': '5',
        'topic': 'Sunday Opinion',
        'image': 'opinion5.webp',
        'posts': [
            {
                'id' : '1',
                'title' : 'From a Bustling Kitchen to a Bustling Newsroom',
                'description': ''
            },
            {
                'id' : '2',
                'title' : 'How Long Can the Alliance Between Tech Titans and the MAGA Faithful Last?',
                'description': ''
            },
            {
                'id' : '3',
                'title' : 'Even This Year Is the Best Time Ever to Be Alive',
                'description': ''
            }
        ]
    },
]
const Opinion = () => {
  return <ReuseNews data={opinionData}/>
  
};

export default Opinion;
