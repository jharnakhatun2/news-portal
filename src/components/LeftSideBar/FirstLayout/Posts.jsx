import React from "react"
import ReusePost from "../../../util/ReusePost/ReusePost";
import { Link } from "react-router-dom";

const postData = [
    {
        "id": "1",
        "title": "Israel and Hamas Work Out Differences That Had Delayed Deal, Netanyahu Says",
        "short_desc": "Prime Minister Benjamin Netanyahu of Israel said he had called a meeting of his security cabinet for Friday to vote on the Gaza cease-fire deal.",
        "read": "3 min read",
        "content": "After weeks of negotiations, Israel and Hamas have finally resolved key disagreements that were holding up the cease-fire agreement. Prime Minister Benjamin Netanyahu announced that a crucial security cabinet meeting is set for Friday, where the deal's approval will be discussed. The cease-fire aims to bring temporary relief to the region and potentially pave the way for long-term peace efforts. However, concerns remain over the sustainability of the agreement amid ongoing tensions and differing political interests on both sides.",
        "author": "John Doe",
        "published_date": "2025-01-25"
    },
    {
        "id": "2",
        "topic": "Analysis",
        "title": "Benjamin Netanyahu Faces a Political Crisis Over the Gaza Cease-Fire Deal",
        "short_desc": "With his far-right coalition partners opposing an end to the war and threatening to quit, the Israeli prime minister may have to choose: them or the agreement.",
        "read": "5 min read",
        "content": "Prime Minister Benjamin Netanyahu is facing mounting pressure as his far-right coalition partners strongly oppose the proposed Gaza cease-fire deal. With threats to withdraw from the coalition, Netanyahu is caught between maintaining political stability and securing a peace agreement that could ease tensions in the region. The ongoing debate has sparked intense discussions within the government, with some officials urging a compromise while others remain steadfast in their opposition to any cease-fire. Analysts suggest that Netanyahu's decision could significantly impact his political future and Israel's strategic direction.",
        "author": "Jane Smith",
        "published_date": "2025-01-25"
    }
]

const Posts = () => {
    return (
        <div className="md:w-2/5 pb-5 md:pb-0">
        <ReusePost data={postData}>
            {(item) => (
                <div className="cursor-pointer">
                    <Link to={`/${item.id}`}>
                    <p className="uppercase text-black text-xs">{item.topic}</p>
                    <h2 className="font-serif text-black text-xl hover:text-gray-500">{item.title}</h2>
                    <p className="font-oswald text-gray-500 text-sm py-1">{item.short_desc}</p>
                    <small className="uppercase text-xs text-gray-500">{item.read}</small>
                    </Link>
                </div>
            )}
        </ReusePost>
        </div>
    )
};

export default Posts;
