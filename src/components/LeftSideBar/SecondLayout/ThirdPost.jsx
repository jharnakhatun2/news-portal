import React from "react"
import ReusePost from "../../../util/ReusePost/ReusePost";

const secondData = [
    {
        'id' : '1',
        'title' : 'Trump, Citing Cold Weather, Moves Inauguration Indoors',
        'desc' : 'The move is a break with tradition and will deny President-elect Trump some of the pomp and pageantry he wanted for his second swearing-in.',
        'read' : 'See more updates ›'
    },
    {
        'id' : '2',
        'title' : 'Trump’s Deportation Plan Is Said to Start Next Week in Chicago',
        'desc' : 'The size of the operation is unclear, but it would be the opening step in President-elect Trump’s goal of overseeing the largest deportation program in history.',
        'read' : '3 min read'
    },
]

const ThirdPost = () => {
  return (
    <div>
      <ReusePost data={secondData}>
      {(item) => (
                <div className="cursor-pointer">
                    <h2 className="font-serif text-black text-lg hover:text-gray-600">{item.title}</h2>
                    <p className="font-oswald text-gray-600">{item.desc}</p>
                    <small className="uppercase text-xs text-gray-600">{item.read}</small>
                </div>
            )}
      </ReusePost>
    </div>
  )
};

export default ThirdPost;
