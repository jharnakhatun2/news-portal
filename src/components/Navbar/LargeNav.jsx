import React from "react"

const LargeNav = () => {
    return (
        <nav className="border-double border-b-4 hidden lg:block">
            <ul className="flex justify-between text-sm py-3">
                <li>National News</li>
                <li>Breaking News</li>
                <li>Regular News</li>
                <li>International News</li>
                <li>Sports</li>
                <li>Entertainment</li>
                <li>Culture</li>
                <li>Arts</li>
                <li></li>
                </ul>
        </nav>
    )
};

export default LargeNav;
