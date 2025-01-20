import React from "react";

const opinionData = [
    {
        id: '1',
        title: 'U.S. Men’s Soccer Defeats Venezuela in Friendly Match to Open 2025',
        read: 'From The Athletic',
    },
    {
        id: '2',
        title: 'Inside South Korean Leader Yoon Suk Yeol’s Life in Jail',
        read: '4 min read'
    },
    {
        id: '3',
        book: 'DealBook',
        newsletter: 'Newsletter',
        title: 'How Politics Created a Vibe Shift for the World Economic Forum',
        read: '7 min read'
    },
    {
        id: '4',
        title: 'Thousands of Capital One Customers Are Locked Out of Accounts for Days',
        read: '2 min read'
    },
    {
        id: '5',
        title: 'Sun, Storms, and Boos: Seven Days at the Australian Open',
        read: 'From The Athletic'
    }
];

const RightPost = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:pl-5">
            {opinionData?.map((item, index) => (
                <div 
                    key={item.id} 
                    className={`pr-5 lg:pr-0 ${index % 2 !== 0 ? 'md:pl-5 lg:pl-0 md:border-l lg:border-l-0' : ''}`}
                >
                    <div className="content-wrapper">
                        <h2 className="font-serif text-black hover:text-gray-600">{item.title}</h2>
                        <small className="uppercase text-xs text-gray-600">{item.read}</small>
                    </div>
                    {index !== opinionData.length - 1 && <div className="divider"></div>}
                </div>
            ))}
        </div>
    );
};

export default RightPost;
