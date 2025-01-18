import React from "react"
import ReusePost from "../../../util/ReusePost/ReusePost";

const postData = [
    {
        'id': '1',
        'title': 'Israel and Hamas Work Out Differences That Had Delayed Deal, Netanyahu Says',
        'desc': 'Prime Minister Benjamin Netanyahu of Israel said he had called a meeting of his security cabinet for Friday to vote on the Gaza cease-fire deal.',
        'read': '3 min read'
    },
    {
        'id': '2',
        'topic': 'Analysis',
        'title': 'Benjamin Netanyahu Faces a Political Crisis Over the Gaza Cease-Fire Deal',
        'desc': 'With his far-right coalition partners opposing an end to the war and threatening to quit, the Israeli prime minister may have to choose: them or the agreement.',
        'read': '5 min read'
    }
]

const Posts = () => {
    return (
        <div className="md:w-2/5 pb-5 md:pb-0">
        <ReusePost data={postData}>
            {(item) => (
                <div className="cursor-pointer">
                    <p className="uppercase text-black text-xs">{item.topic}</p>
                    <h2 className="font-serif text-black text-xl hover:text-gray-600">{item.title}</h2>
                    <p className="font-oswald text-gray-600 text-md">{item.desc}</p>
                    <small className="uppercase text-xs text-gray-600">{item.read}</small>
                </div>
            )}
        </ReusePost>
        </div>
    )
};

export default Posts;
