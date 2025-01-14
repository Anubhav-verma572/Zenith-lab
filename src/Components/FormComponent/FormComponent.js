import React, { useState } from "react";
import "./FormComponent.css";
import { useNavigate } from "react-router-dom";
import { Image } from "../../Assest/Allphotos";

const FormComponent = () => {
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
  });

  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setError(""); // Clear error on input change
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form refresh
    const { firstName, lastName, email, companyName } = formData;

    // Validation: Check if all fields are filled
    if (!firstName || !lastName || !email || !companyName) {
      setError("Please fill in all the fields before proceeding.");
      return;
    }

    // Navigate to the next page if validation passes
    navigate("/score-overview");
  };

  return (
    <div className="form-container p-5">
      <div className="container">
        <div className="form-header">
          <img
            src={Image.logo} // Replace with your logo
            alt="Logo"
            className="logo"
          />
        </div>
        <h1 className="text-start mt-5">
          Enter the following details to get your future-proof <br /> score
        </h1>

        <form className="form-fields" onSubmit={handleFormSubmit}>
          <div className="form-row mt-3">
            <div className="form-group">
              <label htmlFor="firstName">What’s your Name?</label>
              <input
                type="text"
                id="firstName"
                placeholder="Your First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group" style={{ marginTop: "29px" }}>
              <input
                type="text"
                id="lastName"
                placeholder="Your Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row mt-5">
            <div className="form-group">
              <label htmlFor="email">What’s your Email Id?</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email Id"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="companyName">What’s your Company Name?</label>
              <input
                type="text"
                id="companyName"
                placeholder="Your Company Name"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Display error message if validation fails */}
          {error && <p className="error-text">{error}</p>}

          <div className="d-flex lastow mt-4 w-100">
            {/* "Next" button triggers the form submission */}
            <button type="submit" className="form-button">
              Next
            </button>

            {/* "Press Enter" button triggers validation and navigation */}
            <button
              type="button"
              className="form-buttons"
              onClick={() => {
                const { firstName, lastName, email, companyName } = formData;

                // Validation: Check if all fields are filled
                if (!firstName || !lastName || !email || !companyName) {
                  setError("Please fill in all the fields before proceeding.");
                  return;
                }

                // Navigate to the next page if validation passes
                navigate("/score-overview");
              }}
            >
              Press Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
