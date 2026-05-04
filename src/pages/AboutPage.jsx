import { Link } from 'react-router-dom';
import { Target, ShieldCheck, Users, Award, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY } from '../config/company';
import SEO from '../components/SEO';
import './InfoPage.css';

function AboutPage() {
  return (
    <div className="info-page">
      <SEO title="About Us" description={`Learn about ${COMPANY.name} — India's trusted loan comparison platform. ${COMPANY.stats.customers} customers served.`} />

      <section className="info-hero">
        <div className="container">
          <span className="section-badge">About Us</span>
          <h1 className="info-hero__title">India's Trusted Loan Comparison Platform</h1>
          <p className="info-hero__subtitle">We're on a mission to make credit accessible, transparent, and fair for every Indian.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <Target size={28} className="info-card__icon" />
              <h3>Our Mission</h3>
              <p>To democratize access to credit by connecting borrowers with the right lender at the right rate. We believe no one should overpay for a loan because they didn't know a better offer existed.</p>
            </div>
            <div className="info-card">
              <ShieldCheck size={28} className="info-card__icon" />
              <h3>Trust & Compliance</h3>
              <p>We are a registered DSA operating in full compliance with RBI guidelines. All our partner NBFCs are RBI-registered entities. We use 256-bit SSL encryption and ISO 27001 certified processes.</p>
            </div>
            <div className="info-card">
              <Users size={28} className="info-card__icon" />
              <h3>Our Team</h3>
              <p>Founded by experienced fintech and banking professionals with over 50 years of combined experience in digital lending, risk management, and technology.</p>
            </div>
            <div className="info-card">
              <Award size={28} className="info-card__icon" />
              <h3>Track Record</h3>
              <p>Over {COMPANY.stats.customers} customers served. {COMPANY.stats.disbursed} facilitated in loans. Partnerships with {COMPANY.stats.partners} leading NBFCs and banks across India.</p>
            </div>
          </div>

          <div className="info-details">
            <h2 className="product-section-title">Registered Office</h2>
            <div className="info-address">
              <MapPin size={20} />
              <div>
                <strong>{COMPANY.legalName}</strong><br />
                {COMPANY.address.full}<br />
                CIN: {COMPANY.cin}<br />
                DSA Registration: {COMPANY.dsaRegistration}
              </div>
            </div>
          </div>

          <div className="product-cta-block">
            <h3>Ready to find your best loan?</h3>
            <p>Compare offers from {COMPANY.stats.partners} lenders in 2 minutes.</p>
            <Link to="/apply" className="btn btn--cta btn--lg">Apply Now <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
