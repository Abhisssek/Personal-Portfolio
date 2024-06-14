import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Contact = ({ full }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    budget: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    try {
      const response = await fetch("http://localhost:4000/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Form data submitted successfully:", data);
        // Optionally, reset the form
        setFormData({
          name: "",
          email: "",
          location: "",
          budget: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("Form submission error:", response.statusText);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <>
      {full && <Navbar />}
      <div className="project">
        {full && <div className="space"></div>}
        <div className="container">
          <div className="project-diss">
            <div className="diss-left">
              <h1>Let's discuss your Project</h1>
              <h3>
                There are many variations of passages of Lorem Ipsu <br />
                available. but the majority have suffered alte.
              </h3>
              <div className="diss-cards">
                <div className="dcard">
                  <div className="diss-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="diss-text">
                    <h3>Address:</h3>
                    <h2>New Mexico 31134</h2>
                  </div>
                </div>
                <div className="dcard">
                  <div className="diss-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="diss-text">
                    <h3>Email:</h3>
                    <h2>abc@example.com</h2>
                  </div>
                </div>
                <div className="dcard">
                  <div className="diss-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="diss-text">
                    <h3>Call:</h3>
                    <h2>123456789</h2>
                  </div>
                </div>
              </div>
              <div className="diss-socials">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-behance"></i>
              </div>
            </div>
            <div className="diss-right">
              <form onSubmit={handleSubmit} className="contact-form">
                <label>Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />

                <label>Budget*</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                />

                <label>Subject*</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <label>Message*</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button type="submit" className="secondary-btn diss-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {full && <Footer />}
    </>
  );
};
