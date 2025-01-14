// ScoreOverview.js
import React from "react";
import "./ScoreOverview.css";
import BookCall from "../BookCall/BookCall";

const ScoreOverview = ({ overallScore, sectionScores, questions }) => {
  const averageScore = Math.round(
    sectionScores.reduce((sum, score) => sum + score, 0) / sectionScores.length
  );

  return (
    
    <div className="score-overview-container ">
      <div className="score-overview d-flex">
        {/* Score Dial Section */}
        <div className="score-dial ">
          <h3>Score Overview</h3>
          <div className="dial-container">
            <div className="dial"></div>
            <p className="percentage">{overallScore}%</p>
            <p className="status">
              Your Future-Proof Score is{" "}
              {overallScore >= 75
                ? "excellent"
                : overallScore >= 50
                ? "average"
                : "poor"}
            </p>
          </div>
        </div>
        {/* Average Score and Future-Proof Score Section */}
        <div className="score-summary p-5">
          <div className="average-score">
            <p>{averageScore}%</p>
            <p className="status">
              {overallScore >= 75
                ? "Excellent"
                : overallScore >= 50
                ? "Good"
                : "Poor"}{" "}
              Future-Proof Score
            </p>
          </div>
          <div className="future-proof-score">
            <h4>{overallScore}%</h4>
            <p className="status">
              {averageScore >= 75
                ? "Excellent"
                : averageScore >= 50
                ? "Good"
                : "Poor"}{" "}
              Average Score
            </p>
          </div>
        </div>
        {/* Report Section */}
        <div className="report-section">
          <h4>Ready to dive deeper?</h4>
          <p>
            Get a comprehensive paid report tailored to your business,
            including:
          </p>
          <ul>
            <li>Industry-specific benchmarks.</li>
            <li>A roadmap for growth and innovation.</li>
            <li>Actionable strategies for each category.</li>
          </ul>
          <button className="report-button">
            Book Your Detailed Report Now
          </button>
        </div>
      </div>
      {/* Section Cards */}
      <div className="container">
        <div className="score-cards row mt-5">
          {questions.map((question, index) => (
            <div
              key={index}
              className={`score-card ${
                sectionScores[index] >= 12
                  ? "excellent"
                  : sectionScores[index] >= 7
                  ? "good"
                  : "poor"
              }`}
            >
              <div className="d-flex justify-content-between">
                <h5>{question.title}</h5>
                <button className="borderclass">
                  <strong>{sectionScores[index]}%</strong>
                </button>
              </div>
              <p>
                {sectionScores[index] >= 12
                  ? "Excellent"
                  : sectionScores[index] >= 7
                  ? "Good"
                  : "Poor"}
              </p>
              <p className="w-100">
                Analysis of {question.title.toLowerCase()} shows{" "}
                {sectionScores[index] >= 12
                  ? "strong"
                  : sectionScores[index] >= 7
                  ? "adequate"
                  : "needs improvement"}{" "}
                efforts.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScoreOverview;
