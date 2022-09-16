import { useEffect, useState } from "react";

export default function useQuizes(url = "") {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000${url}`)
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, [url]);

  return questions;
}
