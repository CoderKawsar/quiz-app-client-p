import React, { useContext } from "react";
import { useHref, useNavigate } from "react-router-dom";
import { ScoreContext } from "../../contexts/ScoreContext";
import useQuizes from "../../hooks/useQuizes";

function Quiz() {
  const { setScore } = useContext(ScoreContext);

  const navigate = useNavigate();
  const currentUrl = useHref();
  const question = useQuizes(currentUrl);

  const currentUrlSplitted = currentUrl.split("/");

  const numberOfQuestions = useQuizes(`/${currentUrlSplitted[1]}`).length;
  const currentQuestionNumber = currentUrlSplitted[2];
  if (currentQuestionNumber === "1") {
    setScore(0);
  }

  const handleAnswered = (event) => {
    event.preventDefault();
    if (event.target.answer.value === question.correctAnswer) {
      setScore((prevState) => prevState + 1);
    }

    let nextUrl;
    if (parseInt(currentUrlSplitted[2]) >= numberOfQuestions) {
      nextUrl = "/result";
    } else {
      const nextQuestionNumber = parseInt(currentUrlSplitted[2]) + 1;
      nextUrl = "/" + currentUrlSplitted[1] + "/" + nextQuestionNumber;
    }
    navigate(nextUrl);
  };

  return (
    <div className="w-6/12 flex px-4 justify-center items-center mx-auto h-[calc(100%-6.25rem)] bg-white bg-opacity-90 rounded">
      <div>
        <h2 className="mb-1">
          <span className="font-bold">Question:</span> {question.question}
        </h2>
        <h6 className="mb-2">
          <code>{question?.code}</code>
        </h6>
        <form onSubmit={handleAnswered}>
          {question?.answers?.map((option, index) => (
            <div className="mb-1" key={index}>
              <input
                type="radio"
                name="answer"
                className="mb-2"
                value={Object.keys(option)[0]}
              />
              <label htmlFor="" className="ml-2">
                {option?.a || option?.b || option?.c || option?.d}
              </label>
              <br />
            </div>
          ))}
          <button
            type="submit"
            className="mt-6 rounded px-4 py-2 text-white bg-lime-700 hover:bg-lime-600 hover:text-black"
          >
            Next Question
          </button>
        </form>
      </div>
    </div>
  );
}

export default Quiz;
