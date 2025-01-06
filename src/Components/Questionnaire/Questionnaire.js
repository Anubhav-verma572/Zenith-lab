import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Questionnaire.css";
import { Image } from "../../Assest/Allphotos";

const questions = [
  {
    title: "1. Market Opportunity",
    questions: [
      "Have market trends and untapped segments been thoroughly assessed?",
      "Are gaps in the competitive landscape clearly identified and addressed?",
    ],
    correctAnswers: [3, 4],
  },
  {
    title: "2. Customer Journey",
    questions: [
      "Has the entire customer experience been mapped to uncover pain points?",
      "Are opportunities to improve engagement and retention being actively explored?",
    ],
    correctAnswers: [4, 2],
  },
  {
    title: "3. Product/Service Diversification",
    questions: [
      "Have alternative revenue streams or new products been thoroughly assessed?",
      "Are innovative solutions being explored to diversify offerings?",
    ],
    correctAnswers: [1, 4],
  },
  {
    title: "4. Technology",
    questions: [
      "Is the organization’s current technology scalable and optimized for growth?",
      "Are emerging technologies (e.g., AI, automation) leveraged for strategic advantage?",
    ],
    correctAnswers: [3, 1],
  },
  {
    title: "5. Revenue Model",
    questions: [
      "Are pricing and monetization strategies reviewed and optimized regularly?",
      "Are alternative revenue models (e.g., freemium, tiered pricing) tested effectively?",
    ],
    correctAnswers: [1, 2],
  },
  {
    title: "6. Operations",
    questions: [
      "Are operational processes optimized to maximize cost savings and growth?",
      "Are operational efficiencies aligned with overall revenue strategies?",
    ],
    correctAnswers: [2, 3],
  },
  {
    title: "7. Partnerships",
    questions: [
      "Are collaboration opportunities with external partners actively pursued?",
      "Are partnerships used strategically to expand offerings or co-branded initiatives?",
    ],
    correctAnswers: [2, 4],
  },
];

const Questionnaire = ({ updateScore }) => {
  const [currentStep, setCurrentStep] = useState(0); // Step starts from 0 for the array index
  const [selectedRatings, setSelectedRatings] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRatingChange = (questionIndex, rating) => {
    const questionKey = `step${currentStep}_question${questionIndex}`;
    setSelectedRatings({ ...selectedRatings, [questionKey]: rating });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1); // Proceed to the next step
    } else {
      calculateScore(); // Calculate score before navigation
      navigate("/quest"); // Navigate to the CongratsUI page ("/quest")
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const calculateScore = () => {
    let totalScore = 0;
    let totalQuestions = 0;
    const sectionScores = [];

    questions.forEach((section, stepIndex) => {
      let sectionScore = 0;

      section.questions.forEach((_, questionIndex) => {
        const questionKey = `step${stepIndex}_question${questionIndex}`;
        const selectedAnswer = selectedRatings[questionKey];
        const correctAnswer = section.correctAnswers[questionIndex];

        if (selectedAnswer === correctAnswer) {
          sectionScore += 7; // Each correct answer contributes 7%
        }

        totalQuestions += 1;
      });

      sectionScores.push(Math.min(sectionScore, 14)); // Ensure sectionScore does not exceed 14%
      totalScore += sectionScore;
    });

    const overallScore = Math.round(
      (totalScore / (questions.length * 14)) * 100 // Overall percentage (out of 100)
    );
    updateScore(overallScore, sectionScores);
  };

  return (
    <div className="">
      <div className="questionnaire-container">
        <div className="container  pt-3 pb-0">
          <div className="evaluation-header">
            <div className="d-flex justify-content-start">
              <img src={Image.logo} alt="Logo" className="logo" />
            </div>
          </div>
          <div className="content mt-5 text-dark">
            <h2 className="text-start ms-5 ps-5">
              {questions[currentStep].title}
            </h2>
            {questions[currentStep].questions.map((question, index) => (
              <div key={index} className="question">
                <p className="text-dark text-start ms-5 ps-5">{question}</p>
                <div className="rating-group text-start ms-5 ps-5">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      className={`rating-btn m-2  ${
                        selectedRatings[
                          `step${currentStep}_question${index}`
                        ] === rating
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => handleRatingChange(index, rating)}
                    >
                      {rating}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <div className="navigation">
              <button
                className="back-btn bg-transparent text-dark"
                onClick={handleBack}
                disabled={currentStep === 0}
              >
                Back
              </button>
              <button className="next-btn" onClick={handleNext}>
                {currentStep === questions.length - 1
                  ? "Submit & Finish"
                  : "Next"}
                <i className="fa-solid fa-arrow-right ps-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
