import React, { useState, useRef } from "react";

export const CheckForm = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const form = useRef(); 
    const [formData, setFormData] = useState({
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const apiUrl = `${process.env.REACT_APP_BACKEND_URL}myapp/api/verify-client`;
        fetch(apiUrl,{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            client_email: formData.email
          })
        })
        .then(res => res.json())
        .then(data => {
          if (data.message) {
            setAlertMessage("Welcome back!");
            setShowAlert(true);
            localStorage.setItem("verified_user", true)
            setTimeout(() => {
              window.location.href = '/process';
            }, 2000); 
          } else {
            setAlertMessage("Loading...");
            setShowAlert(true);
            setTimeout(() => {
              window.location.href = '/process';
            }, 2000); 
          }
        })
        .catch(err => {
          setAlertMessage("An unexpected error occurred.");
          setShowAlert(true);
        });
    };

  return (
    <div className="contact-form-container">
      <form className="contactForm" ref={form} onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="emailInput"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
              />
              <label htmlFor="emailInput">Email</label>
            </div>
          </div>
        </div>
        <button className="btn btn-primary w-100 my-3 py-2" type="submit">
          Submit
        </button>
        <p className="mt-3 mb-3 text-body-secondary">
          © 2017–2024 
        </p>
      </form>
      {showAlert && (
        <div className='alert alert-success' role="alert">
          {alertMessage}
        </div>
      )}
    </div>
  );
};
