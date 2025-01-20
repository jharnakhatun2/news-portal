import React from "react"
import ReusePost from "../../../util/ReusePost/ReusePost";

const secondData = [
    {
        'id': '1',
        'title': 'Winter Storm Expected to Bring at Least 6 Inches of Snow to the Northeast',
        'desc': 'The snow is likely to fall on Sunday from the Appalachians to New England. New York City may see its largest snowfall in years.',
        'read': '3 min read'
    },
    {
        'id': '2',
        'title': 'When the Retirement Community Goes Bankrupt',
        'desc' : 'It doesn’t happen often. But when it does, some residents risk losing everything.',
        'read': '5 min read'
    },
    {
        'id': '3',
        'title': 'New York Rescuers Break the Ice to Save Moose From a Frozen Lake',
        'desc' : 'The bull moose had fallen into a lake in the Adirondacks and had been in the frigid waters for about two hours before rescuers arrived to free it.',
        'read': '3 min read'
    }
]
const LeftPost = () => {
    return (
        <div className="md:w-4/5">
            <ReusePost data={secondData}>
                {(item) => (
                    <div className="cursor-pointer">
                        <h2 className="font-serif font-medium text-black text-lg hover:text-gray-600">{item.title}</h2>
                        <p className="font-sans text-gray-500">{item.desc}</p>
                        <small className="uppercase text-xs text-gray-600">{item.read}</small>
                    </div>
                )}
            </ReusePost>
        </div>
    )
};

export default LeftPost;
