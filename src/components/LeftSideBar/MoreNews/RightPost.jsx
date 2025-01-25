import React from "react";
import { Link } from "react-router-dom";

const opinionData = [
    {
      "id": "1",
      "title": "U.S. Men’s Soccer Defeats Venezuela in Friendly Match to Open 2025",
      "desc": "The U.S. Men’s National Soccer Team kicked off 2025 with a dominant performance against Venezuela in a friendly match. The match, which showcased the team's emerging talent and tactical improvements, set a positive tone for their upcoming international fixtures. The team's victory was marked by key goals and solid team play, highlighting their readiness for more competitive challenges ahead.",
      "read": "From The Athletic"
    },
    {
      "id": "2",
      "title": "Inside South Korean Leader Yoon Suk Yeol’s Life in Jail",
      "desc": "This in-depth article explores the life of South Korean leader Yoon Suk Yeol, detailing the circumstances that led to his time in jail. Offering a unique perspective, the article dives into the challenges he faced during his incarceration, his political maneuverings, and the wider implications for South Korean politics. A closer look at the personal and professional impacts of his life behind bars.",
      "read": "4 min read"
    },
    {
      "id": "3",
      "title": "How Politics Created a Vibe Shift for the World Economic Forum",
      "desc": "This article discusses the political shifts that have influenced the tone and atmosphere at the World Economic Forum (WEF). The WEF has always been a platform for global leaders to discuss critical economic issues, but recent political changes have altered its dynamic, making it a hotspot for geopolitical discussions. The piece delves into how this shift has affected the Forum's credibility and purpose in recent years.",
      "book": "DealBook",
      "newsletter": "Newsletter",
      "read": "7 min read"
    },
    {
      "id": "4",
      "title": "Thousands of Capital One Customers Are Locked Out of Accounts for Days",
      "desc": "A major security issue has left thousands of Capital One customers unable to access their accounts for days. The article provides a detailed account of the situation, covering the technical failure, the company's response, and how affected customers dealt with the crisis. It also touches on the broader implications for cybersecurity in the banking industry and the trust customers place in financial institutions.",
      "read": "2 min read"
    },
    {
      "id": "5",
      "title": "Sun, Storms, and Boos: Seven Days at the Australian Open",
      "desc": "This article takes readers behind the scenes at the Australian Open, offering a firsthand account of the highs and lows experienced by players, fans, and organizers. From scorching sun to unexpected storms, the tournament presented challenges at every turn. The piece also touches on the crowd’s emotional reactions, making it a lively recount of one of tennis's most iconic events.",
      "read": "From The Athletic"
    }
  ]
  

const RightPost = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:pl-5">
            {opinionData?.map((item, index) => (
                <Link to={`/${item.id}`} 
                    key={item.id} 
                    className={`pr-5 lg:pr-0 ${index % 2 !== 0 ? 'md:pl-5 lg:pl-0 md:border-l lg:border-l-0' : ''}`}
                >
                    <div className="content-wrapper">
                        {item.book && item.newsletter ? <div className="text-gray-600"><small className="uppercase text-xs pr-2 text-black">{item.book}</small><small>{item.newsletter}</small></div> :''}
                        <h2 className="font-serif text-black hover:text-gray-600">{item.title}</h2>
                        <small className="uppercase text-xs text-gray-600">{item.read}</small>
                    </div>
                    {index !== opinionData.length - 1 && <div className="divider"></div>}
                </Link>
            ))}
        </div>
    );
};

export default RightPost;
