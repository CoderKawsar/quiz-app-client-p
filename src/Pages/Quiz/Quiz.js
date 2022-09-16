import React from "react";
import { Link, useHref } from "react-router-dom";
import useQuizes from "../../hooks/useQuizes";

function Quiz() {
  const currentUrl = useHref();
  const currentUrlSplitted = currentUrl.split("/");

  const question = useQuizes(currentUrl);
  const numberOfQuestions = useQuizes(`/${currentUrlSplitted[1]}`).length;
  const nexUrl =
    parseInt(currentUrlSplitted[2]) >= numberOfQuestions
      ? "/result"
      : `/${currentUrlSplitted[1]}/${parseInt(currentUrlSplitted[2]) + 1}`;
  return (
    <div className="w-6/12 flex justify-center items-center mx-auto h-[calc(100%-6.25rem)] bg-white bg-opacity-90">
      <div>
        <h2 className="mb-1">
          <span className="font-bold">Question:</span> {question.question}
        </h2>
        <h6 className="mb-2">
          <code>{question?.code}</code>
        </h6>
        <form className="">
          {question?.answers?.map((option, index) => (
            <div className="mb-1" key={index}>
              <input
                type="radio"
                name="answer"
                className="mb-2"
                value={
                  (option?.a && "a") ||
                  (option?.b && "b") ||
                  (option?.c && "c") ||
                  (option?.d && "d")
                }
              />
              <label htmlFor="" className="ml-2">
                {option?.a || option?.b || option?.c || option?.d}
              </label>
              <br />
            </div>
          ))}
        </form>
        <div className="text-right">
          <Link to={nexUrl} className="px-4 py-2 bg-red-100">
            Next Question
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
