import React from "react"
import ReusePost from "../../util/ReusePost/ReusePost";
import { Link } from "react-router-dom";

const shareData = [
    {
        "id": "1",
        "title": "Neil Gaiman Responds to Explosive Report of Sexual Assault",
        "image": "share1.webp",
        "author": "Staff Reporter",
        "publishedDate": "2024-01-20",
        "desc": "Renowned author Neil Gaiman has responded to recent allegations of sexual assault reported in the media. In his official statement, Gaiman strongly denied the accusations, emphasizing his commitment to truth and accountability. The article delves into the timeline of events, reactions from the literary community, and the potential impact on his career.",
        "tags": ["Neil Gaiman", "Sexual Assault", "Literature", "News"],
        "category": "Entertainment"
    },
    {
        "id": "2",
        "title": "New Obesity Definition Challenges Current Use of B.M.I.",
        "image": "share2.webp",
        "readTime": "4 min read",
        "author": "Dr. Emily Carter",
        "publishedDate": "2024-02-10",
        "desc": "A new definition of obesity is challenging the long-held reliance on Body Mass Index (B.M.I.) as a health metric. Health experts argue that B.M.I. fails to account for critical factors such as muscle mass, genetics, and lifestyle, calling for a more comprehensive approach to obesity diagnosis and treatment.",
        "tags": ["Health", "Obesity", "B.M.I.", "Science"],
        "category": "Health"
    },
    {
        "id": "3",
        "title": "Southern Methodist University Wants to Sever Ties to Its Church. Can the Church Stop It?",
        "image": "share3.webp",
        "readTime": "6 min read",
        "author": "Mark Johnson",
        "publishedDate": "2024-03-05",
        "desc": "Southern Methodist University (SMU) is seeking to end its affiliation with the United Methodist Church, citing the need for greater institutional independence. The church, however, holds significant influence and is pushing back against the move. The article explores the historical ties, legal implications, and potential outcomes of the dispute.",
        "tags": ["Education", "Religion", "University", "Legal"],
        "category": "Education"
    },
    {
        "id": "4",
        "title": "More Americans, Risking Ruin, Drop Their Home Insurance",
        "image": "share4.webp",
        "readTime": "4 min read",
        "author": "Sarah Thompson",
        "publishedDate": "2024-03-18",
        "desc": "A growing number of Americans are choosing to forgo home insurance, putting themselves at significant financial risk. Rising premiums and economic hardships are forcing homeowners to weigh the costs and benefits of coverage. Experts warn that the lack of insurance could have devastating consequences in the face of natural disasters or accidents.",
        "tags": ["Home Insurance", "Finance", "Risk Management"],
        "category": "Finance"
    }
]


const MostShared = () => {
    return (
        <ReusePost data={shareData}>
            {(item) => (
                <Link to={`/${item.id}`} className="cursor-pointer flex gap-2 justify-between">
                    <div className="w-3/4">
                        <h2 className="font-serif text-black hover:text-gray-600">{item.title}</h2>
                        {item.readTime && <small className="uppercase text-xs text-gray-600">{item.readTime}</small>}
                    </div>
                    <img src={item.image} alt="" className="w-24 h-24" />
                </Link>
            )}
        </ReusePost>
    )
};

export default MostShared;
