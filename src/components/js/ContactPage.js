import React from "react";
import "../css/ContactPage.css"

const ContactPage = () => {
  return (
    <div className="contact-page container">
      <h1 className="my-4">Contact Us</h1>
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nikolozi Ormotsadze</label>
          <input type="text" id="name" className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" className="form-control" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;