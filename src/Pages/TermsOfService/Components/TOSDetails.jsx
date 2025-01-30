import React from 'react';
import '../Style/TOSDetails.css';

function TOSDetails() {
  return (
    <div className="tos-details-container">
      <h2 className="tos-details-title">Detailed Terms</h2>
      
      <h3 className="tos-details-subtitle">1. Acceptance of Terms</h3>
      <p className="tos-details-paragraph">
        By using StudyFlux, you acknowledge that you have read, understood, 
        and agree to be bound by these Terms of Service and any additional guidelines.
      </p>

      <h3 className="tos-details-subtitle">2. User Conduct</h3>
      <p className="tos-details-paragraph">
        You agree not to misuse the Service by engaging in prohibited activities, 
        including but not limited to infringing upon intellectual property rights, 
        uploading harmful content, or attempting to disrupt the platform.
      </p>

      <h3 className="tos-details-subtitle">3. Intellectual Property</h3>
      <p className="tos-details-paragraph">
        All content, features, and functionality on this site are protected by 
        intellectual property laws. You may not reproduce, modify, or distribute 
        any materials without explicit permission.
      </p>

      <h3 className="tos-details-subtitle">4. Modifications to Terms</h3>
      <p className="tos-details-paragraph">
        We reserve the right to update or modify these Terms at any time, 
        and such changes will be effective upon posting. 
        Your continued use of the Service constitutes acceptance of these changes.
      </p>

      <h3 className="tos-details-subtitle">5. Governing Law</h3>
      <p className="tos-details-paragraph">
        These Terms are governed by the laws of the jurisdiction in which 
        StudyFlux operates. Any disputes arising from these Terms shall be 
        resolved in the courts of that jurisdiction.
      </p>

      <p className="tos-details-footer">
        If you have any questions or concerns regarding these Terms, 
        please contact us at <strong>legal@studyflux.com</strong>.
      </p>
    </div>
  );
}

export default TOSDetails;
