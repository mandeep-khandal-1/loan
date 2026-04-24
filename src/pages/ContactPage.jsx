import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import './InfoPage.css';

function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="info-page">
      <section className="info-hero">
        <div className="container">
          <span className="section-badge">Contact Us</span>
          <h1 className="info-hero__title">We're Here to Help</h1>
          <p className="info-hero__subtitle">Have a question about loans, your application, or our platform? Our team responds within 24 hours.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-list">
              <div className="contact-info-item">
                <Mail size={20} />
                <div><strong>Email</strong><span>support@sabkaloan.com</span></div>
              </div>
              <div className="contact-info-item">
                <Phone size={20} />
                <div><strong>Toll Free</strong><span>1800-123-456 (Mon-Sat, 9am-7pm)</span></div>
              </div>
              <div className="contact-info-item">
                <MapPin size={20} />
                <div><strong>Office</strong><span>[Your Company Address], Mumbai, Maharashtra 400001</span></div>
              </div>
              <div className="contact-info-item">
                <Clock size={20} />
                <div><strong>Working Hours</strong><span>Monday - Saturday, 9:00 AM - 7:00 PM IST</span></div>
              </div>
            </div>

            <div className="contact-form">
              {!sent ? (
                <>
                  <h3>Send us a message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group" style={{ marginBottom: 'var(--sp-4)' }}>
                      <label className="form-label">Full Name</label>
                      <input className="form-input" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group" style={{ marginBottom: 'var(--sp-4)' }}>
                      <label className="form-label">Email</label>
                      <input className="form-input" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="form-group" style={{ marginBottom: 'var(--sp-4)' }}>
                      <label className="form-label">Subject</label>
                      <select className="form-select" required>
                        <option value="">Select topic</option>
                        <option>Loan Query</option>
                        <option>Application Status</option>
                        <option>NBFC Partnership</option>
                        <option>Grievance</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group" style={{ marginBottom: 'var(--sp-6)' }}>
                      <label className="form-label">Message</label>
                      <textarea className="form-input" rows={4} placeholder="Describe your query..." required style={{ resize: 'vertical' }} />
                    </div>
                    <button type="submit" className="btn btn--cta btn--lg btn--full">Send Message <ArrowRight size={18} /></button>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: 'var(--sp-10)' }}>
                  <div style={{ marginBottom: 'var(--sp-4)', color: 'var(--emerald-500)' }}><CheckCircle size={48} /></div>
                  <h3 style={{ marginBottom: 'var(--sp-2)' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>Our team will get back to you within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
