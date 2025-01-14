import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./EvaluationForm.css";
import { Image } from "../../Assest/Allphotos";

const EvaluationForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleStartEvaluation = () => {
    navigate("/questionnaire"); // Navigate to Questionnaire page
  };

  return (
    <div className="mainback">
      <div className="evaluation-container">
        <div className="container pt-4 pe-4 ps-4">
          <div className="evaluation-header">
            <div>
              <img src={Image.logo} alt="Logo" className="logo" />
            </div>
          </div>

          <div className="evaluation-instructions">
            <h3 className="mt-4">New Revenue and Innovation</h3>
            <h3 className="mt-3"> Opportunities Intake Form</h3>

            <p className="mt-4">
              Find out your future-proof score in under 30 secs
            </p>
            <h3 className="mt-5">Instructions:</h3>
            <p className="mt-3">
              Please rate each statement based on your organization’s current
              practices using the following scale:
            </p>
            <div className="rating-scale">
              <div className="scale-bar">
                <div
                  className="scale-item"
                  style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
                >
                  1
                </div>
                <div
                  className="scale-item"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
                >
                  2
                </div>
                <div
                  className="scale-item"
                  style={{ backgroundColor: "rgba(30, 26, 27, 0.6)" }}
                >
                  3
                </div>
                <div
                  className="scale-item text-dark"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                >
                  4
                </div>
                <div
                  className="scale-item text-dark"
                  style={{ backgroundColor: "rgba(128, 130, 133, 0.04)" }}
                >
                  5
                </div>
              </div>
              <div className="scale-labels">
                <div className="ms-2">
                  Not <br /> Addressed
                </div>
                <div>
                  Needs <br /> Improvement
                </div>
                <div>Adequate</div>
                <div>Strong</div>
                <div>Exceptional</div>
              </div>
            
          </div>
            </div>
            <div className="d-flex align-items-end justify-content-end">
            <button
              className="evaluation-button px-3 py-2"
              onClick={handleStartEvaluation} // Attach the click handler
            >
              Start the Evaluation →
            </button>
            
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default EvaluationForm;
