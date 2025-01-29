import React from "react"
import BottomFooter from "./BottomFooter";

const Footer = () => {
  return (
    <div className="border-double border-t-4">
      <footer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-5 md:py-10">
        <nav className="text-sm font-sans">
          <h6 className="text-md font-medium uppercase text-black">News</h6>
          <div className="flex flex-col space-y-2 py-2">
            <a className="link link-hover">Home Page</a>
            <a className="link link-hover">U.S.</a>
            <a className="link link-hover">World</a>
            <a className="link link-hover">Politics</a>
            <a className="link link-hover">New York</a>
            <a className="link link-hover">Education</a>
            <a className="link link-hover">Sports</a>
            <a className="link link-hover">Business</a>
            <a className="link link-hover">Tech</a>
          </div>
        </nav>
        <nav className="text-sm font-sans">
          <h6 className="text-md font-medium uppercase text-black">Arts</h6>
          <div className="flex flex-col space-y-2 py-2">
            <a className="link link-hover">Book Review</a>
            <a className="link link-hover">Best Sellers Book List</a>
            <a className="link link-hover">Dance</a>
            <a className="link link-hover">Movies</a>
            <a className="link link-hover">Music</a>
            <a className="link link-hover">Television</a>
            <a className="link link-hover">Theater</a>
            <a className="link link-hover">Visual Arts</a>
          </div>
        </nav>
        <nav className="text-sm font-sans">
          <h6 className="text-md font-medium uppercase text-black">Lifestyle</h6>
          <div className="flex flex-col space-y-2 py-2">
            <a className="link link-hover">Health</a>
            <a className="link link-hover">Well</a>
            <a className="link link-hover">Food</a>
            <a className="link link-hover">Restaurant Reviews</a>
            <a className="link link-hover">Love</a>
            <a className="link link-hover">Travel</a>
            <a className="link link-hover">Style</a>
            <a className="link link-hover">Fashion</a>
            <a className="link link-hover">Real Estate</a>
            <a className="link link-hover">T Magazine</a>
          </div>
        </nav>
        <nav className="text-sm font-sans">
          <h6 className="text-md font-medium uppercase text-black">Opinion</h6>
          <div className="flex flex-col space-y-2 py-2">
            <a className="link link-hover">Today's Opinion</a>
            <a className="link link-hover">Columnists</a>
            <a className="link link-hover">Editorials</a>
            <a className="link link-hover">Letters</a>
            <a className="link link-hover">Guest Essays</a>
            <a className="link link-hover">Op-Docs</a>
            <a className="link link-hover">Style</a>
            <a className="link link-hover">Sunday Opinion</a>
            <a className="link link-hover">Opinion Video</a>
            <a className="link link-hover">Opinion Audio</a>
          </div>
        </nav>
        <nav className="text-sm font-sans">
          <h6 className="text-md font-medium uppercase text-black">Social</h6>
          <div className="flex flex-col space-y-2 py-2">
            <a className="link link-hover">Twitter</a>
            <a className="link link-hover">Instagram</a>
            <a className="link link-hover">Facebook</a>
            <a className="link link-hover">GitHub</a>
          </div>
        </nav>
      </footer>
      <BottomFooter />
    </div>
  )
};

export default Footer;
