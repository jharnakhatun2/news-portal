import React from "react"
import ReusePost from "../../../util/ReusePost/ReusePost";
import { Link } from "react-router-dom";

const secondData = [
    {
      "id": "1",
      "image" : "morenews.webp",
      "author" : "Haiyun Jiang for The New York Times",
      "title": "Winter Storm Expected to Bring at Least 6 Inches of Snow to the Northeast",
      "short_desc": "The snow is likely to fall on Sunday from the Appalachians to New England. New York City may see its largest snowfall in years.",
      "desc": "A major winter storm is predicted to blanket the Northeast with significant snowfall, potentially reaching up to 6 inches. The storm will sweep across the region, affecting areas from the Appalachians to New England, with New York City at risk of experiencing its heaviest snowfall in years. Authorities are advising residents to prepare for hazardous travel conditions, power outages, and possible disruptions to daily activities as the storm intensifies. Meteorologists are closely monitoring the storm's progression to provide updated forecasts.",
      "readTime": "3 min read",
      "category": "Live - 1 hour ago",
      "published_date": "2025-01-26"
    },
    {
      "id": "2",
      "image" : "morenews.webp",
      "author" : "Haiyun Jiang for The New York Times",
      "title": "When the Retirement Community Goes Bankrupt",
      "short_desc": "It doesn’t happen often. But when it does, some residents risk losing everything.",
      "desc": "When a retirement community faces financial collapse, the impact on residents can be devastating. In most cases, residents have invested their savings and their futures into these facilities, relying on them for security in their later years. However, when a community goes bankrupt, residents may face the loss of their homes, access to healthcare, and essential services. The article explores the rare but serious consequences of bankruptcy in retirement communities and how residents and their families can protect themselves from such risks. Legal experts and financial advisors weigh in on how these situations can be avoided and what residents should do if they find themselves in this position.",
      "readTime": "5 min read",
      "category": "Recorded",
      "published_date": "2025-01-26"
    },
    {
      "id": "3",
      "image" : "morenews.webp",
      "author" : "Haiyun Jiang for The New York Times",
      "title": "New York Rescuers Break the Ice to Save Moose From a Frozen Lake",
      "short_desc": "The bull moose had fallen into a lake in the Adirondacks and had been in the frigid waters for about two hours before rescuers arrived to free it.",
      "desc": "In a dramatic rescue operation, New York state officials and volunteers successfully saved a bull moose that had fallen through the ice into a frozen lake in the Adirondacks. The moose had been struggling in the frigid waters for nearly two hours before rescuers arrived on the scene. The team used specialized equipment and worked in freezing conditions to break the ice and pull the animal to safety. Experts speculate that the moose may have been lured by an open patch of water, which caused the accident. This heartwarming rescue highlights the dedication of wildlife rescuers and the challenges they face in protecting animals in the wild during harsh winter conditions.",
      "readTime": "3 min read",
      "category": "Live - 30 minutes ago",
      "published_date": "2025-01-26"
    }
  ]
  

const LeftPost = () => {
    return (
        <div className="md:w-4/5">
            <ReusePost data={secondData}>
                {(item) => (
                    <div className="cursor-pointer">
                        <Link to={`/${item.id}`} state={{post:item}}>
                        <h2 className="font-serif font-medium text-black text-lg hover:text-gray-600">{item.title}</h2>
                        <p className="font-sans text-gray-500">{item.short_desc}</p>
                        <small className="uppercase text-xs text-gray-600">{item.readTime}</small>
                        </Link>
                    </div>
                )}
            </ReusePost>
        </div>
    )
};

export default LeftPost;
