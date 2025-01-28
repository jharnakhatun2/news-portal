import React from "react"
import { Link } from "react-router-dom";

const watchData = [
  {
    "id": "1",
    "image": "watch1.webp",
    "category": "Book Review",
    "title": "She Threw a Great Party. And No Matter Your Party, You Were Invited.",
    "readTime": "4 min read",
    "short_desc": "A captivating story about a host whose parties bridge all political divides.",
    "desc": "Dive into this enthralling book review where the author explores a novel that revolves around a charming host and her legendary parties, bringing together people from across the political spectrum. The story intricately weaves humor, drama, and a message of unity in divided times.",
    "author": "Jane Doe",
    "published_date": "2025-01-20"
  },
  {
    "id": "2",
    "image": "watch2.webp",
    "title": "The Shows and Movies Readers Loved in 2024",
    "readTime": "11 min read",
    "short_desc": "Discover the top shows and movies that captured audiences' hearts last year.",
    "desc": "A detailed roundup of the most beloved shows and movies of 2024. From heartwarming dramas to adrenaline-pumping thrillers, explore why these titles became fan favorites. This comprehensive guide includes insights into streaming trends and viewer feedback.",
    "author": "John Smith",
    "published_date": "2025-01-15"
  },
  {
    "id": "3",
    "image": "watch3.webp",
    "category": "Book Review",
    "title": "A Sex Tape, a Senate Race and a Centuries-Old Family Curse",
    "readTime": "4 min read",
    "short_desc": "A whirlwind tale of scandal, politics, and family drama.",
    "desc": "This review delves into a gripping novel about a modern-day political campaign marred by a shocking sex tape and haunted by a centuries-old family curse. The story masterfully combines suspense, wit, and a critique of societal norms.",
    "author": "Emily Carter",
    "published_date": "2025-01-18"
  },
  {
    "id": "4",
    "image": "watch4.webp",
    "category": "Movie Review",
    "title": "12 David Lynch Titles and Where You Can Stream Them",
    "readTime": "8 min read",
    "short_desc": "A guide to exploring the surreal and iconic works of David Lynch.",
    "desc": "This review provides an in-depth look at 12 must-watch David Lynch titles, from cult classics to critically acclaimed masterpieces. Learn where to stream these cinematic gems and gain insights into the unique vision of this legendary filmmaker.",
    "author": "Sophia Brown",
    "published_date": "2025-01-22"
  }
]


const WatchRead = () => {
    return (
        <>
            <h2 className="font-sans text-black font-medium pt-3">What to Watch and Read</h2>
            <div className="pt-3 pb-5">
                <div className="grid grid-cols-2 gap-5 ">
                    {watchData?.map(item =>(
                        <Link to={`/${item.id}`} key={item.id} state={{ post: item }} >
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
