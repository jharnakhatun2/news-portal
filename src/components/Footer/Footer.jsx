import React from "react"

const Footer = () => {
  return (
   <div className="border-double border-t-4">
    <footer className="footer py-10">
  <nav className="text-sm font-sans">
    <h6 className="text-md uppercase text-black">News</h6>
    <a className="link link-hover">Home Page</a>
    <a className="link link-hover">U.S.</a>
    <a className="link link-hover">World</a>
    <a className="link link-hover">Politics</a>
    <a className="link link-hover">New York</a>
    <a className="link link-hover">Education</a>
    <a className="link link-hover">Sports</a>
    <a className="link link-hover">Business</a>
    <a className="link link-hover">Tech</a>
  </nav>
  <nav className="text-sm font-sans">
    <h6 className="text-md uppercase text-black">Arts</h6>
    <a className="link link-hover">Book Review</a>
    <a className="link link-hover">Best Sellers Book List</a>
    <a className="link link-hover">Dance</a>
    <a className="link link-hover">Movies</a>
    <a className="link link-hover">Music</a>
    <a className="link link-hover">Television</a>
    <a className="link link-hover">Theater</a>
    <a className="link link-hover">Visual Arts</a>
  </nav>
  <nav className="text-sm font-sans">
    <h6 className="text-md uppercase text-black">Lifestyle</h6>
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
  </nav>
  <nav className="text-sm font-sans">
    <h6 className="text-md uppercase text-black">Opinion</h6>
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
  </nav>
  <nav className="text-sm font-sans">
    <h6 className="text-md uppercase text-black">Social</h6>
    <a className="link link-hover">Twitter</a>
    <a className="link link-hover">Instagram</a>
    <a className="link link-hover">Facebook</a>
    <a className="link link-hover">GitHub</a>
  </nav>
</footer>
<footer className="footer items-center border-base-300 border-t py-4 text-xs">
  <aside className="grid-flow-col items-center">
    
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Jharna khatun</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
      </svg>
    </a>
    <a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="fill-current">
        <path
          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
      </svg>
    </a>
  </nav>
</footer>
   </div>
  )
};

export default Footer;
