import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-evenly py-4">
      <Link to="/" className="font-bold text-xl">
        Quiz
      </Link>
      <Link to="/html/1" className="font-bold text-xl">
        HTML
      </Link>
      <Link to="/css/1" className="font-bold text-xl">
        CSS
      </Link>
      <Link to="/js/1" className="font-bold text-xl">
        JavaScript
      </Link>
    </div>
  );
}

export default NavBar;
