import React from "react"
import ReusePost from "../../../util/ReusePost/ReusePost";
import { Link } from "react-router-dom";

const secondData = [
  {
      'id' : '1',
      'image' : 'thirdLayout.webp',
      'title' : 'Trump, Citing Cold Weather, Moves Inauguration Indoors',
      'short_desc' : 'The move is a break with tradition and will deny President-elect Trump some of the pomp and pageantry he wanted for his second swearing-in.',
      'desc': 'In a surprising move, President-elect Donald Trump has decided to move his inauguration ceremony indoors, citing concerns over extremely cold weather. The decision marks a significant break from historical traditions, which typically see the event held on the steps of the Capitol. While the shift is seen as a practical measure to ensure comfort and safety, it will inevitably reduce the grandeur and public visibility of the occasion. Critics argue that the move could diminish the symbolic significance of the event, while supporters claim it is a necessary step given the harsh winter conditions.',
      'readTime' : 'See more updates ›',
      'author': 'James Anderson',
      'published_date': '2025-01-25'
  },
  {
      'id' : '2',
      'image' : 'thirdp.webp',
      'title' : 'Trump’s Deportation Plan Is Said to Start Next Week in Chicago',
      'short_desc' : 'The size of the operation is unclear, but it would be the opening step in President-elect Trump’s goal of overseeing the largest deportation program in history.',
      'desc': 'President-elect Donald Trump is reportedly set to launch his ambitious deportation plan in Chicago next week. Sources close to the administration suggest that while the full scale of the operation remains uncertain, it is expected to mark the beginning of what could become the largest deportation effort in U.S. history. Immigration advocates and community leaders have expressed concern over the potential impact on families and businesses, while Trump’s supporters see the move as fulfilling a key campaign promise. The plan’s implementation is likely to face legal and logistical challenges as authorities prepare for the unprecedented operation.',
      'readTime' : '3 min read',
      'author': 'Emily Roberts',
      'published_date': '2025-01-25'
  }
];


const ThirdPost = () => {
  return (
    <div>
      <ReusePost data={secondData}>
      {(item) => (
                <div className="cursor-pointer">
                  <Link to={`/content/${item.id}`} state={{post:item}}>
                    <h2 className="font-serif text-black text-lg hover:text-gray-500">{item.title}</h2>
                    <p className="font-oswald text-gray-500 text-sm py-1">{item.short_desc}</p>
                    <small className="uppercase text-xs text-gray-500">{item.readTime}</small>
                    </Link>
                </div>
            )}
      </ReusePost>
    </div>
  )
};

export default ThirdPost;
