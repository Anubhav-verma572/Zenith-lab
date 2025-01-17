import React from "react";
import { useNavigate } from "react-router-dom";
import "./EvaluationForm.css";
import { Image } from "../../Assest/Allphotos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import the icon

const EvaluationForm = () => {
  const navigate = useNavigate();

  const handleStartEvaluation = () => {
    navigate("/questionnaire");
  };

  return (
    <div className="mainback">
      <div className="evaluation-container">
        <div className="pt-4">
          <div className="evaluation-header">
            <div className="add-logo">
              <img src={Image.logo} alt="Logo" className="logo" />
            </div>
          </div>

          <div className="evaluation-instructions">
            <h3 className="mt-4 mb-0">New Revenue and Innovation</h3>
            <h3 className="mt-3 mb-0">Opportunities Intake Form</h3>
            <p className="mt-3 mb-0">
              Find out your future-proof score in under 30 secs
            </p>

            <div className = "inst-list">
              <div className="instruction-list">
                <h3 className="inst mb-0">Instructions:</h3>
                <p className="mb-0">
                  Please rate each statement based on your organization’s
                  current practices using the following scale:
                </p>
              </div>

              <div className="w-100 scal-bar">
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
              </div>
            </div>
          </div>

          <div className="rating-scale">
            <div className="new-scale">
              <div className="new-scale-labels">
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
          </div>

          <div className="d-flex align-items-end justify-content-end new-text">
            <button
              className="evaluation-button px-3 py-2"
              onClick={handleStartEvaluation}
            >
              Start the Evaluation  <p><FontAwesomeIcon icon={faArrowRight} /> </p>
            </button>
            {/* Corrected icon usage */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluationForm;
