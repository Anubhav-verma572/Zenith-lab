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
    setError(""); // Clear error on input change
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, companyName } = formData;

    if (!firstName || !lastName || !email || !companyName) {
      setError("Please fill in all the fields before proceeding.");
      return;
    }

    try {
      // Use the proxy path (/api) instead of the full Google Apps Script URL
      const response = await fetch("/macros/s/AKfycbxxNfClkqxP53UWHN3PNUfVTTsvMRN8XrlNrJjKjMaW7jlEoO33rVzRzkwlju7r-t91/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      

      const result = await response.json();
      console.log("Result from API:", result);  // Log API response
      
      if (result.status === "success") {
        console.log("Data submitted successfully:", result.message);
        navigate("/score-overview");
      } else {
        console.error("Error submitting data:", result.message);
        setError("There was an error while submitting your form. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting data:", err);
      setError("There was an error while submitting your form. Please try again.");
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
