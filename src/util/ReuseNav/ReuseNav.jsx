import React from "react"

const ReuseNav = ({ data }) => {
    return (
        <nav className="hidden sm:block pt-3">
            <ul className="flex justify-between text-sm">
                {data?.map((item, index) => (
                    <li
                        key={item.id}
                        className={`cursor-pointer text-xs font-serif ${index === 0 ? 'font-bold text-black' : ''}`}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default ReuseNav;
