import React from "react"
import ReusePost from "../../../util/ReusePost/ReusePost";
import { Link } from "react-router-dom";

const secondData = [
  {
      'id' : '1',
      'title' : 'Kennedy Sought to Stop Covid Vaccinations 6 Months After Rollout',
      'desc' : 'Robert F. Kennedy Jr. petitioned the F.D.A. to revoke authorization of the shots at a time when they were in high demand and considered life-saving.',
      'read' : '6 min read',
      'content': 'Robert F. Kennedy Jr. made headlines when he filed a petition with the Food and Drug Administration (F.D.A.) urging the revocation of Covid-19 vaccine authorizations. This action came just six months into the vaccine rollout, a time when the shots were seen as crucial in combating the pandemic. Kennedy raised concerns about vaccine safety and regulatory oversight, but his stance was met with widespread criticism from public health officials and scientists. The controversy sparked debates across the nation, highlighting the tension between vaccine mandates and individual freedoms.',
      'author': 'Michael Johnson',
      'published_date': '2025-01-25'
  },
  {
      'id' : '2',
      'title' : 'Trump Picks Ex-Congressman to Manage U.S. Nuclear Arsenal',
      'desc' : 'Former President Donald Trump has selected a former congressman to oversee the country’s nuclear weapons program, stirring debate over his qualifications and future policies.',
      'read' : '5 min read',
      'content': 'In a strategic move, former President Donald Trump has appointed a former congressman to oversee the management of the United States nuclear arsenal. The selection has sparked debate over the congressman’s qualifications and potential policy changes in nuclear strategy. Critics argue that national security demands experienced leadership, while supporters believe his political acumen could bring fresh perspectives to nuclear policy. The appointment comes at a crucial time for U.S. defense, with rising global tensions and evolving military challenges.',
      'author': 'Sarah Thompson',
      'published_date': '2025-01-25'
  }
];

const SecondPost = () => {
  return (
    <div>
      <ReusePost data={secondData}>
      {(item) => (
                <div className="cursor-pointer">
                  <Link to={`/${item.id}`} state={{post:item}}>
                    <h2 className="font-serif text-black text-lg hover:text-gray-500">{item.title}</h2>
                    <p className="font-oswald text-gray-500 text-sm py-1">{item.desc}</p>
                    <small className="uppercase text-xs text-gray-500">{item.read}</small>
                    </Link>
                </div>
            )}
      </ReusePost>
    </div>
  )
};

export default SecondPost;
