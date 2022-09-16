import { useEffect, useState } from "react";

export default function useQuizes(url = "") {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch(`https://tech-quiz-web.herokuapp.com${url}`)
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, [url]);

  return questions;
}
