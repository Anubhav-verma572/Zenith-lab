import React from "react";
import PropTypes from "prop-types"; // For prop validation
import "./ScoreOverview.css";

const ScoreOverview = ({ overallScore = 0, sectionScores = [], questions = [] }) => {
  // Calculate average score
  const averageScore = sectionScores.length
    ? Math.round(sectionScores.reduce((sum, score) => sum + score, 0) / sectionScores.length)
    : 0;

  // Get performance label based on score
  const getPerformanceLabel = (score) => {
    if (score >= 75) return "Excellent";
    if (score >= 50) return "Good";
    return "Poor";
  };

  // Get effort analysis based on score
  const getEffortAnalysis = (score) => {
    if (score >= 75) return "strong";
    if (score >= 50) return "adequate";
    return "needs improvement";
  };

  return (
    <div className="score-overview-container">
      {/* Score Overview */}
      <div className="score-overview">
        <div className="score-dial">
          <h3>Score Overview</h3>
          <div className="dial-container">
            <div className="dial"></div>
            <p className="percentage">{overallScore}%</p>
            <p className="status">
              Your Future-Proof Score is {getPerformanceLabel(overallScore)}
            </p>
          </div>
        </div>

        {/* Average and Future-Proof Scores */}
        <div className="score-summary">
          <div className="average-score">
            <h4>{averageScore}%</h4>
            <p className="status">{getPerformanceLabel(averageScore)} Average Score</p>
          </div>
          <div className="future-proof-score">
            <h4>{overallScore}%</h4>
            <p className="status">{getPerformanceLabel(overallScore)} Future-Proof Score</p>
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
          {questions.length > 0 ? (
            questions.map((question, index) => (
              <div
                key={index}
                className={`score-card col-lg-3 ${
                  sectionScores[index] >= 75
                    ? "excellent"
                    : sectionScores[index] >= 50
                    ? "good"
                    : "poor"
                }`}
              >
                <h5>{question.title}</h5>
                <p>{getPerformanceLabel(sectionScores[index])}</p>
                <p>
                  <strong>{sectionScores[index]}%</strong>
                </p>
                <p>
                  Analysis of {question.title.toLowerCase()} shows{" "}
                  {getEffortAnalysis(sectionScores[index])} efforts.
                </p>
              </div>
            ))
          ) : (
            <p className="no-data">No sections or scores available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Prop Type Validation
ScoreOverview.propTypes = {
  overallScore: PropTypes.number,
  sectionScores: PropTypes.arrayOf(PropTypes.number),
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ),
};

export default ScoreOverview;
