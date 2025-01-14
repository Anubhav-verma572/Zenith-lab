import React, { useEffect } from "react";
import "./CongratsUI.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Image } from "../../Assest/Allphotos"; // Import the Image object

const CongratsUI = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleStartEvaluation = () => {
    navigate("/FormComponent"); // Navigate to Questionnaire page
  };

  const clientLogos = [
    Image.logo1,
    Image.logo2,
    Image.logo3,
    Image.logo5,
    Image.logo4,
    Image.logo6,
    Image.logo7,
    Image.logo8,
    Image.logo9,
    Image.logo10,
    Image.logo11,
    Image.logo12,
    Image.logo13,
    Image.logo14,
  ];

  useEffect(() => {
    // Function to handle keydown event
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        handleStartEvaluation(); // Call the navigation function
      }
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="congrats-container">
      {/* Header */}
      <div className="w-100 container">
        <div className="d-flex justify-content-start">
          <img src={Image.logo15} alt="Logo" className="mt-5 text-start" />
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <h1 className="mb-0 text-white">Congratulations! You’ve taken the first step </h1>
        <h1 className="mb-0 text-white">toward future-proofing your business</h1>
      </main>

      <div className="d-flex colm">
        {/* Button to navigate */}
        <button className="score-button" onClick={handleStartEvaluation}>
          Check your score now!
        </button>

        {/* 'Press Enter' button */}
        <button
          className="form-buttons"
          onClick={handleStartEvaluation} // Call the same function
        >
          Press Enter
        </button>
      </div>

      {/* Clients Section */}
      <section className="clients-section">
        <h2>Clients We’ve Worked With – Join the List!</h2>
        <div className="clients-logos">
          {clientLogos.map((logo, index) => (
            <div key={index} className="client-logo">
              <img src={logo} alt={`Client logo ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CongratsUI;
