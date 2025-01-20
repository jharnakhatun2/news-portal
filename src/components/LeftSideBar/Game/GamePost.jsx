import React from "react"
import ReusePost from "../../../util/ReusePost/ReusePost";

const secondData = [
    {
        'id' : '1',
        'title' : 'The Secret Genius of Lions Coach Dan Campbell',
        'desc' : 'Campbell, his players say, is as sharp as any mind in the game. He just doesn’t care if anyone knows it.',
        'read' : 'From The Athletic'
    },
    {
        'id' : '2',
        'event' : 'Live',
        'time' : '58m ago',
        'title' : 'Detroit and Washington Square Off for Spot in N.F.C. Championship Game',
        'read' : 'From The Athletic'
    },
    {
        'id' : '3',
        'title' : 'Kansas City Defeats Houston to Reach the A.F.C. Championship Game',
        'read' : 'From The Athletic'
    },
]

const GamePost = () => {
  return (
    <div>
      <ReusePost data={secondData}>
      {(item) => (
                <div className="cursor-pointer">
                    {item.event && item.time ? <div className="text-red-500">
                        <small className="uppercase text-xs  font-bold mr-3">{item.event}</small ><small>{item.time}</small>
                    </div>:''}
                    
                    <h2 className="font-serif text-black text-lg hover:text-gray-600">{item.title}</h2>
                    <p className="font-oswald text-gray-600">{item.desc}</p>
                    <small className="uppercase text-xs text-gray-600">{item.read}</small>
                </div>
            )}
      </ReusePost>
    </div>
  )
};

export default GamePost;
