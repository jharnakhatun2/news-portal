import React from "react"
import ReuseNews from "../../util/ReuseNews/ReuseNews";

const opinionData = [
    {
        'id': '1',
        'topic': 'Opinion',
        'image': 'opinion1.webp',
        'posts': [
            {
                'id': '1',
                'image': 'opinion1.webp',
                'title': 'Three Opinion Writers on Trump Day 1: He Is Exploiting ‘Civic Ignorance’',
                'desc': 'A critical analysis of Donald Trump’s strategies and their impact on American civic understanding.',
                "author": "John Doe",
                "published_date": "2025-01-10"
            },
            {
                'id': '2',
                'image': 'opinion1.webp',
                'title': 'I Spent Trump’s Inauguration in Ukraine. This Is What I Saw.',
                'desc': 'A personal recount of unexpected political events during Trump’s inauguration in Ukraine.',
                "author": "Jane Smith",
                "published_date": "2025-01-15"
            },
            {
                'id': '3',
                'image': 'opinion1.webp',
                'title': 'Trump Just Pardoned Himself.',
                'desc': 'Exploring the unprecedented self-pardon of Donald Trump and its legal implications.',
                "author": "Michael Green",
                "published_date": "2025-01-22"
            }
        ]
    },
    {
        'id': '2',
        'topic': 'Opinion Columnists',
        'image': 'opinion2.webp',
        'posts': [
            {
                'id': '1',
                'image': 'opinion2.webp',
                'title': 'I Spent Trump’s Inauguration in Ukraine. This Is What I Saw.',
                'desc': 'A ground-level perspective on political unrest during the Trump inauguration.',
                "author": "Jane Smith",
                "published_date": "2025-01-11"
            },
            {
                'id': '2',
                'image': 'opinion2.webp',
                'title': 'Three Opinion Writers on Trump Day 1: He Is Exploiting ‘Civic Ignorance’',
                'desc': 'An examination of how Trump manipulated public understanding on his first day.',
                "author": "John Doe",
                "published_date": "2025-01-16"
            },
            {
                'id': '3',
                'image': 'opinion2.webp',
                'title': 'The Right Is Winning the Battle for Hearts and Minds',
                'desc': 'A discussion on how conservative ideas are resonating with modern audiences.',
                "author": "Lisa Brown",
                "published_date": "2025-01-20"
            }
        ]
    },
    {
        'id': '3',
        'topic': 'Editorials',
        'image': 'opinion3.webp',
        'posts': [
            {
                'id': '1',
                'image': 'opinion3.webp',
                'title': 'Standing Up to Donald Trump’s Fear Tactics',
                'desc': 'An editorial on how fear-based politics threatens democracy.',
                "author": "David White",
                "published_date": "2025-01-12"
            },
            {
                'id': '2',
                'image': 'opinion3.webp',
                'title': 'Democracy is Not Facing a Global Extinction Event',
                'desc': 'A counterpoint arguing that democracy is still resilient.',
                "author": "Emma Johnson",
                "published_date": "2025-01-18"
            },
            {
                'id': '3',
                'image': 'opinion3.webp',
                'title': 'New York Needs a Turnaround to Show That Big Cities Still Work',
                'desc': 'An analysis on how New York can maintain its status as a thriving metropolis.',
                "author": "Chris Martin",
                "published_date": "2025-01-25"
            }
        ]
    },
    {
        'id': '4',
        'topic': 'Guest Essays',
        'image': 'opinion4.webp',
        'posts': [
            {
                'id': '1',
                'image': 'opinion4.webp',
                'title': 'Trump Just Pardoned Himself',
                'desc': 'Legal experts weigh in on Trump’s controversial self-pardon.',
                "author": "Alex Harper",
                "published_date": "2025-01-13"
            },
            {
                'id': '2',
                'image': 'opinion4.webp',
                'title': 'The Right Is Winning the Battle for Hearts and Minds',
                'desc': 'Why conservative messaging continues to gain traction.',
                "author": "Laura Adams",
                "published_date": "2025-01-21"
            },
            {
                'id': '3',
                'image': 'opinion4.webp',
                'title': 'How My Mother-in-Law Lost Her Mind and Found Herself',
                'desc': 'A heartwarming essay about unexpected personal growth.',
                "author": "Sarah Lee",
                "published_date": "2025-01-27"
            }
        ]
    },
    {
        'id': '5',
        'topic': 'Sunday Opinion',
        'image': 'opinion5.webp',
        'posts': [
            {
                'id': '1',
                'image': 'opinion5.webp',
                'title': 'From a Bustling Kitchen to a Bustling Newsroom',
                'desc': 'A journalist shares their journey from culinary arts to media.',
                "author": "Patrick Hill",
                "published_date": "2025-01-08"
            },
            {
                'id': '2',
                'image': 'opinion5.webp',
                'title': 'How Long Can the Alliance Between Tech Titans and the MAGA Faithful Last?',
                'desc': 'An exploration of the relationship between tech companies and political groups.',
                "author": "Olivia Davis",
                "published_date": "2025-01-19"
            },
            {
                'id': '3',
                'image': 'opinion5.webp',
                'title': 'Even This Year Is the Best Time Ever to Be Alive',
                'desc': 'A hopeful perspective on modern life despite global challenges.',
                "author": "Nathan Brown",
                "published_date": "2025-01-26"
            }
        ]
    }
];

const Opinion = () => {
    return <ReuseNews data={opinionData} />

};

export default Opinion;
