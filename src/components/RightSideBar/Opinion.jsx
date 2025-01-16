import React from "react"

const data = [
    {
        'id': '1',
        'author': 'Patrick Healy, Kristen Soltis Anderson and Adrian J. Rivera',
        'title': 'These 12 Men Who Backed Trump Want a Different Kind of America'
    },
    {
        'id': '2',
        'author': 'Parinitha R. Sastry and Ishita Sen',
        'title': 'We Have to Stop Underwriting People Who Move to Climate Danger Zones',
        'read': '4 min read'
    },
    {
        'id': '3',
        'author': 'David Brooks',
        'title': 'We Deserve Pete Hegseth',
        'read': '6 min read'
    },
    {
        'id': '4',
        'author': 'Pamela Paul',
        'title': 'The Decline in Geriatric Care Hurts Us All',
        'read': '4 min read'
    },
]

const Opinion = () => {
    return (
        <div>
            {data.map(item => (
                <>
                    <div key={item.id} className="cursor-pointer">
                        <p className="uppercase text-gray-600 text-xs">{item.author}</p>
                        <h2 className="font-oswald text-black text-lg hover:text-gray-600">{item.title}</h2>
                        <small className="uppercase text-xs text-gray-600">{item.read}</small>
                    </div>
                    <div className="divider"></div>
                </>
            ))}
        </div>
    )
};

export default Opinion;
