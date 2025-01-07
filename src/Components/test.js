import React from "react";
import "./ScoreOverview.css";
const ScoreOverview = ({ overallScore, sectionScores, questions }) => {
  // Calculate average score
  const averageScore = Math.round(
    sectionScores.reduce((sum, score) => sum + score, 0) / sectionScores.length
  );
  return (
    <div className="score-overview-container">
      <div className="score-overview">
        {/* Score Dial Section */}
        <div className="score-dial">
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
        <div className="score-summary">
        <div className="average-score">
            <h4>{averageScore}%</h4>
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
          <p>Get a comprehensive paid report tailored to your business, including:</p>
          <ul>
            <li>Industry-specific benchmarks.</li>
            <li>A roadmap for growth and innovation.</li>
            <li>Actionable strategies for each category.</li>
          </ul>
          <button className="report-button">Book Your Detailed Report Now</button>
        </div>
      </div>
      {/* Section Cards */}
      <div className="container mt-5">
        <div className="score-cards row">
          {questions.map((question, index) => (
            <div
              key={index}
              className={`score-card col-lg-3 ${
                sectionScores[index] === 14
                  ? "excellent"
                  : sectionScores[index] === 7
                  ? "good"
                  : "poor"
              }`}
            >
              <h5>{question.title}</h5>
              <p>
                {sectionScores[index] === 14
                  ? "Excellent"
                  : sectionScores[index] === 7
                  ? "Good"
                  : "Poor"}
              </p>
              <p>
                <strong>{sectionScores[index]}%</strong>
              </p>
              <p>
                Analysis of {question.title.toLowerCase()} shows{" "}
                {sectionScores[index] === 14
                  ? "strong"
                  : sectionScores[index] === 7
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