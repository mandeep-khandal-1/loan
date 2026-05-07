import { Link } from 'react-router-dom';
import { Lock, Shield, BadgeCheck, Mail, Phone, MapPin, Globe, ExternalLink, Link2 } from 'lucide-react';
import { COMPANY } from '../config/company';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__brand-row">
              <img src="/logo.webp" alt="SabkaLoan" className="footer__logo" width="32" height="32" />
              <span className="footer__name">{COMPANY.name}</span>
            </div>
            <p className="footer__tagline">
              {COMPANY.tagline}<br />
              {COMPANY.description}
            </p>
            <div className="footer__security">
              <span className="footer__security-badge"><Lock size={11} /> SSL Secured</span>
              <span className="footer__security-badge"><Shield size={11} /> ISO 27001</span>
              <span className="footer__security-badge"><BadgeCheck size={11} /> RBI Compliant</span>
            </div>
            <div className="footer__social">
              <a href={COMPANY.social.linkedin} className="footer__social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><Link2 size={18} /></a>
              <a href={COMPANY.social.website} className="footer__social-link" aria-label="Website" target="_blank" rel="noopener noreferrer"><Globe size={18} /></a>
              <a href={COMPANY.social.twitter} className="footer__social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><ExternalLink size={18} /></a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Products</h4>
            <ul>
              <li><Link to="/personal-loan" className="footer__link">Personal Loan</Link></li>
              <li><Link to="/business-loan" className="footer__link">Business Loan</Link></li>
              <li><Link to="/education-loan" className="footer__link">Education Loan</Link></li>
              <li><Link to="/emi-calculator" className="footer__link">EMI Calculator</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Company</h4>
            <ul>
              <li><Link to="/about" className="footer__link">About Us</Link></li>
              <li><Link to="/contact" className="footer__link">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="footer__link">Privacy Policy</Link></li>
              <li><Link to="/terms" className="footer__link">Terms of Service</Link></li>
              <li><Link to="/grievance" className="footer__link">Grievance Redressal</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <ul>
              <li className="footer__contact-item">
                <Mail size={14} />
                <a href={`mailto:${COMPANY.email}`} className="footer__link">{COMPANY.email}</a>
              </li>
              <li className="footer__contact-item">
                <Phone size={14} />
                <a href={COMPANY.phoneHref} className="footer__link">{COMPANY.phone} (Toll Free)</a>
              </li>
              <li className="footer__contact-item">
                <MapPin size={14} />
                <span className="footer__link">{COMPANY.address.city}, {COMPANY.address.state}, {COMPANY.address.country}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__disclaimer">
          <p>
            <strong>Disclaimer:</strong> {COMPANY.name} is a digital platform operated by {COMPANY.legalName} that acts as a loan distributor (DSA). We do not lend directly. All loan products displayed on this website are offered by our RBI-registered NBFC and banking partners. Final loan approval, disbursement amount, interest rates, and terms are at the sole discretion of the respective lending partner. Loan disbursal is subject to the partner's terms and conditions, including successful verification and creditworthiness assessment. Interest rates range from 10.49% to 36% p.a. depending on the lender and borrower profile.
          </p>
        </div>

        <div className="footer__legal">
          <div className="footer__legal-links">
            <Link to="/privacy-policy" className="footer__legal-link">Privacy Policy</Link>
            <Link to="/terms" className="footer__legal-link">Terms of Service</Link>
            <Link to="/grievance" className="footer__legal-link">Grievance Redressal</Link>
          </div>
          <p className="footer__copy">© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
