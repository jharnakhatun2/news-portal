import React from "react"
import ReuseNews from "../../util/ReuseNews/ReuseNews";

const opinionData = [
    {
        'id': '1',
        'topic': 'Opinion',
        'image': 'opinion1.webp',
        'post1': 'Three Opinion Writers on Trump Day 1: He Is Exploiting ‘Civic Ignorance’',
        'post2': 'I Spent Trump’s Inauguration in Ukraine. This Is What I Saw.',
        'post3': 'Trump Just Pardoned Himself.'
    },
    {
        'id': '2',
        'topic': 'Opinion Columnists',
        'image': 'opinion2.webp',
        'post1': 'I Spent Trump’s Inauguration in Ukraine. This Is What I Saw.',
        'post2': 'Three Opinion Writers on Trump Day 1: He Is Exploiting ‘Civic Ignorance’p',
        'post3': 'The Right Is Winning the Battle for Hearts and Minds'
    },
    {
        'id': '3',
        'topic': 'Editorials',
        'image': 'opinion3.webp',
        'post1': 'Standing Up to Donald Trump’s Fear Tactics',
        'post2': 'Democracy is Not Facing a Global Extinction Event',
        'post3': 'New York Needs a Turnaround to Show That Big Cities Still Work'
    },
    {
        'id': '4',
        'topic': 'Guest Essays',
        'image': 'opinion4.webp',
        'post1': 'Trump Just Pardoned Himself',
        'post2': 'The Right Is Winning the Battle for Hearts and Minds',
        'post3': 'How My Mother-in-Law Lost Her Mind and Found Herself'
    },
    {
        'id': '5',
        'topic': 'Sunday Opinion',
        'image': 'opinion5.webp',
        'post1': 'Trump Brings a Chill to Washington',
        'post2': 'How Long Can the Alliance Between Tech Titans and the MAGA Faithful Last?',
        'post3': 'Even This Year Is the Best Time Ever to Be Alive'
    },
]
const Opinion = () => {
  return <ReuseNews data={opinionData}/>
  
};

export default Opinion;
