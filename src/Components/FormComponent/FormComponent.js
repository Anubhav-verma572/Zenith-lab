import React, { useState } from "react";
import "./FormComponent.css";
import { useNavigate } from "react-router-dom";
import { Image } from "../../Assest/Allphotos";

const FormComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setError("");
  };

const handleFormSubmit = async (e) => {
  e.preventDefault();
  const { firstName, lastName, email, companyName } = formData;

  if (!firstName || !lastName || !email || !companyName) {
    setError("Please fill in all the fields before proceeding.");
    return;
  }

  try {
    const response = await fetch('/macros/s/AKfycbxxNfClkqxP53UWHN3PNUfVTTsvMRN8XrlNrJjKjMaW7jlEoO33rVzRzkwlju7r-t91/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    // Check if the response is successful (HTTP 200-299)
    if (!response.ok) {
      const errorText = await response.text(); // Read as text for error details
      console.error("Error response text:", errorText);
      setError(`HTTP error! Status: ${response.status}`);
      return;
    }

    // Read the response as JSON
    const result = await response.json();

    // Check if the result is a success
    if (result.status === 'success') {
      console.log('Data submitted successfully:', result.message);
    } else {
      setError(result.message || 'Unexpected response format.');
    }
  } catch (err) {
    navigate("/score-overview");
    console.error("Error during fetch:", err);
    setError('');
  }
};



  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleFormSubmit(e);
    }
  };

  return (
    <div className="form-container p-5">
      <div className="container">
        <div className="form-header">
          <img src={Image.logo} alt="Logo" className="logo" />
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
                onKeyDown={handleKeyDown} // Key down event for Enter
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
                onKeyDown={handleKeyDown} // Key down event for Enter
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
                onKeyDown={handleKeyDown} // Key down event for Enter
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
                onKeyDown={handleKeyDown} // Key down event for Enter
                required
              />
            </div>
          </div>
          {error && <p className="error-text">{error}</p>}
          <div className="d-flex lastow mt-4 w-100">
            <button type="submit" className="form-button">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
