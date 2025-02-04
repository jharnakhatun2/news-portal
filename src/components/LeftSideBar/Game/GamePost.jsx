import React from "react"
import ReusePost from "../../../util/ReusePost/ReusePost";
import { Link } from "react-router-dom";


const secondData = [
    {
        'id': '1',
        "image": "player.webp",
        'title': 'The Secret Genius of Lions Coach Dan Campbell',
        'short_desc': 'Campbell, his players say, is as sharp as any mind in the game. He just doesn’t care if anyone knows it.',
        'readTime': 'From The Athletic',
        'desc': "Dan Campbell, the charismatic head coach of the Detroit Lions, has often been portrayed as a rough-and-tough motivator who thrives on passion and raw emotion. But those who know him best—his players and coaching staff—see a different side to the man behind the gritty exterior. They recognize a tactical genius who possesses one of the sharpest minds in professional football. Campbell's unconventional leadership style blends old-school determination with a deep understanding of the modern game. He eschews complex jargon in favor of relatable and straightforward communication that resonates with his players. This simplicity, far from a sign of ignorance, reflects his keen ability to break down intricate plays and strategies into actionable steps that empower his team on the field.",
        "author": "Nic Antaya/Getty Images",
        "published_date": "2025-01-25"
    },
    {
        'id': '2',
        "image": "game2.webp",
        'category': 'Live',
        'time': '58m ago',
        'title': 'Detroit and Washington Square Off for Spot in N.F.C. Championship Game',
        'readTime': 'From The Athletic',
        'short_desc' : 'Detroit faces Washington in a high-stakes showdown, with both teams vying for a coveted spot in the N.F.C. Championship game.',
        'desc': 'This article delves deep into the topic of "Detroit and Washington Square Off for Spot in N.F.C. Championship Game". It explores key insights, expert opinions, and the broader implications of the subject matter. Readers will gain a thorough understanding of the context, the individuals involved, and the impact this story has in the world of sports. Whether you\'re an avid follower or a casual reader, this piece offers valuable perspectives and in-depth analysis.',
        "author": "Brace Hemmelgarn/Minnesota Twins, via Getty Images",
        "published_date": "2025-01-25"
    },
    {
        'id': '3',
        "image": "game3.webp",
        'title': 'Kansas City Defeats Houston to Reach the A.F.C. Championship Game',
        'readTime': 'From The Athletic',
        'short_desc' : 'Kansas City triumphs over Houston in a thrilling match, securing their place in the A.F.C. Championship game.',
        'desc': 'This article delves deep into the topic of "Kansas City Defeats Houston to Reach the A.F.C. Championship Game". It explores key insights, expert opinions, and the broader implications of the subject matter. Readers will gain a thorough understanding of the context, the individuals involved, and the impact this story has in the world of sports. Whether you\'re an avid follower or a casual reader, this piece offers valuable perspectives and in-depth analysis.',
        "author": "Charlotte Graham-McLay/Associated Press",
        "published_date": "2025-01-25"
    },
]

const GamePost = () => {
    return (
        <div>
            <ReusePost data={secondData}>
                {(item) => (
                    <div className="cursor-pointer">
                        <Link to={`/content/${item.id}`} state={{post:item}}>
                            {item.category && item.time ? <div className="text-red-500">
                                <small className="uppercase text-xs  font-bold mr-3">{item.category}</small ><small>{item.time}</small>
                            </div> : ''}

                            <h2 className="font-serif text-black text-lg hover:text-gray-600">{item.title}</h2>
                            <p className="font-oswald text-gray-500 text-sm">{item.short_desc}</p>
                            <small className="uppercase text-xs text-gray-600">{item.readTime}</small>
                        </Link>
                    </div>
                )}
            </ReusePost>
        </div>
    )
};

export default GamePost;
