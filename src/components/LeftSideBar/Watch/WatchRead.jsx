import React from "react"
import { Link } from "react-router-dom";

const watchData = [
    {
        "id": "1",
        "image": "watch1.webp",
        "category": "Book Review",
        "title": "She Threw a Great Party. And No Matter Your Party, You Were Invited.",
        "readTime": "4 min read"
    },
    {
        "id": "2",
        "image": "watch2.webp",
        "title": "The Shows and Movies Readers Loved in 2024",
        "readTime": "11 min read"
    },
    {
        "id": "3",
        "image": "watch3.webp",
        "category": "Book Review",
        "title": "A Sex Tape, a Senate Race and a Centuries-Old Family Curse",
        "readTime": "4 min read"
    },
    {
        "id": "4",
        "image": "watch4.webp",
        "category": "Movie Review",
        "title": "12 David Lynch Titles and Where You Can Stream Them",
        "readTime": "8 min read"
    }
]

const WatchRead = () => {
    return (
        <>
            <h2 className="font-sans text-black font-medium pt-3">What to Watch and Read</h2>
            <div className="pt-3 pb-5">
                <div className="grid grid-cols-2 gap-5 ">
                    {watchData?.map(item =>(
                        <Link to={`/${item.id}`} key={item.id} >
                        <div className="cursor-pointer md:flex flex-row-reverse md:gap-5 justify-between md:divide-y pt-2">
                        <img src={item.image} alt="" className="md:w-32 md:h-24" />
                        <div className="w-3/4">
                            <small className="uppercase text-xs text-gray-600">{item.category}</small>
                            <h2 className="font-serif text-black">{item.title}</h2>
                            <small className="uppercase text-xs text-gray-600">{item.readTime}</small>
                        </div>
                    </div>
                    </Link>
                    ))}  
                </div>              
            </div>
        </>
    )
};

export default WatchRead;
