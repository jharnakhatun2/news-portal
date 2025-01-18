import React from "react"
import ReusePost from "../../../util/ReusePost/ReusePost";

const secondData = [
    {
        'id' : '1',
        'title' : 'Kennedy Sought to Stop Covid Vaccinations 6 Months After Rollout',
        'desc' : 'Robert F. Kennedy Jr. petitioned the F.D.A. to revoke authorization of the shots at a time when they were in high demand and considered life-saving.',
        'read' : '6 min read'
    },
    {
        'id' : '2',
        'title' : 'Trump Picks Ex-Congressman to Manage U.S. Nuclear Arsenal',
        'read' : '5 min read'
    },
]

const SecondPost = () => {
  return (
    <div>
      <ReusePost data={secondData}>
      {(item) => (
                <div className="cursor-pointer">
                    <h2 className="font-serif text-black text-lg hover:text-gray-600">{item.title}</h2>
                    <p className="font-oswald text-gray-600 text-sm">{item.desc}</p>
                    <small className="uppercase text-xs text-gray-600">{item.read}</small>
                </div>
            )}
      </ReusePost>
    </div>
  )
};

export default SecondPost;
