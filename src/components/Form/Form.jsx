import "./Form.css";
import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

function Form() {
  const [formData, setFormData] = useState({
    Name: "",
    "Business Name": "",
    Email: "",
    Phone: "",
    "Monthly Billing": "",
    "# of Providers": "",
    "Total AR": "",
    "Your Message": "",
  });
  const form = useRef();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6anlahe', 'template_qnoa9dt', form.current, 'f1Fb3xXPNlhp-psEX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex">
        <div className="inner-flex">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="Name"
            required
            onChange={handleChange}
            value={formData.Name || ""}
          />
        </div>

        <div className="inner-flex">
          <label htmlFor="Business Name">Business Name</label>
          <input
            type="text"
            name="businessName"
            required
            onChange={handleChange}
            value={formData["businessName"] || ""}
          />
        </div>
      </div>
      <div className="flex">
        <div className="inner-flex">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            value={formData.Email || ""}
          />
        </div>
        <div className="inner-flex">
          <label htmlFor="Phone">Phone</label>
          <input
            type="tel"
            name="Phone"
            required
            onChange={handleChange}
            value={formData.Phone || ""}
          />
        </div>
      </div>
      <div className="flex">
        <div className="inner-flex">
          <label htmlFor="Monthly Billing">Monthly Billing</label>
          <select
            name="Monthly_Billing"
            required
            onChange={handleChange}
            value={formData["Monthly_Billing"] | ""}
          >
            <option value="1K-3K">1K-3K</option>
            <option value="31K-100K">31K-100K</option>
            <option value="Above 100K">Above 100K</option>
          </select>
        </div>

        <div className="inner-flex">
          <label htmlFor="# of Providers"># of Providers</label>
          <select
            name="# of Providers"
            required
            onChange={handleChange}
            value={formData["# of Providers"] || ""}
          >
            <option value="1-5">1-5</option>
            <option value="6-10">6-10</option>
            <option value="Above 10">Above 10</option>
          </select>
        </div>
      </div>
      <div className="inner-flex alone">
        <label htmlFor="Total AR">Total AR</label>
        <input
          type="text"
          name="Total_AR"
          required
          onChange={handleChange}
          value={formData["Total_AR"] || ""}
        />
      </div>
      <div className="inner-flex alone">
        <label htmlFor="Your Message">Your Message</label>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          required
          onChange={handleChange}
          value={formData["message"] || ""}
        ></textarea>
      </div>
      <div className="submit-btn">
        <button
          type="submit"
          className="submit"
          style={{ backgroundColor: "#9acd32", fontSize: "1.2rem" }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
