import React from "react"
import Border from "../../util/Border/Border";
import Opinion from "../RightSideBar/Opinion";
import SliderTwo from "../RightSideBar/SliderTwo";
import MostShared from "../RightSideBar/MostShared";
import SliderOne from "../RightSideBar/SliderOne";
import { Link } from "react-router-dom";

const firstRowData = [
  {
    'id' : '1',
    'image' : 'rightFirst.webp',
    'title' : 'Kobe Bryant Still Reigns Over Los Angeles on Hundreds of Murals',
    'short_desc' : '“There’s always a few athletes that cross over into almost superhero world,” said an artist whose mural became a site of mourning for the N.B.A. star',
    'author' : 'Photo illustration by Margeaux Walter',
    'desc' : 'In the heart of Manhattan’s West Village, a quiet homeowner sought to reclaim some privacy amidst the constant influx of tourists and “Sex and the City” enthusiasts. The iconic brownstone, which served as the exterior for Carrie Bradshaw’s fictional home, has been a must-visit destination for fans of the series for years. However, the unrelenting crowds, incessant photo-taking, and even cases of trespassing led the homeowner to petition for a protective gate. The decision to approve the gate not only ensures peace for the residents but also marks a bittersweet moment for fans who regard the stoop as a pilgrimage site. This change reflects a growing tension between preserving iconic pop culture landmarks and respecting the rights of private property owners.',
    'readTime' : '2 min read',
    "published_date": "2025-01-27"
  }
]

const RightSideBar = () => {
  return (
    <div className="py-5 lg:py-0 lg:max-w-72">
      {/* 1st row */}
      {
        firstRowData?.map((item)=>(
          <Link to={`/${item.id}`} state={{post:item}} key={item.id} className="lg:flex flex-col-reverse space-y-3 lg:space-y-0">
        <div className="space-y-2 pt-2">
          <h2 className="text-2xl font-serif">{item.title}</h2>
          <p className="text-sm text-gray-600">{item.short_desc}</p>
          <small className="uppercase text-xs text-gray-600">{item.readTime}</small>
        </div>
        <div>
        <img src={item.image} alt="Image/Dragon News" className="w-full" />
        <small className="flex justify-end uppercase text-[10px] text-gray-600 pt-1">{item.author}</small>
        </div>
      </Link>
        ))
      }
      
      <div className="divider"></div>
      <SliderOne />
      <Border />
      {/* 2nd rows */}
      <h2 className="pb-5 font-oswald font-bold pt-3">Opinion</h2>
      <Opinion />
      <div className="divider"></div>
      <SliderTwo />
      <Border />
      {/* 3rd rows */}
      <h2 className="pb-5 font-newsCycle font-bold pt-3">Most Shared</h2>
      <MostShared />
    </div>
  )
};

export default RightSideBar;
