import React from "react"
import ReusePost from "../../util/ReusePost/ReusePost";
import { Link } from "react-router-dom";

const opinionData = [
    {
        "id": "1",
        "image" : "opinion.webp",
        "author": "Patrick Healy, Kristen Soltis Anderson and Adrian J. Rivera",
        "title": "These 12 Men Who Backed Trump Want a Different Kind of America",
        "desc": "This article delves into the perspectives of 12 men who supported former President Donald Trump and explores their vision for America. The authors analyze their motivations, values, and the societal changes they desire, offering a comprehensive look into the political and cultural aspirations of this group.",
        "published_date": "2025-01-29"
    },
    {
        "id": "2",
        "image" : "opinion.webp",
        "author": "Parinitha R. Sastry and Ishita Sen",
        "title": "We Have to Stop Underwriting People Who Move to Climate Danger Zones",
        "readTime": "4 min read",
        "desc": "This thought-provoking piece addresses the growing issue of people relocating to areas prone to climate disasters. The authors argue that government policies and financial support should discourage such moves and instead promote climate-resilient living to prevent future economic and environmental burdens.",
        "published_date": "2025-01-29"
    },
    {
        "id": "3",
        "image" : "opinion.webp",
        "author": "David Brooks",
        "title": "We Deserve Pete Hegseth",
        "readTime": "6 min read",
        "desc": "David Brooks presents an insightful commentary on Pete Hegseth’s influence on American conservatism. The article discusses his views on patriotism, national identity, and his impact on political discourse, questioning whether his ideas align with the nation’s evolving values.",
        "published_date": "2025-01-29"
    },
    {
        "id": "4",
        "image" : "opinion.webp",
        "author": "Pamela Paul",
        "title": "The Decline in Geriatric Care Hurts Us All",
        "readTime": "4 min read",
        "desc": "Pamela Paul sheds light on the declining state of geriatric healthcare and its consequences on society. The article explores the challenges faced by aging populations, the lack of sufficient medical support, and the urgent need for policy changes to address these pressing issues.",
        "published_date": "2025-01-29"
    }
]


const Opinion = () => {
    return (
        <ReusePost data={opinionData}>
            {
                (item) => (
                    <Link to={`/content/${item.id}`} state={{post:item}} className="cursor-pointer">
                        <p className="uppercase text-gray-600 text-xs">{item.author}</p>
                        <h2 className="font-oswald text-black text-lg hover:text-gray-600">{item.title}</h2>
                        <small className="uppercase text-xs text-gray-600">{item.readTime}</small>
                    </Link>
                )
            }
        </ReusePost>
    )
};

export default Opinion;
