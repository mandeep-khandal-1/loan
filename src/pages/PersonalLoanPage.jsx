import { Link } from 'react-router-dom';
import { CreditCard, CheckCircle, FileText, Clock, IndianRupee, ArrowRight } from 'lucide-react';
import './ProductPage.css';

const features = [
  'Loan amounts from ₹10,000 to ₹10,00,000',
  'Interest rates starting at 10.49% p.a.',
  'Flexible tenure: 3 to 60 months',
  'No collateral required',
  'Disbursement within 24 hours',
  'Zero prepayment charges',
];

const eligibility = [
  { label: 'Age', value: '21 - 58 years' },
  { label: 'Minimum Income', value: '₹15,000/month' },
  { label: 'Employment', value: 'Salaried or Self-Employed' },
  { label: 'Credit Score', value: '650+ (CIBIL)' },
  { label: 'Work Experience', value: 'Min. 6 months in current job' },
  { label: 'Nationality', value: 'Indian Citizen' },
];

const documents = [
  'PAN Card',
  'Aadhaar Card (for eKYC)',
  'Last 3 months bank statements',
  'Latest salary slip (salaried) / ITR (self-employed)',
  'Address proof (utility bill / rent agreement)',
];

function PersonalLoanPage() {
  return (
    <div className="product-page">
      <section className="product-hero">
        <div className="container product-hero__inner">
          <div className="product-hero__content">
            <span className="section-badge">Personal Loan</span>
            <h1 className="product-hero__title">Instant Personal Loans up to ₹10 Lakhs</h1>
            <p className="product-hero__subtitle">
              Get funds for any personal need — medical, travel, wedding, home renovation, or debt consolidation. 
              Compare offers from 50+ NBFCs and get the lowest rate.
            </p>
            <div className="product-hero__actions">
              <Link to="/apply" className="btn btn--cta btn--lg">Apply Now <ArrowRight size={18} /></Link>
              <Link to="/emi-calculator" className="btn btn--outline btn--lg">Calculate EMI</Link>
            </div>
          </div>
          <div className="product-hero__highlights">
            <div className="product-hero__highlight-card">
              <IndianRupee size={20} />
              <div><strong>10.49%</strong><br /><span>Starting interest rate</span></div>
            </div>
            <div className="product-hero__highlight-card">
              <Clock size={20} />
              <div><strong>10 Minutes</strong><br /><span>Quick approval</span></div>
            </div>
            <div className="product-hero__highlight-card">
              <CreditCard size={20} />
              <div><strong>₹10 Lakhs</strong><br /><span>Maximum amount</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="product-grid">
            <div>
              <h2 className="product-section-title">Key Features</h2>
              <ul className="product-features">
                {features.map((f, i) => (
                  <li key={i} className="product-feature-item">
                    <CheckCircle size={18} className="product-check" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="product-section-title">Eligibility Criteria</h2>
              <table className="product-table">
                <tbody>
                  {eligibility.map((e, i) => (
                    <tr key={i}>
                      <td className="product-table__label">{e.label}</td>
                      <td className="product-table__value">{e.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <h2 className="product-section-title">Documents Required</h2>
          <div className="product-docs">
            {documents.map((d, i) => (
              <div key={i} className="product-doc-item">
                <FileText size={18} />
                <span>{d}</span>
              </div>
            ))}
          </div>
          <div className="product-cta-block">
            <h3>Ready to apply?</h3>
            <p>Check your eligibility in 2 minutes — no impact on your credit score.</p>
            <Link to="/apply" className="btn btn--cta btn--lg">Start Application <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PersonalLoanPage;
