import React from "react"

const data = [
    {
        'id': '1',
        'title': 'Neil Gaiman Responds to Explosive Report of Sexual Assault',
        'image' : 'share1.webp'
    },
    {
        'id': '2',
        'title': 'New Obesity Definition Challenges Current Use of B.M.I.',
        'read': '4 min read',
        'image' : 'share2.webp'
    },
    {
        'id': '3',
        'title': 'Southern Methodist University Wants to Sever Ties to Its Church. Can the Church Stop It?',
        'read': '6 min read',
        'image' : 'share3.webp'
    },
    {
        'id': '4',
        'title': 'More Americans, Risking Ruin, Drop Their Home Insurance',
        'read': '4 min read',
        'image' : 'share4.webp'
    },
    {
        'id': '5',
        'title': 'Washington Post Employees Plead for a Summit With Owner Jeff Bezos',
        'read': '2 min read',
        'image' : 'share5.webp'
    },
]

const MostShared = () => {
    return (
        <div>
            {data.map((item, index) => (
                <div key={item.id} >
                    <div className="cursor-pointer flex gap-2 justify-between">
                        <div className="w-3/4">
                        <h2 className="font-serif text-black hover:text-gray-600">{item.title}</h2>
                        <small className="uppercase text-xs text-gray-600">{item.read}</small>
                        </div>
                        <img src={item.image} alt=""  className="w-24 h-24"/>
                    </div>
                    {index !== data.length - 1 && <div className="divider"></div> }
                </div>
            ))}
        </div>
    )
};

export default MostShared;
