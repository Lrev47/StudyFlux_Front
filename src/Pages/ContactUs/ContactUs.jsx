import React from "react";
import "./Style/ContactUs.css";

import ContactForm from "./Components/ContactForm.jsx";
import ContactInfo from "./Components/ContactInfo.jsx";

function ContactUs() {
  return (
    <section className="contact-us-section">
      <div className="contact-us-container container">
        <h1 className="contact-us-heading">Contact Us</h1>
        <p className="contact-us-subheading">
          We’d love to hear from you! Whether you have questions, feedback, or
          just want to say hello, feel free to drop us a message below.
        </p>

        <div className="contact-us-grid">
          {/* Left column: Contact Form */}
          <div className="contact-us-box">
            <ContactForm />
          </div>

          {/* Right column: Contact Info */}
          <div className="contact-us-box">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
