import React from "react"
import { Link } from "react-router-dom";


const data = [
    {
        "id": "1",
        "title": "André Soltner, Famed Chef at New York’s Lutèce, Dies at 92",
        "short_desc": "Customers returned again and again for his impeccable French dishes at a restaurant that one food critic said “set the gold standard.”",
        "desc": "André Soltner, a celebrated French chef and the driving force behind the famed New York restaurant Lutèce, passed away at the age of 92. Known for his precise and imaginative approach to French cuisine, Soltner became a culinary icon, guiding Lutèce to legendary status in the world of fine dining. The restaurant, which was open for nearly four decades, became a symbol of culinary excellence, attracting some of the most influential food critics and celebrities of the time. Soltner's talent in creating dishes that balanced tradition and innovation earned him countless accolades, including praise from New York Times critic Craig Claiborne, who described Lutèce as 'the gold standard.' His menu was a testament to French gastronomy, featuring dishes that combined delicate techniques with the finest ingredients. Despite the eventual closure of Lutèce in 2004, Soltner's impact on the culinary world endures. His legacy lives on through the many chefs he mentored and the lasting impression he left on the restaurant industry, shaping the way American cuisine embraces French tradition. Soltner's death marks the end of an era for New York’s dining scene, yet his influence on the culinary arts will continue to inspire generations of chefs.",
        "readTime": "5 min read",
        "image": "morenews.webp",
        "author" : "Haiyun Jiang for The New York Times",
        "published_date": "2025-01-26"
      }
      
]

const ImageMore = () => {
    return (
        <>
        {data?.map((item) => (
            <Link to={`/content/${item.id}`} state={{post:item}} key={item.id} className="md:max-w-lg xl:max-w-xl sm:flex flex-col-reverse justify-end xl:items-center md:pl-5 md:border-l cursor-pointer">
            
            <div className="md:py-5">
                <h2 className="font-serif text-black text-lg hover:text-gray-600">{item.title}</h2>
                <p className="font-sans text-gray-500">{item.short_desc}</p>
                <small className="uppercase text-xs text-gray-600">{item.readTime}</small>
            </div>
            <div className=" pt-5 sm:pt-0">
                <img src={item.image} alt={item.title}  />
                <small className="flex justify-end uppercase text-[10px] text-gray-600 pt-1">{item.author}</small>
            </div>
        </Link>
        ))}
        
        </>
    )
};

export default ImageMore;
