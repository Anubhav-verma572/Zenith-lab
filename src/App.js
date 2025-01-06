import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EvaluationForm from "./Components/EvaluationForm/EvaluationForm";
import Questionnaire from "./Components/Questionnaire/Questionnaire";
import ScoreOverview from "./Components/ScoreOverview/ScoreOverview";
import CongratsUI from "./Components/CongratsUI/CongratsUI";
import FormComponent from "./Components/FormComponent/FormComponent";
import "./App.css";

const App = () => {
  const [overallScore, setOverallScore] = useState(0);
  const [sectionScores, setSectionScores] = useState([]);

  const updateScore = (overall, section) => {
    setOverallScore(overall);
    setSectionScores(section);
  };

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<EvaluationForm />} />
          <Route
            path="/questionnaire"
            element={<Questionnaire updateScore={updateScore} />}
          />
          <Route path="/quest" element={<CongratsUI />} />
          <Route path="/FormComponent" element={<FormComponent />} />
          <Route
            path="/score-overview"
            element={
              <ScoreOverview
                overallScore={overallScore}
                sectionScores={sectionScores}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
