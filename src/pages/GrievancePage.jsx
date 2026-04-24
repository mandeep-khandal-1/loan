import { Mail, Phone, MapPin } from 'lucide-react';
import './InfoPage.css';

function GrievancePage() {
  return (
    <div className="info-page">
      <section className="info-hero">
        <div className="container">
          <span className="section-badge">Legal</span>
          <h1 className="info-hero__title">Grievance Redressal</h1>
          <p className="info-hero__subtitle">We are committed to resolving your complaints fairly and promptly.</p>
        </div>
      </section>
      <section className="section">
        <div className="container legal-content">
          <h2>Grievance Redressal Mechanism</h2>
          <p>As per RBI guidelines for DSAs, we have established a comprehensive grievance redressal mechanism to ensure timely resolution of all customer complaints.</p>

          <h2>Level 1 — Customer Support</h2>
          <p>For any issue related to your loan application, offers, or platform experience, contact our support team first:</p>
          <ul>
            <li>Email: <strong>support@sabkaloan.com</strong></li>
            <li>Phone: <strong>1800-123-456</strong> (Mon-Sat, 9am-7pm)</li>
            <li>Response time: Within 48 hours</li>
          </ul>

          <h2>Level 2 — Grievance Officer</h2>
          <p>If your complaint is not resolved at Level 1 within 7 working days, you may escalate to our designated Grievance Officer:</p>
          <div className="info-address" style={{ marginBottom: 'var(--sp-6)' }}>
            <Mail size={20} />
            <div>
              <strong>Grievance Officer</strong><br />
              Name: [Grievance Officer Name]<br />
              Email: grievance@sabkaloan.com<br />
              Phone: [Officer Phone Number]<br />
              Address: [Your Registered Address], Mumbai - 400001<br />
              Resolution timeline: 15 working days
            </div>
          </div>

          <h2>Level 3 — NBFC/Bank Ombudsman</h2>
          <p>If your grievance pertains to a specific lending partner's decision (loan rejection, interest rate, disbursement), you may approach the respective NBFC/Bank's ombudsman directly. Contact details of our lending partners' grievance officers are available upon request.</p>

          <h2>Level 4 — RBI Ombudsman</h2>
          <p>If all other avenues are exhausted and your grievance remains unresolved after 30 days, you may file a complaint with the RBI Ombudsman:</p>
          <ul>
            <li>Online: <strong>cms.rbi.org.in</strong></li>
            <li>Email: <strong>crpc@rbi.org.in</strong></li>
            <li>Toll-free: 14448</li>
          </ul>

          <h2>Complaint Form</h2>
          <p>You can also submit your grievance using the form below. All complaints receive a unique reference number for tracking.</p>
          <form onSubmit={(e) => { e.preventDefault(); alert('Complaint submitted. Our team will contact you within 48 hours.'); }}>
            <div className="form-group" style={{ marginBottom: 'var(--sp-4)' }}>
              <label className="form-label">Your Name</label>
              <input className="form-input" required placeholder="Enter your full name" />
            </div>
            <div className="form-group" style={{ marginBottom: 'var(--sp-4)' }}>
              <label className="form-label">Application / Reference Number</label>
              <input className="form-input" placeholder="e.g., SL20261234" />
            </div>
            <div className="form-group" style={{ marginBottom: 'var(--sp-4)' }}>
              <label className="form-label">Nature of Complaint</label>
              <select className="form-select" required>
                <option value="">Select</option>
                <option>Application rejected without reason</option>
                <option>Incorrect interest rate offered</option>
                <option>Data privacy concern</option>
                <option>Disbursement delay</option>
                <option>Unauthorized communication</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group" style={{ marginBottom: 'var(--sp-6)' }}>
              <label className="form-label">Describe your complaint</label>
              <textarea className="form-input" rows={4} required style={{ resize: 'vertical' }} placeholder="Please provide details..." />
            </div>
            <button type="submit" className="btn btn--cta btn--lg">Submit Complaint</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default GrievancePage;
