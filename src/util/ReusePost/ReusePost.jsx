import React from "react"


const ReusePost = ({data, children}) => {
    return (
        <div>
            {data?.map((item, index) => (
                <div key={item.id}>
                    {children(item)}
                    {index !== data.length - 1 && <div className="divider"></div>}
                </div>
            ))}
        </div>
    )
};

export default ReusePost;
