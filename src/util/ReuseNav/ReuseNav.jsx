import React from "react"

const ReuseNav = ({ data }) => {
    return (
        <nav className="hidden sm:block">
            <ul className="flex justify-between text-sm">
                {data?.map((item, index) => (
                    <li
                        key={item.id}
                        className={`cursor-pointer text-xs font-serif ${index === 0 ? 'font-bold' : ''}`}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default ReuseNav;
