import React from "react"
import ReusePost from "../../../util/ReusePost/ReusePost";
import { Link } from "react-router-dom";


const secondData = [
    {
        'id': '1',
        'title': 'The Secret Genius of Lions Coach Dan Campbell',
        'short_desc': 'Campbell, his players say, is as sharp as any mind in the game. He just doesn’t care if anyone knows it.',
        'read': 'From The Athletic',
        'description': 'Campbell, his players say, is as sharp as any mind in the game. He just doesn’t care if anyone knows it.',
        'source': 'From The Athletic',
        'status': 'Recorded'
    },
    {
        'id': '2',
        'event': 'Live',
        'time': '58m ago',
        'title': 'Detroit and Washington Square Off for Spot in N.F.C. Championship Game',
        'read': 'From The Athletic',
        'description': 'This article delves deep into the topic of "Detroit and Washington Square Off for Spot in N.F.C. Championship Game". It explores key insights, expert opinions, and the broader implications of the subject matter. Readers will gain a thorough understanding of the context, the individuals involved, and the impact this story has in the world of sports. Whether you\'re an avid follower or a casual reader, this piece offers valuable perspectives and in-depth analysis.',
        'source': 'From The Athletic',
        'status': 'Live - 58m ago'
    },
    {
        'id': '3',
        'title': 'Kansas City Defeats Houston to Reach the A.F.C. Championship Game',
        'read': 'From The Athletic',
        'description': 'This article delves deep into the topic of "Kansas City Defeats Houston to Reach the A.F.C. Championship Game". It explores key insights, expert opinions, and the broader implications of the subject matter. Readers will gain a thorough understanding of the context, the individuals involved, and the impact this story has in the world of sports. Whether you\'re an avid follower or a casual reader, this piece offers valuable perspectives and in-depth analysis.',
        'source': 'From The Athletic',
        'status': 'Recorded'
    },
]

const GamePost = () => {
    return (
        <div>
            <ReusePost data={secondData}>
                {(item) => (
                    <div className="cursor-pointer">
                        <Link to={`/${item.id}`}>
                            {item.event && item.time ? <div className="text-red-500">
                                <small className="uppercase text-xs  font-bold mr-3">{item.event}</small ><small>{item.time}</small>
                            </div> : ''}

                            <h2 className="font-serif text-black text-lg hover:text-gray-600">{item.title}</h2>
                            <p className="font-oswald text-gray-600">{item.short_desc}</p>
                            <small className="uppercase text-xs text-gray-600">{item.read}</small>
                        </Link>
                    </div>
                )}
            </ReusePost>
        </div>
    )
};

export default GamePost;
