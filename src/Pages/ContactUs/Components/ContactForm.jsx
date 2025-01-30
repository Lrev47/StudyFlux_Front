import React, { useState } from 'react';
import '../Style/ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Update form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      setError('Please fill in all fields.');
      setSuccessMessage('');
      return;
    }

    // Clear error
    setError('');

    // TODO: Implement server/API call or email service
    console.log('Contact Form Submitted:', formData);

    // Simulate success
    setSuccessMessage('Thank you! Your message has been sent.');

    // Reset form (optional)
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-form-container">
      <h2 className="contact-form-title">Send Us a Message</h2>

      {error && <div className="contact-form-error">{error}</div>}
      {successMessage && <div className="contact-form-success">{successMessage}</div>}

      <form onSubmit={handleSubmit} className="contact-form">
        {/* Name */}
        <div className="contact-form-group">
          <label htmlFor="contactName">Name</label>
          <input
            type="text"
            id="contactName"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="contact-form-group">
          <label htmlFor="contactEmail">Email</label>
          <input
            type="email"
            id="contactEmail"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Subject */}
        <div className="contact-form-group">
          <label htmlFor="contactSubject">Subject</label>
          <input
            type="text"
            id="contactSubject"
            name="subject"
            placeholder="Topic"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        {/* Message */}
        <div className="contact-form-group">
          <label htmlFor="contactMessage">Message</label>
          <textarea
            id="contactMessage"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="contact-form-button">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
