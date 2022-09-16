import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ScoreContext } from "../contexts/ScoreContext";

function NavBar() {
  const { score } = useContext(ScoreContext);
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
      <p className="font-semibold text-xl">Score({score})</p>
    </div>
  );
}

export default NavBar;
