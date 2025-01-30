import React from 'react';
import '../Style/ContactInfo.css';

function ContactInfo() {
  return (
    <div className="contact-info-container">
      <h2 className="contact-info-title">Our Contact Details</h2>
      <ul className="contact-info-list">
        <li><strong>Address:</strong> 123 Education Lane, StudyTown, 12345</li>
        <li><strong>Phone:</strong> +1 (123) 456-7890</li>
        <li><strong>Email:</strong> hello@studyflux.com</li>
        <li><strong>Business Hours:</strong> Mon - Fri, 9am - 5pm</li>
      </ul>
      {/* Optionally, you could add social media links, a map, etc. here */}
    </div>
  );
}

export default ContactInfo;
