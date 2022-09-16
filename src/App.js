import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { ScoreContext } from "./contexts/ScoreContext";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="whole-page md:h-screen">
      <ScoreContext.Provider value={{ score, setScore }}>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/html" element={<Quiz />}></Route>
          <Route path="/html/:id" element={<Quiz />}></Route>
          <Route path="/css" element={<Quiz />}></Route>
          <Route path="/css/:id" element={<Quiz />}></Route>
          <Route path="/js" element={<Quiz />}></Route>
          <Route path="/js/:id" element={<Quiz />}></Route>
          <Route path="/js/:id" element={<Quiz />}></Route>
          <Route path="/result" element={<Result />}></Route>
        </Routes>
      </ScoreContext.Provider>
    </div>
  );
}

export default App;
