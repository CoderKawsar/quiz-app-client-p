import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ScoreContext } from "../../contexts/ScoreContext";

function Result() {
  const { score } = useContext(ScoreContext);
  return (
    <div className="w-6/12 flex flex-col justify-center items-center mx-auto h-[calc(100%-6.25rem)] bg-white bg-opacity-90">
      <h3 className="font-bold text-4xl text-green-400">
        Your score is: {score}
      </h3>
      <div className="mt-6 rounded px-4 py-2 text-white bg-lime-700 hover:bg-lime-600 hover:text-black">
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
}

export default Result;
