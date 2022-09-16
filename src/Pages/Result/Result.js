import React, { useContext } from "react";
import { ScoreContext } from "../../contexts/ScoreContext";

function Result() {
  const { score } = useContext(ScoreContext);
  return (
    <div className="w-6/12 flex justify-center items-center mx-auto h-[calc(100%-6.25rem)] bg-white bg-opacity-90">
      <h3 className="font-bold text-4xl text-green-400">
        Your score is: {score}
      </h3>
    </div>
  );
}

export default Result;
