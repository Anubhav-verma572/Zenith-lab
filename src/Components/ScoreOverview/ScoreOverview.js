// ScoreOverview.js
import React from "react";
import "./ScoreOverview.css";
import BookCall from "../BookCall/BookCall";
import GaugeChart from 'react-gauge-chart';
const ScoreOverview = ({ overallScore, sectionScores, questions }) => {
  const averageScore = Math.round(
    sectionScores.reduce((sum, score) => sum + score, 0) / sectionScores.length
  );

  return (
    <div className="score-overview-container ">
      <div className="score-overview d-flex container">
        {/* Score Dial Section */}
    <div className="d-flex combine-e">
    <div
      style={{
        position: "relative",
       // Double the height for larger curve
        width: "400px",
        padding: "20px" // Double the width for larger curve
      }}
    >
      {/* Gauge Chart */}
      <p className="text-center">Score Overview</p>
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={3}
        colors={["#FF6B6B", "#FFC857", "#4CAF50"]}
        percent={overallScore / 100}
        arcWidth={0.2}
        textColor="transparent" // Make the default text invisible
        style={{
          height: "100%", // Scale to fit the container
          width: "100%",  // Scale to fit the container
        }}
      />

      {/* Custom Percentage Display */}
      <div className="abc"
        style={{
          position: "absolute",
          top: "196px", // Adjusted position for larger size
          left: "50%",
          transform: "translateX(-50%)",
          color: "white", // White text color
          fontSize: "26px", // Larger font size
          fontWeight: "bold",
          width: "100%",
        }}
      >
        {overallScore}%
        
        <p className="status statuss d-flex">
              Your Future-Proof Score is <p className="">
              {" "}
              {overallScore >= 75
                ? "excellent"
                : overallScore >= 50
                ? "average"
                : "poor"}
              </p>
            </p>
      </div>
    
    </div>
        {/* Average Score and Future-Proof Score Section */}
        <div className="score-summary">
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
              className={`score-card SC ${
                sectionScores[index] >= 12
                  ? "excellent"
                  : sectionScores[index] >= 7
                  ? "good"
                  : "poor"
              }`}
            >
              <div className="d-flex justify-content-between">
                <h4>{question.title}</h4>
                <button className="borderclass">
                  <strong>{sectionScores[index]}%</strong>
                </button>
              </div>
              <p className="">
                {sectionScores[index] >= 12
                  ? "Excellent"
                  : sectionScores[index] >= 7
                  ? "Good"
                  : "Poor"}
              </p>
              <p className="w-100 poor">
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
