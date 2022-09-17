import axios from "axios";
import { useEffect, useState } from "react";

export default function useQuizes(url = "") {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://quiz-app-doel.onrender.com${url}`)
      .then((response) => {
        setQuestions(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [url]);

  return [questions, loading, error];
}
